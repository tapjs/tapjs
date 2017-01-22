var StackUtils = require('stack-utils')

// Ignore tap if it's a dependency, or anything
// in this lib folder.
module.exports = new StackUtils({
  internals: StackUtils.nodeInternals().concat([
    /node_modules[\/\\]tap[\/\\]/,
    new RegExp(resc(require.resolve('function-loop'))),
    new RegExp(resc(__dirname) + '\\b', 'i')
  ])
})

function resc(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
