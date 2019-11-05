const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");

const ResultSchema = new mongoose.Schema({
  term: String,
  type: String,
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },
  records: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
      },
      grade: String,
      score: Number
    }
  ]
});

const Result = mongoose.model("Result", ResultSchema);
module.exports = Result;
