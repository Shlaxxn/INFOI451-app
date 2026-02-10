const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

// set HTTP_PORT
const HTTP_PORT = process.env.PORT || 8080;

// set static folder
app.use(express.static(path.join(__dirname, "Public")));

// routing setup
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Views", "home.html"));
});

// about route
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "Views", "about.html"));
});

// setup server
app.listen(HTTP_PORT, () => {
  console.log(`App listening on ${HTTP_PORT}:`);
});
