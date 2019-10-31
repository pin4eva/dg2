const express = require("express");
const router = express.Router();
const { Parent, Student } = require("../models/All");

router.post("/new", async (req, res) => {
  const { name, role } = req.body;
  await Parent.create({ name, role })
    .then(data => res.send(data))
    .catch(err => res.send(err));
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
