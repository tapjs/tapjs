module.exports = Base

var Readable = require('stream').Readable
/* istanbul ignore if */
if (!Readable || process.version.match(/^v0\.10/)) {
  Readable = require('readable-stream').Readable
}

var assert = require('assert')

var util = require('util')
util.inherits(Base, Readable)

var Parser = require('tap-parser')

var ownOr = require('./own-or.js')
var ownOrEnv = require('./own-or-env.js')

function Base (options) {
  this.options = options
  this.bail = ownOrEnv(options, 'bail', 'TAP_BAIL', true)
  this.name = ownOr(options, 'name', '')
  this.indent = ownOr(options, 'indent', '')
  this.buffered = ownOrEnv(options, 'buffered', 'TAP_BUFFER', true)
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
  if (this.skip || this.todo)
    this.main = Base.prototype.main

  Readable.apply(this)
}

Base.prototype.main = function (cb) {
  this.finished = true
  cb()
}

Base.prototype.online = function (line) {
  this.push(this.indent + line)
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

  this.emit('line', c)

  return Readable.prototype.push.call(this, c, e)
}

Base.prototype.onbail = function (reason) {
  this.emit('bailout', reason)
}

Base.prototype.oncomplete = function (results) {
  this.results = results
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

Base.prototype._read = function (n, cb) {}
