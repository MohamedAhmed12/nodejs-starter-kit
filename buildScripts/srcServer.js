const exrpess = require("express");
const path = require("path");
const open = require("open");
const webpack = require("webpack");
const config = require("../webpack.config.dev");

/* eslint-disable no-console */

const port = 3000;
const app = exrpess();
const webpackCompiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(webpackCompiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  open("http://localhost:" + port);
});
