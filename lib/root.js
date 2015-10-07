var Test = require('./test.js')

var tap = new Test()
module.exports = tap

if (tap._timer && tap._timer.unref)
  tap._timer.unref()

tap._name = 'TAP'

// No sense continuing after bailout!
tap.on('bailout', function () {
  process.exit(1)
})

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

process.on('uncaughtException', function onUncaught (er) {
  var child = tap
  while (child._currentChild && child._currentChild instanceof Test) {
    child = child._currentChild
  }
  child.threw(er)
})

// SIGTERM means being forcibly killed, almost always by timeout
var onExit = require('signal-exit')
onExit(function (code, signal) {
  if (signal !== 'SIGTERM')
    return

  var handles = process._getActiveHandles().filter(function (h) {
    return h !== process.stdout &&
           h !== process.stdin &&
           h !== process.stderr
  })
  var requests = process._getActiveRequests()
  var msg = 'received SIGTERM with pending event queue activity'
  tap.fail(msg, {
    requests: requests.map(function (r) {
      var ret = { type: r.constructor.name }
      if (r.context)
        ret.context = r.context
      return ret
    }),
    handles: handles.map(function (h) {
      var ret = { type: h.constructor.name }
      if (h.msecs)
        ret.msecs = h.msecs
      if (h._events)
        ret.events = Object.keys(h._events)
      if (h._sockname)
        ret.sockname = h._sockname
      if (h._connectionKey)
        ret.connectionKey = h._connectionKey
      return ret
    }),
    at: null
  })

  tap.end()
})
