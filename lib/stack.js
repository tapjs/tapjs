'use strict'
const sourceMapSupport = require('source-map-support')
const StackUtils = require('stack-utils')
const path = require('path')
const tapDir = path.resolve(__dirname, '..')

// don't skip when developing on tap itself
const skip = process.cwd() !== tapDir ||
  +process.env.TAP_DEV_SHORTSTACK === 1 &&
  +process.env.TAP_DEV_LONGSTACK !== 1
? [
    /node_modules[\/\\]tap[\/\\]/,
    new RegExp(resc(tapDir) + '\\b', 'i'),
    new RegExp(resc(require.resolve('function-loop'))),
    new RegExp(resc(path.dirname(require.resolve('bluebird/package.json'))))
  ]
: []

sourceMapSupport.install({environment:'node'})
// Ignore tap if it's a dependency, or anything
// in this lib folder.
module.exports = new StackUtils({
  internals: StackUtils.nodeInternals().concat(skip),
  wrapCallSite: sourceMapSupport.wrapCallSite
})

function resc(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
