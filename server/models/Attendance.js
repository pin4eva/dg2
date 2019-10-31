const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");

const AttendanceSchema = new mongoose.Schema({
  day: { type: Date, default: Date.now() },
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  attended: { type: Boolean, default: false }
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);
module.exports = Attendance;
