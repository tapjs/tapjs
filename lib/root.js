var Test = require('./test.js')

var tap = new Test()
module.exports = tap

process.on('exit', function (code) {
  tap.end()
  if (!tap._ok && code === 0)
    process.exit(1)
})

tap.pipe(process.stdout)

tap.plan = tap.plan.bind(tap)
tap.test = tap.test.bind(tap)

process.on('uncaughtException', function (error) {
  var c = tap
  while (c._currentChild) {
    c = c._currentChild
  }

  console.error(error.stack)

  c.fail(error.message, error)
  c.end()
})
