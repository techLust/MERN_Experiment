const express = require("express");
const cors = require("cors");
// const path = require("path");
const app = express();

//"cors()" enables you to access a resource from a different origin.
app.use(cors());

//"express.json()" allows us to accept the data in json format.
app.use(express.json());

//ROUTER
app.use("/", require("./router"));

module.exports = app;
