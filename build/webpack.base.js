const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { commonConf } = require('./config')

const { resolve } = require('./utils')

module.exports = merge({
  mode: 'none',
  context: __dirname,
  entry: {
    app: '../src/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: resolve('../dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': resolve('../src'),
      '@compnents': resolve('../src/compnents'),
      '@utils': resolve('../src/utils'),
      '@assets': resolve('../src/assets'),
      '@store': resolve('../src/store'),
      '@public': resolve('../src/public'),
      '@pages': resolve('../src/pages'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Single Page Application',
      template: resolve('../src/index.html')
    })
  ],
})