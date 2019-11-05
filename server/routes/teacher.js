const express = require("express");
const router = express.Router();
const { Teacher, ClassName, Message, Profile } = require("../models/All");
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
  const payload = { ...req.body };
  const email1 = await Profile.findOne({ email: email }).catch(err =>
    res.send(err)
  );

  const username1 = await Profile.findOne({ username }).catch(err =>
    res.send(err)
  );
  const phone1 = await Profile.findOne({ phone }).catch(err => res.send(err));
  if (email1) res.send({ success: false, msg: "Email already exist" });
  else if (username1)
    res.send({ success: false, msg: "username already exist" });
  else if (phone1)
    res.send({ success: false, msg: "Phone number already exist" });
  else {
    let firstName = payload.firstName;
    let lastName = payload.lastName;
    const count = await Profile.countDocuments({ type: "Teacher" })
      .then(data => data)
      .catch(err => err);
    let count1 = (count + 1).toString();
    const sid = `DGIT${firstName.charAt(0)}${lastName.charAt(
      0
    )}/${new Date().getFullYear()}/${count1.padStart(3, "00")}`;
    const profile = new Profile({
      ...req.body,
      type: "Teacher",
      password: bcrypt.hashSync(req.body.password, 10),
      username: sid
    });
    const teacher = await Teacher.create({
      profile: profile._id,
      applicationNO: uniqueKeygen(6),
      staffID: sid
    }).catch(err => err);
    profile.userID = teacher._id;
    profile.save().catch(err => res.json(err));
    res.send({ success: true, teacher, profile });
  }
});
// Create a message

router.post("/message", async (req, res) => {
  // const { title, body, to, from, toType, fromType } = req.body;
  const message = await Message.create({
    ...req.body
  })
    .then(data => data)
    .catch(err => err);

  await Profile.findOneAndUpdate(
    { username: from },
    { $push: { "messages.sent": message } },
    { new: true }
  ).catch(err => res.send(err));
  const teacher = await Profile.findOne({ username: to }).catch(err =>
    res.send(err)
  );
  if (teacher) {
    await Profile.findOneAndUpdate(
      { username: to },
      { $push: { messages: { recieved: message } } },
      { new: true }
    ).catch(err => res.send(err));
  }
  res.send(message);
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
  const { username, password } = req.body;
  let teacher = await Profile.findOne({ username }).catch(err => res.send(err));
  if (teacher) {
    bcrypt.compare(password, teacher.password).then(isMatch => {
      if (isMatch) {
        return res.json({ success: true, teacher: teacher });
      } else {
        return res.json({ success: false, msg: "Incorrect Password " });
      }
    });
  } else {
    return res.json({ success: false, msg: "No teacher with the email found" });
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
  // const {firstName,lastName,phone,address} = req.body
  const userProfile = await Profile.create({
    ...req.body
  }).catch(err => err);
  const teacher = await Teacher.create({
    profile: userProfile._id
  });
  res.send({ teacher, profile: userProfile });
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

router.get("/", async (req, res) => {
  await Teacher.find()
    .lean()
    .populate({
      path: "profile",
      select: ["-password"],
      populate: {
        path: "messages.sent",
        path: "messages.recieved"
      }
    })

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
    .lean()
    .populate({ path: "className" })
    .populate("profile", "-password")
    .populate({
      path: "sent"
    })
    .populate({
      path: "recieved"
    })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

router.get("/count", async (req, res) => {
  const count = await Profile.count({ type: "Teacher" }, function(err, count) {
    if (err) return err;
    return count;
  });
  res.json(count);
  console.log(count);
});

module.exports = router;
