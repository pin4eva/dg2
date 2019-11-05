const express = require("express");
const router = express.Router();
const { Student, ClassName, Profile } = require("../models/All");
const path = require("path");
// const Student = require("../models/Student");

router.post("/new", async (req, res) => {
  // console.log(req.body);
  const payload = { ...req.body };
  const profile = await Profile.create({ ...payload, type: "Student" })
    .then(data => data)
    .catch(err => err);
  const count = await Profile.countDocuments({ type: "Teacher" })
    .then(data => data)
    .catch(err => err);
  let firstName = Profile.firstName;
  let lastName = Profile.lastName;
  let count1 = (count + 1).toString();

  const sid = `T${firstName.charAt(0)}${lastName.charAt(0)}/${new Date(
    payload.admittedON
  ).getFullYear()}/${count1.padStart(4, "000")}`;

  // firstName.charAt(0)
  const student = await Student.create({
    profile: profile,
    regNO: sid,
    currentClass: payload.currentClass
  })
    .then(data => data)

    .catch(err => res.send(err));

  await ClassName.findOneAndUpdate(
    { _id: student.currentClass },
    { $push: { students: student._id } }
  ).catch(err => res.send(err));

  res.send({ student, success: true });
});
/**
 *        TODOS
 * 1. While promoting students, loop through the array of existing students, check if student exist, if it does, do nothing else add.
 *
 */
router.put("/promote", async (req, res) => {
  const student = await Student.findOneAndUpdate(
    { _id: req.body.student },
    { $set: { currentClass: req.body.className } }
  )
    .then(data => data)
    .catch(err => res.send(err));
  await ClassName.findOneAndUpdate(
    { _id: student.currentClass },
    { $push: { students: student._id } },
    { new: true }
  ).catch(err => res.send(err));
});

router.get("/", async (req, res) => {
  await Student.find()
    .lean()
    .populate({
      path: "parents",
      model: "Parent"
    })
    .populate({
      path: "currentClass",
      model: "ClassName",
      select: "_id name"
    })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

/**
 *            TODO
 * 1. Students should add subjects to their profile,
 * 2. Select a department,
 * 3. Can create a username and password
 */

router.get("/single/:id", async (req, res) => {
  await Student.findOne({ _id: req.params.id })
    .lean()
    .populate({
      path: "parents",
      // select: ["_id", "name", "role"]
      model: "Parent"
    })
    .populate({
      path: "currentClass",
      model: "ClassName"
    })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

router.put("/upload/:id", async (req, res) => {
  const { image } = req.files;
  image.mv(
    path.resolve(__dirname, "../../static/uploads/", image.name),
    async err => {
      if (err) res.send(err);
      await Student.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { image: `/uploads/${image.name}` } }
      )
        .then(data => res.send(data))
        .catch(err => res.send(err));
    }
  );
});
router.put("/update", async (req, res) => {
  await Student.findOneAndUpdate(
    { _id: req.body._id },
    { $set: { ...req.body } }
  )
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
router.delete("/delete/:id", async (req, res) => {
  await Student.findOneAndRemove({ _id: req.params.id })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
router.delete("/deletemany", async (req, res) => {
  const { students } = req.body;
  await Student.deleteMany({ id: { $in: [students] } })
    .then(data => res.send({ success: true, data }))
    .catch(err => res.send(err));
});
module.exports = router;
