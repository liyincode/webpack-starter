const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
  },

  devtool: "inline-source-map",

  devServer: {
    static: path.join(__dirname, "../public"),
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack-starter",
      template: "./public/index.dev.html",
      favicon: "./public/favicon.ico",
    }),
  ],
});
