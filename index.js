//jslint esversion:6
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

const dbConfig = require("./config/dbConfig");

const userRoute = require("./routes/userRoute");

app.use("/api/user", userRoute);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
console.log("Node server has started at port" + port);
})