module.exports = Test

var Readable = require('stream').Readable
var util = require('util')
util.inherits(Test, Readable)

var yaml = require('js-yaml')
var domain = require('domain')
var stack = require('./stack.js')
var tapAsserts = require('./assert.js')
var assert = require('assert')
var spawn = require('child_process').spawn
var Parser = require('tap-parser')
var path = require('path')

function hasOwn (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function Test (options) {
  options = options || {}

  if (!(this instanceof Test))
    return new Test(options)

  this._name = ''
  this._ok = true
  this._pass = 0
  this._fail = 0
  this._skip = 0
  this._todo = 0
  this._count = 0
  this._bailedOut = false

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

  this._domain = domain.create()
  this._domain.add(this)
  this._domain.owner = this
  this._domain.on('error', domainError)

  if (options.timeout !== Infinity && !isNaN(options.timeout) && options.timeout > 0) {
    var timeout = options.timeout || 30000
    var self = this
    var timerAt = stack.at(Test.prototype.test)
    if (!timerAt.file)
      timerAt = stack.at(Test)
    this._timer = setTimeout(function () {
      self._queue = self._queue.filter(function (q) {
        return q[0] !== 'end'
      })
      self._plan = -1
      self.fail('timeout!', { at: timerAt })
      self.endAll()
    }, timeout)
    if (this._timer.unref)
      this._timer.unref()
  }

  this._startTime = process.hrtime()

  Readable.apply(this, options)
}

function domainError (er) {
  delete er.domain
  delete er.domainThrown
  this.owner.threw(er)
}

Test.prototype.endAll = function () {
  var child = this._currentChild
  if (child) {
    child.endAll()
    child.end()
    child.emit('end')
    child._bailedOut = true
  }

  this.end()
}

Test.prototype._extraFromError = function (er, extra) {
  extra = extra || {}

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

  child._name = name
  child._parent = this
  this._currentChild = child
  var self = this
  childStream(self, child)
  var results
  child.on('complete', function (res) {
    results = res
  })
  child.on('end', function () {
    if (child._threw && child._ok) {
      extra.error = child._threw
      if (extra.error.stack)
        extra.error.stack = stack.clean(extra.error.stack)
    }
    extra.results = results
    self._currentChild = null
    name += ' # time=' + results.time + 'ms'
    self.ok(child._ok, name, extra)
    if (!self._ended)
      self.push('\n')
    self._processQueue()
  })
  child.on('bailout', function (message) {
    self.bailout(message)
  })

  // still need try/catch for synchronous errors
  self._level = child
  child.comment('Subtest: ' + name)
  try {
    child._domain.bind(cb)(child)
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

function childStream (self, child) {
  var linebuf = ''
  child.on('data', function (c) {
    linebuf += c
    var lines = linebuf.split('\n')
    linebuf = lines.pop()
    lines.forEach(function (line) {
      self.push('    ' + line + '\n')
    })
  })
  child.on('end', function () {
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

  if (this._currentChild) {
    this._queue.push(['spawn', cmd, args, options, name, extra])
    return
  }

  if (extra.skip)
    return this.pass(name, extra)

  var start = process.hrtime()
  var child = spawn(cmd, args, options)
  var parser = new Parser()
  var self = this
  this._currentChild = child

  childStream(self, child.stdout)

  child.stdout.on('data', function (c) {
    parser.write(c)
  })

  child.stdout.emit('data', '# Subtest: ' + name + '\n')

  child.stdout.on('end', function () {
    parser.end()
  })

  var results
  parser.on('complete', function (res) {
    results = res
  })

  child.on('close', function onclose (code, signal) {
    self._currentChild = null
    extra.results = results
    var dur = process.hrtime(start)
    var time = Math.round(dur[0] * 1e6 + dur[1] / 1e3) / 1e3
    name += ' # time=' + time + 'ms'
    if (code)
      extra.exitCode = code
    if (signal)
      extra.signal = signal
    extra.command = cmd
    extra.arguments = args
    extra.options = options
    self.ok(results.ok, name, extra)
    if (!self._ended)
      self.push('\n')
    self._processQueue()
  })

  parser.on('bailout', function (message) {
    self.bailout(message)
  })

  if (child.stderr) {
    child.stderr.on('data', function (c) {
      process.stderr.write(c)
    })
  }
}

Test.prototype.end = function end () {
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
  while (this._count < this._plan) {
    this.fail('missing test', { at: false })
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
  process.nextTick(function () {
    self.push(null)
  })
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

Test.prototype._read = function (n, cb) {}



Test.prototype.printResult = function printResult (ok, message, extra) {
  if (this._bailedOut)
    return

  if (typeof ok !== 'boolean')
    throw new TypeError('boolean `ok` required')

  if (typeof message !== 'string')
    throw new TypeError('string `message` required')

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

  if (this._currentChild) {
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

  if (message)
    message = ' - ' + message

  message = message.replace(/[\n\r]/g, ' ').replace(/\t/g, '  ')

  this.push(util.format('%s %d%s', ok ? 'ok' : 'not ok', n, message))

  var ending = false
  if (n === this._plan)
    ending = true

  if (extra.skip) {
    this._skip++
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

  if (ending)
    this.end()
}

function cleanYamlObj(object, isRoot) {
  if (object === undefined)
    return null

  if (typeof object === 'function')
    return object.toString()

  if (object && typeof object === 'object') {
    var set = Array.isArray(object) ? [] : {}
    var keys = Object.getOwnPropertyNames(object)
    return keys.reduce(function (set, k) {
      if (isRoot && (k === 'todo' || k === 'skip'))
        return set

      if (isRoot && k === 'at' && !object[k])
        return set

      set[k] = cleanYamlObj(object[k], false)
      return set
    }, set)
  }

  return object
}

Test.prototype.writeDiags = function (extra) {
  // some objects are not suitable for yaml.
  var obj = cleanYamlObj(extra, true)

  if (Object.keys(obj).length) {
    var y = '  ' + yaml.safeDump(obj).split('\n').join('\n  ')
    y = '  ---\n' + y + '...\n'
    this.push(y)
  }
}

Test.prototype.passing = function () {
  return this._ok
}

Test.prototype.pass = function pass (message, extra) {
  if (!this._currentAssert)
    this._currentAssert = pass
  this.printResult(true, message || '', extra)
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

  var ret = true
  if (!extra.todo && !extra.skip)
    this._ok = ret = false

  this.printResult(false, message, extra)
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

  if (!this._printedVersion && !this._parent) {
    this._printedVersion = true
    Readable.prototype.push.call(this, 'TAP version 13\n')
  }

  return Readable.prototype.push.call(this, c, e)
}

Test.prototype.bailout = function (message) {
  message = message ? ' # ' + message.trim() : ''
  message = message.replace(/^( #)+ /, ' # ')
  this.push('Bail out!' + message + '\n')
  this._bailedOut = true
  this._ok = false
  this.emit('bailout', message)
  this.push(null)
}

// Add all the asserts
tapAsserts.decorate(Test.prototype)
