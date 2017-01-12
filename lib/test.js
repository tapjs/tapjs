// TODO
// - return Promises from test/stdin/spawn
// - handle case where test() ends before promise resolution
// - how to handle t.current()?  Deprecate?
// - time outs!
// - autoend for the root test runner
// - root test runner exported as the package main! (kinda important)
// - emit the version
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

var extraFromError = require('./extra-from-error.js')
var stack = require('./stack.js')
var assert = require('assert')
var util = require('util')
util.inherits(Test, Base)
var ownOr = require('./own-or.js')
var ownOrEnv = require('./own-or-env.js')
var tapAsserts = require('./asserts.js')
var Promise = require('bluebird')
var Pool = require('./pool.js')
var testPoint = require('./point.js')
var parseTestArgs = require('./parse-test-args.js')

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
  this.cb = options.cb
  this.occupied = false
  this.currentAssert = null
  this.count = 0
  this.ended = false
  this.explicitEnded = false
  this.multiEndThrew = false
  this.currentAssert = null
  this.assertAt = null
  this.assertStack = null
  this.planEnd = -1
  this.parser.write = function (w) { return function (c) {
    console.error('WRITE %s %j', this.name, c+'')
    return w.call(this.parser, c)
  }.bind(this) }.call(this, this.parser.write)
}

Test.prototype.spawn = function spawnTest (cmd, args, options, name, extra) {
  if (typeof args === 'string') {
    args = [ args ]
  }

  args = args || []

  if (typeof options === 'string') {
    name = options
    options = {}
  }

  options = options || {}

  if (options.spawnOpt)
    extra = options

  extra = extra || {}
  if (extra.spawnOpt)
    options = extra.spawnOpt
  else if (options)
    extra.spawnOpt = options

  extra.name = name
  extra.command = cmd
  extra.args = args

  this.sub(Spawn, extra)
}

Test.prototype.sub = function (Class, extra) {
  this.process()

  extra.indent = '    '
  var t = new Class(extra)

  this.queue.push(t)
  if (t.buffered)
    this.subtests.push(t)

  this.process()
}

Test.prototype.test = function test (name, extra, cb) {
  extra = parseTestArgs(name, extra, cb)
  this.sub(Test, extra)
}

Test.prototype.stdin = function (name, extra) {
  this.sub(Stdin, extra)
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
  console.error('MAIN pre', this)
  this.once('end', cb)
  var self = this
  try {
    // XXX if the callback calls t.end(), we have to defer it until
    // AFTER this block, or else the parent will move onto the next
    // thing while promise is still pending.
    var cbRet = this.cb(this)
    if (cbRet && cbRet.then) {
      cbRet.then(function () {
        self.end(IMPLICIT)
      }, function (er) {
        self.threw(er)
      })
    }
  } catch (er) {
    this.threw(er)
  }

  console.error('MAIN post', this)
}

Test.prototype.process = function () {
  if (this.processing)
    return console.error(' < already processing')

  console.error('\nPROCESSING(%s)', this.name, this.queue.length)
  this.processing = true

  var p

  while (this.pool.length < this.jobs && (p = this.subtests.shift())) {
    console.error('start buffered subtest', p)
    this.pool.add(p)
    p.main(this.onbufferedend.bind(this, p))
  }

  while (!this.occupied && (p = this.queue.shift())) {
    console.error('PROCESS(%s)', this.name, p)
    if (p instanceof Base) {
      console.error(' > subtest')
      this.occupied = p
      if (!p.buffered) {
        console.error(' > subtest indented')
        var comment = '# Subtest'
        if (p.name)
          comment += ': ' + p.name
        comment += '\n'
        this.parser.write(comment)
        // p.on('data', function (c) {
        //   console.error('%j data %j', this.name, c + '')
        // })
        p.pipe(this.parser, { end: false })
        // p.on('data', function (c) {
        //   this.parser.write(c)
        // }.bind(this))
        // console.error('calling %j.main', p.name)
        p.main(this.onindentedend.bind(this, p))
      } else if (p.results) {
        console.error(' > subtest buffered, finished')
        // finished!  do the thing!
        this.occupied = null
        this.printResult(p.parser.ok, p.name, p.options, true)
      } else {
        console.error(' > subtest buffered, unfinished')
        // unfinished buffered test.
        // nothing to do yet, just leave it there.
        this.queue.unshift(p)
      }
    } else if (p === EOF) {
      console.error(' > EOF')
      // I AM BECOME EOF, DESTROYER OF STREAMS
      this.parser.end()
    } else if (typeof p === 'string') {
      console.error(' > STRING')
      this.parser.write(p)
    } else if (Array.isArray(p)) {
      console.error(' > METHOD')
      var m = p.shift()
      this[m].apply(this, p)
    } else {
      throw new Error('weird thing got in the queue')
    }
  }

  // console.error('done processing', this.queue, this.occupied)
  this.processing = false
}

Test.prototype.onbufferedend = function (p, er) {
  console.error('%s.onbufferedend', this.name, p)
  this.pool.remove(p)
  p.options.tapChildBuffer = p.output
  if (this.occupied === p)
    this.occupied = null
  if (er)
    this.threw(er)
  this.process()
}

Test.prototype.onindentedend = function (p, er) {
  console.error('onindentedend %s(%s)', this.name, p.name, er || 'ok')
  assert(this.occupied === p)
  this.occupied = null
  console.error('OIE(%s) b>shift into queue', this.name, this.queue)
  this.printResult(p.parser.ok, p.name, p.options, true)
  console.error('OIE(%s) shifted into queue', this.name, this.queue)
  if (er)
    this.threw(er)
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
    // Error.captureStackTrace(er, this.currentAssert || pR)
    er.test = this.name
    er.count = n
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

  if (hasOwn(extra, 'stack') && !hasOwn(extra, 'at')) {
    extra.at = stack.parseLine(extra.stack.split('\n')[0])
  }

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
  this.queue[method](testPoint(ok, n, message, extra))

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

Test.prototype.end = function (implicit) {
  console.error('END %s implicit=%j', this.name, implicit === IMPLICIT)
  if (this.ended && implicit === IMPLICIT) {
    console.error('END, unnecessary implicit')
    return
  }

  // beyond here we have to be actually done with things, or else
  // the semantic checks on counts and such will be off.
  if (this.queue.length || this.occupied)
    return this.queue.push(['end', implicit])

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
    console.error('END(%s) implicit plan', this.name, this.count)
    this.plan(this.count)
  }

  // do the failures for missing tests, unsatisfied plans, etc.
  //console.log('end parser', this)
  this.queue.push(EOF)
  this.process()
}

Test.prototype.threw = function (er, extra, proxy) {
  console.error(er.stack)
  process.exit(1)
  return

  if (this.name && !proxy)
    er.test = this.name

  if (!extra)
    extra = extraFromError(er)

  this.fail(extra.message || er.message, extra)

  if (!proxy)
    this.end(IMPLICIT)
  else
    this.process()
}

// Add all the asserts
tapAsserts.decorate(Test.prototype)
