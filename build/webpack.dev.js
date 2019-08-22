const webpack = require('webpack')
const path = require('path')
const mrege = require('webpack-merge')
const common = require('./webpack.common')

const dllManifest = require('../.cache/library.json')

module.exports = mrege(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    hot: true,
    historyApiFallback: true,
    https: false,
    proxy: {}
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: dllManifest
    })
  ]
})
