// lifecycle methods like beforeEach, afterEach, teardown
// defined in plugins/lifecycle.ts

import * as stack from '@tapjs/stack'
import type { Test, TestOpts } from '@tapjs/test'
import { Minipass } from 'minipass'
import assert from 'node:assert'
import { relative } from 'node:path'
import { hrtime } from 'node:process'
import { Readable } from 'node:stream'
import { format } from 'node:util'
import { FinalResults } from 'tap-parser'
import { Deferred } from 'trivial-deferred'
import { Base, BaseOpts } from './base.js'
import { esc } from './esc.js'
import { extraFromError } from './extra-from-error.js'
import { mainScript } from './main-script.js'
import { argv, cwd } from './proc.js'
import { Spawn } from './spawn.js'
import { Stdin } from './stdin.js'
import { Result, TestPoint } from './test-point.js'
import { Waiter } from './waiter.js'
import { Worker } from './worker.js'

import { IMPLICIT } from './implicit-end-sigil.js'
import { Extra, MessageExtra, TapBaseEvents } from './index.js'
import { normalizeMessageExtra } from './normalize-message-extra.js'

const VERSION = 'TAP version 14\n'

export interface TestBaseOpts extends BaseOpts {
  /**
   * The number of jobs to run in parallel. Defaults to 1
   */
  jobs?: number

  /**
   * Test function called when this Test is executed
   * This is usually not set on the extra object, but as an argument to
   * the `t.test(..)` method, just defined here so TS doesn't complain
   * when we reference it in the various flow control machinery.
   *
   * @internal
   */
  cb?: (...args: any[]) => any
}

const queueEmpty = <T extends TestBase>(t: T) =>
  t.queue.length === 0 ||
  (t.queue.length === 1 && t.queue[0] === VERSION)

export type TapPlugin<
  B extends Object,
  O extends TestBaseOpts | any = unknown
> = unknown extends O
  ? (t: TestBase) => B
  : (t: TestBase, opts: O) => B

/**
 * Sigil to put in the queue to signal the end of all things
 */
const EOF = Symbol('EOF')

export type { EOF }

export type QueueEntry =
  | string
  | TestPoint
  | Base
  | typeof EOF
  | Waiter
  | [method: string, ...args: any[]]
  | (() => any)

const isPromise = (p: any): p is Promise<any | void> =>
  !!p && typeof p === 'object' && typeof p.then === 'function'

/**
 * the promise returned by t.test(), t.spawn(), etc.
 * If a subtest was not created (because of being marked skipped,
 * the parent having bailed out, etc.) then the `subtest` field
 * will be set to `null`.
 */
export interface PromiseWithSubtest<S extends Base>
  extends Promise<FinalResults | null> {
  subtest: S | null
}

export interface TestBaseEvents extends TapBaseEvents {
  subtestStart: [p: Base]
  idle: []
  subtestEnd: [p: Base]
  subtestProcess: [p: Base]
  subtestAdd: [p: Base]
  result: [res: Result]
  stdin: [s: Stdin]
  spawn: [s: Spawn]
  worker: [w: Worker]
}

/**
 * The TestBaseBase class is the base class for all plugins,
 * and eventually thus the Test class.
 *
 * This implements subtest functionality, TAP stream generation,
 * lifecycle events, and only the most basic pass/fail assertions.
 *
 * All other features are added with plugins.
 */
export class TestBase extends Base<TestBaseEvents> {
  // NB: generated pluginified Test class needs to declare over this
  declare parent?: TestBase
  declare options: TestBaseOpts

  /**
   * Attached when the Test class is instantiated from a TestBase,
   * as a reference to the final plugged-in Test instance.
   * If TestBase is used directly (outside the context of a plugin)
   * or during plugin setup time, this will be undefined, so watch out.
   */
  t!: Test

  donePromise?: Promise<any> & {
    tapAbortPromise?: () => void
  }
  jobs: number
  subtests: Base[] = []
  pool: Set<Base> = new Set()
  queue: QueueEntry[] = [VERSION]
  cb?: (...args: any[]) => any
  count: number = 0
  ended: boolean = false
  diagnostic: null | boolean = null

  #planEnd: number = -1
  #printedResult: boolean = false
  #explicitEnded: boolean = false
  #explicitPlan: boolean = false
  #promiseEnded: boolean = false
  #multiEndThrew: boolean = false
  #n: number = 0
  #noparallel: boolean = false
  #occupied: null | Waiter | Base = null
  #pushedEnd: boolean = false
  #pushedBeforeEnd: boolean = false
  #nextChildId: number = 1
  #currentAssert: null | Function | ((..._: any) => any) = null
  #processing: boolean = false
  #doingStdinOnly: boolean = false
  #calledOnEOF: boolean = false

  /**
   * true if the test has printed at least one TestPoint
   */
  get printedResult(): boolean {
    return this.#printedResult
  }

  /**
   * true if the test is currently waiting for something to finish
   */
  get occupied(): boolean {
    return !!this.#occupied
  }

  constructor(options: TestBaseOpts) {
    super(options)

    this.jobs = (options.jobs && Math.max(options.jobs, 1)) || 1

    if (typeof options.diagnostic === 'boolean') {
      this.diagnostic = options.diagnostic
    }

    if (options.cb) {
      this.#setCB(options.cb)
    }
  }

  #setCB<T extends TestBase>(this: T, cb: (t: T) => any) {
    this.cb = (...args: any[]) =>
      this.hook.runInAsyncScope(cb, this.t || this, ...args)
  }

  // TAP output generating methods
  /**
   * immediately exit this and all parent tests with a TAP
   * Bail out! message.
   */
  bailout(message?: string) {
    if (this.parent && (this.results || this.ended)) {
      this.parent.bailout(message)
    } else {
      this.#process()
      message = message ? ' ' + ('' + esc(message)).trim() : ''
      message = message.replace(/[\r\n]/g, ' ')
      this.parser.write('Bail out!' + message + '\n')
    }
    this.#end(IMPLICIT)
    this.#process()
  }

  /**
   * output a TAP comment, formatted like console.log()
   */
  comment(...args: any[]) {
    const body = format(...args)
    const message =
      ('# ' + body.split(/\r?\n/).join('\n# ')).trim() + '\n'

    if (this.results || this.ended || this.#pushedEnd) {
      // the fallback to console.log is a bit weird,
      // but the only alternative seems to be to just lose it.
      if (this.parent) this.parent.comment(...args)
      else console.log(message.trimEnd())
    } else if (this.#occupied) {
      this.queue.push(message)
      this.#process()
    } else {
      this.write(message)
    }
  }

  /**
   * Called when the test times out.
   * Options are passed as diagnostics to the threw() method
   */
  timeout(
    options: Extra & { expired?: string } = { expired: this.name }
  ) {
    options.expired = options.expired || this.name
    if (this.#occupied && this.#occupied instanceof Base) {
      this.#occupied.timeout(options)
    } else {
      super.timeout(options)
    }
    this.#end(IMPLICIT)
  }

  /**
   * Set TAP pragma configs to affect the behavior of the parser.
   * Only `strict` is supported by the parser.
   */
  pragma(set: { [k: string]: boolean }) {
    const p = Object.keys(set).reduce(
      (acc, i) => acc + 'pragma ' + (set[i] ? '+' : '-') + i + '\n',
      ''
    )
    this.queue.push(p)
    this.#process()
  }

  /**
   * Specify the number of Test Points expected by this test.
   * Outputs a TAP plan line.
   */
  plan(n: number, comment?: string): void
  plan(n: number, comment: string, implicit: typeof IMPLICIT): void
  plan(n: number, comment?: string, implicit?: typeof IMPLICIT) {
    if (this.bailedOut) {
      return
    }

    if (this.#explicitPlan) {
      throw new Error('Cannot set plan more than once')
    }
    this.#explicitPlan = implicit !== IMPLICIT

    if (this.#planEnd !== -1) {
      throw new Error('Cannot set plan after test has ended')
    }

    if (typeof n !== 'number' || n < 0 || n !== Math.floor(n)) {
      throw new TypeError('plan must be a non-negative integer')
    }

    // Cannot get any tests after a trailing plan, or a plan of 0
    const ending = this.count !== 0 || n === 0

    if (n === 0 && comment && !this.options.skip) {
      this.options.skip = comment
    }

    this.#planEnd = n
    comment = comment ? ' # ' + esc(comment.trim()) : ''
    this.queue.push('1..' + n + comment + '\n')

    if (ending) {
      this.#end(IMPLICIT)
    } else {
      this.#process()
    }
  }

  /**
   * A passing (ok) Test Point
   */
  pass(...[msg, extra]: MessageExtra) {
    this.currentAssert = this.pass
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('(unnamed test)', args)
    this.printResult(true, ...me)
    return true
  }

  /**
   * A failing (not ok) Test Point
   */
  fail(...[msg, extra]: MessageExtra) {
    this.currentAssert = this.fail
    const args = [msg, extra] as MessageExtra
    const me = normalizeMessageExtra('(unnamed test)', args)
    this.printResult(false, ...me)
    return !!(me[1].todo || me[1].skip)
  }

  /**
   * The current assertion being processed.  May only be set if
   * not already set.
   */
  get currentAssert() {
    return this.#currentAssert
  }
  /**
   * The current assertion being processed.  May only be set if
   * not already set.
   */
  set currentAssert(fn: null | Function | ((...a: any[]) => any)) {
    if (!this.#currentAssert && typeof fn === 'function') {
      this.#currentAssert = fn
    }
  }

  /**
   * Print a Test Point
   */
  printResult(
    ok: boolean,
    message: string,
    extra: Extra,
    front: boolean = false
  ) {
    this.currentAssert = this.printResult
    this.#printedResult = true

    const n = this.count + 1
    const fn = this.currentAssert
    this.#currentAssert = null

    if (this.#planEnd !== -1 && n > this.#planEnd) {
      // prevent infinite regress of "plan exceeded" fails
      if (!this.passing()) return

      // the 'automatic end' can only occur with the root TAP object
      // and even then, pretty hard to trigger, since it would mean
      // going several turns of the event loop and hitting it at just
      // the right time before the process quits.
      const failMessage = this.#explicitEnded
        ? 'test assertion after end() was called'
        : this.#promiseEnded
        ? 'test assertion after Promise resolution'
        : this.#explicitPlan
        ? 'test assertion count exceeds plan'
        : /* c8 ignore start */
          'assertion after automatic end'
      /* c8 ignore stop */

      const er = new Error(failMessage, {
        cause: {
          test: this.name,
          plan: this.#planEnd,
        },
      })
      Error.captureStackTrace(er, fn)
      this.threw(er, extraFromError(er))
      return
    }

    if (extra.expectFail) {
      ok = !ok
    }

    if (extra.at === null) {
      delete extra.at
      delete extra.stack
    } else if (
      typeof extra.stack === 'string' &&
      extra.stack &&
      !extra.at
    ) {
      const parsed = stack.parseStack(extra.stack)
      extra.at = parsed[0]
      extra.stack = parsed.map(c => String(c) + '\n').join('')
    } else if (!extra.at && typeof fn === 'function') {
      const showStack = !ok && !extra.skip && !extra.todo
      const showAt = showStack || extra.diagnostic === true
      if (showAt) {
        const st = stack.capture(80, fn)
        extra.at = st[0]
        if (showStack) {
          extra.stack = st.map(c => String(c)).join('\n')
        }
      }
    }

    const diagnostic =
      typeof extra.diagnostic === 'boolean'
        ? extra.diagnostic
        : typeof this.diagnostic === 'boolean'
        ? this.diagnostic
        : extra.skip || extra.todo
        ? false
        : !ok

    if (diagnostic) {
      extra.diagnostic = true
    }

    this.count = n
    message = message + ''
    const res: Result = { ok, message, extra }

    const tp = new TestPoint(ok, message, extra)

    // when we jump the queue, skip an extra line
    if (front) {
      tp.message = tp.message.trimEnd() + '\n\n'
    }

    if (
      this.#occupied &&
      this.#occupied instanceof Waiter &&
      this.#occupied.finishing
    ) {
      front = true
    }

    if (front) {
      if (extra.tapChildBuffer || extra.tapChildBuffer === '') {
        this.writeSubComment(tp)
        this.parser.write(extra.tapChildBuffer)
      }
      this.emit('result', res)
      this.parser.write(tp.ok + ++this.#n + tp.message)
      if (this.bail && !ok && !extra.skip && !extra.todo) {
        this.parser.write('Bail out! ' + message + '\n')
      }
    } else {
      this.queue.push(tp)
      if (this.bail && !ok && !extra.skip && !extra.todo) {
        this.queue.push('Bail out! ' + message + '\n')
      }
    }

    if (this.#planEnd === this.count) {
      this.#end(IMPLICIT)
    }

    this.#process()
  }

  end(implicit?: typeof IMPLICIT): this {
    this.#end(implicit)
    return this
  }

  /**
   * The leading `# Subtest` comment that introduces a child test
   */
  writeSubComment<T extends TestPoint | Base>(p: T) {
    // name will generally always be set
    /* c8 ignore start */
    const stn = p.name ? ': ' + esc(p.name) : ''
    /* c8 ignore stop */
    const comment = `# Subtest${stn}\n`
    this.parser.write(comment)
  }
  // end TAP otput generating methods

  // flow control methods

  /**
   * Await the end of a Promise before proceeding.
   * The supplied callback is called with the Waiter object.
   */
  waitOn(
    promise: Promise<any | void>,
    cb?: (w: Waiter) => any,
    expectReject: boolean = false
  ): Promise<void> {
    const w = new Waiter(
      promise,
      w => {
        assert.equal(this.#occupied, w)
        if (cb) cb(w)
        this.#occupied = null
        this.#process()
      },
      expectReject
    )
    // if the top of the queue is still the version line, we come
    // in after that. otherwise, it should be the next thing processed.
    if (this.queue[0] === VERSION) {
      this.queue.shift()
      this.queue.unshift(VERSION, w)
    } else {
      this.queue.unshift(w)
    }
    this.#process()
    return w.promise
  }

  #end(implicit?: typeof IMPLICIT) {
    if (this.#doingStdinOnly && implicit !== IMPLICIT) {
      throw new Error('cannot explicitly end while in stdinOnly mode')
    }
    this.debug('END %s implicit=%j', this.name, implicit === IMPLICIT)
    if (this.ended && implicit === IMPLICIT) {
      this.debug('already ended, ignore implicit end')
      return
    }

    // If onbeforeend returns a Promise, then wait for it to finish.
    const obe = this.onbeforeend
    if (obe && !this.#pushedBeforeEnd) {
      this.debug('push obe')
      this.#pushedBeforeEnd = true
      if (!queueEmpty(this) || this.#occupied) {
        this.queue.push(obe)
        this.#process()
      } else {
        const ret = obe()
        if (isPromise(ret)) {
          // this will make the next section return this.#process()
          this.waitOn(ret)
        }
      }
    }

    // beyond here we have to be actually done with things, or else
    // the semantic checks on counts and such will be off.
    if (!queueEmpty(this) || this.#occupied) {
      this.debug('#end: queue not empty, or occupied')
      if (!this.#pushedEnd) {
        this.queue.push(['#end', implicit])
      }
      this.#pushedEnd = true
      return this.#process()
    }

    if (implicit !== IMPLICIT) {
      if (this.#explicitEnded) {
        if (!this.#multiEndThrew) {
          this.#multiEndThrew = true
          const er = new Error(
            'test end() method called more than once'
          )
          Error.captureStackTrace(er, this.#currentAssert || this.end)
          er.cause = {
            test: this.name,
          }
          this.threw(er)
        }
        return
      }
      this.debug('set #explicitEnded=true')
      this.#explicitEnded = true
    }

    this.debug('set ended=true')
    this.ended = true

    if (this.#planEnd === -1 && !this.#doingStdinOnly) {
      this.debug('END(%s) implicit plan', this.name, this.count)
      this.plan(this.count, '', IMPLICIT)
    }

    this.queue.push(EOF)
    this.#process()
  }

  get fullname(): string {
    const main = (
      mainScript('TAP') +
      ' ' +
      argv.slice(2).join(' ')
    ).trim()
    const n: string[] = [
      (this.parent
        ? this.parent.fullname
        : main === 'TAP'
        ? 'TAP'
        : relative(cwd, main).replace(/\\/g, '/')
      ).trim(),
    ]
    // tests will generally always have a name
    /* c8 ignore start */
    const myName = (this.name || '').trim()
    /* c8 ignore stop */
    if (myName) n.push(myName)
    return n.join(' > ')
  }

  #process() {
    if (this.#processing) {
      return this.debug(' < already processing')
    }
    this.debug('\nPROCESSING(%s)', this.name, this.queue.length)
    this.#processing = true

    while (!this.#occupied) {
      const p = this.queue.shift()
      if (!p) {
        this.debug('> end of queue')
        break
      }
      if (p instanceof Base) {
        this.debug('> subtest in queue', p.name)
        this.#processSubtest(p)
      } else if (p === EOF) {
        this.debug(' > EOF', this.name)
        if (!this.#calledOnEOF) {
          this.#calledOnEOF = true
          // I AM BECOME EOF, DESTROYER OF STREAMS
          this.debug('call onEOF', this.name)
          const eofRet = this.onEOF()
          if (isPromise(eofRet)) {
            this.debug('onEOF is promise')
            this.waitOn(eofRet, w => {
              if (w.rejected) {
                // threw on the parent, since we're EOFing already
                this.debug('eofRet reject', w.value)
                this.comment('error thrown in teardown')
                this.threw(w.value)
              }
              this.queue.push(EOF)
              this.#process()
            })
            break
          }
        }
        this.debug('eof end parser', this.name)
        this.parser.end()
      } else if (p instanceof TestPoint) {
        this.debug(' > TESTPOINT')
        if (p.extra.tapChildBuffer || p.extra.tapChildBuffer === '') {
          this.writeSubComment(p)
          this.parser.write(p.extra.tapChildBuffer)
        }
        this.emit('res', p.res)
        this.parser.write(p.ok + ++this.#n + p.message)
      } else if (typeof p === 'string') {
        this.debug(' > STRING')
        this.parser.write(p)
      } else if (p instanceof Waiter) {
        p.ready = true
        this.#occupied = p
        p.finish()
      } else if (typeof p === 'function') {
        this.debug(' > FUNCTION')
        const ret = p()
        if (isPromise(ret)) {
          this.waitOn(ret)
        }
      } else if (Array.isArray(p)) {
        this.debug(' > METHOD')
        const m = p.shift() as keyof this
        const fn = (m === '#end' ? this.#end : this[m]) as (
          ...a: any[]
        ) => any
        if (typeof fn !== 'function') {
          this.debug(
            ' > weird method not found in queue??',
            m,
            typeof this[m]
          )
          continue
        }
        const ret = fn.call(this, ...p)
        if (isPromise(ret)) {
          // returned promise
          ret.then(
            () => {
              this.#processing = false
              this.#process()
            },
            (er: unknown) => {
              this.#processing = false
              this.threw(er)
            }
          )
          return
        }
        /* c8 ignore start */
      } else {
        throw new Error('weird thing got in the queue')
      }
      /* c8 ignore stop */
    }

    while (!this.#noparallel && this.pool.size < this.jobs) {
      const p = this.subtests.shift()
      if (!p) {
        break
      }

      if (!p.buffered) {
        this.#noparallel = true
        break
      }

      this.debug('start subtest', p)
      this.emit('subtestStart', p)
      this.pool.add(p)
      if (this.bailedOut) {
        this.#onBufferedEnd(p)
      } else {
        p.runMain(() => this.#onBufferedEnd(p))
      }
    }

    this.debug('done processing', this.queue, this.#occupied)
    this.#processing = false

    // just in case any tests ended, and we have sync stuff still
    // waiting around in the queue to be processed
    if (!this.#occupied && this.queue.length) {
      this.#process()
    } else if (this.idle) {
      // the root tap runner uses this event to know when it is safe to
      // automatically end.
      this.emit('idle')
    }
  }

  get idle() {
    return (
      !this.#processing &&
      queueEmpty(this) &&
      !this.pool.size &&
      !this.subtests.length &&
      !this.#occupied &&
      // if we have a plan, don't autoend until the plan is complete.
      this.#planEnd === -1
    )
  }

  #onBufferedEnd<T extends Base>(p: T) {
    p.ondone = p.constructor.prototype.ondone
    p.results = p.results || new FinalResults(true, p.parser)
    p.readyToProcess = true
    const to = p.options.timeout
    const dur =
      to && p.passing()
        ? Number(hrtime.bigint() - p.start) / 1e6
        : null
    if (dur && to && dur > to) {
      p.timeout()
    } else {
      p.setTimeout(0)
    }
    this.debug(
      '%s.#onBufferedEnd',
      this.name,
      p.name,
      p.results.bailout
    )
    this.pool.delete(p)
    p.options.tapChildBuffer = p.output || ''
    p.options.stack = ''
    if (p.time) p.options.time = p.time
    if (this.#occupied === p) this.#occupied = null
    p.deferred?.resolve(p.results)
    this.emit('subtestEnd', p)
    this.#process()
  }

  #onIndentedEnd<T extends Base>(p: T) {
    this.debug('onIndentedEnd', p.name)
    this.emit('subtestProcess', p)
    p.ondone = p.constructor.prototype.ondone
    // we'll generally already have a results by now, but just to be sure
    /* c8 ignore start */
    p.results = p.results || new FinalResults(true, p.parser)
    /* c8 ignore stop */
    this.#noparallel = false
    const sti = this.subtests.indexOf(p)
    if (sti !== -1) this.subtests.splice(sti, 1)
    p.readyToProcess = true
    p.options.time = p.time
    const to = p.options.timeout
    const dur = to && p.passing() ? hrtime.bigint() - p.start : null
    if (dur && to && dur > to) {
      p.timeout()
    } else {
      p.setTimeout(0)
    }
    this.debug('#onIndentedEnd %s(%s)', this.name, p.name)
    this.#occupied = null
    this.debug('OIE(%s) >shift into queue', this.name, this.queue)
    p.options.stack = ''

    this.printResult(p.passing(), p.name, p.options, true)

    this.debug('OIE(%s) shifted into queue', this.name, this.queue)
    p.deferred?.resolve(p.results)
    this.emit('subtestEnd', p)
    this.#process()
  }

  /**
   * @internal
   */
  main(cb: () => void) {
    if (typeof this.options.timeout === 'number') {
      this.setTimeout(this.options.timeout)
    }
    this.debug('MAIN pre', this.name)

    const end = () => {
      this.debug(' > implicit end for promise')
      this.#promiseEnded = true
      this.#end(IMPLICIT)
      done()
    }

    const done = (er?: Error) => {
      if (er) this.threw(er)

      if (this.results || this.bailedOut) cb()
      else this.ondone = () => cb()
    }

    // This bit of overly clever line-noise wraps the call to user-code
    // in a try-catch. We can't rely on the domain for this yet, because
    // the 'end' event can trigger a throw after the domain is unhooked,
    // but before this is no longer the official "active test"
    const ret = (() => {
      if (!this.cb) return
      try {
        return this.cb(this.t || this)
      } catch (er: any) {
        if (!er || typeof er !== 'object') {
          er = { error: er, at: null }
        }
        er.tapCaught = 'testFunctionThrow'
        this.threw(er)
      }
    })()

    if (ret && ret.then) {
      this.donePromise = ret
      ret.tapAbortPromise = done
      ret.then(end, (er: any) => {
        if (!er || typeof er !== 'object') {
          er = { error: er, at: null }
        }
        er.tapCaught = 'returnedPromiseRejection'
        done(er)
      })
    } else done()

    this.debug('MAIN post', this.name)
  }

  #processSubtest<T extends Base>(p: T) {
    this.debug('processSubtest', p.name)
    this.debug(' > subtest')
    this.#occupied = p
    if (!p.buffered) {
      this.emit('subtestStart', p)
      this.debug(' > subtest indented')
      p.pipe(this.parser, { end: false })
      this.writeSubComment(p)
      this.debug('calling runMain', p.name)
      p.runMain(() => {
        this.debug('runMain callback', p.name)
        this.#onIndentedEnd(p)
      })
    } else if (p.readyToProcess) {
      this.emit('subtestProcess', p)
      this.debug(' > subtest buffered, finished')
      // finished!  do the thing!
      this.#occupied = null
      if (!p.passing() || !p.silent) {
        this.printResult(p.passing(), p.name, p.options, true)
      }
    } else {
      this.#occupied = p
      this.debug(' > subtest buffered, unfinished', p)
      // unfinished buffered test.
      // nothing to do yet, just leave it there.
      this.queue.unshift(p)
    }
  }

  /**
   * Parse stdin as the only tap stream (ie, not as a child test)
   * If used, then no other subtests or assertions are allowed.
   */
  stdinOnly<T extends BaseOpts>(
    extra?: T & { tapStream?: Readable | Minipass<string | Buffer> }
  ) {
    const stream = (extra?.tapStream ?? process.stdin) as Minipass
    /* c8 ignore start */
    if (!stream) {
      throw new Error('cannot read stdin without stdin stream')
    }
    /* c8 ignore stop */

    if (
      this.queue.length !== 1 ||
      this.queue[0] !== VERSION ||
      this.#processing ||
      this.results ||
      this.#occupied ||
      this.pool.size ||
      this.subtests.length
    ) {
      throw new Error('Cannot use stdinOnly on a test in progress')
    }

    this.#doingStdinOnly = true
    this.queue.length = 0
    this.parser.on('child', p => {
      // pretend to be a rooted parser, so it gets counts.
      p.root = p
      const t = new Base({
        name: p.name,
        parent: this,
        parser: p,
        bail: p.bail,
        strict: p.strict,
        omitVersion: p.omitVersion,
        preserveWhitespace: p.preserveWhitespace,
        childId: this.#nextChildId++,
      })
      this.emit('subtestAdd', t)
      this.emit('subtestStart', t)
      this.emit('subtestProcess', t)
      p.on('complete', () => {
        t.time = p.time
        this.emit('subtestEnd', t)
      })
    })
    stream.pipe(this.parser)
    stream.resume()
  }

  /**
   * Mount a subtest, using this Test object as a harness.
   * Exposed mainly so that it can be used by builtin plugins.
   *
   * @internal
   */
  sub<T extends Base, O extends BaseOpts>(
    Class: { new (options: O): T },
    extra: O | TestOpts | TestBaseOpts | BaseOpts = {},
    caller: (...a: any[]) => unknown
  ): PromiseWithSubtest<T> {
    if (this.bailedOut) {
      return Object.assign(Promise.resolve(null), {
        subtest: null,
      })
    }

    if (this.results || this.ended) {
      const er = new Error(
        'cannot create subtest after parent test ends'
      )
      Error.captureStackTrace(er, caller)
      this.threw(er)
      return Object.assign(Promise.resolve(null), {
        subtest: null,
      })
    }

    extra.childId = this.#nextChildId++
    if (this.shouldSkipChild(extra)) {
      this.pass(extra.name || '', extra)
      return Object.assign(Promise.resolve(null), {
        subtest: null,
      })
    }

    extra.indent = '    '
    if (extra.buffered === undefined) {
      if (this.jobs > 1) {
        extra.buffered = true
      } else {
        extra.buffered = false
      }
    }

    extra.bail = extra.bail !== undefined ? extra.bail : this.bail
    extra.parent = this
    if (!extra.at && extra.at !== null) {
      const st = stack.capture(80, caller)
      extra.at = st[0]
      extra.stack = st.map(c => String(c)).join('\n')
    }
    extra.context = this.context

    const t = new Class(extra as O)
    this.queue.push(t)
    this.subtests.push(t)
    this.emit('subtestAdd', t)

    const d = new Deferred<FinalResults>()
    t.deferred = d
    this.#process()
    return Object.assign(d.promise, { subtest: t })
  }

  threw(
    er: any,
    extra?: Extra,
    proxy: boolean = false
  ): Extra | void | undefined {
    this.debug('TestBase.threw', this.name, er.message)
    // this can happen if a beforeEach throws.  capture the error here
    // and raise it once we've started the test officially.
    if (this.parent && !this.started) {
      this.cb = () => {
        this.threw(er)
        this.end()
      }
      return
    }

    // suppress the callsite for non-error throws, since
    // it'll always just be useless noise pointing back here.
    if (!er || typeof er !== 'object') {
      er = { error: er, at: null }
    }

    if (this.name && !proxy) {
      er.test = this.name
    }
    if (!proxy) {
      extra = extraFromError(er, extra)
    }
    this.debug('T.t call Base.threw', this.name, extra)
    const ended =
      !!this.results ||
      // should be impossible, when we hit the plan end, we end
      /* c8 ignore start */
      (this.#explicitPlan && this.count === this.#planEnd)
    /* c8 ignore stop */
    this.parser.ok = false
    super.threw(er, extra, proxy, ended)

    // Handle the failure here, but only if we (a) don't have
    // results yet (indicating an end) and (b) are not currently
    // at the plan end (which would mean that any failure is
    // ignored to prevent infinite regress in "plan exceeded"
    // failures)
    if (!ended) {
      const msg =
        typeof extra?.message === 'string'
          ? extra.message
          : typeof er.message === 'string'
          ? er.message
          : er.stack
          ? er.stack.split('\n')[0]
          : typeof er.error === 'string'
          ? er.error
          : ''
      extra ??= { at: null }
      if (msg === '') extra.at = null
      if (er.stack) {
        const p = stack.parseStack(er.stack)
        extra.at = p[0]
        extra.stack = p.map(c => String(c) + '\n').join('')
      }
      this.fail(msg, extra)
      if (this.ended || this.#pushedEnd) {
        this.ended = false
        this.#pushedEnd = false
        this.end(IMPLICIT)
      }
    }
    if (this.#occupied && this.#occupied instanceof Waiter) {
      this.#occupied.abort(
        Object.assign(
          new Error('error thrown while awaiting Promise'),
          { thrown: er }
        )
      )
      this.#occupied = null
    }
    if (!proxy) {
      this.#end(IMPLICIT)
      this.#processing = false
    }

    this.#process()
  }

  onbail(message?: string) {
    super.onbail(message)
    this.#end(IMPLICIT)
    if (!this.parent) {
      this.endAll()
    }
  }

  endAll(sub: boolean = false) {
    if (this.bailedOut) return

    // in the case of the root TAP test object, we might sometimes
    // call endAll on a bailing-out test, as the process is ending
    // In that case, we WILL have a this.occupied and a full queue
    // These cases are very rare to encounter in other Test objs tho
    this.#processing = true
    if (this.#occupied) {
      const p = this.#occupied
      if (p instanceof Waiter) p.abort(new Error('test unfinished'))
      else if (typeof (p as TestBase).endAll === 'function')
        (p as TestBase).endAll(true)
      else p.parser.abort('test unfinished')
      this.#occupied = null
    } else if (sub) {
      this.#process()
      if (queueEmpty(this)) {
        const options = Object.assign({}, this.options)
        options.test = this.name
        this.fail('test unfinished', options)
      }
    }

    if (this.donePromise && this.donePromise.tapAbortPromise)
      this.donePromise.tapAbortPromise()

    for (let i = 0; i < this.queue.length; i++) {
      const p = this.queue[i]
      if (p instanceof Base && !p.readyToProcess) {
        const msg = `child test left in queue: ${p.name}`
        this.queue[i] = new TestPoint(false, msg, p.options)
        this.count++
      }
    }

    this.#processing = false
    this.#end(IMPLICIT)
  }

  /**
   * Return true if the child test represented by the options object
   * should be skipped.  Extended by the grep/only filtering plugins.
   */
  shouldSkipChild(
    extra: TestOpts | TestBaseOpts | BaseOpts
  ): boolean {
    return !!(extra.skip || extra.todo)
  }
}
