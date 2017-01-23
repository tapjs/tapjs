var StackUtils = require('stack-utils')
var path = require('path')

// don't skip when developing on tap itself
var skip = __dirname.indexOf(process.cwd()) !== 0 ||
  +process.env.TAP_DEV_SHORTSTACK === 1 &&
  +process.env.TAP_DEV_LONGSTACK !== 1
? [
    /node_modules[\/\\]tap[\/\\]/,
    new RegExp(resc(require.resolve('function-loop'))),
    new RegExp(resc(path.dirname(require.resolve('bluebird/package.json')))),
    new RegExp(resc(__dirname) + '\\b', 'i')
  ]
: []

// Ignore tap if it's a dependency, or anything
// in this lib folder.
module.exports = new StackUtils({
  internals: StackUtils.nodeInternals().concat(skip)
})

function resc(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
