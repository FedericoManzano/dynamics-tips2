const path = require("path")

module.exports = {
  entry: './src/Dynamics.js',
  
  output: {
    filename: 'dynamics.js',
    path: path.join(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  mode: "development"
};