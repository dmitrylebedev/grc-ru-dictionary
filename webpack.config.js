const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: "./src1/index.js",
  output: {
    path: __dirname + '/build/js',
    publicPath: "build/js",
    filename: "bundle.js"
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
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
