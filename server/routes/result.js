const express = require("express");
const router = express.Router();
const { Result, ClassName } = require("../models");

router.post("/new", async (req, res) => {
  const { className } = req.body;
  const result = await Result.create({ ...req.body })
    .then(data => data)
    .catch(err => res.send(err));

  await ClassName.findByIdAndUpdate(className, {
    $push: { results: result }
  }).catch(err => res.send(err));
  res.send(result);
});

router.get("/", async (req, res) => {
  await Result.find()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

module.exports = router;
