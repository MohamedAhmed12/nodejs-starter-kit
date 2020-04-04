var exrpess = require("express");
var path = require("path");
var open = require("open");

var port = 3000;
var app = exrpess();

app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, err => {
  if (err) {
    return console.log(err);
  }

  open("http://localhost:" + port);
});
