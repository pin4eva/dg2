const express = require("express");
let router = express.Router();
const { Settings } = require("../models/All");

router.post("/", async (req, res) => {
  await Settings.create({
    ...req.body
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post("/update/:id", async (req, res) => {
  await Settings.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { ...req.body } }
  )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post("/incWeek/:id", async (req, res) => {
  await Settings.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { week: 1 }
    }
  )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
router.post("/setWeek", async (req, res) => {
  await Settings.findOneAndUpdate(
    { _id: req.body.settings },
    {
      week: req.body.week
    }
  )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.get("/", async (req, res) => {
  await Settings.find()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.get("/single/:id", async (req, res) => {
  await Settings.findOne({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
module.exports = router;
