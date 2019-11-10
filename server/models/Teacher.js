const mongoose = require("mongoose");

/**
 *                  Teachers Model
 */
const TeacherSchema = new mongoose.Schema({
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  isAdmin: { type: Boolean, default: false },
  bio: String,
  firstName: String,
  lastName: String,
  applicationID: String,
  title: String,
  staffID: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
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

TeacherSchema.virtual("userProfile", {
  ref: "Profile",
  localField: "profile",
  foreignField: "username"
});
TeacherSchema.set("toObject", { virtuals: true });
TeacherSchema.set("toJSON", { virtuals: true });

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
