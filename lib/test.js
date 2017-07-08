'use strict'
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

const Base = require('./base.js')
const Spawn = require('./spawn.js')
const Stdin = require('./stdin.js')
const Deferred = require('trivial-deferred')
const Pool = require('yapool')
const TestPoint = require('./point.js')
const parseTestArgs = require('./parse-test-args.js')
const loop = require('function-loop')

const extraFromError = require('./extra-from-error.js')
const tsame = require('tsame') // same thing, strict or not
const tmatch = require('tmatch') // ok with partial estimates
const stack = require('./stack.js')
const synonyms = require('./synonyms.js')
const assert = require('assert')
const util = require('util')
const ownOr = require('own-or')
const ownOrEnv = require('own-or-env')
const Promise = require('bluebird')
const bindObj = require('bind-obj-methods')

// A sigil object for implicit end() calls that should not
// trigger an error if the user then calls t.end()
const IMPLICIT = Symbol('implicit t.end()')

// Sigil to put in the queue to signal the end of all things
const EOF = Symbol('EOF')

const _end = Symbol('_end')

const hasOwn = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key)

class Test extends Base {
  constructor (options) {
    options = options || {}
    super(options)
    this.pushedEnd = false
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
    this.ranAfterEach = false

    // bind all methods to this object, so we can pass t.end as a callback
    // and do `const test = require('tap').test` like people do.
    const bound = Object.create(null)
    bindObj(this, this, bound)
    bindObj(this, Object.getPrototypeOf(this), bound)
    bindObj(this, Test.prototype, bound)
  }

  spawn (cmd, args, options, name) {
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

    return this.sub(Spawn, options, Test.prototype.spawn)
  }

  sub (Class, extra, caller) {
    extra = extra || {}
    if (!extra.skip && this.grep.length) {
      const m = this.grep[0].test(extra.name)
      const match = this.grepInvert ? !m : m
      if (!match) {
        const p = 'filter' + (this.grepInvert ? ' out' : '') + ': '
        extra.skip = p + this.grep[0]
      }
    }

    if (extra.only && !this.runOnly) {
      this.comment('%j has `only` set but all tests run', extra.name)
    }

    if (this.runOnly && !extra.only) {
      extra.skip = 'filter: only'
    }

    if (extra.todo || extra.skip) {
      this.pass(extra.name, extra)
      return Promise.resolve(this)
    }

    if (!extra.grep) {
      extra.grep = this.grep.slice(1)
      extra.grepInvert = this.grepInvert
    }

    extra.indent = '    '
    if (this.jobs > 1 && process.env.TAP_BUFFER === undefined)
      extra.buffered = ownOr(extra, 'buffered', true)
    else
      extra.buffered = ownOrEnv(extra, 'buffered', 'TAP_BUFFER', true)

    extra.bail = ownOr(extra, 'bail', this.bail)
    extra.parent = this
    extra.stack = stack.captureString(80, caller)
    const t = new Class(extra)

    this.queue.push(t)
    this.subtests.push(t)

    const d = new Deferred()
    t.deferred = d
    this.process()
    return d.promise
  }

  only (name, extra, cb) {
    extra = parseTestArgs(name, extra, cb)
    extra.only = true
    return this.sub(Test, extra, Test.prototype.only)
  }

  test (name, extra, cb) {
    extra = parseTestArgs(name, extra, cb)
    return this.sub(Test, extra, Test.prototype.test)
  }

  stdin (name, extra) {
    extra = parseTestArgs(name, extra, () => {}, '/dev/stdin')
    return this.sub(Stdin, extra || {}, Test.prototype.stdin)
  }

  bailout (message) {
    if (this.parent && (this.results || this.ended))
      this.parent.bailout(message)
    else {
      this.process()
      message = message ? ' ' + ('' + message).trim() : ''
      message = message.replace(/[\r\n]/g, ' ')
      this.parser.write('Bail out!' + message + '\n')
    }
    this.end(IMPLICIT)
    this.process()
  }

  comment () {
    const body = util.format.apply(util, arguments)
    const message = '# ' + body.split(/\r?\n/).join('\n# ') + '\n'

    if (this.results)
      this.push(message)
    else
      this.queue.push(message)
    this.process()
  }

  timeout (options) {
    options = options || {}
    options.expired = options.expired || this.name
    if (this.occupied)
      this.occupied.timeout(options)
    else
      Base.prototype.timeout.call(this, options)
    this.end(IMPLICIT)
  }

  main (cb) {
    this.setTimeout(this.options.timeout)
    this.debug('MAIN pre', this)

    const end = () => {
      this.debug(' > implicit end for promise')
      this.end(IMPLICIT)
      done()
    }

    const done = (er) => {
      if (er)
        this.threw(er)

      if (this.results || this.bailedOut)
        cb()
      else
        this.ondone = cb
    }

    const ret = (() => {
      try {
        return this.cb(this)
      } catch (er) {
        this.threw(er)
      }
    })()

    if (ret && ret.then) {
      this.promise = ret
      ret.tapAbortPromise = done
      ret.then(end, done)
    } else
      done()


    this.debug('MAIN post', this)
  }

  process () {
    if (this.processing)
      return this.debug(' < already processing')

    this.debug('\nPROCESSING(%s)', this.name, this.queue.length)
    this.processing = true

    while (!this.occupied) {
      const p = this.queue.shift()
      if (!p)
        break
      if (p instanceof Base) {
        this.processSubtest(p)
      } else if (p === EOF) {
        this.debug(' > EOF', this.name)
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
        const m = p.shift()
        this[m].apply(this, p)
      } else {
        throw new Error('weird thing got in the queue')
      }
    }

    while (!this.noparallel && this.pool.length < this.jobs) {
      const p = this.subtests.shift()
      if (!p)
        break

      if (!p.buffered) {
        this.noparallel = true
        break
      }

      this.debug('start subtest', p)
      this.pool.add(p)
      if (this.bailedOut)
        this.onbufferedend(p)
      else
        this.runBeforeEach(p,
          p.main.bind(p,
            this.onbufferedend.bind(this, p)))
    }

    this.debug('done processing', this.queue, this.occupied)
    this.processing = false

    // just in case any tests ended, and we have sync stuff still
    // waiting around in the queue to be processed
    if (!this.occupied && this.queue.length)
      this.process()

    this.maybeAutoend()
  }

  processSubtest (p) {
    this.debug(' > subtest')
    this.occupied = p
    if (!p.buffered) {
      if (this.bailedOut)
        return this.onindentedend(p)
      this.debug(' > subtest indented')
      p.pipe(this.parser, { end: false })
      this.runBeforeEach(p,
        this.writeSubComment.bind(this, p,
          p.main.bind(p,
            this.onindentedend.bind(this, p))))
    } else if (p.readyToProcess) {
      this.debug(' > subtest buffered, finished')
      // finished!  do the thing!
      this.occupied = null
      if (!p.passing() || !p.silent) {
        this.queue.unshift(['emitSubTeardown', p])
        this.printResult(p.passing(), p.name, p.options, true)
      }
    } else {
      this.occupied = p
      this.debug(' > subtest buffered, unfinished', p)
      // unfinished buffered test.
      // nothing to do yet, just leave it there.
      this.queue.unshift(p)
    }
  }

  emitSubTeardown (p) {
    try {
      p.emit('teardown')
    } catch (er) {
      delete p.options.time
      p.threw(er)
    }
  }

  writeSubComment (p, cb) {
    const comment = '# Subtest' +
      (p.name ? ': ' + p.name : '') +
      '\n'
    this.parser.write(comment)
    cb()
  }

  onbufferedend (p, er) {
    delete p.ondone
    p.results = p.results || {}
    p.readyToProcess = true
    const to = p.options.timeout
    const dur = (to && p.passing()) ? Date.now() - p.start : null
    if (dur && dur > to)
      p.timeout()
    else
      p.setTimeout(false)
    this.debug('%s.onbufferedend', this.name, p.name, p.results.bailout)
    this.pool.remove(p)
    p.options.tapChildBuffer = p.output || ''
    p.options.stack = ''
    if (p.time)
      p.options.time = p.time
    if (this.occupied === p)
      this.occupied = null
    if (er)
      this.threw(er)
    p.deferred.resolve(this)
    this.process()
  }

  onindentedend (p, er) {
    delete p.ondone
    this.debug('onindentedend', p)
    this.noparallel = false
    const sti = this.subtests.indexOf(p)
    if (sti !== -1)
      this.subtests.splice(sti, 1)
    p.readyToProcess = true
    p.results = p.results || {}
    if (p.time)
      p.options.time = p.time
    const to = p.options.timeout
    const dur = (to && p.passing()) ? Date.now() - p.start : null
    if (dur && dur > to)
      p.timeout()
    else
      p.setTimeout(false)
    this.debug('onindentedend %s(%s)', this.name, p.name, er || 'ok')
    assert(this.occupied === p)
    this.occupied = null
    this.debug('OIE(%s) b>shift into queue', this.name, this.queue)
    p.options.stack = ''

    this.queue.unshift(['emitSubTeardown', p])
    this.printResult(p.passing(), p.name, p.options, true)

    this.debug('OIE(%s) shifted into queue', this.name, this.queue)
    if (er)
      this.threw(er)
    p.deferred.resolve(this)
    this.process()
  }

  addAssert (name, length, fn) {
    if (!name)
      throw new TypeError('name is required for addAssert')

    if (!(typeof length === 'number' && length >= 0))
      throw new TypeError('number of args required')

    if (typeof fn !== 'function')
      throw new TypeError('function required for addAssert')

    if (Test.prototype[name] || this[name])
      throw new TypeError('attempt to re-define `' + name + '` assert')

    function ASSERT () {
      if (!this.currentAssert) {
        this.currentAssert = ASSERT
      }
      const args = new Array(length + 2)
      for (let i = 0; i < length; i++) {
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
    this[name] = ASSERT
  }

  printResult (ok, message, extra, front) {
    const n = this.count + 1
    if (this.planEnd !== -1 && n > this.planEnd) {
      if (!this.passing())
        return

      const failMessage = this.explicitEnded
          ? 'test after end() was called'
          : 'test count exceeds plan'

      const er = new Error(failMessage)
      Error.captureStackTrace(er,
        this.currentAssert || Test.prototype.printResult)
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

    const fn = this.currentAssert || Test.prototype.printResult
    this.currentAssert = null
    if (!ok && !extra.skip && !hasOwn(extra, 'at')) {
      assert.equal(typeof fn, 'function')
      extra.at = stack.at(fn)
      if (!extra.todo)
        extra.stack = stack.captureString(80, fn)
    }

    const diagnostic =
      typeof extra.diagnostic === 'boolean' ? extra.diagnostic
      : process.env.TAP_DIAG === '0' ? false
      : process.env.TAP_DIAG === '1' ? true
      : extra.skip ? false
      : !ok

    if (diagnostic)
      extra.diagnostic = true

    this.count = n
    const res = { ok: ok, message: message, extra: extra }
    const output = new TestPoint(ok, message, extra)
    // when we jump the queue, skip an extra line
    if (front)
      output.message = output.message.trimRight() + '\n\n'

    if (front) {
      this.emit('result', res)
      this.parser.write(output.ok + (++this.n) + output.message)
    } else
      this.queue.push(['emit', 'result', res], output)

    if (this.planEnd === this.count)
      this.end(IMPLICIT)

    this.process()
  }

  pragma (set) {
    const p = Object.keys(set).reduce((acc, i) =>
      acc + 'pragma ' + (set[i] ? '+' : '-') + i + '\n', '')
    this.queue.push(p)
    this.process()
  }

  plan (n, comment) {
    if (this.bailedOut)
      return

    if (this.planEnd !== -1) {
      throw new Error('Cannot set plan more than once')
    }

    if (typeof n !== 'number' || n < 0) {
      throw new TypeError('plan must be a number')
    }

    // Cannot get any tests after a trailing plan, or a plan of 0
    const ending = this.count !== 0 || n === 0

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

  end (implicit) {
    this.debug('END implicit=%j', implicit === IMPLICIT)
    if (this.ended && implicit === IMPLICIT)
      return

    // beyond here we have to be actually done with things, or else
    // the semantic checks on counts and such will be off.
    if (!queueEmpty(this) || this.occupied) {
      if (!this.pushedEnd)
        this.queue.push(['end', implicit])
      this.pushedEnd = true
      return this.process()
    }

    if (!this.ranAfterEach && this.parent) {
      this.ranAfterEach = true
      this.parent.runAfterEach(this, () => this[_end](implicit))
      return
    } else
      this[_end](implicit)
  }

  [_end] (implicit) {
    this.ended = true

    if (implicit !== IMPLICIT && !this.multiEndThrew) {
      if (this.explicitEnded) {
        this.multiEndThrew = true
        const er = new Error('test end() method called more than once')
        Error.captureStackTrace(er, this.currentAssert ||
          Test.prototype[_end])
        er.test = this.name
        this.threw(er)
        return
      }
      this.explicitEnded = true
    }

    if (this.planEnd === -1) {
      this.debug('END(%s) implicit plan', this.name, this.count)
      this.plan(this.count)
    }

    this.queue.push(EOF)
    this.process()
  }

  threw (er, extra, proxy) {
    this.debug('THREW', er.message, extra, proxy)

    // event emitters 'error' events need to re-throw so that they
    // can jump out of the flow like a normal throw.  They'll just
    // end up back here once that happens, though, unless there's a
    // try/catch somewhere in the call stack.
    if (er.domainEmitter) {
      delete er.domainEmitter
      throw er
    }

    if (this.name && !proxy)
      er.test = this.name
    if (!proxy)
      extra = extraFromError(er, extra, this.options)
    Base.prototype.threw.call(this, er, extra, proxy)

    if (!this.results) {
      this.fail(extra.message || er.message, extra)
      if (!proxy)
        this.end(IMPLICIT)
    }
    this.process()
  }

  runBeforeEach (who, cb) {
    if (this.parent)
      this.parent.runBeforeEach(who, () => {
        loop(who, this.onBeforeEach, cb, who.threw)
      })
    else
      loop(who, this.onBeforeEach, cb, who.threw)
  }

  runAfterEach (who, cb) {
    loop(who, this.onAfterEach, () => {
      if (this.parent)
        this.parent.runAfterEach(who, cb)
      else
        cb()
    }, who.threw)
  }

  beforeEach (fn) {
    this.onBeforeEach.push(fn)
  }

  afterEach (fn) {
    this.onAfterEach.push(fn)
  }

  teardown (fn) {
    this.on('teardown', fn)
  }

  shouldAutoend () {
    const should = (
      this.options.autoend &&
      !this.ended &&
      !this.occupied &&
      queueEmpty(this) &&
      !this.pool.length &&
      !this.subtests.length &&
      this.planEnd === -1
    )
    return should
  }

  autoend () {
    this.options.autoend = true
    this.maybeAutoend()
  }

  maybeAutoend () {
    if (this.autoendTimer)
      clearTimeout(this.autoendTimer)

    if (this.shouldAutoend()) {
      this.autoendTimer = setTimeout(() => {
        if (this.shouldAutoend()) {
          this.autoendTimer = setTimeout(() => {
            if (this.shouldAutoend())
              this.end(IMPLICIT)
          })
        }
      })
    }
  }

  endAll (sub) {
    this.processing = true
    if (this.occupied) {
      const p = this.occupied
      if (p.endAll)
        p.endAll(true)
      else {
        p.parser.abort('test unfinished')
      }
    } else if (sub) {
      this.process()
      if (queueEmpty(this)) {
        const options = Object.assign({}, this.options)
        this.options.at = null
        this.options.stack = ''
        options.test = this.name
        this.fail('test unfinished', options)
      }
    }

    if (this.promise && this.promise.tapAbortPromise)
      this.promise.tapAbortPromise()

    if (this.occupied) {
      this.queue.unshift(this.occupied)
      this.occupied = null
    }

    endAllQueue(this.queue)
    this.processing = false
    this.process()
    this.parser.end()
  }

  pass (message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.pass

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    this.printResult(true, message || '(unnamed test)', extra)
    return true
  }

  fail (message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.fail

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    this.printResult(false, message || '(unnamed test)', extra || {})
    return !!(extra.todo || extra.skip)
  }

  ok (obj, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.ok

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}
    message = message || 'expect truthy value'
    return obj ? this.pass(message, extra) : this.fail(message, extra)
  }

  notOk (obj, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.notOk

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}
    message = message || 'expect falsey value'
    return this.ok(!obj, message, extra)
  }

  error (er, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.error

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    if (!er) {
      return this.pass(message || 'should not error', extra)
    }

    if (!(er instanceof Error)) {
      extra.found = er
      return this.fail(message || 'non-Error error encountered', extra)
    }

    message = message || er.message
    extra.found = er
    return this.fail(message, extra)
  }

  equal (found, wanted, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.equal

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    message = message || 'should be equal'
    if (found === wanted) {
      return this.pass(message, extra)
    }

    extra.found = found
    extra.wanted = wanted
    extra.compare = '==='

    if (typeof found === 'object' &&
        typeof wanted === 'object' &&
        found &&
        wanted &&
        tsame(found, wanted)) {
      extra.note = 'Objects never === one another'
    }

    return this.fail(message, extra)
  }

  not (found, wanted, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.not

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    message = message || 'should not be equal'
    if (found !== wanted) {
      return this.pass(message, extra)
    }

    extra.found = found
    extra.doNotWant = wanted
    extra.compare = '!=='

    return this.fail(message, extra)
  }

  same (found, wanted, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.same

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    message = message || 'should be equivalent'
    extra.found = found
    extra.wanted = wanted
    return this.ok(tsame(found, wanted), message, extra)
  }

  notSame (found, wanted, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.notSame

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    message = message || 'should not be equivalent'
    extra.found = found
    extra.doNotWant = wanted
    return this.notOk(tsame(found, wanted), message, extra)
  }

  strictSame (found, wanted, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.strictSame

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    message = message || 'should be equivalent strictly'
    extra.found = found
    extra.wanted = wanted
    return this.ok(tsame.strict(found, wanted), message, extra)
  }

  strictNotSame (found, wanted, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.strictNotSame

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    message = message || 'should be equivalent strictly'
    extra.found = found
    extra.doNotWant = wanted
    return this.notOk(tsame.strict(found, wanted), message, extra)
  }

  match (found, wanted, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.match

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    message = message || 'should match pattern provided'
    extra.found = found
    extra.pattern = wanted
    return this.ok(tmatch(found, wanted), message, extra)
  }

  notMatch (found, wanted, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.notMatch

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    message = message || 'should not match pattern provided'
    extra.found = found
    extra.pattern = wanted
    return this.ok(!tmatch(found, wanted), message, extra)
  }

  type (obj, klass, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.type

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    const name = typeof klass === 'function' ?
      klass.name || '(anonymous constructor)'
      : klass

    message = message || 'type is ' + name

    // simplest case, it literally is the same thing
    if (obj === klass) {
      return this.pass(message, extra)
    }

    const tof = typeof obj
    const type = (!obj && tof === 'object') ? 'null'
      // treat as object, but not Object
      // t.type(() => {}, Function)
      : (tof === 'function' &&
        typeof klass === 'function' &&
        klass !== Object) ? 'object'
      : tof

    if (type === 'object' && klass !== 'object') {
      if (typeof klass === 'function') {
        extra.found = Object.getPrototypeOf(obj).constructor.name
        extra.wanted = name
        return this.ok(obj instanceof klass, message, extra)
      }

      // check prototype chain for name
      // at this point, we already know klass is not a function
      // if the klass specified is an obj in the proto chain, pass
      // if the name specified is the name of a ctor in the chain, pass
      for (let p = obj; p; p = Object.getPrototypeOf(p)) {
        const ctor = p.constructor && p.constructor.name
        if (p === klass || ctor === name) {
          return this.pass(message, extra)
        }
      }
    }

    return this.equal(type, name, message, extra)
  }

  throws (_fn, _wanted, _message, _extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.throws

    let fn, wanted, message, extra
    for (let i = 0; i < arguments.length; i++) {
      const arg = arguments[i]
      if (typeof arg === 'function') {
        if (arg === Error || arg.prototype instanceof Error) {
          wanted = arg
        } else if (!fn) {
          fn = arg
        }
      } else if (typeof arg === 'string' && arg) {
        message = arg
      } else if (typeof arg === 'object') {
        if (!wanted) {
          wanted = arg
        } else {
          extra = arg
        }
      }
    }

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    if (!message)
      message = fn && fn.name || 'expected to throw'

    if (wanted) {
      if (wanted instanceof Error) {
        const w = {
          message: wanted.message
        }
        if (wanted.name) {
          w.name = wanted.name
        }

        // intentionally copying non-local properties, since this
        // is an Error object, and those are funky.
        for (i in wanted) {
          w[i] = wanted[i]
        }
        wanted = w

        message += ': ' + (wanted.name || 'Error') + ' ' + wanted.message
        extra = extra || {}
        if (extra !== wanted) {
          extra.wanted = wanted
        }
      }
    }

    if (typeof fn !== 'function') {
      extra = extra || {}
      extra.todo = true
      return this.pass(message, extra)
    }

    try {
      fn()
      return this.fail(message, extra)
    } catch (er) {
      // 'name' is a getter.
      if (er.name) {
        er.name = er.name + ''
      }

      if (wanted) {
        if (Object.prototype.toString.call(wanted) === '[object RegExp]') {
          return this.match(er.message, wanted, message, extra)
        }
        return this.has(er, wanted, message, extra)
      } else {
        return this.pass(message, extra)
      }
    }
  }

  doesNotThrow (fn, message, extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.doesNotThrow

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    if (typeof fn === 'string') {
      const x = fn
      fn = message
      message = x
    }

    if (!message) {
      message = fn && fn.name || 'expected to not throw'
    }

    if (typeof fn !== 'function') {
      extra.todo = true
      return this.pass(message, extra)
    }

    try {
      fn()
      return this.pass(message, extra)
    } catch (er) {
      const e = extraFromError(er, extra)
      e.message = er.message
      return this.fail(message, e)
    }
  }

  // like throws, but rejects a returned promise instead
  // also, can pass in a promise instead of a function
  rejects (_fn, _wanted, _message, _extra) {
    if (!this.currentAssert)
      this.currentAssert = Test.prototype.rejects

    let fn, wanted, extra, promise, message
    for (let i = 0; i < arguments.length; i++) {
      const arg = arguments[i]
      if (typeof arg === 'function') {
        if (arg === Error || arg.prototype instanceof Error) {
          wanted = arg
        } else if (!fn) {
          fn = arg
        }
      } else if (typeof arg === 'string' && arg) {
        message = arg
      } else if (arg && typeof arg.then === 'function' && !promise) {
        promise = arg
      } else if (typeof arg === 'object') {
        if (!wanted) {
          wanted = arg
        } else {
          extra = arg
        }
      }
    }

    if (message && typeof message === 'object')
      extra = message, message = ''

    if (!extra)
      extra = {}

    if (!message)
      message = fn && fn.name || 'expect rejected Promise'

    if (wanted) {
      if (wanted instanceof Error) {
        const w = {
          message: wanted.message
        }
        if (wanted.name) {
          w.name = wanted.name
        }

        // intentionally copying non-local properties, since this
        // is an Error object, and those are funky.
        for (i in wanted) {
          w[i] = wanted[i]
        }
        wanted = w

        message += ': ' + (wanted.name || 'Error') + ' ' + wanted.message
        extra = extra || {}
        if (extra !== wanted) {
          extra.wanted = wanted
        }
      }
    }

    if (!promise && typeof fn !== 'function') {
      extra = extra || {}
      extra.todo = true
      return this.pass(message, extra)
    }

    if (!promise)
      promise = fn()

    if (!promise || typeof promise.then !== 'function')
      return this.fail(message, extra)

    // have to do as a subtest, because promises are async
    extra.at = stack.at(this.currentAssert)
    this.test(message, { buffered: true }, t => {
      return promise.then(value => {
        extra.found = value
        t.fail(message, extra)
      }, er => {
        // 'name' is a getter.
        if (er.name) {
          er.name = er.name + ''
        }

        if (wanted) {
          if (Object.prototype.toString.call(wanted) === '[object RegExp]') {
            return t.match(er.message, wanted, message, extra)
          }
          return t.has(er, wanted, message, extra)
        } else {
          return t.pass(message, extra)
        }
      })
    })
  }
}

const endAllQueue = queue => {
  queue.forEach((p, i) => {
    if ((p instanceof Base) && !p.readyToProcess)
      queue[i] = new TestPoint(false,
        'child test left in queue ' + p.constructor.name + ': ' +
        p.name, p.options)
  })
  queue.push(['end', IMPLICIT])
}

const queueEmpty = t =>
  t.queue.length === 0 ||
    t.queue.length === 1 && t.queue[0] === 'TAP version 13\n'

Test.prototype.done = Test.prototype.end
Test.prototype.tearDown = Test.prototype.teardown

Object.keys(synonyms)
  .filter(c => Test.prototype[c])
  .forEach(c => synonyms[c].forEach(s =>
    Object.defineProperty(Test.prototype, s, {
      value: Test.prototype[c],
      enumerable: false,
      configurable: true,
      writable: true
    })))

module.exports = Test
