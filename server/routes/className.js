const express = require("express");
const router = express.Router();
const { ClassName, Student, Session, Teacher, Subject } = require("../models");

/**
 *            TODO
 * 1. Send Assignment to Students in a particular department,
 * 2. Send assignment to Students in a class offering a particular subject,
 *
 */

router.post("/new", async (req, res) => {
  //  const { name, session } = req.body;
  const newClass = await ClassName.create({ ...req.body })
    .then(data => data)
    .catch(err => res.send(err));
  await Session.findOneAndUpdate(
    { _id: newClass.session },
    { $push: { classes: newClass._id } },
    { new: true }
  ).catch(err => res.send(err));
  await Teacher.findOneAndUpdate(
    { _id: newClass.teacher },
    { $set: { className: newClass._id } },
    { new: true }
  ).catch(err => res.send(err));

  res.send(newClass);
});

router.post("/assignTeacher", async (req, res) => {
  const { className, teacher } = req.body;
  const newClass = await ClassName.findOneAndUpdate(
    { _id: className },
    {
      $set: {
        teacher: teacher
      }
    }
  ).catch(err => res.send(err));
  const newTeacher = await Teacher.findOneAndUpdate(
    { _id: teacher },
    {
      $set: {
        className: className,
        headTeacher: true
      }
    }
  ).catch(err => res.send(err));
  res.send({
    classStatus: newClass,
    teacherStatus: newTeacher
  });
});
// Update class Info

router.put("/update/:id", async (req, res) => {
  await ClassName.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

/**
 *            delete routes
 */

// Delete Student from class

router.put("/delete/:classID/:student", async (req, res) => {
  await ClassName.update(
    { _id: req.params.classID },
    { $pull: { students: { _id: req.params.student } } }
  )
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

/**
 *               Automatically Push Students to class by level
 */

router.post("/addstudents", async (req, res) => {
  const { level, className } = req.body;
  const students = await Student.find({ level: level })
    .then(data => data)
    .catch(err => res.send(err));
  await ClassName.findOneAndUpdate(
    { _id: className },
    { $push: { students: students } },
    { new: true }
  ).catch(err => res.send(err)); //.then(data => data)
  await Student.updateMany({ level: level }, { currentClass: className })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

/**
 *              Add Single Student
 */
router.post("/addstudent", async (req, res) => {
  const { student, className } = req.body;
  const newStudent = await Student.findOneAndUpdate(
    { _id: student },
    { $set: { currentClass: className } },
    { new: true }
  )
    .then(data => data)
    .catch(err => res.send(err));
  await ClassName.findOneAndUpdate(
    { _id: className },
    { $push: { students: newStudent } },
    { new: true }
  )
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

/**
 *  Get Request
 */
router.get("/", async (req, res) => {
  let classes = await ClassName.find()
    .populate({
      path: "students"
      // select: ["_id", "name"]
    })

    .populate({
      path: "attendance",
      populate: {
        path: "student",
        select: ["_id", "name"]
      }
    })
    .populate({
      path: "teacher",
      populate: {
        path: "profile",
        model: "Profile",
        select: ["firstName", "lastName", "username", "userID"]
      }
    })
    .populate({
      path: "session"
    })

    .catch(err => res.send(err));
  classes = classes.map(c => {
    return {
      ...c._doc,
      teacher: `${c.teacher.firstName} ${c.teacher.lastName}`,
      session: c.session.session,
      students: c.students.map(st => {
        return {
          firstName: st.firstName,
          lastName: st.lastName,
          middleName: st.middleName,
          regNO: st.regNO,
          currentClass: c.name,
          image: st.profile.image,
          admittedON: st.admittedON
        };
      })
    };
  });

  res.json(classes);
});

router.get("/single/:id", async (req, res) => {
  let classes = await ClassName.findOne({ _id: req.params.id })
    .populate({
      path: "students",
      populate: { path: "profile", select: ["-password"] }
    })
    .populate("teacher")
    .populate({ path: "results" })
    .populate({ path: "attendance" })

    .catch(err => res.send(err));
  res.json({
    ...classes._doc,
    teacher: `${classes._doc.teacher.firstName} ${classes._doc.teacher.lastName}`,
    students: classes._doc.students.map(st => {
      return {
        firstName: st.firstName,
        lastName: st.lastName,
        middleName: st.middleName,
        regNO: st.regNO,
        currentClass: classes._doc.name,
        image: st.profile.image,
        admittedON: st.admittedON
      };
    })
  });
});

/**
 *          SESSIONS
 */

router.post("/session/new", async (req, res) => {
  await Session.create({ ...req.body })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
router.get("/session", async (req, res) => {
  await Session.find()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

router.get("/session/single/:id", async (req, res) => {
  await Session.findOne({ _id: req.params.id })
    .populate({
      path: "classes",
      model: "ClassName"
    })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

module.exports = router;
