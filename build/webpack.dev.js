const mrege = require('webpack-merge')
const common = require('./webpack.common')
module.exports = mrege(common, {
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
