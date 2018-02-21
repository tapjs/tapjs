'use strict'

const MiniPass = require('minipass')

const extraFromError = require('./extra-from-error.js')
const assert = require('assert')
const cleanYamlObject = require('./clean-yaml-object.js')

const domain = require('domain')
const util = require('util')

/* istanbul ignore next */
const INSPECT = util.inspect.custom || 'inspect'

const Parser = require('tap-parser')

const ownOr = require('own-or')
const ownOrEnv = require('own-or-env')
const hrtime = require('browser-process-hrtime')

class Base extends MiniPass {
  constructor (options) {
    options = options || {}
    super(options)
    this.start = 0
    this.hrtime = null
    this.time = null
    this.timer = null
    this.readyToProcess = false
    this.options = options
    this.grep = ownOr(options, 'grep', [])
    this.grepInvert = ownOr(options, 'grepInvert', false)
    this.parent = ownOr(options, 'parent', null)
    this.bail = ownOrEnv(options, 'bail', 'TAP_BAIL', true)
    this.name = ownOr(options, 'name', '')
    if (!this.name)
      this.name = ''
    else
      this.name = this.name.replace(/[\n\r\s\t]/g, ' ')
    this.indent = ownOr(options, 'indent', '')
    this.silent = !!options.silent
    this.buffered = !!options.buffered || !!options.silent
    this.finished = false
    this.strict = ownOrEnv(options, 'strict', 'TAP_STRICT', true)
    this.omitVersion = !!options.omitVersion
    this.preserveWhitespace = ownOr(options, 'preserveWhitespace', true)
    this.jobs = +ownOrEnv(options, 'jobs', 'TAP_JOBS') || 0
    this.runOnly = ownOr(options, 'runOnly', false)
    this.setupParser(options)
    this.finished = false
    this.output = ''
    this.results = null
    this.bailedOut = false
    const skip = ownOr(options, 'skip', false)
    const todo = ownOr(options, 'todo', false)
    if (skip || todo)
      this.main = Base.prototype.main

    this.domain = domain.create()
    this.domain.add(this)
    this.domain.on('error', er => this.threw(er))

    const doDebug = typeof options.debug === 'boolean' ? options.debug
      : /\btap\b/i.test(process.env.NODE_DEBUG || '')

    if (doDebug)
      this.debug = debug
  }

  passing () {
    return this.parser.ok
  }

  setTimeout (n) {
    if (!this.hrtime)
      this.hrtime = hrtime()

    if (!this.start)
      this.start = Date.now()

    if (!n) {
      clearTimeout(this.timer)
      this.timer = null
    } else {
      if (this.timer)
        clearTimeout(this.timer)

      this.timer = setTimeout(() => this.timeout(), n)
      /* istanbul ignore else */
      if (this.timer.unref)
        this.timer.unref()
    }
  }

  threw (er, extra, proxy) {
    if (this.name && !proxy)
      er.test = this.name

    const message = er.message

    if (!extra)
      extra = extraFromError(er, extra, this.options)

    if (this.results) {
      this.results.ok = false
      if (this.parent)
        this.parent.threw(er, extra, true)
      else if (!er.stack)
        console.error(er)
      else {
        if (message)
          er.message = message
        delete extra.stack
        delete extra.at
        console.error('%s: %s', er.name || 'Error', message)
        console.error(er.stack.split(/\n/).slice(1).join('\n'))
        console.error(extra)
      }
    } else
      this.parser.ok = false

    return extra
  }

  timeout (options) {
    this.setTimeout(false)
    const er = new Error('timeout!')
    options = options || {}
    options.expired = options.expired || this.name
    this.emit('timeout', this.threw(new Error('timeout!'), options))
  }

  main (cb) {
    cb()
  }

  online (line) {
    this.debug('LINE %j', line)
    return this.write(this.indent + line)
  }

  write (c, e) {
    assert.equal(typeof c, 'string')
    assert.equal(c.substr(-1), '\n')

    if (this.buffered) {
      this.output += c
      return true
    }

    return super.write(c, e)
  }

  onbail (reason) {
    this.bailedOut = reason || true
    this.emit('bailout', reason)
  }

  oncomplete (results) {
    if (this.hrtime) {
      this.hrtime = hrtime(this.hrtime)
      this.time = Math.round(this.hrtime[0] * 1e6 + this.hrtime[1] / 1e3) / 1e3
    }

    this.debug('ONCOMPLETE %j %j', this.name, results)

    if (this.results)
      Object.keys(this.results)
        .forEach(k => results[k] = this.results[k])

    this.results = results
    this.emit('complete', results)
    const failures = results.failures
      .filter(f => f.tapError)
      .map(f => {
        delete f.diag
        delete f.ok
        return f
      })

    if (failures.length)
      this.options.failures = failures

    this.onbeforeend()
    this.emit('end')
    this.ondone()
  }

  onbeforeend () {}
  ondone () {}

  setupParser (options) {
    this.parser = new Parser({
      bail: this.bail,
      strict: this.strict,
      omitVersion: this.omitVersion,
      preserveWhitespace: this.preserveWhitespace
    })
    this.parser.on('line', l => this.online(l))
    this.parser.once('bailout', reason => this.onbail(reason))
    this.parser.on('complete', result => this.oncomplete(result))
  }

  [INSPECT] () {
    return this.constructor.name + ' ' + util.inspect({
      name: this.name,
      jobs: this.jobs,
      buffered: this.buffered,
      occupied: this.occupied,
      pool: this.pool,
      queue: this.queue,
      subtests: this.subtests,
      output: this.output,
      skip: ownOr(this.options, 'skip', false),
      todo: ownOr(this.options, 'todo', false),
      only: ownOr(this.options, 'only', false),
      results: this.results,
      options: [
        'autoend',
        'command',
        'args',
        'stdio',
        'env',
        'cwd',
        'exitCode',
        'signal',
        'expired',
        'timeout',
        'at',
        'skip',
        'todo',
        'only',
        'runOnly'
      ].filter(k => this.options[k] !== undefined)
        .reduce((s, k) => (s[k] = this.options[k], s), {})
    })
  }

  debug () {}

}

function debug () {
  const prefix = 'TAP ' + process.pid + ' ' + this.name + ': '
  const msg = util.format.apply(util, arguments).trim()
  console.error(prefix + msg.split('\n').join('\n' + prefix))
}

module.exports = Base
