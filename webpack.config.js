const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src',
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
      {
        test: /\.css$/,
        include: [
          path.join(__dirname, './views/assets'),
        ],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  resolve: {
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
