const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "production",
  entry: [path.resolve(__dirname, "src/index.js")],
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    // Eliminate duplicate files when generate bundle
    new webpack.optimize.DedupePlugin(),
    // Minify js
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextWebpackPlugin("styles.css"),
  ],
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
