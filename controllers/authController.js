const bcrypt = require("bcrypt");
const db=require("../config/db");
const userModel = require("../models/userSchema");
const { generateTokens } = require("../utils/generateTokens");


module.exports.registerUser = async function (req, res) {
  try {
    const { fullname, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user){
      res.status(400);
      // req.flash("error", "User already exists, kindly login");
      return res.redirect("/login");
    } 
    bcrypt.genSalt(10, async function (err, salt) {
      if (err) throw err;
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw err;
        let user = await userModel.create({
          fullname,
          email,
          password: hash,
        });
        let token = generateTokens(user);
        res.cookie("token", token);
        // req.flash("success", "User created successfully");
        res.redirect("/");
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.loginUser = async function (req, res) {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user){
      res.status(401);
      // req.flash("error", "User not found, please register");
      return res.redirect("/signup");
    } 
  bcrypt.compare(password, user.password, function (err, result) {
    if (err) res.send(err.message);
    if (result) {
      let token = generateTokens(user);
      res.cookie("token", token);
      // req.flash("success", "login successful");
      res.redirect("/");
    } else {
      req.flash("error", "email/password incorrect");
      res.redirect("/login");
    }
  });
};

module.exports.logout = function (req, res) {
  res.cookie("token", "");
  // res.flash("success", "logged out successfully");
  res.redirect("/");
};
