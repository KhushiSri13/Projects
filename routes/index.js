const express = require("express");
const router = express.Router()
const {registerUser,loginUser,logout} = require("../controllers/authController");
const isLoggedin = require("../middlewares/isLoggedIn");
const checkUser = require("../middlewares/checkUser");
const fileController = require("../controllers/fileController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); 

router.use(checkUser);
router.get("/",(req,res) =>{
    let user = req.user;
    console.log("USER:", req.user);
    res.render("index", {
        user: user || null,
        isLoggedin: user ? true : false
    });
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

router.get("/myUploads", fileController.getMyUploads);
router.get("/upload", (req, res) => {
  res.render("uploadFiles");
});
router.post("/upload", upload.single("file"), fileController.uploadFile);
// router.get("/file/open/:id", fileController.openFile);
router.get("/file/download/:id", fileController.downloadFile);
router.get("/file/delete/:id", fileController.deleteFile);
module.exports = router;