// NPM PACKAGES
var webpack = require("webpack");
var path = require("path");

// PLUGINS
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
  devtool: "cheap-eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "template-index.html",
      filename: "index.html"
    }),
    new ExtractTextPlugin("styles.css")
  ]
};
