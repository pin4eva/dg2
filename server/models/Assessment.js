const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
  className: { type: mongoose.Schema.Types.ObjectId, ref: "ClassName" },
  type: String,
  date: Date,
  totalScore: Number,
  term: String,
  records: [{ type: mongoose.Schema.Types.ObjectId, ref: "StudentResult" }]
});

const StudentResultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  className: { type: mongoose.Schema.Types.ObjectId, ref: "ClassName" },
  type: String,
  term: String,
  data: [
    {
      subject: String, //{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
      score: Number,
      grade: String,
      remark: String
    }
  ]
});

const StudentResult = mongoose.model("StudentResult", StudentResultSchema);
const Assessment = mongoose.model("Assessment", AssessmentSchema);
module.exports = { Assessment, StudentResult };
