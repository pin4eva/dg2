const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

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

SubjectSchema.plugin(autoIncrement.plugin, {
  model: "Subject",
  field: "serialNO",
  startAt: 1,
  incrementBy: 1
});

const Subject = mongoose.model("Subject", SubjectSchema);

module.exports = Subject;
