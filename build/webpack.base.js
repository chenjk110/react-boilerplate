const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('./utils')

module.exports = merge({
  mode: 'none',
  context: resolve('..'),
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'public/js/[name].bundle.[contenthash:6].js',
    path: resolve('../dist'),
    publicPath: '/public'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('../src'),
      '@components': resolve('../src/components'),
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
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Single Page Application',
      template: resolve('../src/index.html')
    }),
    new CleanWebpackPlugin()
  ],
})