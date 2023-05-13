import { Base } from './base.js'

import { ProcessInfo } from '@tapjs/processinfo'
import {
  ChildProcess,
  IOType,
  StdioOptions,
} from 'node:child_process'
import { basename } from 'node:path'
import { TestBaseOpts } from './test-base.js'

export interface SpawnOpts extends TestBaseOpts {
  cwd?: string
  command?: string
  args?: string[]
  stdio?: StdioOptions
  env?: { [k: string]: string } | typeof process.env
  exitCode?: number | null
  signal?: string | null
}

export class Spawn extends Base {
  public declare options: SpawnOpts
  public cwd: string
  public command: string
  public args: string[]
  public stdio: Exclude<StdioOptions, IOType>
  public env: { [k: string]: string } | typeof process.env
  public proc: null | ChildProcess
  public cb: null | (() => void)

  constructor(options: SpawnOpts) {
    // figure out the name before calling super()
    const command = options.command
    if (!command) {
      throw new TypeError('no command provided')
    }
    options = options || {}
    const cwd =
      typeof options.cwd === 'string'
        ? options.cwd
        : process.cwd()
    const args = options.args || []

    options.name =
      options.name || Spawn.procName(cwd, command, args)
    super(options)

    this.cwd = cwd
    this.command = command
    this.args = args
    this.stdio = []
    if (options.stdio) {
      if (typeof options.stdio === 'string') {
        this.stdio = [options.stdio, 'pipe', options.stdio]
      } else {
        const [stdin, _, stderr] = options.stdio
        this.stdio = [stdin, 'pipe', stderr]
      }
    } else {
      this.stdio = [0, 'pipe', 2]
    }

    // stdio[3] is always an IPC channel, for reporting timeouts
    this.stdio[3] = 'ipc'

    const env = options.env || process.env
    this.env = {
      ...env,
      TAP_CHILD_ID: String(
        options.childId || env.TAP_CHILD_ID || '0'
      ),
      TAP: '1',
      TAP_BAIL: this.bail ? '1' : '0',
    }

    this.proc = null
    this.cb = null
  }

  endAll() {
    if (this.proc) {
      this.proc.kill('SIGKILL')
      this.parser.abort('test unfinished')
    }
    this.#callCb()
  }

  #callCb() {
    if (this.cb) {
      this.cb()
    }
    this.cb = null
  }

  main(cb: () => void) {
    this.cb = cb
    this.setTimeout(this.options.timeout || 0)

    this.parser.on('comment', c => {
      const tomatch = c.match(/# timeout=([0-9]+)\n$/)
      if (tomatch) {
        this.setTimeout(+tomatch[1])
      }
    })

    const options = {
      cwd: this.cwd,
      env: this.env,
      stdio: this.stdio,
      externalID: this.name,
    }

    this.emit('preprocess', options)
    const proc = this.proc = ProcessInfo.spawn(
      this.command,
      this.args,
      options
    )
    /* c8 ignore start */
    if (!proc.stdout) {
      return this.threw(
        'failed to open child process stdout',
        this.options
      )
    }
    /* c8 ignore stop */
    proc.stdout.pipe(this.parser)
    try {
      //@ts-ignore
      proc.stdio[3]?.unref()
    } catch (_) {}
    proc.on('close', (code, signal) => {
      this.#onprocclose(code, signal)
    })
    proc.on('error', er => this.threw(er))
    this.emit('process', proc)
    if (this.parent) {
      this.parent.emit('spawn', this)
    }
  }

  #onprocclose(code: number | null, signal: string | null) {
    this.debug('SPAWN close %j %s', code, signal)
    this.options.exitCode = code
    this.options.signal = signal

    // spawn closing with no tests is treated as a skip.
    if (
      this.results &&
      this.results.plan &&
      this.results.plan.skipAll &&
      !code &&
      !signal
    ) {
      this.options.skip =
        this.results.plan.skipReason || true
    }

    if (code || signal) {
      if (this.results) {
        this.results.ok = false
      }
      this.parser.ok = false
    }
    return this.#callCb()
  }

  timeout(
    options: { expired?: string } = { expired: this.name }
  ) {
    // try to send the timeout signal.  If the child test process is
    // using node-tap as the test runner, and not caught in a busy
    // loop, it will trigger a dump of outstanding handles and refs.
    // If that doesn't do the job, then we fall back to signals.
    // Unfortunately, termination signals on windows cannot be caught,
    // so this is the only way to get that information in most cases.
    const proc = this.proc
    if (proc) {
      try {
        proc.send({ tapAbort: 'timeout' })
        /* c8 ignore start */
      } catch (_) {}
      /* c8 ignore stop */
      const t = setTimeout(() => {
        // try to give it a chance to note the timeout and report handles
        try {
          proc.kill('SIGALRM')
        } catch (er) {}
        const t = setTimeout(() => {
          const { signal, exitCode } = this.options
          if (!signal && exitCode === undefined) {
            super.timeout(options)
            // that didn't work, use forceful termination
            proc.kill('SIGKILL')
          }
        }, 500)
        if (t.unref) t.unref()
      }, 500)
      if (t.unref) t.unref()
    }
  }

  static procName(
    cwd: string,
    command: string,
    args: string[]
  ) {
    return (
      command === process.execPath
        ? basename(process.execPath) +
          ' ' +
          args
            .map(a =>
              a.indexOf(cwd) === 0
                ? './' +
                  a
                    .substring(cwd.length + 1)
                    .replace(/\\/g, '/')
                : a
            )
            .join(' ')
            .trim()
        : command + ' ' + args.join(' ')
    ).replace(/\\/g, '/')
  }
}
