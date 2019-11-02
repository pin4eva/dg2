const express = require("express");
const router = express.Router();
const { Attendance, ClassName } = require("../models/All");

router.post("/new", async (req, res) => {
  const { student, className, attended, day } = req.body;
  const attendance = await Attendance.create({
    date: Date.now(),
    student: student,
    attended: attended,
    day: day
  })
    .then(data => data)
    .catch(err => res.send(err));
  const classes = await ClassName.findOneAndUpdate(
    { _id: className },
    { $push: { attendance: attendance._id } },
    { new: true }
  )
    .then(data => data)
    .catch(err => res.send(err));

  if (classes) {
    res.send(classes);
  } else {
    res.send(attendance);
  }
});
router.get("/", async (req, res) => {
  await Attendance.find()
    .populate({ path: "className" })
    .populate({ path: "student" })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
module.exports = router;
