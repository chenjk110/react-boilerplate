const mrege = require('webpack-merge')
const base = require('./webpack.base')
const { resolve } = require('./utils')
module.exports = mrege(base, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    hot: true,
    contentBase: 'dist',
    https: false,
    proxy: {}
  }
})
