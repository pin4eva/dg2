const express = require("express");
const router = express.Router();
const { Message, Profile } = require("../models");

router.post("/new", async (req, res) => {
  const { title, body, to, from } = req.body;

  const sent = await Profile.findOne({ username: to }).catch(err =>
    res.json(err)
  );
  const recieved = await Profile.findOne({ username: from }).catch(err =>
    res.json(err)
  );
  if (sent && recieved) {
    const newMessage = await Message.create({
      title,
      body,
      to: sent._id,
      from: recieved._id
    }).catch(err => err);
    await Profile.findOneAndUpdate(
      { username: from },
      { $push: { sent: newMessage._id } }
    ).catch(err => res.json(err));
    await Profile.findOneAndUpdate(
      { username: to },
      { $push: { recieved: newMessage._id } }
    ).catch(err => res.json({ success: false, err }));

    res.json({ success: true, message: newMessage });
  } else {
    res.json("Please verify the username again");
  }
});

router.get("/", async (req, res) => {
  const message = await Message.find().catch(err => err);
  res.json(message);
});

router.get("/single/:id", async (req, res) => {
  const message = await Message.findOne({ _id: req.params.id }).catch(
    err => err
  );
  res.json(message);
});
module.exports = router;
