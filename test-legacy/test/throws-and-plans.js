var t = require('../..')
t.ok('true')

t.test('plans of 1', function (t) {
  t.pass('before sync thrower')

  t.test('sync thrower', function (tt) {
    tt.plan(1)
    tt.pass('before the bomb')
    throw new Error('pwnSync')
  })

  t.test('async thrower', function (tt) {
    tt.plan(3)
    tt.pass('before set the bomb')
    setTimeout(function () {
      tt.pass('before the bomb')
      throw new Error('pwn')
    })
    tt.pass('after set the bomb')
  })
  t.pass('after child')
  t.end()
})

t.test('no assert only throw', function (t) {
  var assert = require('../fixtures/assert.js')
  assert(true, 'true is truthy')
  assert(false, 'false is truthy right?')
})

t.test('plans of 8', function (t) {
  t.pass('before child')

  t.test('sync thrower', function (tt) {
    tt.plan(8)
    tt.pass('before the bomb')

    throw new Error('pwnSync')
    tt.pass('after the bomb') // eslint-disable-line
    tt.end() // eslint-disable-line
  })

  // return t.end()

  t.test('async thrower', function (tt) {
    tt.plan(8)
    tt.pass('before set the bomb')
    setTimeout(function () {
      tt.pass('before the bomb')
      throw new Error('pwn')
      tt.pass('after the bomb') // eslint-disable-line
      tt.end() // eslint-disable-line
    })
    tt.pass('after set the bomb')
  })
  t.pass('after child')
  t.end()
})
