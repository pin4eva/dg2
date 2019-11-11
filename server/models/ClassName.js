const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");
/**
 *                 ClassName Schema
 */

const SessionSchema = new mongoose.Schema({
  session: { type: String, required: true, unique: true },
  year: { type: Number, required: true, unique: true },
  isCurrent: { type: Boolean, default: false },
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

  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }]
});

const Session = mongoose.model("Session", SessionSchema);
const ClassName = mongoose.model("ClassName", ClassNameSchema);
const Routine = mongoose.model("Routine", RoutineSchema);
module.exports = { ClassName, Session, Routine };
