// The root Test object singleton
import { Test } from '@tapjs/test'
import { Minipass } from 'minipass'
import { onExit } from 'signal-exit'
import { FinalResults } from 'tap-parser'
import { diags } from './diags.js'
import { IMPLICIT } from './implicit-end-sigil.js'
import { Extra } from './index.js'
import { plugin as AfterPlugin } from './plugin/after.js'
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
  constructor(priv: PrivateTAPCtor) {
    /* c8 ignore start */
    if (priv !== privateTAPCtor) {
      throw new Error(
        'the TAP singleton should not be instantiated directly'
      )
    }
    /* c8 ignore stop */

    const timeout =
      Number(process.env.TAP_TIMEOUT || '30') * 1000
    const options = {
      name: 'TAP',
      diagnostic: envFlag('TAP_DIAG'),
      bail: envFlag('TAP_BAIL'),
      debug: envFlag('TAP_DEBUG'),
      omitVersion: envFlag('TAP_OMIT_VERSION'),
      preserveWhitespace: !envFlag('TAP_OMIT_WHITESPACE'),
      timeout,
    }

    super(options)
    instance = this
    this.on('idle', () => maybeAutoend())
    this.on('complete', (results: FinalResults) =>
      this.#oncomplete(results)
    )

    // only attach the teardown autoend if we're using the teardown plugin
    // tell typescript to chill, if it's not defined or defined as something
    // else.
    const td = this
    if (td.pluginLoaded(AfterPlugin)) {
      const { teardown } = td
      type TD = typeof teardown
      td.teardown = (
        ...args: Parameters<TD>
      ): ReturnType<TD> => {
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
      this.end(IMPLICIT)
      if (!this.results) {
        this.endAll()
      }
    })
  }

  /**
   * Just the normal Minipass.pipe method, but automatically registers
   * if the destination is stdout.
   */
  pipe<W extends Minipass.Writable>(
    dest: W,
    opts?: Minipass.PipeOptions
  ): W {
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
    if (!piped && stdout) {
      this.pipe(stdout)
    }
    return super.write(chunk)
  }

  #oncomplete(results: FinalResults) {
    if (results.fail) this.comment('fail:', results.fail)
    if (results.todo) this.comment('todo:', results.todo)
    if (results.skip) this.comment('skip:', results.skip)

    // only print this added info in the root test, otherwise
    // it's a bit extraneous.
    if (!env.TAP_CHILD_ID) {
      this.comment('pass', results.pass, '/', results.count)
      setTimeout(() => console.log(`# time=${this.time}ms`))
    }

    if (!results.ok) this.comment('fail')
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
      Object.assign(
        getTimeoutExtra(options.signal),
        options
      )
    )
    // don't stick around
    if (registered) {
      const t = setTimeout(() => {
        didProcessTimeout = true
        alarmKill()
      }, 100)
      if (t.unref) t.unref()
    }
    return ret
  }
}

const shouldAutoend = (
  instance: TAP | undefined
): instance is TAP => !!autoend && !!instance?.idle

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
    signal === 'SIGALRM' ||
    (signal === 'SIGINT' && !process.env.TAP_CHILD_ID)
  onExit((_, signal) => {
    if (!isTimeoutSignal(signal) || didProcessTimeout) {
      return
    }
    onProcessTimeout(signal)
  })

  // this is a bit of a handshake agreement between the root TAP object
  // and the Spawn class. Because Windows cannot catch and process posix
  // signals, we have to use an IPC message to send the timeout signal.
  // t.spawn() will always open an ipc channel on fd 3 for this purpose.
  // The key and childId are just a basic gut check to ensure that we don't
  // treat a message as a timeout unintentionally, though of course that
  // would be extremely rare.
  process.on(
    'message',
    (
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
        msg.key === process.env.TAP_ABORT_KEY &&
        msg.child === process.env.TAP_CHILD_ID
      ) {
        onProcessTimeout('SIGALRM')
      }
    }
  )
  // We don't want the channel to keep the child running
  //@ts-ignore
  process.channel?.unref()
  /* c8 ignore stop */
}

const getTimeoutExtra = (
  signal: NodeJS.Signals | null = null
) => {
  const p = process as unknown as {
    _getActiveHandles: () => any[]
    _getActiveRequests: () => any[]
  }

  /* c8 ignore start */
  const handles = (p._getActiveHandles() || []).filter(
    /* c8 ignore stop */
    h =>
      h !== process.stdout &&
      h !== process.stdin &&
      h !== process.stderr
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
      if (h._connectionKey)
        ret.connectionKey = h._connectionKey
      /* c8 ignore stop */

      return ret
    })
  }

  return extra
}

let didProcessTimeout = false
const onProcessTimeout = (
  signal: NodeJS.Signals | null = null
) => {
  if (didProcessTimeout || !instance) return
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
    console.error(
      'possible timeout: SIGALRM received after tap end'
    )
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
  // SIGALRM isn't supported everywhere
  /* c8 ignore start */
  try {
    process.kill(process.pid, 'SIGALRM')
  } catch {
    process.kill(process.pid, 'SIGKILL')
  }
  const t = setTimeout(() => {
    process.kill(process.pid, 'SIGKILL')
  }, 500)
  /* c8 ignore stop */
  if (t.unref) t.unref()
}

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

export const tap = () => instance || new TAP(privateTAPCtor)
export type { TAP }
