var path = require("path");
var webpack = require("webpack");
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
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
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: "css-loader",
        }),
      },
    ]
  },
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")]
  },
  plugins: [new ExtractTextWebpackPlugin("index.css")]
};

module.exports = [config];
