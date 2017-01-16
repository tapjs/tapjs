var Base = require('./base.js')

var assert = require('assert')
var util = require('util')
util.inherits(Spawn, Base)
var ownOr = require('./own-or.js')
var path = require('path')

module.exports = Spawn

var cp = require('child_process')
var spawn = cp.spawn

function Spawn (options) {
  options = options || {}
  if (!(this instanceof Spawn))
    return new Spawn(options)

  Base.call(this, options)

  this.command = options.command
  if (!this.command) {
    throw new TypeError('no command provided')
  }

  this.args = options.args
  // stdout must be a pipe
  if (options.stdio) {
    if (typeof options.stdio === 'string') {
      this.stdio = [ options.stdio, 'pipe', options.stdio ]
    } else {
      this.stdio[1] = 'pipe'
    }
  } else
    this.stdio = [ 0, 'pipe', 2 ]

  if (!options.env)
    this.env = Object.keys(process.env).reduce(function (env, k) {
      env[k] = process.env[k]
      return env
    }, {})
  else
    this.env = options.env

  if (this.bail)
    this.env.TAP_BAIL = '1'

  this.cwd = ownOr(options, 'cwd', process.cwd())
  options.cwd = this.cwd
  if (!this.name) {
    if (this.command === process.execPath) {
      this.name = path.basename(process.execPath) + ' ' +
        this.args.map(function (a) {
          if (a.indexOf(this.cwd) === 0) {
            return './' +
              a.substr(this.cwd.length + 1).replace(/\\/g, '/')
          } else {
            return a
          }
        }, this).join(' ')
    } else {
      this.name = this.command + ' ' + this.args.join(' ')
    }
  }

  this.proc = null
}

Spawn.prototype.main = function (cb) {
  var options = Object.keys(this.options).reduce(function (o, k) {
    o[k] = this.options[k]
    return o
  }.bind(this), {
    cwd: this.cwd,
    env: this.env,
    stdio: this.stdio
  })
  var proc = this.proc = spawn(this.command, this.args, options)
  proc.stdout.pipe(this.parser)
  proc.on('close', this.onprocclose.bind(this, cb))
  proc.on('error', this.onprocerror.bind(this, cb))
}

Spawn.prototype.onprocerror = function (cb, er) {
  // unhook entirely
  this.proc.stdout.removeAllListeners('data')
  this.proc.stdout.removeAllListeners('end')
  this.proc.removeAllListeners('close')
  this.proc.kill('SIGKILL')
  cb(er)
}

Spawn.prototype.onprocclose = function (cb, code, signal) {
  this.debug('SPAWN close %j %s', code, signal)
  this.options.exitCode = code
  if (signal)
    this.options.signal = signal
  this.results = this.results || {}
  if (code || signal) {
    this.results.ok = false
    this.parser.ok = false
  }
  return cb()
}
