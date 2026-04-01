const express = require("express");
const router = express.Router()
const {registerUser,loginUser,logout} = require("../controllers/authController");
router.get("/",(req,res) =>{
    res.render("index")
})
router.get("/login",(req,res) =>{
    res.render("login")
})
router.post("/login",loginUser);

router.get("/signup",(req,res) =>{
    res.render("signup")
})
router.post("/signup",registerUser);
router.get("/logout",logout);
module.exports = router;