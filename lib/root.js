var Test = require('./test.js')

var tap = new Test({
  timeout: process.env.TAP_TIMEOUT || Infinity
})
module.exports = tap

tap._name = 'TAP'

function endChild (t) {
  var child = t._currentChild
  if (!child)
    return

  // end grand-children before children
  endChild(child)

  child.end()
  child.emit('end')
}

process.on('exit', function (code) {
  endChild(tap)

  Test.prototype.end.call(tap)

  if (!tap._ok && code === 0)
    process.exit(1)
})

tap.end = function () {}
tap.pipe(process.stdout)
tap.plan = tap.plan.bind(tap)
tap.test = tap.test.bind(tap)
