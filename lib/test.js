module.exports = Test

var Readable = require('stream').Readable
var util = require('util')
util.inherits(Test, Readable)

var yaml = require('js-yaml')
var domain = require('domain')
var stack = require('./stack.js')
var assert = require('./assert.js')

function Test (options) {
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

  Readable.apply(this, options)
}

function domainError (er) {
  delete er.domain
  delete er.domainThrown
  this.owner.threw(er)
}

Test.prototype.threw = function (er, proxy) {
  this._ok = false
  this._threw = this._threw || er

  // If we've already ended, then try to pass this up the chain
  // Presumably, eventually the root harness will catch it and
  // deal with it, since that only ends on process exit.
  if (this._ended) {
    if (this._parent)
      return this._parent.threw(er, true)
    else
      throw er
  }

  this.fail(er.name + ": " + er.message, er)
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

  if (typeof cb !== 'function')
    throw new Error('test() requires a callback')

  if (extra.skip) {
    return this.pass(name, extra)
  }

  // will want this captured now in case child fails.
  extra.at = extra.at || stack.at(test)

  if (this._currentChild) {
    this._queue.push(['test', name, extra, cb])
    return
  }

  this.comment(name)
  var child = new Test()

  child._name = name
  child._parent = this
  this._currentChild = child
  var linebuf = ''
  var self = this
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

    self._currentChild = null
    self.ok(child._ok, name, extra)
    self._processQueue()
  })
  child.on('bailout', function (message) {
    self.bailout(message)
  })

  // still need try/catch for synchronous errors
  try {
    child._domain.bind(cb)(child)
  } catch (er) {
    child.threw(er)
  }
}

Test.prototype.end = function () {
  if (this._bailedOut)
    return

  if (this._ended || this._ending)
    return

  if (this._currentChild) {
    this._queue.push(['end'])
    return
  }

  // Emiting the missing tests can trigger a call to end()
  // guard against that with the 'ending' flag
  this._ending = true
  while (this._count < this._plan) {
    this.fail('missing test')
  }

  if (this._plan === -1)
    this.plan(this._count)

  var final = {
    plan: this._plan,
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
  this.emit('complete', final)
  this.push(null)
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



Test.prototype.printResult = function (ok, message, extra) {
  if (this._bailedOut)
    return

  if (typeof ok !== 'boolean')
    throw new TypeError('boolean `ok` required')

  if (typeof message !== 'string')
    throw new TypeError('string `message` required')

  if (extra && typeof extra !== 'object')
    throw new TypeError('optional `extra` arg must be object')

  extra = extra || {}

  var n = ++this._count
  if (this._plan !== -1 && n > this._plan) {
    var er = new Error('test count exceeds plan')
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
  if (!ok && !extra.skip && !extra.at && !extra.stack) {
    require('assert')(fn)
    extra.at = stack.at(fn)
    extra.stack = stack.captureString(80, fn).split('\n')
  }

  if (this._currentChild) {
    this._queue.push(['printResult', ok, message, extra])
    return
  }

  if (message)
    message = ' - ' + message

  this.push(util.format('%s %d%s', ok ? 'ok' : 'not ok', n, message))

  var ending = false
  if (n === this._plan)
    ending = true

  if (extra.skip) {
    this._skip++
    this.push('# SKIP')
    if (typeof extra.skip === 'string')
      this.push(' ' + extra.skip)
  } else if (extra.todo) {
    this._todo++
    this.push('# TODO')
    if (typeof extra.todo === 'string')
      this.push(' ' + extra.todo)
  }

  if (!ok && !extra.todo)
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

  if (object && typeof object === 'object') {
    var set = Array.isArray(object) ? [] : {}
    var keys = Object.getOwnPropertyNames(object)
    return keys.reduce(function (set, k) {
      if (isRoot && (k === 'todo' || k === 'skip'))
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

Test.prototype.pass = function pass (message) {
  if (!this._currentAssert)
    this._currentAssert = pass
  return this.printResult(true, message || '')
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

  return this.printResult(false, message, extra)
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
assert.decorate(Test.prototype)
