const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');
const session = require("express-session");
const flash = require("connect-flash");
const authController = require("./controllers/authController");
const db = require("./config/db");


const index = require("./routes/index");
const checkUser = require('./middlewares/checkUser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.use(checkUser)
app.set("view engine","ejs");

app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
}));

app.use(flash());

app.use("/",index);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})