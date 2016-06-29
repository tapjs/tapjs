var Test = require('./test.js')

var tap = new Test()
module.exports = tap

if (tap._timer && tap._timer.unref) {
  tap._timer.unref()
}

tap._name = 'TAP'

// No sense continuing after bailout!
tap.on('bailout', function () {
  process.exit(1)
})

// need to autoend if a teardown is added.
// otherwise we may never see process.on('exit')!
tap.tearDown = function (fn) {
  var ret = Test.prototype.tearDown.apply(tap, arguments)
  tap.autoend()
  return ret
}

var didPipe = false

process.on('exit', function (code) {
  if (didPipe) {
    tap.endAll()
  }

  if (!tap._ok && code === 0) {
    process.exit(1)
  }
})

tap.pipe = function () {
  didPipe = true
  tap.push = Test.prototype.push
  tap.pipe = Test.prototype.pipe
  process.on('uncaughtException', onUncaught)
  return Test.prototype.pipe.apply(tap, arguments)
}

function pipe () {
  if (didPipe) {
    return
  }

  tap.pipe(process.stdout)
}

tap.push = function push () {
  pipe()
  return tap.push.apply(tap, arguments)
}

tap.mocha = require('./mocha.js')
tap.mochaGlobals = tap.mocha.global
tap.Test = Test
tap.synonyms = require('./synonyms.js')

function onUncaught (er) {
  var child = tap
  while (child._currentChild && child._currentChild instanceof Test) {
    child = child._currentChild
  }
  child.threw(er)
  child._tryResumeEnd()
}

tap.on('end', function () {
  process.removeListener('uncaughtException', onUncaught)
})

// SIGTERM means being forcibly killed, almost always by timeout
var onExit = require('signal-exit')
onExit(function (code, signal) {
  if (signal !== 'SIGTERM' || !didPipe) {
    return
  }

  var handles = process._getActiveHandles().filter(function (h) {
    return h !== process.stdout &&
    h !== process.stdin &&
    h !== process.stderr
  })
  var requests = process._getActiveRequests()

  // Ignore this because it's really hard to test cover in a way
  // that isn't inconsistent and unpredictable.
  /* istanbul ignore next */
  var extra = {
    at: null,
    signal: signal
  }
  if (requests.length) {
    extra.requests = requests.map(function (r) {
      var ret = { type: r.constructor.name }
      if (r.context) {
        ret.context = r.context
      }
      return ret
    })
  }
  if (handles.length) {
    extra.handles = handles.map(function (h) {
      var ret = { type: h.constructor.name }
      if (h.msecs) {
        ret.msecs = h.msecs
      }
      if (h._events) {
        ret.events = Object.keys(h._events)
      }
      if (h._sockname) {
        ret.sockname = h._sockname
      }
      if (h._connectionKey) {
        ret.connectionKey = h._connectionKey
      }
      return ret
    })
  }

  tap._onTimeout(extra)
})
