// lifecycle methods like beforeEach, afterEach, teardown
// defined in plugins/lifecycle.ts

import Minipass from 'minipass'
import assert from 'node:assert'
import { hrtime } from 'node:process'
import { Readable } from 'node:stream'
import { format } from 'node:util'
import { CallSiteLike } from 'stack-utils'
import { FinalResults } from 'tap-parser'
import Deferred from 'trivial-deferred'
import { Base, BaseOpts } from './base.js'
import { esc } from './esc.js'
import stack from './stack.js'
import { TestPoint } from './test-point.js'
import { Waiter } from './waiter.js'

const queueEmpty = <T extends TestBase>(t: T) =>
  t.queue.length === 0 ||
  (t.queue.length === 1 &&
    t.queue[0] === 'TAP version 14\n')

export interface ClassOf<T> {
  new (): T
}

export type TapPlugin<
  B extends Object,
  O extends TestBaseOpts | any = any
> = ((t: TestBase, opts: O) => B) | ((t: TestBase) => B)

export interface TestBaseOpts extends BaseOpts {
  /**
   * The number of jobs to run in parallel. Defaults to 1
   */
  jobs?: number
  /**
   * Test function called when this Test is executed
   */
  cb?: (...args: any[]) => any

  /**
   * Flag to always/never show diagnostics.  If unset, then
   * diagnostics are shown for failing test points only.
   */
  diagnostic?: boolean
}

const normalizeMessageExtra = (
  defaultMessage: string,
  message?: string | { [k: string]: any },
  extra?: { [k: string]: any }
): [string, { [k: string]: any }] => {
  if (typeof message === 'string') {
    return [message || defaultMessage, extra || {}]
  } else {
    return [defaultMessage, message || {}]
  }
}

/**
 * Sigil for implicit end() calls that should not
 * trigger an error if the user then calls t.end()
 */
const IMPLICIT = Symbol('implicit end')

/**
 * Sigil to put in the queue to signal the end of all things
 */
const EOF = Symbol('EOF')

export type QueueEntry =
  | string
  | TestPoint
  | Base
  | typeof EOF
  | Waiter
  | [method: string, ...args: any[]]

/**
 * The TestBaseBase class is the base class for all plugins,
 * and eventually thus the Test class.
 *
 * This implements subtest functionality, TAP stream generation,
 * lifecycle events, and only the most basic pass/fail assertions.
 *
 * All other features are added with plugins.
 */

export class TestBase extends Base {
  // NB: generated pluginified Test class needs to declare over this
  declare parent?: TestBase
  promise?: Promise<any>
  jobs: number
  // #beforeEnd: [method: string | Symbol, ...args: any[]][] = []
  subtests: Base[] = []
  pool: Set<Base> = new Set()
  queue: QueueEntry[] = ['TAP version 14\n']
  cb?: (...args: any[]) => any
  count: number = 0
  ended: boolean = false
  assertAt: CallSiteLike | null = null
  assertStack: string | null = null
  diagnostic: null | boolean = null

  #planEnd: number = -1
  #printedResult: boolean = false
  #explicitEnded: boolean = false
  #multiEndThrew: boolean = false
  #n: number = 0
  #noparallel: boolean = false
  #occupied: null | Waiter | Base = null
  #pushedEnd: boolean = false
  #nextChildId: number = 1
  #currentAssert: null | ((..._: any) => any) = null
  #processing: boolean = false
  #doingStdinOnly: boolean = false

  /**
   * true if the test has printed at least one TestPoint
   */
  get printedResult(): boolean {
    return this.#printedResult
  }

  constructor(options: TestBaseOpts) {
    super(options)

    this.jobs =
      (options.jobs && Math.max(options.jobs, 1)) || 1

    if (typeof options.diagnostic === 'boolean') {
      this.diagnostic = options.diagnostic
    }

    if (options.cb) {
      this.#setCB(options.cb)
    }
  }

  #setCB<T extends TestBase>(this: T, cb: (t: T) => any) {
    this.cb = (...args: any[]) =>
      this.hook.runInAsyncScope(cb, this, ...args)
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
      message = message
        ? ' ' + ('' + esc(message)).trim()
        : ''
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
      ('# ' + body.split(/\r?\n/).join('\n# ')).trim() +
      '\n'

    if (this.results) {
      this.write(message)
    } else {
      this.queue.push(message)
    }
    this.#process()
  }

  /**
   * Called when the test times out.
   * Options are passed as diagnostics to the threw() method
   */
  timeout(options: { [k: string]: any }) {
    options = options || {}
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
      (acc, i) =>
        acc + 'pragma ' + (set[i] ? '+' : '-') + i + '\n',
      ''
    )
    this.queue.push(p)
    this.#process()
  }

  /**
   * Specify the number of Test Points expected by this test.
   * Outputs a TAP plan line.
   */
  plan(n: number, comment?: string) {
    if (this.bailedOut) {
      return
    }

    if (this.#planEnd !== -1) {
      throw new Error('Cannot set plan more than once')
    }

    if (typeof n !== 'number' || n < 0) {
      throw new TypeError('plan must be a number')
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
  pass(message?: string, extra?: { [k: string]: any }) {
    this.currentAssert = TestBase.prototype.pass

    this.printResult(
      true,
      ...normalizeMessageExtra(
        '(unnamed test)',
        message,
        extra
      )
    )
    return true
  }

  /**
   * A failing (not ok) Test Point
   */
  fail(message?: string, extra?: { [k: string]: any }) {
    this.currentAssert = TestBase.prototype.fail
    const [m, e] = normalizeMessageExtra(
      '(unnamed test)',
      message,
      extra
    )
    this.printResult(false, m, e)
    return !!(e.todo || e.skip)
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
  set currentAssert(fn: null | ((...a: any[]) => any)) {
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
    extra: { [k: string]: any },
    front: boolean = false
  ) {
    this.#printedResult = true

    const n = this.count + 1
    this.currentAssert = TestBase.prototype.printResult
    const fn = this.#currentAssert
    this.#currentAssert = null

    if (this.#planEnd !== -1 && n > this.#planEnd) {
      if (!this.passing()) return

      const failMessage = this.#explicitEnded
        ? 'test after end() was called'
        : 'test count exceeds plan'

      const er = new Error(failMessage, {
        cause: {
          test: this.name,
          plan: this.#planEnd,
        },
      })
      Error.captureStackTrace(er, fn || undefined)
      this.threw(er)
      return
    }

    extra = extra || {}

    if (extra.expectFail) {
      ok = !ok
    }

    if (this.assertAt) {
      extra.at = this.assertAt
      this.assertAt = null
    }

    if (this.assertStack) {
      extra.stack = this.assertStack
      this.assertStack = null
    }

    if (typeof extra.stack === 'string' && !extra.at) {
      extra.at = stack.parseLine(extra.stack.split('\n')[0])
    }

    if (
      !ok &&
      !extra.skip &&
      !extra.at &&
      typeof fn === 'function'
    ) {
      extra.at = stack.at(fn)
      if (!extra.todo) {
        extra.stack = stack.captureString(80, fn)
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
    const res = { ok, message, extra }

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
      if (
        extra.tapChildBuffer ||
        extra.tapChildBuffer === ''
      ) {
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

  end(): this {
    this.#end()
    return super.end()
  }

  /**
   * The leading `# Subtest` comment that introduces a child test
   */
  writeSubComment<T extends TestPoint | Base>(p: T) {
    const comment =
      '# Subtest' +
      (p.name ? ': ' + esc(p.name) : '') +
      '\n'
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
    cb: (w: Waiter) => any,
    expectReject: boolean = false
  ): Promise<void> {
    const w = new Waiter(
      promise,
      w => {
        assert.equal(this.#occupied, w)
        cb(w)
        this.#occupied = null
        this.#process()
      },
      expectReject
    )
    this.queue.push(w)
    this.#process()
    return w.promise
  }

  #end(implicit?: typeof IMPLICIT) {
    if (this.#doingStdinOnly && implicit !== IMPLICIT)
      throw new Error(
        'cannot explicitly end while in stdinOnly mode'
      )
    this.debug('END implicit=%j', implicit === IMPLICIT)
    if (this.ended && implicit === IMPLICIT) return

    // beyond here we have to be actually done with things, or else
    // the semantic checks on counts and such will be off.
    if (!queueEmpty(this) || this.#occupied) {
      if (!this.#pushedEnd) {
        this.queue.push(['#end', implicit])
      }
      this.#pushedEnd = true
      return this.#process()
    }

    this.ended = true

    if (implicit !== IMPLICIT && !this.#multiEndThrew) {
      if (this.#explicitEnded) {
        this.#multiEndThrew = true
        const er = new Error(
          'test end() method called more than once'
        )
        Error.captureStackTrace(
          er,
          this.#currentAssert || this.#end
        )
        er.cause = {
          test: this.name,
        }
        this.threw(er)
        return
      }
      this.#explicitEnded = true
    }

    if (this.#planEnd === -1) {
      this.debug(
        'END(%s) implicit plan',
        this.name,
        this.count
      )
      this.plan(this.count)
    }

    this.queue.push(EOF)
    this.#process()
  }

  #process() {
    if (this.#processing) {
      return this.debug(' < already processing')
    }
    this.debug(
      '\nPROCESSING(%s)',
      this.name,
      this.queue.length
    )
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
        // I AM BECOME EOF, DESTROYER OF STREAMS
        this.parser.end()
      } else if (p instanceof TestPoint) {
        this.debug(' > TESTPOINT')
        if (
          p.extra.tapChildBuffer ||
          p.extra.tapChildBuffer === ''
        ) {
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
      } else if (Array.isArray(p)) {
        this.debug(' > METHOD')
        const m = p.shift() as keyof this
        if (typeof this[m] !== 'function') {
          this.debug(
            ' > weird method not found in queue??',
            m,
            typeof this[m]
          )
          continue
        }
        const fn = (m === '#end' ? this.#end : this[m]) as (
          ...a: any[]
        ) => any
        const ret = fn.call(this, ...p)
        if (
          ret &&
          typeof ret === 'object' &&
          typeof ret.then === 'function'
        ) {
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

    while (
      !this.#noparallel &&
      this.pool.size < this.jobs
    ) {
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

    this.debug(
      'done processing',
      this.queue,
      this.#occupied
    )
    this.#processing = false

    // just in case any tests ended, and we have sync stuff still
    // waiting around in the queue to be processed
    if (!this.#occupied && this.queue.length) {
      this.#process()
    }
  }

  #onBufferedEnd<T extends Base>(p: T) {
    p.ondone = p.constructor.prototype.ondone
    p.results =
      p.results || new FinalResults(true, p.parser)
    p.readyToProcess = true
    const to = p.options.timeout
    const dur =
      to && p.passing() ? hrtime.bigint() - p.start : null
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
    this.emit('subtestProcess', p)
    p.ondone = p.constructor.prototype.ondone
    p.results =
      p.results || new FinalResults(true, p.parser)
    this.debug('#onIndentedEnd', this.name, p.name)
    this.#noparallel = false
    const sti = this.subtests.indexOf(p)
    if (sti !== -1) this.subtests.splice(sti, 1)
    p.readyToProcess = true
    p.options.time = p.time
    const to = p.options.timeout
    const dur =
      to && p.passing() ? hrtime.bigint() - p.start : null
    if (dur && to && dur > to) {
      p.timeout()
    } else {
      p.setTimeout(0)
    }
    this.debug('#onIndentedEnd %s(%s)', this.name, p.name)
    this.#occupied = null
    this.debug(
      'OIE(%s) b>shift into queue',
      this.name,
      this.queue
    )
    p.options.stack = ''

    this.printResult(p.passing(), p.name, p.options, true)

    this.debug(
      'OIE(%s) shifted into queue',
      this.name,
      this.queue
    )
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
    this.debug('MAIN pre', this)

    const end = () => {
      this.debug(' > implicit end for promise')
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
        return this.cb(this)
      } catch (er: any) {
        if (!er || typeof er !== 'object') {
          er = { error: er }
        }
        er.tapCaught = 'testFunctionThrow'
        this.threw(er)
      }
    })()

    if (ret && ret.then) {
      this.promise = ret
      ret.tapAbortPromise = done
      ret.then(end, (er: any) => {
        if (!er || typeof er !== 'object') {
          er = { error: er }
        }
        er.tapCaught = 'returnedPromiseRejection'
        done(er)
      })
    } else done()

    this.debug('MAIN post', this)
  }

  #processSubtest<T extends Base>(p: T) {
    this.debug(' > subtest')
    this.#occupied = p
    if (!p.buffered) {
      this.emit('subtestStart', p)
      this.debug(' > subtest indented')
      p.stream.pipe(this.parser, { end: false })
      this.writeSubComment(p)
      this.debug('calling runMain', p.runMain.toString())
      p.runMain(() => {
        this.debug('in runMain', p.runMain.toString())
        this.#onIndentedEnd(p)
      })
    } else if (p.readyToProcess) {
      this.emit('subtestProcess', p)
      this.debug(' > subtest buffered, finished')
      // finished!  do the thing!
      this.#occupied = null
      if (!p.passing() || !p.silent) {
        this.printResult(
          p.passing(),
          p.name,
          p.options,
          true
        )
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
    extra?: T & { tapStream?: Readable | Minipass }
  ) {
    const stream = ((extra && extra.tapStream) ||
      process.stdin) as Minipass
    if (!stream) {
      throw new Error(
        'cannot read stdin without stdin stream'
      )
    }

    if (
      this.queue.length !== 1 ||
      this.queue[0] !== 'TAP version 14\n' ||
      this.#processing ||
      this.results ||
      this.#occupied ||
      this.pool.size ||
      this.subtests.length
    ) {
      throw new Error(
        'Cannot use stdinOnly on a test in progress'
      )
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
    stream.pause()
    stream.pipe(this.parser)
    stream.resume()
  }

  /**
   * Mount a subtest, using this Test object as a harness.
   * Exposed mainly so that it can be used by builtin plugins.
   *
   * @internal
   */
  sub<T extends Base, O extends TestBaseOpts>(
    Class: { new (options: O): T },
    extra: O,
    caller: (...a: any[]) => unknown
  ): Promise<FinalResults | null> {
    if (this.bailedOut) return Promise.resolve(null)

    if (this.results || this.ended) {
      const er = new Error(
        'cannot create subtest after parent test ends'
      )
      Error.captureStackTrace(er, caller)
      this.threw(er)
      return Promise.resolve(null)
    }

    extra.childId = this.#nextChildId++
    if (this.shouldSkipChild(extra)) {
      this.pass(extra.name, extra)
      return Promise.resolve(null)
    }

    extra.indent = '    '
    if (extra.buffered !== undefined) {
      if (this.jobs > 1) {
        extra.buffered = true
      } else {
        extra.buffered = false
      }
    }

    extra.bail =
      extra.bail !== undefined ? extra.bail : this.bail
    extra.parent = this
    extra.stack = stack.captureString(80, caller)
    extra.context = this.context

    const t = new Class(extra)
    this.queue.push(t)
    this.subtests.push(t)
    this.emit('subtestAdd', t)

    const d = new Deferred<FinalResults>()
    t.deferred = d
    this.#process()
    return d.promise
  }

  /**
   * Return true if the child test represented by the options object
   * should be skipped.  Extended by the grep/only filtering plugins.
   */
  shouldSkipChild(extra: { [k: string]: any }) {
    return !!(extra.skip || extra.todo)
  }

  // end flow control methods
}
