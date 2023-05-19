const { basename, resolve } = require('path')
module.exports = test => resolve(__dirname, `src/${basename(test)}`)
