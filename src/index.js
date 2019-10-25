const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB...");
});

mongoose.connection.on("error", err => {
  console.error("Failed to connect to MongoDB: ", err);
});

app.get("/", (req, res) => {
  res.send("Success");
});

app.listen(8080, () => {
  console.log("Listening on port 8080...");
});
