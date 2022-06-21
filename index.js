const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const config = require('./config.json');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();
var http = require('http').createServer(app)

//Cài đặt biến môi trường 
require("dotenv").config();

//cài đặt session
// app.use(session({ 
//     secret: 'anything',
//     resave: true,
//     saveUninitialized: true}));


//Cai dai cookie
app.use(cookieParser("ramdom"));

app.use(bodyParser.json());

//cài đặt view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//cài đặt đường dẫn đến mục public
app.use(express.static(__dirname + "/public"));

//chuyển routers nhận được sang ./routes/Routes.js
const Routers = require("./routers/Routers.js");
app.use("/", Routers);

//Kết nối database 
mongoose.connect(config.link_connect_database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log("App listening on port: http://localhost:" + PORT);
});