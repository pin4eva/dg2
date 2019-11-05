const mongoose = require("mongoose");

const ParentsSchema = new mongoose.Schema({
  role: String,
  occupation: String,
  title: String,
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ],
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" }
});

const Parent = mongoose.model("Parent", ParentsSchema);
module.exports = Parent;
