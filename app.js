const { readdirSync } = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
require("dotenv").config();
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

readdirSync("./routes").map((r) =>
  app.use("/api/v1", require(`./routes/${r}`))
);

app.use("*", (req, res) => {
  res.status(404).json({ message: "page is not found" });
});



module.exports = app;
