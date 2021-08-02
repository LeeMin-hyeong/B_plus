"use strict";

// module
const express=require("express");
const dotenv=require("dotenv");
const app=express();
dotenv.config();
const cookieParser = require('cookie-parser');
// routing
const home=require("./src/routes/home");

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/", home);

module.exports=app;