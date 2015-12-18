module.exports = Test

var Readable = require('stream').Readable
if (!Readable || process.version.match(/^v0\.10/)) {
  Readable = require('readable-stream').Readable
}

var util = require('util')
util.inherits(Test, Readable)

var yaml = require('js-yaml')
var stack = require('./stack.js')
var tapAsserts = require('./assert.js')
var assert = require('assert')
var spawn = require('child_process').spawn
var Parser = require('tap-parser')
var path = require('path')
var Module = require('module').Module
var fs = require('fs')
var binpath = path.resolve(__dirname, '../bin')


function hasOwn (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function Test (options) {
  options = options || {}

  if (!(this instanceof Test))
    return new Test(options)

  this._autoend = !!options.autoend
  this._name = ''
  this._ok = true
  this._pass = 0
  this._fail = 0
  this._skip = 0
  this._todo = 0
  this._count = 0
  this._bailedOut = false
  this._endEmitted = false

  if (Object.prototype.hasOwnProperty.call(options, 'bail'))
    this._bail = !!options.bail
  else
    this._bail = process.env.TAP_BAIL === '1'

  this._passes = []
  this._fails = []
  this._skips = []
  this._todos = []

  this._plan = -1
  this._queue = []
  this._currentChild = null
  this._ending = false
  this._ended = false
  this._planFinished = false

  this._parent = null
  this._printedVersion = false

  this._startTime = process.hrtime()
  this._calledAt = options.at || stack.at(this.test)
  if (!this._calledAt || !this._calledAt.file)
    this._calledAt = stack.at(Test)

  this._timer = null
  this._timeout = 0
  if (options.timeout !== Infinity &&
      !isNaN(options.timeout) &&
      options.timeout > 0) {
    this.setTimeout(options.timeout)
  }

  Readable.apply(this, options)

  // Bind all methods.
  var bound = {}
  for (var m in this) {
    if (typeof this[m] === 'function') {
      this[m] = this[m].bind(this)
      bound[m] = true
    }
  }
  Object.getOwnPropertyNames(Test.prototype).forEach(function (name) {
    if (typeof this[name] === 'function' && !bound[name]) {
      Object.defineProperty(this, name, {
        value: this[name].bind(this),
        enumerable: false,
        configurable: true,
        writable: true
      })
    }
  }, this)

}

Test.prototype.tearDown = Test.prototype.teardown = function (fn) {
  this.on('end', fn)
}

Test.prototype.setTimeout = function (n) {
  if (n === Infinity) {
    if (this._timer)
      clearTimeout(this._timer)
    this._timeout = 0
    return
  }

  if (isNaN(n) || n <= 0)
    throw new TypeError('setTimeout: number > 0 required')

  this._timeout = n
  if (this._timer)
    clearTimeout(this._timer)

  var self = this
  this._timer = setTimeout(function () {
    self._onTimeout()
  }, n)
}

Test.prototype._onTimeout = function () {
  var s = this
  while (s._currentChild && (s._currentChild instanceof Test)) {
    s._queue = []
    s.end()
    s = s._currentChild
  }

  // anything that was pending will have to wait.
  s.fail('timeout!', {
    expired: this._name,
    timeout: this._timeout,
    at: this._calledAt
  })
  s.end()

  this.endAll()
}

// Called when endAll() is fired and there's stuff in the queue
Test.prototype._queueFail = function () {
  var queue = this._queue
  this._queue = []
  var len = queue.length

  queue.forEach(function (q) {
    var what = q[0]
    var msg = what + ' left in queue'
    var extra = { at: this._calledAt }

    switch (what) {
    case 'test':
      extra = q[2]
      msg = 'child test left in queue: ' + (q[1] || '(unnamed)')
      break

    case 'printResult':
      if (q[2] === 'test unfinished: ' + (this._name || '(unnamed)'))
        return
      var msg = (q[1] ? 'ok' : 'not ok') + ' - ' + q[2].trim()
      msg = 'test point left in queue: ' + msg
      extra = q[3]
      extra.at = extra.at || null
      break

    case 'spawn':
      extra = q[5]
      extra.command = q[1]
      extra.args = q[2]
      extra.options = q[3]
      msg = 'spawn left in queue: ' + (q[4] || '(unnamed)')
      break

    case 'end':
      return
    }

    if (this._parent)
      extra.test = this._name

    this.fail(msg, extra)
  }, this)
}

Test.prototype.endAll = function () {
  var child = this._currentChild

  if (this._queue && this._queue.length)
    this._queueFail()

  if (child) {
    if (!child._ended && child.fail) {
      var msg = 'test unfinished: ' + (child._name || '(unnamed)')
      var extra = { at: child._calledAt }
      if (child._plan !== -1) {
        extra.plan = child._plan
        extra.count = child._count
      }
      child.fail(msg, extra)
    }

    if (child.end)
      child.end()

    if (child.endAll)
      child.endAll()

    if (child.kill)
      child.kill('SIGTERM')

    child._bailedOut = true
  }

  this.end()
}

Test.prototype._extraFromError = function (er, extra) {
  extra = extra || {}
  if (!er || typeof er !== 'object') {
    extra.error = er
    return extra
  }

  var message = er.message
  var addName = true

  if (!message && er.stack) {
    message = er.stack.split('\n')[0]
    addName = false
  }

  er.message = ''
  var st = er.stack
  if (st) {
    st = st.split('\n')
    // parse out the 'at' bit from the first line.
    extra.at = stack.parseLine(st[1])
    extra.stack = stack.clean(st)
  }
  er.message = message

  if (addName && er.name)
    message = er.name + ': ' + message

  Object.keys(er).forEach(function (k) {
    if (k === 'message')
      return
    extra[k] = er[k]
  })

  extra.message = message

  return extra
}

Test.prototype.threw = function threw (er, extra, proxy) {
  this._ok = false
  this._threw = this._threw || er

  if (this._name && !proxy)
    er.test = this._name

  if (!extra)
    extra = this._extraFromError(er)

  // If we've already ended, then try to pass this up the chain
  // Presumably, eventually the root harness will catch it and
  // deal with it, since that only ends on process exit.
  if (this._ended) {
    if (this._parent)
      return this._parent.threw(er, extra, true)
    else
      throw er
  }

  this.fail(extra.message || er.message, extra)
  if (!proxy)
    this.end()
}

Test.prototype.pragma = function (set) {
  if (this._bailedOut)
    return

  if (this._currentChild) {
    this._queue.push(['pragma', set])
    return
  }

  for (var i in set)
    this.push('pragma ' + (set[i] ? '+' : '-') + i + '\n')
}

Test.prototype.plan = function (n, comment) {
  if (this._bailedOut)
    return

  if (this._currentChild) {
    this._queue.push(['plan', n, comment])
    return
  }

  if (this._plan !== -1)
    throw new Error('Cannot set plan more than once')

  if (typeof n !== 'number' || n < 0)
    throw new Error('plan must be a number')

  // Cannot get any tests after a trailing plan, or a plan of 0
  var ending = false
  if (this._count !== 0 || n === 0)
    ending = true

  this._plan = n
  comment = comment ? ' # ' + comment.trim() : ''
  this.push('1..' + n + comment + '\n')

  if (ending)
    this.end()
}

Test.prototype.test = function test (name, extra, cb) {
  if (this._bailedOut)
    return

  if (this._autoendTimer)
    clearTimeout(this._autoendTimer)

  if (typeof name === 'function') {
    cb = name
    name = ''
    extra = {}
  } else if (typeof extra === 'function') {
    cb = extra
    extra = {}
  }

  if (!cb) {
    extra = extra || {}
    extra.todo = true
  } else if (typeof cb !== 'function')
    throw new Error('test() requires a callback')

  if (!name && cb && cb.name)
    name = cb.name

  if (extra.skip || extra.todo)
    return this.pass(name, extra)

  // will want this captured now in case child fails.
  if (!hasOwn(extra, 'at'))
    extra.at = stack.at(test)

  if (this._currentChild) {
    this._queue.push(['test', name, extra, cb])
    return
  }

  var child = new Test(extra)
  name = name || '(unnamed test)'

  child._name = name
  child._parent = this
  if (this._bail)
    child._bail = this._bail

  this._currentChild = child
  var self = this
  childStream(self, child)
  var results
  child.on('complete', function (res) {
    results = pruneFailures(res)
  })
  child.on('end', function () {
    if (child._threw && child._ok) {
      child._ok = false
      extra.error = child._threw
      if (extra.error.stack)
        extra.error.stack = stack.clean(extra.error.stack)
    }
    extra.results = results
    self._currentChild = null
    if (results)
      name += ' # time=' + results.time + 'ms'
    self.ok(child._ok, name, extra)
    if (!self._ended)
      self.push('\n')
  })
  child.on('bailout', function (message) {
    rootBail(self, message)
  })

  // still need try/catch for synchronous errors
  self._level = child
  child.comment('Subtest: ' + name)
  try {
    var cbRet = cb(child)
    if (cbRet && typeof cbRet.then === 'function') {
      // promise
      cbRet.then(function () {
        child.end()
      }, function (reason) {
        child.fail(reason.message, child._extraFromError(reason))
        child.end()
      })
    }
  } catch (er) {
    child.threw(er)
  }
  self._level = self
}

Test.prototype.current = function () {
  var t = this
  while (t._level && t !== t._level)
    t = t._level
  return t
}

// stdin is a bit different than a typical child stream
// It's not treated as a "child test", because we typically
// don't want to indent it or treat as a suite in reporters.
// This is most often used by the runner when - is passed
// as an arg, to run a reporter on a previous run.
// We DO however need to parse it to set the exit failure.
Test.prototype.stdin = function (name, extra) {
  if (typeof name === 'object') {
    extra = name
    name = null
  }

  if (!name)
    name = '/dev/stdin'

  if (!extra)
    extra = {}

  if (!extra.at)
    extra.at = stack.at(stdin)

  if (this._currentChild) {
    this._queue.push(['stdin', name, extra])
    return
  }

  if (extra.skip)
    return this.pass(name, extra)

  var stdin = process.stdin
  this._currentChild = stdin
  var start = process.hrtime()
  var parser = new Parser()
  var self = this

  childStream(self, stdin)

  stdin.on('data', function (c) {
    parser.write(c)
  })

  stdin.emit('data', '# Subtest: ' + name + '\n')

  stdin.on('end', function () {
    parser.end()
  })

  parser.on('complete', function (res) {
    self._currentChild = null
    extra.results = pruneFailures(res)
    var dur = process.hrtime(start)
    var time = Math.round(dur[0] * 1e6 + dur[1] / 1e3) / 1e3
    name += ' # time=' + time + 'ms'
    self.ok(res.ok, name, extra)
    if (!self._ended)
      self.push('\n')
    self._processQueue()
  })

  parser.on('bailout', function (message) {
    rootBail(self, message)
  })

  process.stdin.resume()
}

function pruneFailures (res) {
  if (res.failures) {
    res.failures = res.failures.filter(function (f) {
      return f.tapError
    })
    if (!res.failures.length)
      delete res.failures
  }
  return res
}

function rootBail (self, message) {
  var p = self
  while (p._parent) {
    p._bailedOut = true
    p = p._parent
  }
  p.bailout(message)
}

function childStream (self, child) {
  var bailedOut = false
  var linebuf = ''
  child.on('data', function (c) {
    if (bailedOut)
      return
    linebuf += c
    var lines = linebuf.split('\n')
    linebuf = lines.pop()
    lines.forEach(function (line) {
      if (bailedOut)
        return
      if (line.match(/^\s*Bail out!/))
        bailedOut = true
      if (line.match(/^\s*TAP version \d+$/))
        return
      if (line.trim())
        line = '    ' + line
      self.push(line + '\n')
    })
  })
  child.on('end', function () {
    if (bailedOut)
      return
    if (linebuf)
      self.push('    ' + linebuf + '\n')
  })
}

Test.prototype.spawn = function spawnTest (cmd, args, options, name, extra) {

  if (typeof args === 'string')
    args = [ args ]

  args = args || []

  if (typeof options === 'string') {
    name = options
    options = {}
  }

  options = options || {}
  if (!name) {
    if (cmd === process.execPath) {
      name = args.map(function (a) {
        if (a.indexOf(process.cwd()) === 0)
          return './' + a.substr(process.cwd().length + 1)
        else
          return a
      }).join(' ')
    } else
      name = cmd + ' ' + args.join(' ')
  }

  extra = extra || {}

  assert.equal(typeof cmd, 'string')
  assert(Array.isArray(args))
  assert.equal(options && typeof options, 'object')
  assert.equal(typeof name, 'string')
  assert.equal(extra && typeof extra, 'object')

  // stdout must be a pipe
  if (options.stdio) {
    if (typeof options.stdio === 'string')
      options.stdio = [ options.stdio, 'pipe', options.stdio ]
    else
      options.stdio[1] = 'pipe'
  }

  // will want this captured now in case child fails, before enqueue
  if (!hasOwn(extra, 'at'))
    extra.at = stack.at(spawnTest)

  if (this._autoendTimer)
    clearTimeout(this._autoendTimer)

  if (this._currentChild) {
    this._queue.push(['spawn', cmd, args, options, name, extra])
    return
  }

  if (extra.skip || extra.todo)
    return this.pass(name, extra)

  if (this._bail || options.bail) {
    if (!options.env) {
      options.env = Object.keys(process.env).reduce(function (env, k) {
        env[k] = process.env[k]
        return env
      }, {})
    }
    options.env.TAP_BAIL = '1'
  }

  var start = process.hrtime()
  var child = spawn(cmd, args, options)
  var parser = new Parser()
  var self = this
  this._currentChild = child

  childStream(self, child.stdout)

  child.stdout.on('data', function (c) {
    parser.write(c)
  })

  if (this._bail)
    bailOnFail(this, child.stdout, parser)

  child.stdout.emit('data', '# Subtest: ' + name + '\n')
  // The only thing that's actually *required* to be a valid TAP output
  // is a plan and/or at least one ok/not-ok line.  If we don't get any
  // of those, then emit a bogus 1..0 so we read it as a skip.
  var sawTests = false
  parser.once('assert', function () {
    sawTests = true
  })

  parser.once('plan', function () {
    sawTests = true
  })

  child.stdout.on('end', function () {
    parser.write('\n')
    if (!sawTests)
      child.stdout.emit('data', '1..0\n')
    parser.end()
  })

  var results
  parser.on('complete', function (res) {
    results = pruneFailures(res)
  })

  if (extra.timeout) {
    var timer = setTimeout(function () {
      extra.failure = 'timeout'
      child.kill('SIGTERM')
      // give it 1 more second to finish up
      timer = setTimeout(function () {
        child.stdout.emit('data', '\n\nnot ok - timeout\n\n')
        child.kill('SIGKILL')
      }, 1000)
    }, extra.timeout)
  }

  child.on('close', function onclose (code, signal) {
    clearTimeout(timer)
    self._currentChild = null
    extra.results = results
    var dur = process.hrtime(start)
    var time = Math.round(dur[0] * 1e6 + dur[1] / 1e3) / 1e3
    if (code)
      extra.exitCode = code
    if (signal)
      extra.signal = signal
    extra.command = cmd
    extra.arguments = args

    if (signal || code)
      results.ok = false

    if (results.count === 0 && !signal && !code) {
      extra.skip = 'No tests found'
      if (results.plan && results.plan.skipReason)
        extra.skip = results.plan.skipReason
    } else
      name += ' # time=' + time + 'ms'

    self.ok(results.ok && !code && !signal, name, extra)
    if (!self._ended)
      self.push('\n')
    self._processQueue()
  })

  parser.on('bailout', function (message) {
    child.kill('SIGTERM')
    rootBail(self, message)
  })

  if (child.stderr) {
    child.stderr.on('data', function (c) {
      process.stderr.write(c)
    })
  }
}

function bailOnFail (self, stream, parser) {
  parser.on('child', function (c) {
    bailOnFail(self, stream, c)
  })

  parser.on('assert', function (res) {
    if (!res.todo && !res.skip && !res.ok) {
      var ind = new Array(parser.level * 4 + 1).join(' ')
      parser.buffer = ''
      stream.emit('data', ind + 'Bail out! # ' + res.name + '\n')
    }
  })
}

Test.prototype.done = Test.prototype.end = function end () {
  if (this._bailedOut)
    return

  if (this._ended || this._ending)
    return

  if (this._currentChild) {
    this._queue.push(['end'])
    return
  }

  clearTimeout(this._timer)
  // Emiting the missing tests can trigger a call to end()
  // guard against that with the 'ending' flag
  this._ending = true
  var missing = this._plan - this._count
  while (missing > 0) {
    this.fail('missing test', { at: false })
    missing--
  }

  if (this._plan === -1)
    this.plan(this._count)

  var final = {
    plan: { start: 1, end: this._plan },
    count: this._count,
    pass: this._pass,
    ok: this._ok
  }

  if (this._fail)
    final.fail = this._fail

  if (this._bailedOut)
    final.bailout = true

  if (this._todo)
    final.todo = this._todo

  if (this._skip)
    final.skip = this._skip

  this._ended = true

  // This is nice, but too noisy.
  // TODO: prove-style commenting at the end.
  // this.comment(final)
  if (!this._ok) {
    // comment a bit at the end so we know what happened.
    if (this._plan !== this._count)
      this.comment('actual test count(%d) != plan(%d)',
                   this._count, this._plan)

    if (this._fail > 0)
      this.comment('failed %d of %d tests', this._fail, this._count)
    if (this._todo > 0)
      this.comment('todo: %d', this._todo)
    if (this._skip > 0)
      this.comment('skip: %d', this._skip)
  }

  var dur = process.hrtime(this._startTime)
  final.time = Math.round(dur[0] * 1e6 + dur[1] / 1e3) / 1e3
  if (!this._parent)
    this.comment('time=%sms', final.time)

  this.emit('complete', final)
  var self = this
  if (!this._endEmitted) {
    this._endEmitted = true
    this.emit('end')
    if (this._parent)
      this._parent._processQueue()
  }
}

Test.prototype._processQueue = function () {
  if (this._bailedOut)
    return

  if (this._processingQueue)
    return

  this._processingQueue = true
  while (this._queue.length && !this._currentChild) {
    var q = this._queue.shift()
    var m = q.shift()
    this[m].apply(this, q)
  }
  this._processingQueue = false
}

Test.prototype._shouldAutoend = function () {
  var should = (
    this._autoend &&
    !this._currentChild &&
    !this._queue.length &&
    !this._ending &&
    this._plan === -1
  )
  return should
}

Test.prototype._maybeAutoend = function () {
  if (this._autoendTimer)
    clearTimeout(this._autoendTimer)

  if (this._shouldAutoend()) {
    var self = this
    self._autoendTimer = setTimeout(function () {
      if (self._shouldAutoend()) {
        self._autoendTimer = setTimeout(function () {
          if (self._shouldAutoend()) {
            self.end()
            self._bailedOut = true
          }
        })
      }
    })
  }
}

Test.prototype.autoend = function () {
  this._autoend = true
  this._maybeAutoend()
}

Test.prototype._read = function (n, cb) {}

Test.prototype.printResult = function printResult (ok, message, extra) {
  if (this._bailedOut)
    return

  if (typeof ok !== 'boolean')
    throw new TypeError('boolean `ok` required')

  if (message === undefined)
    throw new TypeError('string `message` required')

  message += ''

  if (extra && typeof extra !== 'object')
    throw new TypeError('optional `extra` arg must be object')

  extra = extra || {}

  var n = this._count + 1
  if (this._plan !== -1 && n > this._plan) {
    // Don't over-report failures.
    // it's already had problems, just ignore this.
    if (!this._ok)
      return

    var er = new Error('test count exceeds plan')
    Error.captureStackTrace(er, this._currentAssert || printResult)
    var c = this
    var name = this._name
    while (c = c._parent) {
      name += ' < ' + (c._name || '(unnamed test)')
    }
    er.test = name
    er.count = n
    er.plan = this._plan
    throw er
  }

  if (this._ended)
    throw new Error('test after end() was called')

  var fn = this._currentAssert
  this._currentAssert = null
  if (!ok && !extra.skip && !hasOwn(extra, 'at')) {
    assert.equal(typeof fn, 'function')
    extra.at = stack.at(fn)
    if (!extra.todo)
      extra.stack = stack.captureString(80, fn)
  }

  if (this._autoendTimer)
    clearTimeout(this._autoendTimer)

  if (this._currentChild) {
    // Might get abandoned in queue
    if (!hasOwn(extra, 'at'))
      extra.at = stack.at(fn)
    this._queue.push(['printResult', ok, message, extra])
    return
  }

  var res = { ok: ok, message: message, extra: extra }

  if (extra.todo) {
    this._todo++
    this._todos.push(res)
  }
  if (extra.skip) {
    this._skip++
    this._skips.push(res)
  }

  if (ok) {
    this._pass++
    this._passes.push(res)
  } else {
    this._fail++
    this._fails.push(res)
  }
  this._count++

  this.emit('result', res)
  if (message)
    message = ' - ' + message

  message = message.replace(/[\n\r]/g, ' ').replace(/\t/g, '  ')

  this.push(util.format('%s %d%s', ok ? 'ok' : 'not ok', n, message))

  var ending = false
  if (n === this._plan)
    ending = true

  if (extra.skip) {
    this.push(' # SKIP')
    if (typeof extra.skip === 'string')
      this.push(' ' + extra.skip)
  } else if (extra.todo) {
    this._todo++
    this.push(' # TODO')
    if (typeof extra.todo === 'string')
      this.push(' ' + extra.todo)
  }

  if (!ok && !extra.todo && !extra.skip)
    this._ok = false

  this.push('\n')

  // If we're skipping, no need for diags.
  if (!ok && !extra.skip)
    this.writeDiags(extra)

  if (this._bail && !ok && !extra.skip && !extra.todo)
    this.bailout(message.replace(/^ - /, ''))

  if (ending)
    this.end()

  this._maybeAutoend()
}

function cleanYamlObj(object, isRoot, seen) {
  if (object === undefined)
    return null

  if (typeof object === 'function')
    return object.toString()

  if (Buffer.isBuffer(object)) {
    return 'Buffer\n' + object.toString('hex').split('').reduce(function (set, c) {
      if (set.length && set[set.length - 1].length === 1) {
        set[set.length - 1] += c
        if (set.length && set.length % 20 === 0)
          set[set.length - 1] += '\n'
        else
          set[set.length - 1] += ' '
      } else
        set.push(c)
      return set
    }, []).join('').trim()
  }

  if (object && typeof object === 'object') {
    if (object instanceof RegExp)
      return object.toString()

    var isArray = Array.isArray(object)

    // Fill in any holes.  This means we lose expandos,
    // but we were gonna lose those anyway.
    if (isArray) {
      object = Array.apply(null, object)
    }

    var set = isArray ? [] : {}
    var keys = Object.getOwnPropertyNames(object)
    var stack = null
    var newObj = keys.reduce(function (set, k) {
      if (isRoot && (k === 'todo' || k === 'skip'))
        return set

      // magic property!
      if (isArray && k === 'length')
        return set

      // Don't dump massive EventEmitter and Domain
      // objects onto the output, that's never friendly.
      if (object &&
          typeof object === 'object' &&
          object instanceof Error &&
          /^domain/.test(k))
        return set

      if (isRoot && k === 'at' && !object[k])
        return set

      if (isRoot && k === 'stack') {
        stack = object[k]
        return set
      }

      if (seen.indexOf(object[k]) !== -1) {
        set[k] = '[Circular]';
      } else {
        set[k] = cleanYamlObj(object[k], false, seen.concat([object]))
      }
      return set
    }, set)
    if (stack)
      newObj.stack = stack
    return newObj
  }

  return object
}

Test.prototype.writeDiags = function (extra) {
  var file = extra.at && extra.at.file && path.resolve(extra.at.file)
  if (file && (file.indexOf(__dirname) === 0 || file.indexOf(binpath) === 0))
    delete extra.at

  if (extra.at && extra.at.file && extra.at.line && !extra.source) {
    var content
    var file = path.resolve(extra.at.file)
    try {
      content = Module.wrap(fs.readFileSync(file))
    } catch (er) {}
    if (content) {
      content = (content.split('\n')[extra.at.line - 1] || '').trim()
      if (content)
        extra.source = content + '\n'
    }
  }

  // some objects are not suitable for yaml.
  var obj = cleanYamlObj(extra, true, [])

  if (obj && typeof obj === 'object' && Object.keys(obj).length) {
    var y = yaml.safeDump(obj).split('\n').map(function (l) {
      return l.trim() ? '  ' + l : l.trim()
    }).join('\n')
    y = '  ---\n' + y + '  ...\n'
    this.push(y)
  }
}

Test.prototype.passing = function () {
  return this._ok
}

Test.prototype.pass = function pass (message, extra) {
  if (!this._currentAssert)
    this._currentAssert = pass
  this.printResult(true, message || '(unnamed test)', extra)
  return true
}

Test.prototype.fail = function fail (message, extra) {
  if (!this._currentAssert)
    this._currentAssert = fail

  if (message && typeof message === 'object') {
    extra = message
    message = ''
  } else {
    if (!message)
      message = ''
    if (!extra)
      extra = {}
  }

  this.printResult(false, message, extra)

  var ret = true
  if (!extra.todo && !extra.skip)
    this._ok = ret = false

  return ret
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
    if (!this._currentAssert)
      this._currentAssert = ASSERT
    var args = new Array(length + 2)
    for (var i = 0; i < length; i ++) {
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

Test.prototype.comment = function () {
  if (this._bailedOut)
    return

  if (this._currentChild) {
    this._queue.push(['comment', message])
    return
  }

  var message = util.format.apply(util, arguments)
  message = '# ' + message.split(/\r?\n/).join('\n# ')

  this.push(message + '\n')
}

Test.prototype.push = function (c, e) {
  if (this._bailedOut)
    return true

  // We *always* want data coming out immediately.  Test runners have a
  // very special relationship with zalgo. It's more important to ensure
  // that any console.log() lines that appear in the midst of tests are
  // not taken out of context
  if (this._readableState)
    this._readableState.sync = false

  if (!this._printedVersion && !this._parent) {
    this._printedVersion = true
    Readable.prototype.push.call(this, 'TAP version 13\n')
  }

  return Readable.prototype.push.call(this, c, e)
}

Test.prototype.bailout = function (message) {
  message = message ? ' # ' + ('' + message).trim() : ''
  message = message.replace(/^( #)+ /, ' # ')
  message = message.replace(/[\r\n]/g, ' ')
  this.push('Bail out!' + message + '\n')
  this._bailedOut = true
  this._ok = false
  this.emit('bailout', message)
  this.push(null)
}

// Add all the asserts
tapAsserts.decorate(Test.prototype)
