const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge({
  mode: 'none',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'static/js/[name].bundle.[hash:6].js',
    chunkFilename: 'static/js/[name].bundle.[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['src', 'node_modules'],
    /* alias should be absolute path */
    alias: {
      '@': path.resolve(__dirname, '..', 'src')
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Single Page Application',
      /* template file should be absolute path */
      template: path.resolve(__dirname, '..', 'src/index.html'),
    }),
  ],
})