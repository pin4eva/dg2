const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
/**
 *                 ClassName Schema
 */

const SessionSchema = new mongoose.Schema({
  session: { type: String, required: true },
  year: Number,
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "ClassName" }]
});

const RoutineSchema = new mongoose.Schema({
  className: { type: mongoose.Schema.Types.ObjectId, ref: "ClassName" },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  date: Date,
  time: { type: Date }
});

const ClassNameSchema = new mongoose.Schema({
  name: String,
  session: { type: mongoose.Schema.Types.ObjectId, ref: "Session" },
  section: String,
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  },
  results: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Result"
    }
  ],

  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ],

  attendance: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attendance"
    }
  ],
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }]
});

ClassNameSchema.plugin(autoIncrement.plugin, {
  model: "ClassName",
  field: "serialNO",
  startAt: 1,
  incrementBy: 1
});

const Session = mongoose.model("Session", SessionSchema);
const ClassName = mongoose.model("ClassName", ClassNameSchema);
const Routine = mongoose.model("Routine", RoutineSchema);
module.exports = { ClassName, Session, Routine };
