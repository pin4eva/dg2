const mongoose = require("mongoose");

/**
 *                  Teachers Model
 */
const TeacherSchema = new mongoose.Schema({
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  isAdmin: { type: Boolean, default: false },
  bio: String,
  applicationID: String,
  title: String,
  staffID: String,
  maritalStatus: String,
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
});

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
