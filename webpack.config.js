const path = require('path');

module.exports = {
  entry: './',
  output: {
    path: path.join(__dirname, './view'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, './src'),
        ],
        loader: 'babel-loader',
      },
    ],
  },
  resolove: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
    ],
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.css',
    ],
  },
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
};
