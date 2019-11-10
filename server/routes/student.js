const express = require("express");
const router = express.Router();
const { Student, ClassName, Profile } = require("../models/All");
const path = require("path");
// const Student = require("../models/Student");

router.post("/new", async (req, res) => {
  // console.log(req.body);
  const payload = { ...req.body };
  let student = await Student.findOne({
    $and: [{ firstName: payload.firstName, lastName: payload.lastName }]
  }).catch(err => res.json(err));
  if (student) {
    return res.send("Student already exist");
  } else {
    let count = await Profile.countDocuments({ type: "Student" })
      .then(data => data)
      .catch(err => res.json(err));
    count = (count + 1).toString();
    // let randgen = Math.ceil(Math.random() * 100) + count;
    let sid = `S${payload.firstName.charAt(0)}${payload.lastName.charAt(0)}/${
      payload.admittedON
    }/${count.padStart(4, "000")}`;
    let profile = await Profile.create({
      ...payload,
      type: "Student",
      username: sid
    }).catch(err => res.send({ Error1: err }));
    if (profile) {
      if (profile.errmsg) {
        return res.json({ Error2: profile.errmsg });
      } else {
        student = await Student.create({
          ...payload,
          regNO: sid,
          profile: profile
        }).catch(err => res.json(err));
        const newSt = await Student.findOne({ _id: student._id })

          .populate("profile")
          .populate("currentClass")
          .catch(err => res.json(err));
        await ClassName.findOneAndUpdate(
          { _id: newSt.currentClass },
          { $addToSet: { students: newSt._id } },
          { new: true }
        ).catch(err => res.json(err));
        return res.json(newSt);
      }
    } else {
      res.json("Something went wrong");
    }
  }
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

/**
 *            TODO
 * 1. Students should add subjects to their profile,
 * 2. Select a department,
 * 3. Can create a username and password
 */

router.put("/upload/:id", async (req, res) => {
  const { image } = req.files;
  image.mv(
    path.resolve(__dirname, "../../static/uploads/", image.name),
    async err => {
      if (err) res.send(err);
      await Profile.findOneAndUpdate(
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
  const studentArray = await Student.find({ _id: { $in: students } })
    .then(data => data)
    .catch(err => res.json(err));
  const deleted = studentArray.map(std => std.delete({ _id: std._id }));
  res.json({ success: true, deleted });
  // await Student.deleteMany({ _id: { $in: students } })
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err));
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
    .populate("profile")
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
module.exports = router;
