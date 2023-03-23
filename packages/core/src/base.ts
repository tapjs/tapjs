// TODO: a LOT of things in this Base class should be #private

import Domain from 'async-hook-domain'
import { AsyncResource } from 'async_hooks'
import Minipass, {
  ContiguousData,
  Encoding,
} from 'minipass'
import { hrtime } from 'node:process'
import { format } from 'node:util'
import {
  FinalResults,
  Parser,
  Result,
  TapError,
} from 'tap-parser'
import Deferred from 'trivial-deferred'
import extraFromError from './extra-from-error.js'

export class TapWrap extends AsyncResource {
  test: Base
  constructor(test: Base) {
    super(`tap.${test.constructor.name}`)
    this.test = test
  }
}

export class Counts {
  total: number = 0
  pass: number = 0
  fail: number = 0
  skip: number = 0
  todo: number = 0
}

export class Lists {
  fail: Result[] = []
  todo: Result[] = []
  skip: Result[] = []
  pass: Result[] = []
}

const debug =
  (name: string) =>
  (...args: any[]) => {
    const prefix = `TAP ${process.pid} ${name}: `
    const msg = format(...args).trim()
    console.error(
      prefix + msg.split('\n').join(`\n${prefix}`)
    )
  }

export interface BaseOpts {
  // parser-related options
  bail?: boolean
  strict?: boolean
  omitVersion?: boolean
  preserveWhitespace?: boolean
  skip?: boolean | string
  todo?: boolean | string
  timeout?: number

  time?: number
  tapChildBuffer?: string
  stack?: string

  // basically only set when running in this project
  stackIncludesTap?: boolean
  parent?: Base
  name?: string
  childId?: number
  context?: any
  indent?: string
  debug?: boolean
  parser?: Parser
  buffered?: boolean
  silent?: boolean
}

export class Base {
  stream: Minipass<string> = new Minipass<string>({
    encoding: 'utf8',
  })
  readyToProcess: boolean = false
  options: BaseOpts
  indent: string
  hook: TapWrap
  // this actually is deterministically set in the ctor, but
  // in the hook, so tsc doesn't see it.
  hookDomain!: Domain
  timer?: NodeJS.Timeout

  parser: Parser
  debug: (...args: any[]) => void
  counts: Counts
  lists: Lists
  name: string
  results?: FinalResults
  parent?: Base

  bail: boolean
  strict: boolean
  omitVersion: boolean
  preserveWhitespace: boolean

  errors: TapError[]
  childId: number
  context: any
  output: string
  buffered: boolean
  bailedOut: string | boolean
  start: bigint
  time: number
  hrtime: bigint
  silent: boolean

  deferred?: Deferred<FinalResults>

  constructor(options: BaseOpts = {}) {
    // all tap streams are sync string minipasses
    this.hook = new TapWrap(this)
    this.options = options
    this.counts = new Counts()
    this.lists = new Lists()

    this.silent = !!options.silent

    // if it's null or an object, inherit from it.  otherwise, copy it.
    const ctx = options.context
    if (ctx !== undefined) {
      this.context =
        typeof ctx === 'object' ? Object.create(ctx) : ctx
    } else {
      this.context = null
    }

    this.bail = !!options.bail
    this.strict = !!options.strict
    this.omitVersion = !!options.omitVersion
    this.preserveWhitespace = !!options.preserveWhitespace
    this.buffered = !!options.buffered
    this.bailedOut = false
    this.errors = []
    this.parent = options.parent

    this.time = 0
    this.hrtime = 0n
    this.start = 0n
    this.childId = options.childId || 0
    // do we need this?  couldn't we just call the Minipass
    this.output = ''
    this.indent = options.indent || ''
    this.name = options.name || '(unnamed test)'
    this.hook.runInAsyncScope(
      () =>
        (this.hookDomain = new Domain((er, type) => {
          if (!er || typeof er !== 'object')
            er = { error: er }
          er.tapCaught = type
          this.threw(er)
        }))
    )
    this.debug = !!options.debug
      ? debug(this.name)
      : () => {}

    this.parser =
      options.parser ||
      new Parser({
        bail: this.bail,
        strict: this.strict,
        omitVersion: this.omitVersion,
        preserveWhitespace: this.preserveWhitespace,
        name: this.name,
      })
    this.setupParser()

    // ensure that a skip or todo on a child class reverts
    // back to Base's no-op main.
    if (options.skip || options.todo) {
      this.main = Base.prototype.main
    }
  }

  setupParser() {
    this.parser.on('line', l => this.online(l))
    this.parser.once('bailout', reason =>
      this.onbail(reason)
    )
    this.parser.on('complete', result =>
      this.oncomplete(result)
    )

    this.parser.on('result', () => this.counts.total++)
    this.parser.on('pass', () => this.counts.pass++)
    this.parser.on('todo', res => {
      this.counts.todo++
      this.lists.todo.push(res)
    })
    this.parser.on('skip', res => {
      // it is uselessly noisy to print out lists of tests skipped
      // because of a --grep or --only argument.
      if (/^filter: (only|\/.*\/)$/.test(res.skip)) return

      this.counts.skip++
      this.lists.skip.push(res)
    })
    this.parser.on('fail', res => {
      this.counts.fail++
      this.lists.fail.push(res)
    })
  }

  setTimeout(n: number) {
    if (n <= 0) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = undefined
    } else {
      this.timer = setTimeout(() => this.timeout(), n)
      this.timer.unref()
    }
  }

  timeout(options?: { [k: string]: any }) {
    this.setTimeout(0)
    options = options || {}
    options.expired = options.expired || this.name
    const threw = this.threw(new Error('timeout!'), options)
    if (threw) {
      this.emit('timeout', threw)
    }
  }

  runMain(cb: () => void) {
    this.debug('BASE runMain')
    this.start = hrtime.bigint()
    this.hook.runInAsyncScope(this.main, this, cb)
  }

  main(cb: () => void) {
    cb()
  }

  onbail(reason?: string) {
    this.bailedOut = reason || true
    this.emit('bailout', reason)
  }

  online(line: string) {
    this.debug('LINE %j', line, [this.name, this.indent])
    return this.write(this.indent + line)
  }

  write(
    c: ContiguousData,
    e?: Encoding | (() => any),
    cb?: () => any
  ) {
    if (this.buffered) {
      this.output += c
      return true
    }
    if (typeof e === 'function') {
      cb = e
      e = undefined
    }

    return this.stream.write(
      c,
      e as Encoding | undefined,
      cb
    )
  }

  oncomplete(results: FinalResults) {
    if (this.start) {
      this.hrtime = hrtime.bigint() - this.start
      this.time =
        results.time || Number(this.hrtime / 1000n)
    }

    this.debug('ONCOMPLETE %j %j', this.name, results)

    if (this.results) {
      Object.assign(results, this.results)
    }

    this.results = results
    this.emit('complete', results)
    const errors = results.failures
      .filter(f => f.tapError)
      .map(f => {
        delete f.diag
        delete f.ok
        return f
      })

    if (errors.length) {
      this.errors = errors
    }

    this.onbeforeend()

    // XXX old tap had a check here to ensure that buffer and pipes
    // are cleared.  But Minipass "should" do this now for us, so
    // this ought to be fine, but revisit if it causes problems.
    this.stream.end()
  }

  // extension points for Test, Spawn, etc.
  onbeforeend() {}
  ondone() {}

  once(ev: string, handler: (...a: any[]) => any) {
    return this.stream.once(ev, handler)
  }
  on(ev: string, handler: (...a: any[]) => any) {
    return this.stream.on(ev, handler)
  }
  emit(ev: string, ...data: any[]) {
    const ret = this.stream.emit(ev, ...data)
    if (ev === 'end') {
      this.ondone()
      this.hook.emitDestroy()
      this.hookDomain.destroy()
    }
    return ret
  }

  end() {
    this.stream.end()
    return this
  }

  threw(er: any, extra?: any, proxy?: boolean) {
    this.hook.emitDestroy()
    this.hookDomain.destroy()
    if (typeof er === 'string') {
      er = { message: er }
    } else if (!er || typeof er !== 'object') {
      er = { error: er }
    }
    if (this.name && !proxy) {
      er.test = this.name
    }

    const message = er.message
    if (!extra) {
      extra = extraFromError(er, extra, this.options)
    }

    // if we ended, we have to report it SOMEWHERE, unless we're
    // already in the process of bailing out, in which case it's
    // a bit excessive.
    if (this.results) {
      const alreadyBailing = !this.results.ok && this.bail
      this.results.ok = false
      if (this.parent) {
        this.parent.threw(er, extra, true)
      } else if (alreadyBailing) {
        // we are already bailing out, and this is the top level,
        // just make our way hastily to the nearest exit.
        return
      } else if (!er.stack) {
        console.error(er)
      } else {
        if (message) {
          er.message = message
        }
        delete extra.stack
        delete extra.at
        console.error('%s: %s', er.name || 'Error', message)
        console.error(
          er.stack.split(/\n/).slice(1).join('\n')
        )
        console.error(extra)
      }
    } else {
      this.parser.ok = false
    }

    return extra
  }

  passing() {
    return this.parser.ok
  }
}
