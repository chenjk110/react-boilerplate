const DLLConfig = require('./webpack.dll')
const webpack = require('webpack')

const compiler = webpack(DLLConfig)

compiler.run((err, stats) => {
  if (err) {
    return console.error(err)
  }
  console.log(stats)
})