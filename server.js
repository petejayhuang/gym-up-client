var express = require("express");
const path = require("path");

var app = express();

app.use(express.static(__dirname + "/client/dist"));

app.get("*", (req, res) => {
  console.log("* route hit");
  res.sendFile(path.join(__dirname, "./client", "/dist", "/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started!");
});
