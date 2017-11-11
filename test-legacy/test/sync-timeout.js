var t = require('../..')

var short = 50
var long = 100

var opt = { timeout: short }

function sleep () {
  var start = Date.now()
  while (Date.now() - start < long) {
    // (-.-)
  }
}

t.test('t.end()', opt, function (t) {
  sleep()
  t.pass('did not timeout')
  t.end()
})

t.test('plan()', opt, function (t) {
  t.plan(1)
  sleep()
  t.pass('did not time out')
})
