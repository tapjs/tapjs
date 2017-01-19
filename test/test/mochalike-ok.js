if (typeof describe !== 'function') {
  var t = require('../..')
  t.mochaGlobals()
}

/* global describe, it */

var ok = require('../fixtures/assert.js')

describe('a set of tests to be done later', function () {
  it('should have a thingie')
  it('should have a second whoosits also')
  describe('the subset', function () {
    it('should be a child thingie')
    it('should also be a whoosits')
    it('has some of these things', function (done) {
      ok(true, 'true is truthy')
      ok(10, 'ten is also truthy')
      setTimeout(function () {
        done()
      })
    })
  })
})

describe('describe todo')

describe('another set of tests', function () {
  it('is a second set')
  it('looks like english')
  it('is marked TODO')
})

describe('reasonably indented things', function () {
  describe('first subset', function () {
    it('has no asserts, only fails to throw', function () {
      // no throwing here
    })
    it('is todo')
    it('is async', function (done) {
      setTimeout(done)
    })
  })
  describe('second subset', function () {
    ok(true, 'true is truly truthy')
    ok({}, 'objectify the truthiness')
  })
})
