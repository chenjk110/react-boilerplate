const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-source-map',
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        /* specify the react's library */
        'react-lib': {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          priority: 0,
          chunks: 'all',
          enforce: true
        },
        /* vendors of third's library */
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        /* fallback scheme */
        default: {
          priority: -20,
          minChunks: 3,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
      chunkFilename: 'static/css/[id].[contenthash].css'
    }),
    new CompressionWebpackPlugin({
      test: /\.(js|css|png|jpe?g|bmp|gif)/,
      filename: '[file].gz'
    })
  ]
})
