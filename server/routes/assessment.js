const express = require("express");
const router = express.Router();
const { Assessment, ClassName, StudentResult } = require("../models/All");

router.post("/new", async (req, res) => {
  let result = await StudentResult.create({ ...req.body }).catch(err =>
    res.json(err)
  );

  res.json(result);
});

router.get("/", async (req, res) => {
  let assessment = await StudentResult.aggregate([
    // {
    //   $lookup: {
    //     from: "subjects",
    //     localField: "data.subject",
    //     foreignField: "_id",
    //     as: "subject"
    //   }
    // },
    { $unwind: "$data" },
    {
      $group: {
        _id: "$data.subject",
        data: { $push: "$data" },
        total: { $sum: "$data.score" }
      }
    },

    {
      $project: {
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
    }

    // { $sort: { "data.score": 1 } }
  ])
    // let assessment = await StudentResult.find({})

    //   .lean()
    //   .populate({
    //     path: "student",
    //     select: ["firstName", "lastName"]
    //   })
    //   .populate({
    //     path: "className",
    //     select: "name"
    //   })

    .catch(err => err);

  res.json(assessment);
});
module.exports = router;
