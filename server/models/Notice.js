const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const Notice = mongoose.model("Notice", NoticeSchema);
module.exports = Notice;
