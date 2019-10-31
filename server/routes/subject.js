const express = require("express");
const router = express.Router();
const { Subject, ClassName, Teacher } = require("../models/All");

router.post("/new", async (req, res) => {
  const subject = await Subject.create({ ...req.body })
    .then(data => data)
    .catch(err => res.send(err));
  await ClassName.findOneAndUpdate(
    { _id: subject.className },
    { $push: { subjects: subject._id } },
    { new: true }
  ).catch(err => res.send(err));
  await Teacher.findOneAndUpdate(
    { _id: subject.teacher },
    { $push: { subjects: subject._id } }
  ).catch(err => res.send(err));
  res.send(subject);
});
router.get("/", async (req, res) => {
  await Subject.find()
    .populate({ path: "teacher" })
    .populate({ path: "className" })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

router.get("/single/:id", async (req, res) => {
  await Subject.findOne({ _id: req.params.id })
    .populate({ path: "teacher" })
    .populate({ path: "className" })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
module.exports = router;
