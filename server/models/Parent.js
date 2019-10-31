const mongoose = require("mongoose");

const autoIncrement = require("mongoose-auto-increment");

const ParentsSchema = new mongoose.Schema({
  name: String,
  role: String,
  phone: String,
  email: String,
  occupation: String,
  username: String,
  password: String,
  image: String,
  address: String,
  // parentID: { type: String, default: () => seq1() },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ]
});

ParentsSchema.plugin(autoIncrement.plugin, {
  model: "Parent",
  field: "serialNO",
  startAt: 001,
  incrementBy: 1
});

const Parent = mongoose.model("Parent", ParentsSchema);
module.exports = Parent;
