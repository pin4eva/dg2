const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  type: String,
  firstName: String,
  middleName: String,
  lastName: String,
  phone: String,
  address: String,
  religion: String,
  dob: Date,
  bloodGroup: String,
  gender: { type: String },
  image: String,
  userID: String,
  username: { type: String, unique: true },
  sent: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  recieved: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  notice: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notice" }]
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
