const express = require("express");
const router = express.Router();
const { Teacher, ClassName } = require("../models/All");
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
  const email1 = await Teacher.findOne({ email: email }).catch(err =>
    res.send(err)
  );

  const username1 = await Teacher.findOne({ username }).catch(err =>
    res.send(err)
  );
  const phone1 = await Teacher.findOne({ phone }).catch(err => res.send(err));
  if (email1) res.send({ success: false, msg: "Email already exist" });
  else if (username1)
    res.send({ success: false, msg: "username already exist" });
  else if (phone1)
    res.send({ success: false, msg: "Phone number already exist" });
  else {
    const uiden = new uidGenerator(512, uidGenerator.BASE16);
    const teacher = await Teacher.create({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
      applicationNO: uniqueKeygen(6)
    })
      .then(data => data)
      .catch(err => res.send(err));

    res.send({ success: true, teacher });
  }
});
// Accept Teacher

router.post("/accept", async (req, res) => {
  const { username } = req.body;
  await Teacher.findOneAndUpdate(
    { username: username },
    {
      $set: {
        ...req.body,
        isStaff: true
      }
    }
  )
    .then(data => res.send({ success: true, teacher: data._id }))
    .catch(err => res.send(err));
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let teacher = await Teacher.findOne({ email }).catch(err => res.send(err));
  if (teacher) {
    bcrypt.compare(password, teacher.password).then(isMatch => {
      if (isMatch) {
        if (teacher.isStaff == false) {
          res.send({
            success: false,
            msg: `Your applicationID is ${teacher.applicationNO},Please meet the school Admin with your applicationID to complete your registration`
          });
        } else {
          res.send({ success: true, teacher: teacher });
        }
      } else {
        return res.send({ success: false, msg: "Incorrect Password " });
      }
    });
  } else {
    res.send({ success: false, msg: "No teacher with the email found" });
  }
});
router.post("/assignclass", async (req, res) => {
  const { username, className } = req.body;
  const teacher = await Teacher.findOne({ username }).catch(err =>
    res.send(err)
  );
  const c = await ClassName.findOne({ _id: className }).catch(err =>
    res.send(err)
  );

  if (teacher && c) {
    const newTeacher = await Teacher.findOneAndUpdate(
      { username: username },
      {
        $set: {
          className: className,
          headTeacher: true
        }
      }
    )
      .then(data => data)
      .catch(err => res.send({ success: false, err }));
    const newClass = await ClassName.findOneAndUpdate(
      { _id: className },
      {
        $set: {
          teacher: teacher._id
        }
      }
    )
      .then(data => data)
      .catch(err => err);

    res.send({
      success: true,
      teacher: newTeacher.firstName,
      class: newClass.name
    });
  } else {
    res.send({ success: false, msg: "Incorrect username" });
  }
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

router.get("/", async (req, res) => {
  await Teacher.find()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
router.get("/staff", async (req, res) => {
  await Teacher.find({ isStaff: true })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
router.get("/applicants", async (req, res) => {
  await Teacher.find({ isStaff: false })
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
    .then(() => res.send({ success: true }))
    .catch(err => res.send(err));
});
module.exports = router;
