// https://github.com/isaacs/node-tap/issues/23

var tap = require("../")
var test = tap.test
var Test = tap.Test

test("finishes in time", {timeout: 100}, function(t) {
  setTimeout(function () {
    t.end();
  }, 60);
})

test("finishes in time too", {timeout: 100}, function(t) {
  setTimeout(function () {
    t.end();
  }, 60);
})

test('does not finish in time', function (t) {
  var tt = new Test()
  tt.test('timeout', { timeout: 50 }, function (ttt) {
    setTimeout(function () {
      ttt.fail('shouldve timed out')
      ttt.end()
      t.notOk(tt._ok)
    }, 60)
  })
  tt.end()
})
