var express = require("express");

var app = express();

app.use(express.static(__dirname + "/client/dist"));

app.get("*", (req, res) => {
  res.sendfile("./client/dist/index.html");
});

app.listen(3000);
