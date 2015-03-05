var Test = require('./test.js')

var tap = new Test()
module.exports = tap

tap.name = 'TAP'

process.on('exit', function (code) {
  Test.prototype.end.call(tap)
  if (!tap._ok && code === 0)
    process.exit(1)
})

tap.end = function () {}
tap.pipe(process.stdout)
tap.plan = tap.plan.bind(tap)
tap.test = tap.test.bind(tap)
