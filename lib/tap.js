var Test = require('./test.js')
var util = require('util')
var objToYaml = require('./obj-to-yaml.js')
var yaml = require('js-yaml')

util.inherits(TAP, Test)
function TAP (options) {
  Test.call(this, options)
  this.start = Date.now()
}

TAP.prototype.oncomplete = function (results) {
  this.results = results

  // print some comments if there were failures (and the failure
  // wasn't the only test, so it might be lost) or if there were
  // any TAP parser errors (since those are usually interesting)
  var errors = results.failures.filter(function (f) {
    return f.tapError
  })
  if (!results.ok && !results.bailout &&
      (results.count > 1 || errors.length)) {
    this.push('\n')
    var comment = { count: results.count }
    if (results.pass)
      comment.pass = results.pass
    if (results.fail)
      comment.fail = results.fail
    if (results.skip)
      comment.skip = results.skip
    if (results.todo)
      comment.todo = results.todo
    if (errors.length)
      comment.errors = errors
    this.comment(yaml.safeDump(comment).trim())
  }

  return Test.prototype.oncomplete.call(this, results)
}
var didPipe = false
TAP.prototype.pipe = function () {
  didPipe = true
  this.pipe = Test.prototype.pipe
  this.push = Test.prototype.push
  return this.pipe.apply(this, arguments)
}

TAP.prototype.push = function push () {
  this.pipe(process.stdout)
  process.stdout.emit = function (emit) { return function (ev, er) {
    if (ev === 'error' && er.code === 'EPIPE')
      return this.emit = emit
    return emit.apply(this, arguments)
  }}(process.stdout.emit)
  return this.push.apply(tap, arguments)
}

TAP.prototype.tearDown = function (fn) {
  this.autoend()
  return Test.prototype.tearDown.apply(this, arguments)
}

var tap = new TAP({ name: 'TAP' })
module.exports = tap
tap.mocha = require('./mocha.js')
tap.mochaGlobals = tap.mocha.global

process.on('exit', function (code) {
  if (!tap.results && didPipe)
    tap.endAll()

  if (tap.results && !tap.results.ok && code === 0)
    process.exit(1)
})

tap.Test = Test
tap.synonyms = require('./synonyms.js')

// SIGTERM means being forcibly killed, almost always by timeout
var onExit = require('signal-exit')
onExit(function (code, signal) {
  if (signal !== 'SIGTERM' || !didPipe)
    return

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

  if (!tap.results && tap.timeout)
    tap.timeout(extra)
  else {
    console.error('possible timeout: SIGTERM received after tap end')
    if (extra.handles || extra.requests) {
      delete extra.signal
      if (!extra.at) {
        delete extra.at
      }
      var yaml = require('js-yaml')
      console.error(objToYaml(extra))
    }
    process.exit(1)
  }
})
