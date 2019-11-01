const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

/**
 *                  Teachers Model
 */
const TeacherSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: { type: String, required: true },
  dob: Date,
  religion: String,
  phone: String,
  staffID: String,
  isStaff: { type: Boolean, default: false },
  bio: String,
  address: String,
  applicationNO: String,
  title: String,
  image: String,
  gender: { type: String },
  maritalStatus: String,
  address: String,
  headTeacher: { type: Boolean, default: false },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject"
    }
  ],
  className: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClassName"
  }
  // teacherID: { type: Number, default: 0 },
});

TeacherSchema.plugin(autoIncrement.plugin, {
  model: "Teacher",
  field: "serialNO",
  startAt: 1,
  incrementBy: 1
});

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
