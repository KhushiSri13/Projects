const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config")
mongoose
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(function () {
    dbgr("connected");
  })
  .catch(function (err) {
    dbgr(err);
  });

module.exports = mongoose.connection;
// agar chahte ho ki kuch bhi clg na ho to debugger use karte hain   :  clg replaced by gbgr
// for outputs run export DEBUG =development:* in terminal before node app.js
// for windows use set instead of export
// install config package to manage different environments easily
