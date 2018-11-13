'use strict'
const Base = require('./base.js')

const assert = require('assert')
const util = require('util')
const ownOr = require('own-or')
const path = require('path')
const cleanYamlObject = require('./clean-yaml-object.js')
const cp = require('child_process')

class Spawn extends Base {
  constructor (options) {
    options = options || {}
    super(options)

    this.command = options.command

    if (!this.command)
      throw new TypeError('no command provided')

    this.args = options.args
    // stdout must be a pipe
    if (options.stdio) {
      if (typeof options.stdio === 'string')
        this.stdio = [ options.stdio, 'pipe', options.stdio ]
      else
        this.stdio = options.stdio.slice(0)
    } else
      this.stdio = [ 0, 'pipe', 2 ]

    this.stdio[1] = 'pipe'
    options.stdio = this.stdio
    const env = options.env || process.env
    this.env = Object.assign({}, env)

    this.env.TAP = '1'
    if (this.bail)
      this.env.TAP_BAIL = '1'

    this.cwd = ownOr(options, 'cwd', process.cwd())
    options.cwd = this.cwd
    if (!this.name) {
      if (this.command === process.execPath) {
        this.name = path.basename(process.execPath) + ' ' +
          this.args.map(a =>
            a.indexOf(this.cwd) === 0 ?
              './' + a.substr(this.cwd.length + 1).replace(/\\/g, '/')
            : a).join(' ')
      } else {
        this.name = this.command + ' ' + this.args.join(' ')
      }
      this.name = this.name.replace(/\\/g, '/')
    }

    this.proc = null
  }

  endAll () {
    if (this.proc)
      this.proc.kill('SIGKILL')
    this.parser.abort('test unfinished')
    this.callCb()
  }

  main (cb) {
    this.cb = cb
    this.setTimeout(this.options.timeout)
    const options = Object.assign({
      cwd: this.cwd,
      env: this.env,
      stdio: this.stdio
    }, this.options)
    try {
      const proc = this.proc = cp.spawn(this.command, this.args, options)
      proc.stdout.pipe(this.parser)
      proc.on('close', (code, signal) => this.onprocclose(code, signal))
      proc.on('error', er => this.threw(er))
      this.emit('process', proc)
      if (this.parent)
        this.parent.emit('spawn', this)
    } catch (er) {
      this.threw(er)
    }
  }

  callCb () {
    if (this.cb)
      this.cb()
    this.cb = null
  }

  threw (er, extra, proxy) {
    extra = Base.prototype.threw.call(this, er, extra, proxy)
    extra = cleanYamlObject(extra)
    // unhook entirely
    this.parser.abort(er.message, extra)
    if (this.proc) {
      this.proc.stdout.removeAllListeners('data')
      this.proc.stdout.removeAllListeners('end')
      this.proc.removeAllListeners('close')
      this.proc.kill('SIGKILL')
    }
    this.callCb()
  }

  onprocclose (code, signal) {
    this.debug('SPAWN close %j %s', code, signal)
    this.options.exitCode = code
    if (signal)
      this.options.signal = signal

    // spawn closing with no tests is treated as a skip.
    if (this.results && this.results.plan && this.results.plan.skipAll && !code && !signal)
      this.options.skip = this.results.plan.skipReason || true

    if (code || signal) {
      this.results.ok = false
      this.parser.ok = false
    }
    return this.callCb()
  }

  timeout (extra) {
    if (this.proc) {
      this.proc.kill('SIGTERM')
      const t = setTimeout(() => {
        if (!this.options.signal && this.options.exitCode === undefined) {
          Base.prototype.timeout.call(this, extra)
          this.proc.kill('SIGKILL')
        }
      }, 1000)
      /* istanbul ignore else */
      if (t.unref)
        t.unref()
    }
  }
}

module.exports = Spawn
