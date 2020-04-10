const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: [path.resolve(__dirname, "src/index.js")],
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [new ExtractTextWebpackPlugin("styles.css")],
  module: {
    rules: [
      { test: /\.js$/, exclude: "/node_modules/", loaders: ["babel-loader"] },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
};
