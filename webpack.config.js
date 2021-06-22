const path = require("path")

module.exports = {
  entry: './build/app.js',
  
  output: {
    filename: 'dynamics.js',
    path: path.join(__dirname, 'dist/js'),
  },
  mode: "development"
};