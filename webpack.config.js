// @see https://webpack.js.org/guides/
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// this is javascript rule
const javascript = {
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: [{
    loader: "babel-loader",
    query: {
      presets: ['es2015']
    }
  }]
};

// this is styles rule
const styles = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: { 
        importLoaders: 1,
        sourceMap: true,
        config: {
          path: './postcss.config.js'
        }
      } 
      },
      'postcss-loader'
    ]
  })
};

// this is main config which put together styles and javascript
const config = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: "bundle.min.js"
  },
  module: {
    rules: [ javascript, styles]
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('style.min.css'),
  ]
};

module.exports = config;
