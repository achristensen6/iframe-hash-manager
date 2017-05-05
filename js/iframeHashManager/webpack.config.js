var webpack = require('webpack')
var path = require('path')

module.exports = function (options) {
  options = options || {}
  return {
    entry: './iframeHashManager',
    output: {
      filename: 'iframeHashManager.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        }
      ]
    }
  }
}
