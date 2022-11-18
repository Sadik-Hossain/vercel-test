const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("welcome to my server ");
});
app.get("/all", (req, res) => {
  res.send("welcome to all endpoint ");
});
app.get("/", (req, res) => {
  res.send("welcome to my server ");
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
