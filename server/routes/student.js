const express = require("express");
const router = express.Router();
const { Student, ClassName } = require("../models/All");
const path = require("path");
// const Student = require("../models/Student");

router.post("/new", async (req, res) => {
  // console.log(req.body);
  const student = new Student({
    ...req.body
  });

  await ClassName.findOneAndUpdate(
    { _id: student.currentClass },
    { $push: { students: student._id } }
  ).catch(err => res.send(err));
  await student
    .save()
    .then(data => res.send({ students: data._id }))
    .catch(err => res.send(err));
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
module.exports = router;
