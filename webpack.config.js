var path = require("path");
var webpack = require("webpack");

var ROOT = path.resolve(__dirname);
var SRC_DIR = path.resolve(__dirname, "src");

config = {
  entry: SRC_DIR + "/index.jsx",
  output: {
    path: ROOT,
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [SRC_DIR],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

module.exports = [config];
