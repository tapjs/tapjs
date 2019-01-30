'use strict'
const Base = require('./base.js')

const {
  Worker,
  isMainThread,
  workerData,
  threadId
} = require('worker_threads')

// fork a worker that loads this file, with workerData set to some stuff
//
// When forked as a worker,
// 1. Set the env.NYC_PARENT_PID to pid+threadId
// 2. Load NYC and wrap the instrumenter, just like it would in wrap.js
// 3. Set process.argv and process.env
// 4. require('esm'), set up the global app loader hook
// 5. chdir to cwd
// 6. require the main script
//
// Otherwise, fork a worker with stdout=true so that it can be
// captured and parsed.

if (!isMainThread) {
  const { env, cwd, argv, execArgv, main } = workerData
  //process.env = env
  //process.argv = [process.execPath, main].concat(argv)
  //process.execArgv = execArgv
  //if (cwd !== process.cwd())
  //  process.chdir(cwd)
  console.error('in worker pid=%j tid=%j', process.pid, threadId)
  //require('esm')
  require(main)
  return
}

const assert = require('assert')
const util = require('util')
const ownOr = require('own-or')
const path = require('path')
const cleanYamlObject = require('./clean-yaml-object.js')

class Thread extends Base {
  constructor (options) {
    options = options || {}
    super(options)

    this.file = path.resolve(options.file)
    if (!this.file)
      throw new Error('no filename provided to tap thread')

    this.execArgv = options.execArgv || []
    options.stdout = true

    const env = options.env || process.env
    this.env = Object.assign({}, env)

    this.env.TAP = '1'
    if (this.bail)
      this.env.TAP_BAIL = '1'

    this.args = ownOr(options, 'args', [])

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

    this.worker = null
  }

  endAll () {
    console.trace('endAll!')
    this.parser.abort('test unfinished')
    this.callCb()
    if (this.worker)
      this.terminate()
  }

  main (cb) {
    this.cb = cb
    this.setTimeout(this.options.timeout)
    const options = {
      workerData: {
        cwd: this.cwd,
        env: this.env,
        argv: this.args,
        main: this.file,
        execArgv: this.execArgv,
      },
      execArgv: this.execArgv,
      stdout: true,
    }
    try {
      const worker = this.worker = new Worker(__filename, options)
      worker.stdout.pipe(this.parser)
      worker.on('exit', (code) => this.onthreadexit(code, signal))
      worker.on('error', er => this.threw(er))
      this.emit('worker', worker)
      if (this.parent)
        this.parent.emit('thread', this)
    } catch (er) {
      this.threw(er)
    }
  }

  callCb () {
    if (this.cb)
      this.cb()
    this.cb = null
  }

  terminate () {
    console.error('terminate??')
    if (this.worker) {
      this.worker.stdout.removeAllListeners('data')
      this.worker.stdout.removeAllListeners('end')
      this.worker.removeAllListeners('exit')
      this.worker.terminate(() => this.callCb())
    } else
      this.callCb()
  }

  threw (er, extra, proxy) {
    extra = super.threw(er, extra, proxy)
    extra = cleanYamlObject(extra)
    // unhook entirely
    this.parser.abort(er.message, extra)
    this.terminate()
  }

  onthreadexit (code) {
    console.error('THREAD close %j %s', code)
    this.options.exitCode = code

    // closing with no tests is treated as a skip.
    if (this.results && this.results.plan && this.results.plan.skipAll && !code)
      this.options.skip = this.results.plan.skipReason || true

    if (code) {
      this.results.ok = false
      this.parser.ok = false
    }
    return this.callCb()
  }

  timeout (extra) {
    console.error('timeout!', extra)
    this.terminate()
    super.timeout(extra)
  }
}

module.exports = Thread
