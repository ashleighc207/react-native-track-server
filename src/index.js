const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config();

console.log(process.env.MONGO_PASS);

const mongoURI = `mongodb+srv://admin:${process.env.MONGO_PASS}@track-server-ojhkt.mongodb.net/test?retryWrites=true&w=majority`;

app.get("/", (req, res) => {
  res.send("Success");
});

app.listen(8080, () => {
  console.log("Listening on port 8080...");
});
