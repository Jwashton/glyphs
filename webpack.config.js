const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dir_js    = path.resolve(__dirname, 'app');
const dir_html  = path.resolve(__dirname, 'html');
const dir_build = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(dir_js, 'entry.js'),
  output: {
    path: dir_build,
    filename: 'glyphs.js'
  },
  devServer: {
    contentBase: dir_build
  },
  module: {
    loaders: [
      { loader: 'babel-loader', test: dir_js }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([ { from: dir_html } ]),
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
