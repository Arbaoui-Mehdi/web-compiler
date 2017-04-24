
/*
*
* Config
*
*/
const path      = require("path");
const fs        = require("fs");
let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

/*
*
*
*/
module.exports = {
  entry: [
    "./src/server/app.js"
  ],
  output: {
    path: path.resolve('build/js/'),
    filename: 'bundle.server.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/bower_components/, /node_modules/],
        loader: "babel-loader",
      }
    ]
  },
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  externals: nodeModules
}
