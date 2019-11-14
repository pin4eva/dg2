const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
  term: String,
  resumption: Date,
  closing: Date,
  week: { type: Number, default: 1 }
});

const Setting = mongoose.model("Setting", SettingsSchema);
module.exports = Setting;
