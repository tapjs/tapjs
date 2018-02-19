'use strict'
const Test = require('./test.js')
const Stdin = require('./stdin.js')
const Spawn = require('./spawn.js')
const util = require('util')
const objToYaml = require('./obj-to-yaml.js')
const yaml = require('js-yaml')
const _didPipe = Symbol('_didPipe')

const monkeypatchEpipe = () => {
  const emit = process.stdout.emit
  process.stdout.emit = function (ev, er) {
    if (ev !== 'error' || er.code !== 'EPIPE')
      return emit.apply(process.stdout, arguments)
  }
}

const monkeypatchExit = () => {
  const exit = process.exit
  const reallyExit = process.reallyExit

  // ensure that we always get run, even if a user does
  // process.on('exit', process.exit)
  process.reallyExit = code =>
    reallyExit.call(process, onExitEvent(code))

  process.exit = code =>
    exit.call(process, onExitEvent(code))

  process.on('exit', onExitEvent)
}

class TAP extends Test {
  constructor (options) {
    super(options)
    this.runOnly = process.env.TAP_ONLY === '1'
    this.start = Date.now()
    this[_didPipe] = false
  }

  pipe () {
    this[_didPipe] = true
    this.setTimeout(this.options.timeout)
    this.pipe = Test.prototype.pipe
    this.write = Test.prototype.write
    const ret = this.pipe.apply(this, arguments)
    this.process()
    return ret
  }

  write (c, e) {
    // this resets write and pipe to standard values
    this.pipe(process.stdout)
    this.patchProcess()
    return super.write(c, e)
  }

  patchProcess () {
    monkeypatchEpipe()
    monkeypatchExit()
    process.on('uncaughtException', this.threw)
    process.on('unhandledRejection', er => this.threw(er))
  }

  onbail () {
    Test.prototype.onbail.apply(this, arguments)
    this.endAll()
    process.exit(1)
  }

  onbeforeend () {
    if (this[_didPipe] && this.time && !this.bailedOut)
      this.emit('data', '# time=' + this.time + 'ms\n')
  }

  ondone () {
    try {
      this.emit('teardown')
    } catch (er) {
      this.threw(er)
    }
  }

  // Root test runner doesn't have the 'teardown' event, because it
  // isn't hooked into any parent Test as a harness.
  teardown (fn) {
    if (this.options.autoend !== false)
      this.autoend(true)
    return Test.prototype.teardown.apply(this, arguments)
  }
  tearDown (fn) {
    return this.teardown(fn)
  }
}

let didOnExitEvent = false
const onExitEvent = code => {
  if (didOnExitEvent)
    return process.exitCode || code

  didOnExitEvent = true

  if (!tap.results)
    tap.endAll()

  if (tap.results && !tap.results.ok && code === 0) {
    process.exitCode = 1
    if (process.version.match(/^v0\.(10|[0-9])\./))
      process.exit(code)
  }

  return process.exitCode || code || 0
}


const opt = { name: 'TAP' }
if (process.env.TAP_DEBUG === '1' ||
    /\btap\b/.test(process.env.NODE_DEBUG || ''))
  opt.debug = true

if (process.env.TAP_GREP) {
  opt.grep = process.env.TAP_GREP.split('\n').map(g => {
    const p = g.match(/^\/(.*)\/([a-z]*)$/)
    g = p ? p[1] : g
    const flags = p ? p[2] : ''
    return new RegExp(g, flags)
  })
}

if (process.env.TAP_GREP_INVERT === '1')
  opt.grepInvert = true

if (process.env.TAP_ONLY === '1')
  opt.only = true

const tap = new TAP(opt)
module.exports = tap
tap.mocha = require('./mocha.js')
tap.mochaGlobals = tap.mocha.global

tap.Test = Test
tap.Spawn = Spawn
tap.Stdin = Stdin
tap.synonyms = require('./synonyms.js')

// SIGTERM means being forcibly killed, almost always by timeout
const onExit = require('signal-exit')
let didTimeoutKill = false
onExit((code, signal) => {
  if (signal !== 'SIGTERM' || !tap[_didPipe] || didTimeoutKill)
    return

  const handles = process._getActiveHandles().filter(h =>
    h !== process.stdout &&
    h !== process.stdin &&
    h !== process.stderr
  )
  const requests = process._getActiveRequests()

  // Ignore this because it's really hard to test cover in a way
  // that isn't inconsistent and unpredictable.
  /* istanbul ignore next */
  const extra = {
    at: null,
    signal: signal
  }
  if (requests.length) {
    extra.requests = requests.map(r => {
      const ret = {}
      ret.type = r.constructor.name

      // most everything in node has a context these days
      /* istanbul ignore else */
      if (r.context)
        ret.context = r.context

      return ret
    })
  }
  if (handles.length) {
    extra.handles = handles.map(h => {
      const ret = {}
      ret.type = h.constructor.name

      // all of this is very internal-ish
      /* istanbul ignore next */
      if (h.msecs)
        ret.msecs = h.msecs

      /* istanbul ignore next */
      if (h._events)
        ret.events = Object.keys(h._events)

      /* istanbul ignore next */
      if (h._sockname)
        ret.sockname = h._sockname

      /* istanbul ignore next */
      if (h._connectionKey)
        ret.connectionKey = h._connectionKey

      return ret
    })
  }

  // this is impossible to cover, because it happens after nyc has
  // already done its stuff.
  /* istanbul ignore else */
  if (!tap.results && tap.timeout)
    tap.timeout(extra)
  else {
    console.error('possible timeout: SIGTERM received after tap end')
    if (extra.handles || extra.requests) {
      delete extra.signal
      if (!extra.at) {
        delete extra.at
      }
      const yaml = require('js-yaml')
      console.error(objToYaml(extra))
    }
    didTimeoutKill = true
    process.kill(process.pid, 'SIGTERM')
  }
})
