const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.get("/", function (req, res) {
  res.send("hey");
});
router.post("/create", upload.single("image"), async function (req, res) {
  // res.send(req.file)
  try {
    let product = await productModel.create({
      image: req.file.buffer,
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      bgcolor: req.body.bgcolor,
      panelcolor: req.body.panelcolor,
      textcolor: req.body.textcolor,
    });
    req.flash("success", "product created successfully");
    res.redirect("/owners/admin");
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
