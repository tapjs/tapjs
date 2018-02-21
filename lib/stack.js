'use strict'
const sourceMapSupport = require('source-map-support')
const StackUtils = require('stack-utils')
const path = require('path')
const tapDir = path.resolve(__dirname, '..')
const osHomedir = require('os-homedir')

const resc = str =>
  str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')

// Ignore tap if it's a dependency, or anything
// in this lib folder.
// don't skip when developing on tap itself
const skip = (process.cwd() !== tapDir ||
  +process.env.TAP_DEV_SHORTSTACK === 1) &&
  +process.env.TAP_DEV_LONGSTACK !== 1
? [
    /node_modules[\/\\]tap[\/\\]/,
    new RegExp(resc(path.resolve(osHomedir(), '.node-spawn-wrap-')) + '.*'),
    new RegExp(resc(tapDir) + '\\b', 'i')
  ].concat(/* istanbul ignore next */ require.resolve
    ? [
        new RegExp(resc(require.resolve('function-loop'))),
        new RegExp(resc(path.dirname(require.resolve('bluebird/package.json'))))
      ]
    : [])
: []

sourceMapSupport.install({environment:'node'})

let nodeInternals = []
try {
  nodeInternals = StackUtils.nodeInternals()
} catch (error) {
  // Do nothing.
}

module.exports = new StackUtils({
  internals: nodeInternals.concat(skip),
  wrapCallSite: sourceMapSupport.wrapCallSite
})
