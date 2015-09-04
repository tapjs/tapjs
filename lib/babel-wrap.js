var path = require('path')

// remove ourselves from process.argv
process.argv.splice(1, 1)

// install source maps so that stack dumps will be correct
require('source-map-support').install()

// install babel
require('babel/register')

// require the original target file, export its exports
var fullpath = path.join(process.cwd(), process.argv[1])
module.exports = require(fullpath)
