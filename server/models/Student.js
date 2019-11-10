const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");

/**
 *            Student Schema
 */
const StudentSchema = new mongoose.Schema({
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  level: { type: Number, default: 1 },
  regNO: String,
  firstName: String,
  lastName: String,
  admittedON: String,
  phone: String,
  parents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parent"
    }
  ],
  currentClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClassName"
  }
});

const Student = mongoose.model("Student", StudentSchema);

StudentSchema.pre("findOneAndRemove", async function(next) {
  await this.model("ClassName").deleteMany({ students: this._id });
  next();
});

module.exports = Student;
