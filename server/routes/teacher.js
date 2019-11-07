const express = require("express");
const router = express.Router();
const { Teacher, ClassName, Message, Profile } = require("../models/All");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uniqueKeygen = require("unique-keygen");
const secret = require("../config").SECRET;
/*
                TODO
    1. Create new teacher,
    2. get teachers.
    3. Add Subject to subject lists,
    4. Prepare assessment by subject
*/

router.post("/register", async (req, res) => {
  const payload = { ...req.body };
  let teacher = await Teacher.findOne({
    firstName: payload.firstName,
    lastName: payload.lastName
  }).catch(err => res.send(err));

  if (teacher) {
    return res.json("Teacher already exist");
  } else {
    if (payload.email) {
      const email = await Teacher.findOne({ email: payload.email }).catch(err =>
        res.json(err)
      );
      // return res.json(email);
      if (email) {
        return res.json("A Teacher with same email already exist");
      } else {
        const count = await Profile.countDocuments({ type: "Teacher" })
          .then(data => data)
          .catch(err => res.send(err));
        let count1 = (count + 1).toString();
        const sid = `DGIT${payload.firstName.charAt(
          0
        )}${payload.lastName.charAt(
          0
        )}/${new Date().getFullYear()}/${count1.padStart(3, "00")}`;
        const profile = Profile.create({
          ...payload,
          type: "Teacher",
          username: sid
        }).catch(err => res.send(err));
        teacher = await Teacher.create({
          ...payload,
          profile: profile._id,
          applicationID: uniqueKeygen(6),
          staffID: sid,
          password: bcrypt.hashSync(req.body.password, 10)
        }).catch(err => res.send(err));

        res.send({ success: true, teacher });
      }
    }
  }
});

router.post("/login", async (req, res) => {
  const { staffID, password } = req.body;
  let teacher = await Teacher.findOne({ staffID }).catch(err => res.send(err));
  if (teacher) {
    bcrypt.compare(password, teacher.password).then(isMatch => {
      if (isMatch) {
        const payload = { ...teacher, password: "" };
        jwt.sign(payload, secret, { expiresIn: "1d" }, (err, token) => {
          if (err) {
            return res.json({ success: false, err });
          } else {
            return res.json({ success: true, token: token });
          }
        });
      } else {
        return res.json({ success: false, msg: "Incorrect Password " });
      }
    });
  } else {
    return res.json({ success: false, msg: "No teacher with the email found" });
  }
});

router.get("/me", async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.json("Auth failed, no token provided");

  jwt.verify(token, secret, (err, data) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      return res.json({ success: true, teacher: data._doc });
    }
  });
});

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
  const teacher = await Teacher.findOne({ _id: req.params.id })
    .lean()

    .populate({ path: "className" })
    .populate("profile", "-password")
    .populate({
      path: "profile",
      populate: {
        path: "recieved",
        populate: {
          path: "from",
          model: "Profile",
          select: ["firstName", "lastName", "username"]
        }
      }
    })
    .populate({
      path: "profile",
      populate: {
        path: "sent"
      }
    })
    .populate({
      path: "profile",
      populate: {
        path: "notice",
        populate: {
          path: "from",
          models: "Profile",
          select: ["firstName", "lastName", "username"]
        }
      }
    })
    .then(data => data)
    .catch(err => err);
  res.json(teacher);
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
