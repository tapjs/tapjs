// The root Test object singleton
import { Test, TestOpts } from '@tapjs/test'
import { Domain } from 'async-hook-domain'
import { Minipass, PipeOptions } from 'minipass'
import { isMainThread, parentPort } from 'node:worker_threads'
import { onExit } from 'signal-exit'
import { FinalResults } from 'tap-parser'
import { diags } from './diags.js'
import { IMPLICIT } from './implicit-end-sigil.js'
import { Extra } from './index.js'
import { env, proc } from './proc.js'
import { TestBase } from './test-base.js'

const stdout = proc?.stdout

const privSym = Symbol('private constructor')
type PrivateTAPCtor = {
  [privSym]: true
}
const privateTAPCtor: PrivateTAPCtor = {
  [privSym]: true,
}

let instance: TAP | undefined = undefined

const envFlag = (key: string) =>
  env[key] === undefined ? undefined : env[key] === '1'

let piped = false
let registered = false
let autoend = false

/**
 * This is a singleton subclass of the {@link Test} base class.
 *
 * Instantiate it by calling the exported {@link tap} method.
 *
 * It has all of the same plugins, fields, properties etc of a "normal"
 * Test object, but with some additional characteristics to make it
 * suitable for use as the root test runner.
 *
 * - The {@link TAP#register} method will hook onto the process object,
 *   to set the exit code to 1 if there are test failures, and ignore any
 *   `EPIPE` errors that happen on stdout.  (This is quite common in cases
 *   where a test aborts, and then attempts to write more data.)
 *
 * - A brief summary is printed at the end of the test run.
 *
 * - If piped to stdout, then `this.register()` will be called automatically.
 *
 * - If not piped anywhere else, the first time it writes any data, it will
 *   begin piping to stdout.
 *
 * - Options are set based on relevant environment variables, rather than
 *   taking an options object, since in normal cases, it will be instantiated
 *   automatically before any user code is run.
 *
 * - The test will automatically implicitly end when the process exits.  If
 *   there are any unfinished tests at this time, they will be emitted as
 *   failures.
 *
 * - If a `teardown` function is added, then the test will automatically
 *   implicitly end if it is idle for 3 consecutive `setTimeout` deferrals.
 *   This is a bit of a kludge, but it allows tests to run servers or other
 *   things that would prevent a graceful process exit, and close them down
 *   in a teardown function.
 *
 * - Lastly, since test files are often spawned by the runner using
 *   `t.spawn()`, this class listens for the timeout signal, and attempts to
 *   print diagnostic information about currently active handles and requests,
 *   as these are usually the cause of a test hanging indefinitely.
 */
class TAP extends Test {
  constructor(priv: PrivateTAPCtor, opts: TestOpts = {}) {
    /* c8 ignore start */
    if (priv !== privateTAPCtor) {
      throw new Error(
        'the TAP singleton should not be instantiated directly'
      )
    }
    const timeoutEnv = env.TAP_TIMEOUT || '30'
    /* c8 ignore stop */

    const timeout = Number(timeoutEnv) * 1000
    const options = {
      name: 'TAP',
      diagnostic: envFlag('TAP_DIAG'),
      bail: envFlag('TAP_BAIL'),
      debug:
        envFlag('TAP_DEBUG') ||
        /\btap\b/i.test(env['NODE_DEBUG'] || ''),
      omitVersion: envFlag('TAP_OMIT_VERSION'),
      preserveWhitespace: !envFlag('TAP_OMIT_WHITESPACE'),
      timeout,
      ...opts,
    }

    super(options)
    instance = this
    this.on('idle', () => maybeAutoend())
    this.on('complete', (results: FinalResults) =>
      this.#oncomplete(results)
    )

    // only attach the teardown autoend if we're using the teardown plugin
    // we test in this convoluted manner rather than this.pluginLoaded
    // because otherwise we have a cyclical dep link between @tapjs/core
    // and @tapjs/after which prevents TS from being able to build properly
    // from a cold start.
    const td = this as typeof this & {
      teardown?: (fn: () => any) => void
    }
    const { teardown } = td
    if (typeof teardown === 'function') {
      type TD = typeof teardown
      td.teardown = (...args: Parameters<TD>): ReturnType<TD> => {
        autoend = true
        td.teardown = teardown
        return td.teardown(...args)
      }
    }

    this.runMain(() => {})
  }

  /**
   * register this tap instance as being in charge of the current process
   * ignore epipe errors, set exit code, etc.
   * Happens automatically if piped to stdout.
   */
  register() {
    if (registered) return
    registered = true
    registerTimeoutListener()
    ignoreEPIPE()
    this.once('bail', () => proc?.exit(1))
    proc?.once('beforeExit', () => {
      ;(this as unknown as TestBase).end(IMPLICIT)
      if (!this.results) {
        this.endAll()
      }
    })
    // create a root domain to handle throws that happen outside
    // of any subtest.
    const rootDomain = new Domain((er, type) =>
      this.hookDomain.onerror(er, type)
    )
    this.hook.onDestroy = () => rootDomain.destroy()
  }

  /**
   * Just the normal Minipass.pipe method, but automatically registers
   * if the destination is stdout.
   */
  pipe<W extends Minipass.Writable>(dest: W, opts?: PipeOptions): W {
    piped = true
    if (stdout && dest === stdout) {
      this.register()
    }
    return super.pipe(dest, opts)
  }

  /**
   * Just the normal Minipass.write method, but automatically pipes
   * to stdout if not piped anywhere else.
   */
  write(chunk: string): boolean {
    if (!registered && !piped && stdout) {
      this.pipe(stdout)
    }
    return super.write(chunk)
  }

  #oncomplete(results: FinalResults) {
    // only print this added info in the root test, otherwise
    // it's a bit extraneous.
    if (!env.TAP_CHILD_ID) {
      this.comment(this.counts.toJSON())
      this.comment(`time=${this.time}ms`)
    }

    if (registered && !results.ok && proc) {
      proc.exitCode = 1
    }
  }

  timeout(
    options: {
      expired?: string
      signal?: NodeJS.Signals | null
    } = { expired: this.name, signal: null }
  ) {
    const ret = super.timeout(
      Object.assign(getTimeoutExtra(options.signal), options)
    )
    // don't stick around
    // this is just a defense if the SIGALRM signal is caught, since
    // we'll exit forcibly anyway.
    /* c8 ignore start */
    if (registered) {
      const t = setTimeout(() => {
        didProcessTimeout = true
        alarmKill()
      }, 100)
      if (t.unref) t.unref()
    }
    /* c8 ignore stop */
    return ret
  }
}

const shouldAutoend = (instance: TAP | undefined): instance is TAP =>
  !!autoend && !!instance?.idle

let autoendTimer: NodeJS.Timer | undefined = undefined
const maybeAutoend = () => {
  clearTimeout(autoendTimer)
  if (!shouldAutoend(instance)) return
  autoendTimer = setTimeout(() => {
    clearTimeout(autoendTimer)
    if (shouldAutoend(instance)) {
      autoendTimer = setTimeout(() => {
        clearTimeout(autoendTimer)
        if (shouldAutoend(instance)) {
          ;(instance as unknown as TestBase).end(IMPLICIT)
          autoend = false
        }
      })
    }
  })
}

const registerTimeoutListener = () => {
  // SIGALRM means being forcibly killed due to timeout
  const isTimeoutSignal = (signal: NodeJS.Signals | null) =>
    signal === 'SIGALRM' || (signal === 'SIGINT' && !env.TAP_CHILD_ID)
  onExit((_, signal) => {
    if (!isTimeoutSignal(signal) || didProcessTimeout) {
      return
    }
    onProcessTimeout(signal)
  })

  const onMessage = (
    msg:
      | {
          tapAbort?: string
          key?: string
          child?: string
        }
      | any
  ) => {
    if (
      msg &&
      typeof msg === 'object' &&
      msg.tapAbort === 'timeout' &&
      msg.key === env.TAP_ABORT_KEY &&
      msg.child === env.TAP_CHILD_ID
    ) {
      onProcessTimeout('SIGALRM')
    }
  }

  // this is a bit of a handshake agreement between the root TAP object
  // and the Spawn and Worker classes. Because Windows cannot catch and
  // process posix signals, we have to use an IPC message to send the
  // timeout signal.
  // t.spawn() will always open an ipc channel on fd 3 for this purpose,
  // and t.worker() will use the worker message port.
  // The key and childId are just a basic gut check to ensure that we don't
  // treat a message as a timeout unintentionally, though of course that
  // would be extremely rare.

  /* c8 ignore start */
  proc?.on('message', onMessage)
  parentPort?.on('message', onMessage)

  // We don't want the channel to keep the child running
  //@ts-ignore
  proc?.channel?.unref()
  parentPort?.unref()
  /* c8 ignore stop */
}

const getTimeoutExtra = (signal: NodeJS.Signals | null = null) => {
  const p = process as unknown as {
    _getActiveHandles: () => any[]
    _getActiveRequests: () => any[]
  }

  /* c8 ignore start */
  const handles = (p._getActiveHandles() || []).filter(
    /* c8 ignore stop */
    h => h !== proc?.stdout && h !== proc?.stdin && h !== proc?.stderr
  )
  const requests = p._getActiveRequests()

  const extra: Extra = {
    at: undefined,
    signal,
  }
  if (requests.length) {
    extra.requests = requests.map(r => {
      /* c8 ignore start */
      if (!r || typeof r !== 'object') return r
      /* c8 ignore stop */
      const ret: {
        type: string
        context?: any
      } = {
        type: r.constructor.name,
      }

      // most everything in node has a context these days
      /* c8 ignore start */
      if (r.context) ret.context = r.context
      /* c8 ignore stop */

      return ret
    })
  }

  // Newer node versions don't have this as reliably.
  /* c8 ignore start */
  if (handles.length) {
    extra.handles = handles.map(h => {
      /* c8 ignore start */
      if (!h || typeof h !== 'object') return h
      /* c8 ignore stop */

      const ret: {
        type: string
        msecs?: number
        events?: string[]
        sockname?: string
        connectionKey?: string
      } = {
        type: h.constructor.name,
      }

      // all of this is very internal-ish
      /* c8 ignore start */
      if (h.msecs) ret.msecs = h.msecs
      if (h._events) ret.events = Object.keys(h._events)
      if (h._sockname) ret.sockname = h._sockname
      if (h._connectionKey) ret.connectionKey = h._connectionKey
      /* c8 ignore stop */

      return ret
    })
  }

  return extra
}

let didProcessTimeout = false
const onProcessTimeout = (signal: NodeJS.Signals | null = null) => {
  // pretty much impossible to do this, since we forcibly exit,
  // but it is theoretically possible if SIGALRM is caught.
  /* c8 ignore start */
  if (didProcessTimeout || !instance) return
  /* c8 ignore stop */
  didProcessTimeout = true

  const extra = getTimeoutExtra(signal)

  if (signal === 'SIGINT') {
    extra.message = 'interrupt!'
  }

  // ignore coverage here because it happens after everything
  // must have been shut down.
  /* c8 ignore start */
  if (!instance.results) {
    instance.timeout(extra)
  } else {
    console.error('possible timeout: SIGALRM received after tap end')
    if (extra.handles || extra.requests) {
      delete extra.signal
      if (!extra.at) {
        delete extra.at
      }
    }
    console.error(diags(extra))
    alarmKill()
  }
}

const alarmKill = () => {
  // can only kill in main thread, worker threads will be terminated
  if (!isMainThread) return

  // SIGALRM isn't supported everywhere,
  // and we won't be able to catch it on windows anyway.
  /* c8 ignore start */
  try {
    proc?.kill(proc?.pid, 'SIGALRM')
  } catch {
    proc?.kill(proc?.pid, 'SIGKILL')
  }
  const t = setTimeout(() => {
    proc?.kill(proc?.pid, 'SIGKILL')
  }, 500)
  if (t.unref) t.unref()
}
/* c8 ignore stop */

const ignoreEPIPE = () => {
  /* c8 ignore start */
  if (!stdout?.emit) return
  /* c8 ignore stop */
  const emit = stdout.emit
  stdout.emit = (ev: string, ...args: any[]) => {
    const er = args[0] as NodeJS.ErrnoException
    if (ev === 'error' && er?.code === 'EPIPE') {
      return false
    }
    //@ts-ignore
    return emit.call(stdout, ev, ...args)
  }
}

export const tap = (opts?: TestOpts) =>
  instance || new TAP(privateTAPCtor, opts)
export type { TAP }
