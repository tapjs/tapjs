/* global describe */
var P
if (typeof Promise === 'undefined') {
  // Making sure this is testable in node 0.8/0.10
  P = require('bluebird')
} else {
  P = Promise
}

var t = require('../..')
t.mochaGlobals()

describe('auto-end on resolve', function (done) {
  return new P(function (resolve) {
    setTimeout(function () {
      resolve()
    }, 150)
  })
})

describe('auto-end on resolve without cb', function () {
  return new P(function (resolve) {
    setTimeout(function () {
      resolve()
    }, 150)
  })
})

describe('rejected', function (done) {
  return new P(function (resolve, reject) {
    setTimeout(reject.bind(null, new Error('expected error'), 150))
  })
})

describe('rejected without cb', function () {
  return new P(function (resolve, reject) {
    setTimeout(reject.bind(null, new Error('expected error'), 150))
  })
})
