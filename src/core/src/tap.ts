// The root Test object singleton
import { Test, TestOpts } from '@tapjs/test'
import Minipass, {
  ContiguousData,
  Encoding,
} from 'minipass'
import { onExit } from 'signal-exit'
import { FinalResults } from 'tap-parser'
import { diags } from './diags.js'
import { Extra } from './index.js'
import { mainScript } from './main-script.js'
import { env, proc } from './proc.js'
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
let pipedToStdout = false
let autoend = false
class TAP extends Test {
  constructor(opts: TestOpts, priv: PrivateTAPCtor) {
    /* c8 ignore start */
    if (priv !== privateTAPCtor) {
      throw new Error(
        'the TAP singleton should not be instantiated directly'
      )
    }
    /* c8 ignore stop */

    const options = {
      name: mainScript('TAP'),
      diagnostic: envFlag('TAP_DIAG'),
      bail: envFlag('TAP_BAIL'),
      debug: envFlag('TAP_DEBUG'),
      omitVersion: envFlag('TAP_OMIT_VERSION'),
      ...opts,
    }

    super(options)
    instance = this
    this.on('complete', results =>
      this.#oncomplete(results)
    )

    // only attach the teardown autoend if we're using the teardown plugin
    // tell typescript to chill, if it's not defined or defined as something
    // else.
    //@ts-ignore
    if (typeof this.teardown === 'function') {
      //@ts-ignore
      const { teardown } = this
      type TD = typeof teardown
      //@ts-ignore
      this.teardown = (
        //@ts-ignore
        ...args: Parameters<TD>
      ): //@ts-ignore
      ReturnType<TD> => {
        autoend = true
        //@ts-ignore
        this.teardown = teardown
        //@ts-ignore
        return teardown.call(this, ...args)
      }
    }

    this.runMain(() => {})
  }

  pipe(...args: Parameters<Minipass['pipe']>) {
    piped = true
    if (stdout && args[0] === stdout) {
      if (!pipedToStdout) {
        pipedToStdout = true
        registerTimeoutListener(this)
        ignoreEPIPE()
        this.once('bail', () => proc?.exit(1))
        proc?.once('beforeExit', () => {
          this.end()
          if (!this.results) {
            this.endAll()
          }
        })
      }
    }
    return super.pipe(...args)
  }

  write(
    c: ContiguousData,
    e?: Encoding | (() => any),
    cb?: () => any
  ) {
    if (!piped && stdout) {
      this.pipe(stdout)
    }
    maybeAutoend()
    return super.write(c, e, cb)
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
    if (pipedToStdout && !results.ok && proc) {
      proc.exitCode = 1
    }
  }
}

const queueEmpty = () =>
  !instance ||
  instance.queue.length === 0 ||
  (instance.queue.length === 1 &&
    instance.queue[0] === 'TAP version 14\n')

const shouldAutoend = (
  instance: TAP | undefined
): instance is TAP =>
  !!autoend &&
  !!instance &&
  queueEmpty() &&
  !instance.occupied &&
  !instance.pool.size &&
  !instance.subtests.length

let autoendTimer: NodeJS.Timer | undefined = undefined
const maybeAutoend = () => {
  if (!shouldAutoend(instance)) return
  if (autoendTimer) clearTimeout(autoendTimer)
  autoendTimer = setTimeout(() => {
    if (shouldAutoend(instance)) {
      if (autoendTimer) clearTimeout(autoendTimer)
      autoendTimer = setTimeout(() => {
        if (shouldAutoend(instance)) instance.end()
      })
    }
  })
}

const registerTimeoutListener = (t: TAP) => {
  // SIGALRM means being forcibly killed due to timeout
  let didProcessTimeout = false
  onExit((_, signal) => {
    if (signal !== 'SIGALRM' || didProcessTimeout) {
      return
    }
    onProcessTimeout(signal)
  })

  // this is a bit of a handshake agreement between the root TAP object
  // and the Spawn class. Because Windows cannot catch and process posix
  // signals, we have to use an IPC message to send the timeout signal.
  process.on(
    'message',
    (msg: { tapAbort?: string } | any) => {
      if (
        msg &&
        typeof msg === 'object' &&
        msg.tapAbort === 'timeout'
      ) {
        onProcessTimeout(null)
      }
    }
  )
  // We don't want the channel to keep the child running
  //@ts-ignore
  process.channel?.unref()

  const onProcessTimeout = (
    signal: NodeJS.Signals | null = null
  ) => {
    if (didProcessTimeout) return
    didProcessTimeout = true

    const p = process as unknown as {
      _getActiveHandles: () => any[]
      _getActiveRequests: () => any[]
    }

    const handles = p
      ._getActiveHandles()
      .filter(
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

    // ignore coverage here because it happens after everything
    // must have been shut down.
    /* c8 ignore start */
    if (!t.results && t.timeout) t.timeout(extra)
    else {
      console.error(
        'possible timeout: timeout signal received after tap end'
      )
      if (extra.handles || extra.requests) {
        delete extra.signal
        if (!extra.at) {
          delete extra.at
        }
        console.error(diags(extra))
      }
      try {
        process.kill(process.pid, 'SIGALRM')
      } catch (_) {
        // kill isn't supported everywhere
        process.exit(1)
      }
    }
  }
  /* c8 ignore stop */
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

const getInstance = () =>
  instance || new TAP({}, privateTAPCtor)
export { getInstance as TAP }
