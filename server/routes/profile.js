const express = require("express");
const router = express.Router();
const { Profile } = require("../models");

router.get("/", async (req, res) => {
  await Profile.find()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
module.exports = router;
