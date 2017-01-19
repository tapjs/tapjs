// TODO
// - how to handle t.current()?  Deprecate?
// - time outs!
// - autoend for the root test runner
// - ignore EPIPE errors

// We need TWO queues (work and subtest) and one jobs pool
//
// The pool stores buffered subtests being run in parallel.
//
// When new subtests are created, they get put in the work queue and also
// in the subtests queue if they are buffered and jobs>0.  When we put a
// test in the subtest queue, we also process it.
//
// Processing the subtest queue means moving tests into the jobs pool until
// the jobs pool length is at this.jobs
//
// Any output functions get put in the work queue if its length > 0 (ie,
// no cutting the line)
//
// Processing the work queue means walking until we run out of things, or
// encounter an unfinished test.  When we encounter ANY kind of test, we
// block until its output is completed, dumping it all into the parser.

var Base = require('./base.js')
var Spawn = require('./spawn.js')
var Stdin = require('./stdin.js')
var Deferred = require('trivial-deferred')
var Pool = require('yapool')
var TestPoint = require('./point.js')
var parseTestArgs = require('./parse-test-args.js')
var loop = require('function-loop')

var extraFromError = require('./extra-from-error.js')
var stack = require('./stack.js')
var assert = require('assert')
var util = require('util')
util.inherits(Test, Base)
var ownOr = require('own-or')
var ownOrEnv = require('own-or-env')
var tapAsserts = require('./asserts.js')
var Promise = require('bluebird')
var bindObj = require('bind-obj-methods')

// A sigil object for implicit end() calls that should not
// trigger an error if the user then calls t.end()
var IMPLICIT = {}

// Sigil to put in the queue to signal the end of all things
var EOF = { EOF: true }

function hasOwn (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

module.exports = Test

function Test (options) {
  options = options || {}
  if (!(this instanceof Test))
    return new Test(options)

  Base.call(this, options)
  this.jobs = ownOr(options, 'jobs', 1)
  this.subtests = []
  this.pool = new Pool()
  this.queue = ['TAP version 13\n']
  this.noparallel = false
  this.cb = this.domain.bind(options.cb)
  this.occupied = false
  this.currentAssert = null
  this.count = 0
  this.n = 0
  this.ended = false
  this.explicitEnded = false
  this.multiEndThrew = false
  this.currentAssert = null
  this.assertAt = null
  this.assertStack = null
  this.planEnd = -1
  this.onBeforeEach = []
  this.onAfterEach = []

  // bind all methods to this object, so we can pass t.end as a callback
  // and do `var test = require('tap').test` like people do.
  var bound = Object.create(null)
  bindObj(this, this, bound)
  bindObj(this, Object.getPrototypeOf(this), bound)
  bindObj(this, Test.prototype, bound)
}

Test.prototype.spawn = function spawn (cmd, args, options, name) {
  if (typeof args === 'string') {
    args = [ args ]
  }

  args = args || []

  if (typeof options === 'string') {
    name = options
    options = {}
  }

  options = options || {}
  options.name = ownOr(options, 'name', name)
  options.command = cmd
  options.args = args

  return this.sub(Spawn, options, spawn)
}

Test.prototype.sub = function (Class, extra, caller) {
  if (extra && (extra.todo || extra.skip)) {
    this.pass(extra.name, extra)
    return Promise.resolve(this)
  }

  extra.indent = '    '
  extra.buffered = ownOrEnv(extra, 'buffered', 'TAP_BUFFER', true)
  extra.parent = this
  extra.stack = stack.captureString(80, caller)
  var t = new Class(extra)

  this.queue.push(t)
  this.subtests.push(t)

  var d = new Deferred()
  t.deferred = d
  this.process()
  return d.promise
}

Test.prototype.test = function test (name, extra, cb) {
  extra = parseTestArgs(name, extra, cb)
  return this.sub(Test, extra, test)
}

Test.prototype.stdin = function stdin (name, extra) {
  extra = parseTestArgs(name, extra, function () {})
  return this.sub(Stdin, extra || {}, stdin)
}

Test.prototype.bailout = function (message) {
  message = message ? ' # ' + ('' + message).trim() : ''
  message = message.replace(/^( #)+ /, ' # ')
  message = message.replace(/[\r\n]/g, ' ')
  this.parser.write('Bail out!' + message + '\n')
  this.end(IMPLICIT)
}

Test.prototype.comment = function () {
  var message = util.format.apply(util, arguments)
  message = '# ' + message.split(/\r?\n/).join('\n# ') + '\n'

  this.queue.push(message)
  this.process()
}

Test.prototype.main = function (cb) {
  this.setTimeout(this.options.timeout)
  this.debug('MAIN pre', this)

  var self = this
  try {
    var ret = this.cb(this)
  } catch (er) {
    this.threw(er)
  }

  if (ret && ret.then)
    ret.then(end, done)
  else
    done()

  function end () {
    self.end(IMPLICIT)
    done()
  }

  function done (er) {
    if (er)
      self.threw(er)

    if (self.results)
      cb()
    else
      self.on('end', cb)
  }

  this.debug('MAIN post', this)
}

Test.prototype.process = function () {
  if (this.processing)
    return this.debug(' < already processing')

  this.debug('\nPROCESSING(%s)', this.name, this.queue.length)
  this.processing = true

  var p

  while (!this.occupied && (p = this.queue.shift())) {
    this.debug('PROCESS(%s)', this.name, p)
    if (p instanceof Base) {
      this.debug(' > subtest')
      this.occupied = p
      if (!p.buffered) {
        if (this.bailedOut) {
          this.onindentedend(p)
          continue
        }
        this.debug(' > subtest indented')
        var comment = '# Subtest'
        if (p.name)
          comment += ': ' + p.name
        comment += '\n'
        this.parser.write(comment)
        p.pipe(this.parser, { end: false })
        this.runBeforeEach(p,
          p.main.bind(p,
          this.runAfterEach.bind(this, p,
            this.onindentedend.bind(this, p))))
      } else if (p.readyToProcess) {
        this.debug(' > subtest buffered, finished')
        // finished!  do the thing!
        this.occupied = null
        this.printResult(p.parser.ok, p.name, p.options, true)
      } else {
        this.debug(' > subtest buffered, unfinished')
        // unfinished buffered test.
        // nothing to do yet, just leave it there.
        this.queue.unshift(p)
      }
    } else if (p === EOF) {
      this.debug(' > EOF')
      // I AM BECOME EOF, DESTROYER OF STREAMS
      this.parser.end()
    } else if (p instanceof TestPoint) {
      this.debug(' > TESTPOINT')
      this.parser.write(p.ok + (++this.n) + p.message)
    } else if (typeof p === 'string') {
      this.debug(' > STRING')
      this.parser.write(p)
    } else if (Array.isArray(p)) {
      this.debug(' > METHOD')
      var m = p.shift()
      this[m].apply(this, p)
    } else {
      throw new Error('weird thing got in the queue')
    }
  }

  while (!this.noparallel &&
         this.pool.length < this.jobs &&
         (p = this.subtests.shift())) {
    this.debug('start buffered subtest', p)
    if (!p.buffered) {
      this.noparallel = true
      break
    }
    this.pool.add(p)
    if (this.bailedOut)
      this.onbufferedend(p)
    else
      this.runBeforeEach(p,
        p.main.bind(p,
        this.runAfterEach.bind(this, p,
          this.onbufferedend.bind(this, p))))
  }

  // this.debug('done processing', this.queue, this.occupied)
  this.processing = false
  this.maybeAutoend()
}

Test.prototype.onbufferedend = function (p, er) {
  p.results = p.results || {}
  p.readyToProcess = true
  if (p.options.timeout && Date.now() - p.start > p.options.timeout)
    p.timeout()
  this.debug('%s.onbufferedend', this.name, p.name, p.results.bailout)
  this.pool.remove(p)
  p.options.tapChildBuffer = p.output || ''
  p.options.stack = ''
  if (this.occupied === p)
    this.occupied = null
  if (er)
    this.threw(er)
  p.deferred.resolve(this)
  this.process()
}

Test.prototype.onindentedend = function (p, er) {
  this.noparallel = false
  p.readyToProcess = true
  p.results = p.results || {}
  if (p.options.timeout && Date.now() - p.start > p.options.timeout)
    p.timeout()
  this.debug('onindentedend %s(%s)', this.name, p.name, er || 'ok')
  assert(this.occupied === p)
  this.occupied = null
  this.debug('OIE(%s) b>shift into queue', this.name, this.queue)
  p.options.stack = ''
  this.printResult(p.parser.ok, p.name, p.options, true)
  this.debug('OIE(%s) shifted into queue', this.name, this.queue)
  if (er)
    this.threw(er)
  p.deferred.resolve(this)
  this.process()
}

Test.prototype.addAssert = function (name, length, fn) {
  if (!name)
    throw new TypeError('name is required for addAssert')

  if (!(typeof length === 'number' && length >= 0))
    throw new TypeError('number of args required')

  if (typeof fn !== 'function')
    throw new TypeError('function required for addAssert')

  if (Test.prototype[name] || this[name])
    throw new TypeError('attempt to re-define `' + name + '` assert')

  this[name] = function ASSERT () {
    if (!this.currentAssert) {
      this.currentAssert = ASSERT
    }
    var args = new Array(length + 2)
    for (var i = 0; i < length; i++) {
      args[i] = arguments[i]
    }
    if (typeof arguments[length] === 'object') {
      args[length] = ''
      args[length + 1] = arguments[length]
    } else {
      args[length] = arguments[length] || ''
      args[length + 1] = arguments[length + 1] || {}
    }

    return fn.apply(this, args)
  }
}

Test.prototype.fail = function fail (message, extra) {
  if (!this.currentAssert) {
    this.currentAssert = fail
  }

  if (message && typeof message === 'object') {
    extra = message
    message = ''
  } else {
    if (!message) {
      message = ''
    }
    if (!extra) {
      extra = {}
    }
  }

  this.printResult(false, message, extra)

  var ret = true
  if (!extra.todo && !extra.skip) {
    ret = false
  }

  return ret
}

Test.prototype.pass = function pass (message, extra) {
  if (!this.currentAssert) {
    this.currentAssert = pass
  }
  this.printResult(true, message || '(unnamed test)', extra)
  return true
}

Test.prototype.printResult = function pR (ok, message, extra, front) {
  var n = this.count + 1
  if (this.planEnd !== -1 && n > this.planEnd) {
    if (!this.parser.ok)
      return

    var failMessage = this.explicitEnded
        ? 'test after end() was called'
        : 'test count exceeds plan'

    var er = new Error(failMessage)
    Error.captureStackTrace(er, this.currentAssert || pR)
    er.test = this.name
    er.plan = this.planEnd
    this.threw(er)
    return
  }

  extra = extra || {}

  if (this.assertAt) {
    extra.at = this.assertAt
    this.assertAt = null
  }

  if (this.assertStack) {
    extra.stack = this.assertStack
    this.assertStack = null
  }

  if (hasOwn(extra, 'stack') && !hasOwn(extra, 'at'))
    extra.at = stack.parseLine(extra.stack.split('\n')[0])

  var fn = this.currentAssert || pR
  this.currentAssert = null
  if (!ok && !extra.skip && !hasOwn(extra, 'at')) {
    assert.equal(typeof fn, 'function')
    extra.at = stack.at(fn)
    if (!extra.todo)
      extra.stack = stack.captureString(80, fn)
  }

  var diagnostic
  if (!ok)
    diagnostic = true

  if (extra.skip)
    diagnostic = false

  if (process.env.TAP_DIAG === '0')
    diagnostic = false

  if (typeof extra.diagnostic === 'boolean')
    diagnostic = extra.diagnostic

  if (diagnostic)
    extra.diagnostic = true

  this.count = n
  var res = { ok: ok, message: message, extra: extra }
  var method = front ? 'unshift' : 'push'
  this.queue[method](['emit', 'result', res])
  var output = new TestPoint(ok, message, extra)
  // when we jump the queue, skip an extra line
  if (front)
    output.message = output.message.trimRight() + '\n\n'

  this.queue[method](output)

  if (this.planEnd === this.count)
    this.end(IMPLICIT)

  this.process()
}

Test.prototype.plan = function (n, comment) {
  if (this.planEnd !== -1) {
    throw new Error('Cannot set plan more than once')
  }

  if (typeof n !== 'number' || n < 0) {
    throw new TypeError('plan must be a number')
  }

  // Cannot get any tests after a trailing plan, or a plan of 0
  var ending = false
  if (this.count !== 0 || n === 0) {
    ending = true
  }

  if (n === 0)
    this.skip = comment || true

  this.planEnd = n
  comment = comment ? ' # ' + comment.trim() : ''
  this.queue.push('1..' + n + comment + '\n')

  if (ending)
    this.end(IMPLICIT)
  else
    this.process()
}

Test.prototype.done = Test.prototype.end = function (implicit) {
  this.debug('END %s implicit=%j', this.name, implicit === IMPLICIT)
  if (this.ended && implicit === IMPLICIT) {
    this.debug('END, unnecessary implicit')
    return
  }

  // beyond here we have to be actually done with things, or else
  // the semantic checks on counts and such will be off.
  if (this.queue.length || this.occupied) {
    this.queue.push(['end', implicit])
    return this.process()
  }

  this.ended = true

  if (implicit !== IMPLICIT && !this.multiEndThrew) {
    if (this.explicitEnded) {
      this.multiEndThrew = true
      this.threw(new Error('test end() method called more than once'))
      return
    }
    this.explicitEnded = true
  }

  if (this.planEnd === -1) {
    this.debug('END(%s) implicit plan', this.name, this.count)
    this.plan(this.count)
  }

  // do the failures for missing tests, unsatisfied plans, etc.
  //this.debugend parser', this)
  this.queue.push(EOF)
  this.process()
}

Test.prototype.threw = function (er, extra, proxy) {
  extra = Base.prototype.threw.call(this, er, extra, proxy)
  this.fail(extra.message || er.message, extra)
  if (!proxy)
    this.end(IMPLICIT)
  this.process()
}

Test.prototype.runBeforeEach = function (who, cb) {
  var self = this
  if (this.parent)
    this.parent.runBeforeEach(who, function () {
      loop(who, self.onBeforeEach, cb, who.threw)
    })
  else
    loop(who, self.onBeforeEach, cb, who.threw)
}

Test.prototype.runAfterEach = function (who, cb) {
  var self = this
  loop(who, self.onAfterEach, function () {
    if (self.parent)
      self.parent.runAfterEach(who, cb)
    else
      cb()
  }, who.threw)
}

Test.prototype.beforeEach = function (fn) {
  this.onBeforeEach.push(fn)
}

Test.prototype.afterEach = function (fn) {
  this.onAfterEach.push(fn)
}

Test.prototype.tearDown = function (fn) {
  this.on('end', fn)
}

Test.prototype.shouldAutoend = function () {
  var should = (
    this.options.autoend &&
    !this.queue.length &&
    !this.ending &&
    !this.pool.length &&
    !this.subtests.length &&
    this.planEnd === -1
  )
  return should
}

Test.prototype.autoend = function () {
  this.options.autoend = true
  this.maybeAutoend()
}

Test.prototype.maybeAutoend = function () {
  if (this.autoendTimer) {
    clearTimeout(this.autoendTimer)
  }

  if (this.shouldAutoend()) {
    var self = this
    self.autoendTimer = setTimeout(function () {
      if (self.shouldAutoend()) {
        self.autoendTimer = setTimeout(function () {
          if (self.shouldAutoend()) {
            self.end(IMPLICIT)
            self.bailedOut = true
          }
        })
      }
    })
  }
}

Test.prototype.endAll = function (sub) {
  this.processing = true
  if (this.occupied) {
    if (this.occupied.endAll)
      this.occupied.endAll(true)
    else
      this.occupied.parser.abort('test unfinished')
    this.occupied = null
  } else if (sub && !this.queue.length) {
    var options = Object.keys(this.options).reduce(function (o, k) {
      o[k] = this.options[k]
      return o
    }.bind(this), {})
    this.options.at = null
    this.options.stack = ''
    options.test = this.name
    this.fail('test unfinished', options)
  }

  // if it's just buffered tests that are otherwise finished, try to
  // suss them out before modifying stuff.

  this.queue = this.queue.map(function (p) {
    if ((p instanceof Base) && !p.readyToProcess)
      return new TestPoint(false,
        'child test left in queue ' + p.constructor.name + ': ' +
        p.name, p.options)
    else
      return p
  })
  if (!sub)
    this.end(IMPLICIT)
  else
    this.queue.push(EOF)
  this.processing = false
  this.process()
}

// Add all the asserts
tapAsserts.decorate(Test.prototype)
