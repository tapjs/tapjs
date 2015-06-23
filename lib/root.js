var Test = require('./test.js')

var tap = new Test()
module.exports = tap

if (tap._timer && tap._timer.unref)
  tap._timer.unref()

tap._name = 'TAP'

process.on('exit', function (code) {
  tap.endAll()

  if (!tap._ok && code === 0)
    process.exit(1)
})

// need to autoend if a teardown is added.
// otherwise we may never see process.on('exit')!
tap.tearDown = function (fn) {
  var ret = Test.prototype.tearDown.apply(tap, arguments)
  tap.autoend()
  return ret
}

tap.pipe(process.stdout)

tap.mocha = require('./mocha.js')
tap.mochaGlobals = tap.mocha.global
tap.Test = Test
tap.synonyms = require('./synonyms.js')
