// @see https://webpack.js.org/guides/
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const postCssConfigPath = path.join('postcss.config.js');
const extractCSS = new ExtractTextPlugin({ filename: 'css/style.min.css', disable: false, allChunks: true });

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/public/build',
    publicPath: "public/build",
    filename: "js/bundle.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { 
              loader: 'postcss-loader',
              query: {
                config: postCssConfigPath
              }
            },
          ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    extractCSS
  ]
};
