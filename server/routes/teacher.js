const express = require("express");
const router = express.Router();
const { Teacher } = require("../models/All");
const crypto = require("crypto");
const uidGenerator = require("uid-generator");
const bcrypt = require("bcryptjs");
const uniqueKeygen = require("unique-keygen");
/*
                TODO
    1. Create new teacher,
    2. get teachers.
    3. Add Subject to subject lists,
    4. Prepare assessment by subject
*/

router.post("/register", async (req, res) => {
  const { phone, email, username } = req.body;
  const email1 = Teacher.findOne({ email });

  const username1 = Teacher.findOne({ username });

  const phone1 = Teacher.findOne({ phone });

  if (email1) res.send({ success: false, msg: "Email already exist" });
  if (username1) res.send({ success: false, msg: "username already exist" });
  if (phone1) res.send({ success: false, msg: "Phone number already exist" });
  if (!username1 && !email1 && !phone1) {
    const uiden = new uidGenerator(512, uidGenerator.BASE16);
    const teacher = await Teacher.create({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
      applicationNO: uniqueKeygen(6)
    })
      .then(data => data)
      .catch(err => res.send(err));

    res.send(teacher);
  }
});

router.post("/login", async (req, res) => {
  const { email, username, password, serialNO } = req.body;
  let tusername = await Teacher.findOne({
    username: username,
    password: password
  }).catch(err => res.send(err));
  let temail = await Teacher.findOne({
    email: email,
    password: password
  }).catch(err => res.send(err));
  let tSerialNO = await Teacher.findOne({
    serialNO: serialNO,
    password: password
  }).catch(err => res.send(err));
  if (temail) res.send({ success: true, teacher: temail });
  if (tusername) res.send({ success: true, teacher: tusername });
  if (tSerialNO) res.send({ success: true, teacher: tSerialNO });
});

router.post("/new", async (req, res) => {
  await Teacher.create({ ...req.body })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
router.put("/upload/:id", async (req, res) => {
  const { image } = req.files;
  image.mv(
    path.resolve(__dirname, "../../static/uploads/", image.name),
    async err => {
      if (err) res.send(err);
      await Teacher.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { image: `/uploads/${image.name}` } }
      )
        .then(data => res.send(data))
        .catch(err => res.send(err));
    }
  );
});

// Accept Teacher

router.post("/accept", async (req, res) => {
  const { applicationNO } = req.body;
  await Teacher.findOneAndUpdate(
    { applicationNO: applicationNO },
    {
      $set: {
        ...req.body,
        isStaff: true
      }
    }
  )
    .then(data => res.send({ success: true, staffID: data.staffID }))
    .catch(err => res.send(err));
});
router.get("/", async (req, res) => {
  await Teacher.find()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
router.get("/single/:id", async (req, res) => {
  await Teacher.findOne({ _id: req.params.id })
    .populate({ path: "className" })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
router.put("/update", async (req, res) => {
  await Teacher.findOneAndUpdate(
    { _id: req.body._id },
    { $set: { ...req.body } }
  )
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
router.delete("/delete/:id", async (req, res) => {
  await Teacher.findOneAndRemove({ _id: req.params.id })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
module.exports = router;
