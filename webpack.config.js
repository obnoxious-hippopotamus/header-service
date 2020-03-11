var path = require('path');
// location where the code we wrote exists
  // __dirname is built in node
var SRC_DIR = path.join(__dirname, '/client/src');
// location where the code goes once it is transpiled
var DIST_DIR = path.join(__dirname, '/client/dist');

// config object
module.exports = {
  // single entrypoint
  entry: `${SRC_DIR}/index.jsx`,
  // everything in our application gets turned into one output file "bundled"
  output: {
    filename: 'bundle.js',
    // path where the one file will live
    path: DIST_DIR
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
       }
      }
    ]
  }
};
