var StackUtils = require('stack-utils')

module.exports = new StackUtils({
  internals: StackUtils.nodeInternals().concat([
    /node_modules\/tap\/(.*?)\.js:[0-9]:[0-9]\)?$/
  ])
})
