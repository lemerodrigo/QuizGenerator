const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'client', 'src', 'index.js'),
  ],
  output: {
    path: path.join(__dirname, 'client', 'build', 'assets', 'js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  stats: {
    // colors: true,
  },
};
