const { basename } = require('path')
module.exports = test => `src/${basename(test)}`
