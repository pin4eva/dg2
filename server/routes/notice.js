const express = require("express");
const router = express.Router();
const { Notice, Profile } = require("../models");

router.post("/new", async (req, res) => {
  const { from, content, to } = req.body;
  const user = await Profile.findOne({ username: from }).catch(err =>
    res.json(err)
  );
  if (user) {
    const notice = await Notice.create({
      from: user._id,
      content
    }).catch(err => err);

    const profile = await Profile.updateMany(
      { type: to },
      { $addToSet: { notice: notice._id } },
      { new: true }
    )
      .then(data => data)
      .catch(err => err);
    if (profile) {
      res.json({ notice, profile });
    } else {
      console.log(profile);
    }
  }
});

router.get("/", async (req, res) => {
  await Notice.find()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
