const bcrypt = require("bcrypt");
const User = require("../models/userSchema");
const { generateTokens } = require("../utils/generateTokens");

module.exports.registerUser = async function (req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(400).send("user already exists");
    bcrypt.genSalt(10, async function (err, salt) {
      if (err) throw err;
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw err;
        let user = await userModel.create({
          name,
          email,
          password: hash,
        });
        let token = generateTokens(user);
        res.cookie("token", token);
        res.send("user created successfully");
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.loginUser = async function (req, res) {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.status(401).send("user not found..please register");
  bcrypt.compare(password, user.password, function (err, result) {
    if (err) res.send(err.message);
    if (result) {
      let token = generateTokens(user);
      res.cookie("token", token);
      res.send("login successful");
    } else {
      res.send("email/password incorrect");
    }
  });
};

module.exports.logout = function (req, res) {
  res.cookie("token", "");
  res.flash("success", "logged out successfully");
  res.redirect("/");
};
