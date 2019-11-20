const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
  className: { type: mongoose.Schema.Types.ObjectId, ref: "ClassName" },
  type: String,
  date: Date,
  totalScore: Number,
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  records: [
    {
      student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
      score: Number,
      remark: String,
      grade: String
    }
  ]
});

const Assessment = mongoose.model("Assessment", AssessmentSchema);
module.exports = Assessment;
