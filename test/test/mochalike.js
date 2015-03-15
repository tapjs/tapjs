var t = require('../../lib/root.js')

var it = describe
function describe (name, fn) {
  var c = t.current()
  c.test(name, fn)
}

function done () {
  t.current().end()
}

function ok (val, m, e) {
  t.current().ok(val, m, e)
}

describe('a set of tests to be done later', function () {
  it('should have a thingie')
  it('should have a second whoosits also')
  describe('the subset', function () {
    it('should be a child thingie')
    it('should also be a whoosits')
    it('has some of these things', function () {
      ok(true, 'true is truthy')
      ok(10, 'ten is also truthy')
      done()
    })
    done()
  })
  done()
})

describe('another set of tests', function () {
  it('is a second set')
  it('looks like english')
  it('is marked TODO')
  done()
})
