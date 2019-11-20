const express = require("express");
const router = express.Router();
const { Assessment, ClassName } = require("../models/All");

router.post("/new", async (req, res) => {
  let { className } = req.body;
  let assessment = await Assessment.create({ ...req.body }).catch(err => err);
  await ClassName.findOneAndUpdate(
    { _id: className },
    { $addToSet: { results: assessment } }
  ).catch(err => res.json(err));
  res.json(assessment);
});

router.get("/", async (req, res) => {
  let assessment = await Assessment.find().catch(err => err);
  res.json(assessment);
});
module.exports = router;
