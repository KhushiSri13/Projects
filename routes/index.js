const express = require("express");
const router = express.Router()
const isLoggedin = require("../middlewares/isLoggedin");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/",(req,res) =>{
    let error = req.flash("error");
    res.render("index",{error:'',isLoggedin:false})
})
router.get("/shop",isLoggedin,async (req,res) =>{
    let product = await productModel.find();
    let success = req.flash("success")
    res.render("shop",{product,success})
})
router.get("/cart",isLoggedin,async (req,res) =>{
    let user = await userModel.findOne({email:req.user.email}).populate("cart");
    let bill = Number(user.cart[0].price) + 20 - Number(user.cart[0].discount)
    res.render("cart",{user,bill})
})
router.get("/addtocart/:productid",isLoggedin,async (req,res) =>{
    let user = await userModel.findOne({email:req.user.email})
    user.cart.push(req.params.productid)
    await user.save();
    req.flash("success","product added to cart successfully")
    res.redirect("/shop")
})
router.get("/logout",isLoggedin,(req,res) =>{
    res.render("index")
});
module.exports = router;