const express = require("express");
const router = express.Router();
const { Image, Student } = require("../models/All");
const path = require("path");

router.post("/upload", async (req, res) => {
  const { image } = await req.files;
  const { studentID } = req.body;
  image.mv(
    path.resolve(__dirname, "../../static/upload", image.name),
    async err => {
      if (err) res.send(err);
      const payload = {
        user: studentID
      };

      let newImage = await Student.findOneAndUpdate(
        {
          studentID: studentID
        },
        { $set: { image: `/upload/${image.name}` } }
      )
        .then(data => data)
        .catch(err => res.send(err));

      // let studentImage = await Student.findOneAndUpdate(
      //   { _id: studentID },
      //   { $set: { picture: newImage._id } },
      //   { new: true }
      // )
      //   .then(data => data)
      //   .catch(err => err);
      res.send({
        newImage
      });
    }
  );
});

router.get("/", async (req, res) => {
  await Image.find()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});
module.exports = router;
