const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html",
    }),
  ],
};
