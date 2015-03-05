module.exports = Test
var Readable = require('stream').Readable
var util = require('util')
var yaml = require('js-yaml')
var domain = require('domain')

util.inherits(Test, Readable)

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

Test.prototype.test = function (name, extra, cb) {
  if (this._bailedOut)
    return

  if (this._currentChild) {
    this._queue.push(['test', name, extra, cb])
    return
  }

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
    self.assert(child._ok, name, extra)
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

// TODO: replace with pluggable assertion module somehow?
// At least move all the fancy assertion logic to a separate module.
Test.prototype.ok =
Test.prototype.assert = function (value, message, extra) {
  if (this._bailedOut)
    return

  if (this._currentChild) {
    this._queue.push(['assert', value, message, extra])
    return
  }

  if (typeof message === 'object') {
    extra = message
    message = ''
  }

  message = message || ''

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

  var ending = false
  if (n === this._plan)
    ending = true

  var ok
  if (value) {
    this._pass++
    ok = 'ok'
  } else {
    this._fail++
    ok = 'not ok'
  }
  this.push(util.format('%s %d %s', ok, n, message))
  extra = extra || {}

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

  if (!value && !extra.todo)
    this._ok = false

  this.push('\n')

  if (!value || extra.todo || extra.skip) {
    var keys = Object.getOwnPropertyNames(extra).filter(function (k) {
      return k !== 'todo' && k !== 'skip'
    })

    // some objects are not suitable for yaml.
    var obj = keys.reduce(function (set, k) {
      if (extra[k] === undefined)
        set[k] = null
      else if (k === 'stack' && (extra instanceof Error))
        set[k] = extra[k].split('\n')
      else
        set[k] = extra[k]
      return set
    }, {})

    if (keys.length) {
      var y = '  ' + yaml.safeDump(obj).split('\n').join('\n  ')
      y = '  ---\n' + y + '...\n'
      this.push(y)
    }
  }

  if (ending)
    this.end()
}

Test.prototype.pass = function (message, extra) {
  return this.assert(true, message, extra)
}

Test.prototype.fail = function (message, extra) {
  return this.assert(false, message, extra)
}

Test.prototype.equal = function (found, want, message, extra) {
  return this.assert(found === want, message, extra)
}

Test.prototype.same = function (found, want, message, extra) {
  try {
    require('assert').deepEqual(found, want)
    this.pass(message || 'should be similar')
  } catch (er) {
    this.fail(message, er)
  }
}

Test.prototype.comment = function (message) {
  if (this._bailedOut)
    return

  if (this._currentChild) {
    this._queue.push(['comment', message])
    return
  }

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
