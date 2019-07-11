const mrege = require('webpack-merge')
const base = require('./webpack.base')

module.exports = mrege(base, {
  mode: 'development',
})
