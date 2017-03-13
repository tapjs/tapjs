var sourceMapSupport = require('source-map-support')
var StackUtils = require('stack-utils')
var path = require('path')
var tapDir = path.resolve(__dirname, '..')

// don't skip when developing on tap itself
var skip = process.cwd() !== tapDir ||
  +process.env.TAP_DEV_SHORTSTACK === 1 &&
  +process.env.TAP_DEV_LONGSTACK !== 1
? [
    /node_modules[\/\\]tap[\/\\]/,
    new RegExp(resc(tapDir) + '\\b', 'i'),
  ]
: []
if(require.resolve){
  skip = skip.concat([
    new RegExp(resc(require.resolve('function-loop'))),
    new RegExp(resc(require.resolve('bluebird/package.json')))
  ])
}


sourceMapSupport.install({environment:'node'})
// Ignore tap if it's a dependency, or anything
// in this lib folder.
var nodeInternals;
try{
  nodeInternals = StackUtils.nodeInternals()
}catch(e){
  nodeInternals = []
}
module.exports = new StackUtils({
  internals: nodeInternals.concat(skip),
  wrapCallSite: sourceMapSupport.wrapCallSite
})

function resc(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
