'use strict'

const sourceMapSupport = require('source-map-support')
const settings = require('libtap/settings')

sourceMapSupport.install({environment:'node', hookRequire: true})

if (+process.env.TAP_DEV_LONGSTACK !== 1) {
  settings.stackUtils.ignoredPackages.push(
    'libtap',
    'tap',
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

if (process.env.TAP_LIBTAP_SETTINGS) {
  const overrides = require(process.env.TAP_LIBTAP_SETTINGS)
  const type = typeof overrides
  const isArray = Array.isArray(overrides)
  if (!overrides || isArray || type !== 'object') {
    throw new Error('invalid libtap settings: ' + (
      isArray ? 'array'
      : type === 'object' ? 'null'
      : type
    ))
  }

  for (const [key, value] of Object.entries(overrides)) {
    if (!Object.prototype.hasOwnProperty.call(settings, key))
      throw new Error('Unrecognized libtap setting: ' + key)
    if (typeof value !== typeof settings[key]) {
      throw new Error(`Invalid type for libtap setting ${key}. Expected ${
        typeof settings[key]}, received ${typeof value}.`)
    }
    settings[key] = value
  }
}

module.exports = settings
