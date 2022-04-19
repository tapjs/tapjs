'use strict'

const nock = require('nock')
const NockManager = require('./manager.js')

// HACK: this is a nuclear grade hack that allows us to have both t.nock() and t.nock.snapshot()
// istanbul ignore next - tapExtension is never called, this is deliberate
function tapExtension () {}
tapExtension.bind = (...args) => {
  const bound = NockManager.tapNock.bind(...args)
  bound.snapshot = NockManager.tapNockSnapshot.bind(...args)
  bound.disableNetConnect = nock.disableNetConnect
  bound.enableNetConnect = nock.enableNetConnect
  return bound
}

module.exports = (tap) => {
  tap.Test.prototype.nock = tapExtension
  return tap
}
