'use strict'

const sourceMapSupport = require('source-map-support')
const settings = require('libtap/settings');

sourceMapSupport.install({environment:'node', hookRequire: true})

if (+process.env.TAP_DEV_LONGSTACK !== 1) {
  settings.stackUtils.ignoredPackages.push(
    'libtap',
    'tap',
    'esm',
    'nyc',
    'import-jsx',
    'function-loop'
  )
  settings.stackUtils.internals.push(
    /at Generator\.next \(<anonymous>\)/iu
  )
} else {
  settings.atTap = true
}

settings.stackUtils.wrapCallSite = sourceMapSupport.wrapCallSite

module.exports = settings;
