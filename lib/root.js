var Test = require('./test.js')
require('exit-code')

var tap = new Test()
module.exports = tap

if (tap._timer && tap._timer.unref)
  tap._timer.unref()

tap._name = 'TAP'

process.on('exit', function (code) {
  tap.endAll()

  if (!tap._ok && code === 0)
    process.exitCode = 1
})

tap.pipe(process.stdout)
tap.plan = tap.plan.bind(tap)
tap.test = tap.test.bind(tap)

tap.mocha = require('./mocha.js')
tap.mochaGlobals = tap.mocha.global
tap.Test = Test
tap.synonyms = require('./synonyms.js')
