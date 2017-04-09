var t = require('../..')
var EE = require('events').EventEmitter
t.test('check ee matches', function (t) {
  var e = new EE()
  e.truthy = false
  t.match(e, { truthy: true })
  t.end()
})
