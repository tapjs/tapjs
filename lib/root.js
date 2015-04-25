var Test = require('./test.js')

var to = process.env.TAP_TIMEOUT
if (to)
  to *= 1000

var tap = new Test({
  timeout: to || Infinity
})
module.exports = tap

tap._name = 'TAP'

process.on('exit', function (code) {
  delete tap.end
  tap.endAll()

  if (!tap._ok && code === 0) {
    if (process.version.match(/^v(0\.12\.|[^0])/))
      process.exitCode = 1
    else
      process.exit(1)
  }
})

tap.end = function () {}
tap.pipe(process.stdout)
tap.plan = tap.plan.bind(tap)
tap.test = tap.test.bind(tap)

tap.mochaGlobals = require('./mocha.js').global
