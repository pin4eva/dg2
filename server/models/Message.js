const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  title: String,
  body: String,
  from: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  to: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },

  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
