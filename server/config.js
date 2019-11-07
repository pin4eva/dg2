require("dotenv").config();
module.exports = {
  MONGDB_URI: process.env.MONGDB_URI,
  BASE_URI: process.env.BASE_URI,
  SECRET: process.env.SECRET
};
