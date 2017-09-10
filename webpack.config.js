const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue/, loader: 'vue-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
};
