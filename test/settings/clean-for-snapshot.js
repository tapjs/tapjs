'use strict'

// nothing to see here
if (module === require.main)
  console.log('TAP version 13\n1..1\nok - 1\n')

module.exports = settings => ({
  ...settings,
  stackUtils: {
    ...settings.stackUtils,
    internals: []
  }
})
