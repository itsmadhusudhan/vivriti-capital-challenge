const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader","sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback:true
  }
};
