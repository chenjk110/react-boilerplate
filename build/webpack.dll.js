const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = merge({
  mode: 'development',
  context: __dirname,
  entry: {
    library: [
      'react',
      'react-dom',
      'react-router-dom',
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../.cache'),
    library: '[name]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../.cache/[name].json'),
    })
  ]
})