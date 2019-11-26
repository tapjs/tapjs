'use strict'
const settings = require('../settings.js')

const tap = require('libtap')
tap.mocha = require('./mocha.js')
tap.mochaGlobals = tap.mocha.global
tap.synonyms = require('./synonyms.js')

/* istanbul ignore next: unsure how to test this function */
tap.Test.prototype.tearDown = function (fn) {
  this.teardown(fn)
}

tap.tearDown = tap.tearDown.bind(tap)

Object.keys(tap.synonyms).forEach(c => {
  tap.synonyms[c].forEach(s => {
    if (c === s) {
      return
    }

    Object.defineProperty(tap.Test.prototype, s, {
      value: tap.Test.prototype[c],
      enumerable: false,
      configurable: true,
      writable: true
    })

    // Manually bind methods for the already created instance
    tap[s] = tap[s].bind(tap)
  })
})

module.exports = tap
