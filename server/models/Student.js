const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

/**
 *            Student Schema
 */
const StudentSchema = new mongoose.Schema({
  name: String,
  level: { type: Number, default: 1 },
  reqNO: String,
  gender: { type: String, default: "Male" },
  dob: Date,
  bio: String,
  religion: String,
  bloodGroup: String,
  address: String,
  admittedOn: Date,
  phone: String,
  parents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parent"
    }
  ],
  firstName: String,
  middleName: String,
  lastName: String,
  currentClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClassName"
    // department: String,
    //subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }]
  },
  image: String
});

StudentSchema.plugin(autoIncrement.plugin, {
  model: "Student",
  field: "serialNO",
  startAt: 1,
  incrementBy: 1
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
