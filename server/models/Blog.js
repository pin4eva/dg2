const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: String,
  body: String,
  pic: String,
  desc: String,
  date: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
      comment: String,
      date: { type: Date, default: Date.now }
    }
  ]
});
