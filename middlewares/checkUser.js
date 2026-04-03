const jwt = require("jsonwebtoken");
const userModel = require("../models/userSchema");

module.exports = async function (req, res, next) {
    if (!req.cookies.token) {
        req.user = null;
        return next(); //
    }

    try {
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel.findOne({ email: decoded.email }).select("-password");

        req.user = user || null;
    } catch (err) {
        req.user = null;
    }

    next();
};