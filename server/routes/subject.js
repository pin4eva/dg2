const express = require("express");
const router = express.Router();
const { Subject, ClassName, Teacher } = require("../models");

router.post("/new", async (req, res) => {
  let { code, name, teacher, type } = req.body;
  let subject = await Subject.create({
    code: code.toLowerCase(),
    name: name,
    teacher,
    type
  })
    .then(data => data)
    .catch(err => res.send(err));

  await Teacher.findOneAndUpdate(
    { _id: subject.teacher },
    { $push: { subjects: subject._id } }
  ).catch(err => res.send(err));
  subject = await Subject.findOne({ _id: subject._id })
    .lean()
    .populate({
      path: "teacher",
      select: ["firstName", "lastName", "staffID"]
    });
  res.send(subject);
});

router.post("/assignteacher", async (req, res) => {
  let { teacher, code } = req.body;
  let subject = await Subject.findOne({
    // $or: [{ code: code }, { _id: req.body.subject }]
    code
  }).catch(err => res.status(500).json(err));
  let oldTeacher;
  if (subject) {
    oldTeacher = await Teacher.findOne({
      subjects: subject._id
    }).catch(err => res.json(err));
  } else {
    return res.json({ msg: "Subject not found" });
  }
  // return res.json(subject);
  if (oldTeacher) {
    if (oldTeacher._id == teacher) {
      return res.json({
        msg: `This subject is taught by the same teacher. Name:${oldTeacher.firstName} ${oldTeacher.lastName}`
      });
    } else {
      // return res.json({
      //   msg: "Old teacher is not equal to new",
      //   data: oldTeacher
      // });
      await Teacher.findOneAndUpdate(
        { _id: oldTeacher._id },
        { $pull: { subjects: subject._id } }
      ).catch(err => res.json({ msg: err.message }));

      let newSubject = await Subject.findOneAndUpdate(
        { _id: subject._id },
        { $set: { teacher: teacher } }
      ).catch(err => res.json(err));

      let newTeacher = await Teacher.findOneAndUpdate(
        { _id: teacher },
        { $push: { subjects: subject._id } }
      ).catch(err => res.json(err));

      return res.status(201).json({
        msg: `Success ! : pulled from ${oldTeacher.firstName}, pushed to ${newTeacher.firstName}`,
        data: newSubject
      });
    }
  } else {
    // return res.json({ msg: "Last code" });
    await Teacher.findOneAndUpdate(
      { _id: teacher },
      { $push: { subjects: subject._id } }
    ).catch(err => res.json(err));
    let su = await Subject.findOneAndUpdate(
      { _id: subject._id },
      { $set: { teacher: req.body.teacher } }
    ).catch(err => res.json(err));

    res.status(201).json({ msg: "Success !: New record inserted", data: su });
  }
});

// Delete Subject

router.delete("/delete/:subject", async (req, res) => {
  const { subject } = req.params;
  let sub = await Subject.findOneAndRemove({ _id: subject }).catch(err =>
    res.json(err)
  );
  let teacher = Teacher.findOneAndUpdate(
    { subjects: subject },
    { $pull: { subjects: subject } }
  ).catch(err => res.json(err));
  res.json({ msg: `Success`, data: sub });
});

router.get("/", async (req, res) => {
  await Subject.find()
    .populate({
      path: "teacher",
      select: ["firstName", "lastName"]
    })
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
