const express = require("express");
const router = express.Router();
const { Attendance, Settings } = require("../models");

router.post("/new", async (req, res) => {
  const attendance = await Attendance.create({
    ...req.body
  })
    .then(data => data)
    .catch(err => res.send(err));

  res.json(attendance);
});
router.get("/", async (req, res) => {
  await Attendance.find()
    .populate({
      path: "className",
      select: ["name", "_id"]
    })
    .populate({ path: "student" })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

router.get("/getby", async (req, res) => {
  const { className, month, week, term } = req.query;
  const attendance = await Attendance.find({
    className: className,
    month: month,
    week: week,
    term: term
  })
    .populate({
      path: "students.student",
      select: ["firstName", "lastName", "regNO", "_id"]
    })
    .catch(err => res.json(err));
  res.json(attendance);
});

/**
 *          Settings
 */

router.post("/settings", async (req, res) => {
  await Settings.create({
    ...req.body
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.put("/settings/new", async (req, res) => {
  await Settings.findOneAndUpdate(
    { _id: req.body.settings },
    { $set: { ...req.body } }
  )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post("/settings/setweek", async (req, res) => {
  await Settings.findOneAndUpdate(
    { _id: req.body.settings },
    {
      $inc: { week: 1 }
    }
  )
    .then(data => data)
    .catch(err => res.json(err));
});
module.exports = router;
