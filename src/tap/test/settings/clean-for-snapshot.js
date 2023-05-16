'use strict'

// nothing to see here
if (module === require.main)
  console.log('TAP version 13\n1..1\nok - 1\n')

module.exports = settings => ({
  ...settings,
  output: !!settings.output,
  stackUtils: {
    ...settings.stackUtils,
    internals: []
  },
  mkdirpNeeded: false,
  mkdirRecursive: 'function(path, cb)',
  mkdirRecursiveSync: 'function(path)',
  rimrafNeeded: false,
  rmdirRecursive: 'function(path, cb)',
  rmdirRecursiveSync: 'function(path)',
})
