const { basename } = require('path')
module.exports = t => `src/${basename(t)}`
