//var t = require('./lib/root.js')

//var t = require('./lib/test.js')()
//t.pipe(process.stdout)

var t = require('../../lib/test.js')()
t.pipe(process.stdout)

process.on('exit', function () {
  t.end()
})

t._name = 'ROOT'

t.ok('true')

t.test('plans of 1', function (t) {
  t.pass('before child')

  t.test('sync thrower', function (tt) {
    tt.plan(1)
    tt.pass('before the bomb')

    throw new Error('pwnSync')
    tt.pass('after the bomb')
    tt.end()
  })

  t.test('async thrower', function (tt) {
    tt.plan(1)
    tt.pass('before set the bomb')
    setTimeout(function () {
      tt.pass('before the bomb')
      throw new Error('pwn')
      tt.pass('after the bomb')
      tt.end()
    })
    tt.pass('after set the bomb')
  })
  t.pass('after child')
  t.end()
})

t.test('no assert only throw', function (t) {
  var assert = require('assert')
  assert(true, 'true is truthy')
  assert(false, 'false is truthy right?')
})

return

t.test('plans of 8', function (t) {
  t.pass('before child')

  t.test('sync thrower', function (tt) {
    tt.plan(8)
    tt.pass('before the bomb')

    throw new Error('pwnSync')
    tt.pass('after the bomb')
    tt.end()
  })

  //return t.end()

  t.test('async thrower', function (tt) {
    tt.plan(8)
    tt.pass('before set the bomb')
    setTimeout(function () {
      tt.pass('before the bomb')
      throw new Error('pwn')
      tt.pass('after the bomb')
      tt.end()
    })
    tt.pass('after set the bomb')
  })
  t.pass('after child')
  t.end()
})
