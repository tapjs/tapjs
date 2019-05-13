const {basename} = require('path')
module.exports = test =>
  basename(test) === 'index.js' ? 'index.js' : `lib/${basename(test)}`
