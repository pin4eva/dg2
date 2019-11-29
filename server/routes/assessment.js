const express = require("express");
const router = express.Router();
const { Assessment, ClassName, StudentResult, Student } = require("../models");

router.post("/new", async (req, res) => {
  let result = await StudentResult.create({ ...req.body }).catch(err =>
    res.json(err)
  );

  res.json(result);
});

router.get("/student", async (req, res) => {
  const { student, className, term } = req.body;
  let assessment = await StudentResult.aggregate([
    {
      $lookup: {
        from: "students",
        localField: "student",
        foreignField: "_id",
        as: "student"
      }
    },
    {
      $lookup: {
        from: "classnames",
        localField: "className",
        foreignField: "_id",
        as: "className"
      }
    },

    { $unwind: { path: "$className" } },
    { $unwind: { path: "$student" } },
    {
      $project: {
        student: {
          name: { $concat: ["$student.firstName", " ", "$student.lastName"] },
          firstName: "$student.firstName",
          // middleName: "$student.middleName",
          lastName: "$student.lastName",
          id: "$student._id"
        },

        className: {
          name: "$className.name",
          id: "$className._id"
        },

        term: 1,
        type: 1,
        data: 1
      }
    },

    {
      $match: {
        // " student.lastName": student
        // "className.name": className
        // term: "First term"
      }
    },
    { $unwind: "$data" },

    {
      $group: {
        _id: "$data.subject",
        data: { $push: "$data" },
        total: { $sum: "$data.score" },
        student: { $first: "$student" }
      }
    },
    {
      $project: {
        student: 1,
        _id: 0,
        subject: "$_id",
        data: {
          // subject: 1,
          score: 1,
          grade: 1,
          remark: 1
        },
        total: 1
      }
    },
    { $sort: { "data.score": 1 } }
  ]).catch(err => err);

  res.json(assessment);
});

router.get("/class", async (req, res) => {
  let { className, student, term, type } = req.query;
  student = await Student.findOne({ regNO: student }).catch(err =>
    res.json(err)
  );
  if (!student) return res.json("Invalid registration number");
  // res.json(student);
  let assessment = await StudentResult.findOne({
    student: student._id,
    className: className,
    term: term,
    type: type
  })
    .lean()
    .populate({
      path: "student",
      select: ["firstName", "lastName"]
    })
    .populate({
      path: "className",
      select: "name"
    })
    .catch(err => res.json(err));
  res.json(assessment);
});

router.get("/", async (req, res) => {
  let assessment = await StudentResult.find({})
    .lean()
    .populate({
      path: "student",
      select: ["firstName", "lastName"]
    })
    .populate({
      path: "className",
      select: "name"
    })
    .catch(err => res.json(err));
  res.json(assessment);
});
module.exports = router;
