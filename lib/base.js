module.exports = Base

var Readable = require('stream').Readable
/* istanbul ignore if */
if (!Readable || process.version.match(/^v0\.10/)) {
  Readable = require('readable-stream').Readable
}

var extraFromError = require('./extra-from-error.js')
var assert = require('assert')
var cleanYamlObject = require('./clean-yaml-object.js')

var domain = require('domain')
var util = require('util')
util.inherits(Base, Readable)

var Parser = require('tap-parser')

var ownOr = require('own-or')
var ownOrEnv = require('own-or-env')

function Base (options) {
  this.start = 0
  this.readyToProcess = false
  this.options = options
  this.parent = ownOr(options, 'parent', null)
  this.bail = ownOrEnv(options, 'bail', 'TAP_BAIL', true)
  this.name = ownOr(options, 'name', '')
  this.indent = ownOr(options, 'indent', '')
  this.silent = !!options.silent
  this.buffered = !!options.buffered || !!options.silent
  this.finished = false
  this.strict = ownOrEnv(options, 'strict', 'TAP_STRICT', true)
  this.omitVersion = !!options.omitVersion
  this.preserveWhitespace = ownOr(options, 'preserveWhitespace', true)
  this.jobs = +ownOrEnv(options, 'jobs', 'TAP_JOBS') || 0
  this.skip = ownOr(options, 'skip', false)
  this.todo = ownOr(options, 'todo', false)
  this.setupParser(options)
  this.finished = false
  this.output = ''
  this.results = null
  this.bailedOut = false
  if (this.skip || this.todo)
    this.main = Base.prototype.main

  Readable.apply(this, options)

  domain.create().add(this)
  this.domain.on('error', this.threw.bind(this))

  if (typeof options.debug === 'boolean')
    this.debug = options.debug ? debug : nodebug
}

Base.prototype.passing = function () {
  return this.parser.ok
}

Base.prototype.setTimeout = function (n) {
  if (!n) {
    clearTimeout(this.timer)
    this.timer = null
  } else {
    this.start = Date.now()
    this.timer = setTimeout(this.timeout.bind(this), n)
    this.timer.unref()
  }
}

Base.prototype.threw = function (er, extra, proxy) {
  if (this.name && !proxy)
    er.test = this.name

  if (!extra)
    extra = extraFromError(er, extra, this.options)

  this.parser.ok = false
  if (this.results) {
    this.results.ok = false
    if (this.parent)
      this.parent.threw(er, extra, true)
    else
      console.error(er, er.stack)
  }
  return extra
}

Base.prototype.timeout = function (options) {
  this.setTimeout(false)
  options = options || this.options
  options.expired = this.name
  if (!this.results)
    this.parser.abort('timeout!', cleanYamlObject(options))
  else
    this.threw(new Error('timeout!'), options)
}

Base.prototype.main = function (cb) {
  cb()
}

Base.prototype.online = function (line) {
  this.debug('LINE %j', line)
  return this.push(this.indent + line)
}

Base.prototype.push = function (c, e) {
  assert.equal(typeof c, 'string')
  assert.equal(c.substr(-1), '\n')

  if (this.buffered) {
    this.output += c
    return true
  }

  // We *always* want data coming out immediately.  Test runners have a
  // very special relationship with zalgo. It's more important to ensure
  // that any console.log() lines that appear in the midst of tests are
  // not taken out of context
  if (this._readableState) {
    this._readableState.sync = false
  }

  // this.debug(this._readableState)
  return Readable.prototype.push.call(this, c, e)
}

Base.prototype.onbail = function (reason) {
  this.bailedOut = reason || true
  this.emit('bailout', reason)
}

Base.prototype.oncomplete = function (results) {
  this.debug('ONCOMPLETE %j %j', this.name, results)
  this.results = results
  if (this.process)
    this.process()
  this.emit('end')
}

Base.prototype.setupParser = function (options) {
  this.parser = new Parser({
    bail: this.bail,
    strict: this.strict,
    omitVersion: this.omitVersion,
    preserveWhitespace: this.preserveWhitespace
  })
  assert(this.parser.preserveWhitespace)
  this.parser.on('line', this.online.bind(this))
  this.parser.once('bailout', this.onbail.bind(this))
  this.parser.on('complete', this.oncomplete.bind(this))
}

Base.prototype._read = function (n) {
  // this.emit('readable')
  // this.debug('_read %j', this.name, arguments)
}

Base.prototype.inspect = function () {
  return this.constructor.name + ' ' + util.inspect({
    name: this.name,
    jobs: this.jobs,
    buffered: this.buffered,
    pool: this.pool,
    queue: this.queue,
    subtests: this.subtests,
    output: this.output,
    skip: this.skip,
    todo: this.todo,
    results: this.results
  })
}

Base.prototype.debug = (/\btap\b/i.test(process.env.NODE_DEBUG || ''))
  ? debug : nodebug

function nodebug () {}

function debug () {
  var prefix = 'TAP ' + process.pid + ' ' + this.name + ': '
  var msg = util.format.apply(util, arguments).trim()
  msg = prefix + msg.split('\n').join('\n' + prefix)
  console.error(msg)
}
