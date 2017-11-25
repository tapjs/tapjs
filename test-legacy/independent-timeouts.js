// https://github.com/isaacs/node-tap/issues/23

var tap = require('../')
var test = tap.test
var Test = tap.Test

var isCI = !!process.env.CI
var long = 100
var med = 60
var short = 50

if (process.env.CI) {
  long *= 10
  med *= 10
  short *= 10
}

if (process.env.APPVEYOR) {
  long *= 2
  med *= 2
  short *= 2
}

test('finishes in time', {timeout: long}, function (t) {
  var start = Date.now()
  setTimeout(function () {
    t.comment(Date.now() - start)
    t.end()
  }, med)
})

test('finishes in time too', {timeout: long}, function (t) {
  var start = Date.now()
  setTimeout(function () {
    t.comment(Date.now() - start)
    t.end()
  }, med)
})

test('does not finish in time', function (t) {
  t.plan(1)
  var tt = new Test()
  tt.test('timeout', { timeout: short }, function (ttt) {
    setTimeout(function () {
      ttt.fail('shouldve timed out')
      ttt.end()
      t.notOk(tt._ok)
    }, med)
  })
  tt.end()
})
