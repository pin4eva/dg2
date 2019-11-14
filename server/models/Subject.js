const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  name: String,
  code: { type: String, trim: true },
  type: String,
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  }
});

const Subject = mongoose.model("Subject", SubjectSchema);

module.exports = Subject;
