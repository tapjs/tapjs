var t = require('../..')
var EE = require('events').EventEmitter
t.test('check ee matches', function (t) {
  var e = new EE()
  e.truthy = false
  // put this here for 0.10's benefit
  e._eventsCount = 0
  e._maxListeners = 10
  t.match(e, { truthy: true })
  t.end()
})
