// const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");
// const connection = mongoose.createConnection("mongodb://localhost/schooldb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });
// autoIncrement.initialize(connection);

/**
 *      Todo
 * 1. Create an assessment Model for assigments
 */

const Student = require("./Student");
const Teacher = require("./Teacher");
const Parent = require("./Parent");
const { ClassName, Session } = require("./ClassName");
const Result = require("./SubjectResult");
const Subject = require("./Subject");
const Attendance = require("./Attendance");
const Message = require("./Message.js");
const Profile = require("./Profile");
const Notice = require("./Notice");
const Settings = require("./Settings");

module.exports = {
  Student,
  Parent,
  ClassName,
  Subject,
  Teacher,
  Result,
  Attendance,
  Session,
  Message,
  Profile,
  Notice,
  Settings
};
