const path = require("path")

module.exports = {
  entry: './src/Dynamics.js',
  
  output: {
    filename: 'dynamics.min.js',
    path: path.join(__dirname, 'dist/js'),
  },
  mode: "production"
};