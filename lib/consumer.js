// Transforms a stream of TAP into a stream of result objects
// and string comments.  Emits "results" event with summary.
var Writable = require('stream').Writable
var yaml = require('js-yaml')
var util = require('util')

util.inherits(Consumer, Writable)

module.exports = Consumer

function Consumer (options) {
  options = options || {}
  this.indent = options.indent || ''
  this.level = options.level || 0
  Writable.call(this, { objectMode: true })
  this.buffer = ''
  this.bailedOut = false
  this.ending = false
  this.plan = -1
  this.yamlish = ''
  this.yind = ''
  this.child = null
  this.current = null

  this.count = 0
  this.pass = 0
  this.fail = 0
  this.todo = 0
  this.skip = 0
  this.ok = true

  this.postPlan = false
  this.bailedOut = false

  if (options.debug)
    this.debug = debug
}

Consumer.prototype.processYamlish = function () {
  var yamlish = this.yamlish
  this.yamlish = ''
  this.yind = ''

  if (!this.current) {
    this.emit('garbage', yamlish)
    return
  }

  try {
    var diags = yaml.safeLoad(yamlish)
  } catch (er) {
    this.emit('garbage', yamlish)
    return
  }

  this.current.diag = diags
  this.emitResult()
}

Consumer.prototype.debug = function () {}

function debug () {
  var m = util.format.apply(util, arguments)
  console.error(this.indent + m)
}

Consumer.prototype.write = function (chunk, encoding, cb) {
  if (typeof encoding === 'string' && encoding !== 'utf8')
    chunk = new Buffer(chunk, encoding)

  if (Buffer.isBuffer(chunk))
    chunk += ''

  if (typeof encoding === 'function') {
    cb = encoding
    encoding = null
  }

  if (this.bailedOut) {
    if (cb)
      process.nextTick(cb)
    return true
  }

  this.buffer += chunk
  do {
    var match = this.buffer.match(/^.*\r?\n/)
    if (!match || this.bailedOut)
      break

    this.buffer = this.buffer.substr(match[0].length)
    this._parse(match[0])
  } while (this.buffer.length)

  if (cb)
    process.nextTick(cb)
  return true
}

Consumer.prototype.end = function (chunk, encoding, cb) {
  if (chunk) {
    if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }
    this.write(chunk, encoding)
  }

  this.ending = true
  if (this.buffer)
    this.write('\n')

  // if we have yamlish, means we didn't finish with a ...
  if (this.yamlish)
    this.emit('garbage', this.yamlish)

  this.emitResult()

  if (this.count !== this.plan)
    this.ok = false

  var final = {
    plan: this.plan,
    count: this.count,
    pass: this.pass,
    ok: this.ok
  }

  if (this.fail)
    final.fail = this.fail

  if (this.bailedOut)
    final.bailout = true

  if (this.todo)
    final.todo = this.todo

  if (this.skip)
    final.skip = this.skip

  this.emit('complete', final)

  Writable.prototype.end.call(this, null, null, cb)
}

Consumer.prototype.bailout = function (reason) {
  this.bailedOut = true
  this.ok = false
  this.emit('bailout', reason)
}

Consumer.prototype.emitResult = function () {
  if (this.child) {
    this.child.end()
    this.child = null
  }

  this.yamlish = ''
  this.yind = ''

  if (!this.current)
    return

  var res = this.current
  this.current = null

  this.count++
  if (res.ok) {
    this.pass++
  } else {
    this.fail++
    if (!res.todo)
      this.ok = false
  }
  if (res.skip)
    this.skip++
  if (res.todo)
    this.todo++

  this.emit('result', res)
}

Consumer.prototype.startChild = function (indent, line) {
  this.emitResult()

  this.child = new Consumer({
    indent: indent,
    parent: this,
    level: this.level + 1
  })

  this.emit('child', this.child)
  this.child.on('bailout', this.bailout.bind(this))
  var self = this
  this.child.on('complete', function (results) {
    if (!results.ok)
      self.ok = false
  })
  this.child.write(line.substr(indent.length))
}

Consumer.prototype._parse = function (line) {
  this.debug('      > %j', line)

  // normalize line endings
  line = line.replace(/\r\n$/, '\n')

  // ignore empty lines
  if (line === '\n')
    return

  // After a bailout, everything is ignored
  if (this.bailedOut)
    return

  // comment
  if (line.match(/^\s*#/)) {
    this.emit('comment', line)
    return
  }

  var bailout = line.match(/^bail out!(.*)\n$/i)
  if (bailout) {
    var reason = bailout[1].trim()
    this.bailout(reason)
    return
  }

  // If version is specified, must be at the very beginning.
  var version = line.match(/^TAP Version ([0-9]+)\n$/i)
  if (version) {
    if (this.plan === -1 && this.count === 0)
      this.emit('version', version[1])
    else
      this.emit('garbage', line)
    return
  }

  // if we got a plan at the end, or a 1..0 plan, then we can't
  // have any more results, yamlish, or child sets.
  if (this.postPlan) {
    this.emit('garbage', line)
    return
  }

  // still belongs to the child.
  if (this.child && line.indexOf(this.child.indent) === 0) {
    line = line.substr(this.child.indent.length)
    this.debug('child line %j', line)
    this.child.write(line)
    return
  }

  var indent = line.match(/^[ \t]+/)
  if (indent) {
    indent = indent[0]

    this.debug('indent %j', indent)

    // if we don't have a current res, then it can't be yamlish,
    // must be a child result set
    if (!this.current) {
      this.debug('no current, start child', line)
      this.startChild(indent, line)
      return
    }

    // if we are not currently processing yamlish, then it has to
    // be either the start of a child, or the start of yamlish.
    if (!this.yind) {
      this.debug('no yind yet')
      // either this starts yamlish, or it is a child.
      if (line === indent + '---\n') {
        this.debug('yamlish start %j', line)
        this.yind = indent
      } else {
        this.debug('not yamlish start %j', line)
        this.startChild(indent, line)
      }
      return
    }

    // now we know it is yamlish

    // if it's not as indented, then it's broken.
    // The whole yamlish chunk is garbage.
    if (indent.indexOf(this.yind) !== 0) {
      // oops!  was not actually yamlish, I guess.
      // treat as garbage
      this.debug('garbage! %j %j', this.yind, indent)
      this.emit('garbage', this.yamlish + line)
      this.emitResult()
      return
    }

    // yamlish ends with "...\n"
    if (line === this.yind + '...\n') {
      this.processYamlish()
      return
    }

    // ok!  it is valid yamlish indentation, and not the ...
    // save it to parse later.
    this.yamlish += line
    return
  }

  // not indented.  if we were doing yamlish, then it didn't go good
  if (this.yind) {
    this.emit('garbage', this.yamlish)
    this.yamlish = ''
    this.yind = ''
  }

  this.emitResult()

  var plan = line.match(/^([0-9]+)\.\.([0-9]+)(?:\s+(#.*))?\n$/)
  if (plan) {
    if (this.plan !== -1) {
      // this is not valid tap, just garbage
      this.emit('garbage', line)
      return
    }

    var start = +(plan[1])
    var end = +(plan[2])
    var comment = plan[3]
    this.debug('    > plan', start, end, comment)
    this.plan = end
    this.emit('plan', this.plan)
    if (comment)
      this.emit('comment', comment + '\n')

    // This means that the plan is coming at the END of all the tests
    // Plans MUST be either at the beginning or the very end.  We treat
    // plans like '1..0' the same, since they indicate that no tests
    // will be coming.
    if (this.count !== 0 || this.plan === 0)
      this.postPlan = true

    return
  }

  var parsed = line.match(/^(not )?ok(?: ([0-9]+))?(?:(?: - )?(.*))?\n$/)
  this.debug('parsed', parsed)
  if (!parsed) {
    this.debug('  not a tap line, I guess %j', line)
    this.emit('garbage', line)
    return
  }

  var ok = !parsed[1]
  var id = +(parsed[2] || this.count)
  var res = { id: id, ok: ok }

  var rest = parsed[3] || ''
  var name
  rest = rest.replace(/([^\\]|^)((?:\\\\)*)#/g, '$1\n$2').split('\n')
  name = rest.shift()
  rest = rest.filter(function (r) { return r.trim() }).join('#')

  // now, let's see if there's a directive in there.
  var dir = this._parseDirective(rest.trim())
  if (!dir) {
    name += rest ? '#' + rest : ''
  } else {
    res.ok = true
    if (dir.skip) res.skip = true
    else if (dir.todo) res.todo = true
    if (dir.explanation) res.explanation = dir.explanation
  }

  if (name)
    res.name = name.trim()

  // hold onto it, because we might get yamlish diagnostics
  this.current = res
  this.debug('current', res)
}

Consumer.prototype._parseDirective = function (line) {
  line = line.trim()
  if (line.match(/^TODO\b/i)) {
    return { todo: true, explanation: line.replace(/^TODO\s*/i, '') }
  } else if (line.match(/^SKIP\b/i)) {
    return { skip: true, explanation: line.replace(/^SKIP\s*/i, '') }
  }
}

if (require.main === module) {
  var etoa = require('events-to-array')
  var consumer = new Consumer()
  var events = etoa(consumer, [ 'pipe', 'unpipe', 'prefinish', 'finish' ])

  process.stdin.pipe(consumer)
  process.on('exit', function () {
    console.log(util.inspect(events, null, Infinity))
  })
}
