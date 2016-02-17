var StackUtils = require('stack-utils')

module.exports = new StackUtils({
  internals: StackUtils.nodeInternals().concat([
    /node_modules[\/\\]tap[\/\\]/
  ])
})
