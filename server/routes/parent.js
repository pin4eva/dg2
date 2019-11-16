const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = require("../config").SECRET;
const bcrypt = require("bcryptjs");
const { Parent, Student, Profile } = require("../models/All");

router.post("/register", async (req, res) => {
  const payload = { ...req.body };
  let child = await Student.findOne({ regNO: payload.child }).catch(err =>
    res.json(err)
  );
  if (!child) return res.json({ msg: "Not a valid student RegNo" });
  let parent = await Parent.findOne({
    firstName: payload.firstName,
    lastName: payload.lastName
  }).catch(err => res.json(err));
  if (parent) return res.json({ msg: "Parent already exist" });
  if (payload.email) {
    parent = await Parent.findOne({ email: payload.email }).catch(err =>
      res.json(err)
    );
    if (parent)
      return res.json({ msg: "Parent with same email already exist" });
  }
  let count = await Profile.countDocuments({ type: "Parent" }).catch(err =>
    res.json(err)
  );
  count = (count + 1).toString();
  let sid = `P${payload.firstName.charAt(0)}${payload.lastName.charAt(
    0
  )}/${new Date().getFullYear()}/${count.padStart(3, "00")}`;
  let profile = await Profile.create({
    ...payload,
    type: "Parent",
    username: sid
  }).catch(err => res.json(err));
  parent = await Parent.create({
    ...payload,
    username: sid,
    profile: profile,
    password: bcrypt.hashSync(payload.password, 10),
    children: child._id
  }).catch(err => res.json(err));
  await Student.findOneAndUpdate(
    { _id: child },
    { $push: { parents: parent._id } }
  ).catch(err => res.json(err));
  res.json(parent);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let parent = await Parent.findOne({ username: username }).catch(err =>
    res.json(err)
  );
  // return res.json(parent);
  if (!parent)
    return res.json({ msg: "Can not find any record with same username" });
  bcrypt.compare(password, parent.password).then(isMatch => {
    if (!isMatch) return res.json({ msg: "Incorrect password" });
    const payload = { _id: parent._id };
    jwt.sign(payload, secret, { expiresIn: "1d" }, (err, token) => {
      if (err) return res.json(err);
      res.json({ success: true, token });
    });
  });
});

router.get("/me", async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.json("Authentication failed, no token provided");
  jwt.verify(token, secret, async (err, data) => {
    if (err)
      return res.json({
        msg: "Authentication failed, no token provided",
        success: false,
        err
      });
    let parent = await Parent.findOne({ _id: data._id }, { password: 0 })
      .lean()
      .populate("profile")
      .populate("children")
      .catch(err => res.json(err));
    res.json({ success: true, parent });
  });
});

router.post("/addchild", async (req, res) => {
  const { parent, student } = req.body;
  await Parent.findOneAndUpdate({ _id: parent }, { children: student })
    .then(data => data)
    .catch(err => res.send(err));
  await Student.findOneAndUpdate(
    { _id: student },
    { $push: { parents: parent } }
  )
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

// router.post("/verify",)

router.put("/update/", async (req, res) => {
  await Parent.findOneAndUpdate(
    { _id: req.body._id },
    { $set: { ...req.body } }
  )
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

router.get("/", async (req, res) => {
  await Parent.find()
    .populate({
      path: "children"
      //select:["_id","name","currentClass","reqNO"]
    })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

router.get("/single/:id", async (req, res) => {
  await Parent.findOne({ _id: req.params.id })
    .populate({
      path: "children"
    })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

router.delete("/remove/:id", async (req, res) => {
  await Parent.deleteOne({ _id: req.params.id })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
module.exports = router;
