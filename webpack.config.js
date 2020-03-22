const {
  resolve
} = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
// /
console.log('resolve()', resolve('./src'))
// /Users/ruiqiangma/WeChatProjects/miniprogram
console.log('resolve()123', resolve("./"))
// /Users/ruiqiangma/WeChatProjects/miniprogram
console.log('resolve()123', resolve('./dist'))

module.exports = {
  mode: 'production',
  context: resolve('./src'),
  entry: {
    'app': './app.js',
    'pages/index/index': './pages/index/index.js',
    'pages/logs/logs': './pages/logs/logs.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new CopyWebpackPlugin([{
      from: resolve('./src'),
      to: resolve('./dist'),
      ignore: ['*.js']
    }])
  ],
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader'
    }]
  },
  node: {
    fs: 'empty'
  },
  performance: {
    hints: false
  }
}