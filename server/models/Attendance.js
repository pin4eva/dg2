const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");

const AttendanceSchema = new mongoose.Schema({
  className: { type: mongoose.Schema.Types.ObjectId, ref: "ClassName" },
  month: String,
  week: Number,
  term: String,
  date: { type: Date, default: Date.now() },
  day: String,
  students: [
    {
      student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
      attended: { type: Boolean, default: false }
    }
  ]
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);
module.exports = Attendance;
