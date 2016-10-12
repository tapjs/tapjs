var sourceMapSupport = require('source-map-support')
var StackUtils = require('stack-utils')
sourceMapSupport.install({environment:'node'})
// Ignore tap if it's a dependency, or anything
// in this lib folder.
module.exports = new StackUtils({
  internals: StackUtils.nodeInternals().concat([
    /node_modules[\/\\]tap[\/\\]/,
    new RegExp(__dirname + '\\b', 'i')
  ]),
  wrapCallSite: sourceMapSupport.wrapCallSite
})
