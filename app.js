const express = require("express");
const app = express();

const path = require("path")
const cookieParser = require("cookie-parser")

const db = require("./config/mongoose-connections")
const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouters")
const usersRouter = require("./routes/usersRouters")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser());
app.set("view engine","ejs")

app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.listen(3000)