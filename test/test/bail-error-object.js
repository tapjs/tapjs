var t = require('../..')

var EE = require('events').EventEmitter
var ee = new EE()
ee.on('error', t.bailout.bind(t))
setTimeout(function () {
  ee.emit('error', new TypeError('wat'))
})
