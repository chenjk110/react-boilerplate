const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { commonConf } = require('./config')

const { resove } = require('./utils')

module.exports = merge({
  mode: 'none',
  context: __dirname,
  entry: {
    app: '../src/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: resove('../dist'),
    publicPath: '/'
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
      template: resove('../src/index.html')
    })
  ],
})