const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  subject: String,
  code: String,
  type: String,
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  },
  className: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClassName"
  }
});

const Subject = mongoose.model("Subject", SubjectSchema);

module.exports = Subject;
