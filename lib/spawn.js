var Base = require('./base.js')

var assert = require('assert')
var util = require('util')
util.inherits(Spawn, Base)
var ownOr = require('./own-or.js')

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
  var spawnOpt = this.spawnOpt = options.spawnOpt || {}

  // stdout must be a pipe
  if (spawnOpt.stdio) {
    if (typeof spawnOpt.stdio === 'string') {
      spawnOpt.stdio = [ spawnOpt.stdio, 'pipe', spawnOpt.stdio ]
    } else {
      spawnOpt.stdio[1] = 'pipe'
    }
  }

  if (this.bail) {
    if (!spawnOpt.env) {
      spawnOpt.env = Object.keys(process.env).reduce(function (env, k) {
        env[k] = process.env[k]
        return env
      }, {})
    }
    spawnOpt.env.TAP_BAIL = '1'
  }

  this.cwd = ownOr(spawnOpt, 'cwd', process.cwd())
  spawnOpt.cwd = this.cwd
  if (!this.name) {
    if (this.name === process.execPath) {
      this.name = this.args.map(function (a) {
        if (a.indexOf(this.cwd) === 0) {
          return './' + a.substr(this.cwd.length + 1).replace(/\\/g, '/')
        } else {
          return a
        }
      }).join(' ')
    } else {
      this.name = this.command + ' ' + this.args.join(' ')
    }
  }

  this.proc = null
}

Spawn.prototype.main = function (cb) {
  var proc = this.proc = spawn(this.command, this.args, this.spawnOpt)
  proc.stdout.pipe(this.parser)
  proc.on('close', this.onprocclose.bind(this, cb))
  proc.on('error', function (er) {
    // unhook entirely
    proc.stdout.removeAllListeners('data')
    proc.stdout.removeAllListeners('end')
    proc.removeAllListeners('close')
    proc.kill('SIGKILL')
    cb(er)
  })
}

Spawn.prototype.onprocclose = function (cb, code, signal) {
  if (!code && !signal)
    return cb()
  this.options.exitCode = code
  this.options.signal = signal
  var er = new Error('command failed: ' + this.name)
  er.code = code
  er.signal = signal
  return cb(er)
}
