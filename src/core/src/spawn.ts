import { Base, TapBaseEvents } from './base.js'

import { ProcessInfo, WithExternalID } from '@tapjs/processinfo'
import {
  ChildProcess,
  ChildProcessByStdio,
  IOType,
  SpawnOptions,
  StdioOptions,
} from 'node:child_process'
import { basename } from 'node:path'
import { Readable, Stream, Writable } from 'node:stream'
import { TestBaseOpts } from './test-base.js'

export type ChildProcessWithStdout = ChildProcessByStdio<
  null | Writable,
  Readable,
  null | Readable
>

const hasStdout = (p: ChildProcess): p is ChildProcessWithStdout =>
  !!p.stdout

export interface SpawnEvents extends TapBaseEvents {
  preprocess: [WithExternalID<SpawnOptions>]
  process: [ChildProcessWithStdout]
}

export interface SpawnOpts extends TestBaseOpts {
  cwd?: string
  command?: string
  args?: string[]
  /**
   * Passed to child_process.spawn's 'stdio' option
   *
   * No matter what is specified here, stdout is *always* set to 'pipe',
   * and stdio[3] is *always* set to 'ipc', because TAP uses these internally
   * to communicate test results and timeout, respectively.
   *
   * So, this is only to set the behavior of stdin and stderr.
   */
  stdio?: StdioOptions
  env?: { [k: string]: string } | NodeJS.ProcessEnv
  exitCode?: number | null
  signal?: string | null
}

export class Spawn extends Base<SpawnEvents> {
  declare options: SpawnOpts
  cwd: string
  command: string
  args: string[]
  stdio: [
    IOType | Stream | number | null | undefined,
    'pipe',
    IOType | Stream | number | null | undefined,
    'ipc'
  ]
  env: { [k: string]: string } | NodeJS.ProcessEnv
  proc: null | ChildProcess = null
  cb: null | (() => void) = null

  // doesn't have to be cryptographically secure, just a gut check
  #tapAbortKey: string = String(Math.random())

  #timedOut?: { expired?: string }

  #childId: string

  constructor(options: SpawnOpts) {
    // figure out the name before calling super()
    const command = options.command
    if (!command) {
      throw new TypeError('no command provided for t.spawn()')
    }
    const cwd =
      typeof options.cwd === 'string' ? options.cwd : process.cwd()
    const args = options.args || []

    options.name = options.name || Spawn.procName(cwd, command, args)
    super(options)

    this.cwd = cwd
    this.command = command
    this.args = args
    if (options.stdio) {
      if (typeof options.stdio === 'string') {
        this.stdio = [options.stdio, 'pipe', options.stdio, 'ipc']
      } else {
        const [stdin, _, stderr] = options.stdio
        /* c8 ignore start */
        if (stdin === 'ipc' || stderr === 'ipc') {
          throw new Error(
            'cannot spawn subtest with ipc in stdin or stderr'
          )
        }
        /* c8 ignore stop */
        this.stdio = [stdin, 'pipe', stderr, 'ipc']
      }
    } else {
      this.stdio = [0, 'pipe', 2, 'ipc']
    }

    const env = options.env || process.env
    this.#childId = String(options.childId || env.TAP_CHILD_ID || '0')
    this.env = {
      ...env,
      TAP_CHILD_ID: this.#childId,
      TAP: '1',
      TAP_BAIL: this.bail ? '1' : '0',
      TAP_ABORT_KEY: this.#tapAbortKey,
    }
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
    this.parent?.emit('spawn', this)

    this.emit('preprocess', options)
    const proc = (this.proc = ProcessInfo.spawn(
      this.command,
      this.args,
      options
    ))
    /* c8 ignore start */
    if (!hasStdout(proc)) {
      return this.threw(
        'failed to open child process stdout',
        this.options
      )
    }
    /* c8 ignore stop */
    proc.stdout.pipe(this.parser)
    try {
      //@ts-ignore
      proc.stdio[3].unref()
      /* c8 ignore start */
    } catch (_) {}
    /* c8 ignore stop */
    proc.on('close', (code, signal) => {
      this.#onprocclose(code, signal)
    })
    proc.on('error', er => this.threw(er))
    this.emit('process', proc)
  }

  #onprocclose(code: number | null, signal: string | null) {
    if (this.#timedOut) super.timeout(this.#timedOut)
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
      this.options.skip = this.results.plan.skipReason || true
    }

    if (code || signal) {
      if (this.results) {
        this.results.ok = false
      }
      this.parser.ok = false
    }
    return this.#callCb()
  }

  timeout(options: { expired?: string } = { expired: this.name }) {
    // defer calling super.timeout() until we actually kill the process.
    this.#timedOut = options
    // try to send the timeout signal.  If the child test process is
    // using node-tap as the test runner, and not caught in a busy
    // loop, it will trigger a dump of outstanding handles and refs.
    // If that doesn't do the job, then we fall back to signals.
    // Unfortunately, termination signals on windows cannot be caught,
    // so this is the only way to get that information in most cases.
    const proc = this.proc
    if (proc) {
      try {
        proc.send({
          tapAbort: 'timeout',
          key: this.#tapAbortKey,
          child: this.#childId,
        })
        /* c8 ignore start */
      } catch (_) {}
      /* c8 ignore stop */

      // this whole bit has to be ignored because there is no way to test
      // signals on Windows without mocking to the point of irrelevance
      /* c8 ignore start */
      const t = setTimeout(() => {
        // try to give it a chance to note the timeout and report handles
        try {
          proc.kill('SIGALRM')
        } catch (er) {}
        const t = setTimeout(() => {
          const { signal, exitCode } = this.options
          if (!signal && exitCode === undefined) {
            // that didn't work, use forceful termination
            proc.kill('SIGKILL')
          }
        }, 500)
        if (t.unref) t.unref()
        proc.once('close', () => clearTimeout(t))
      }, 500)
      if (t.unref) t.unref()
      proc.once('close', () => clearTimeout(t))
      /* c8 ignore stop */
    }
  }

  static procName(cwd: string, command: string, args: string[]) {
    return (
      command === process.execPath
        ? basename(process.execPath) +
          ' ' +
          args
            .map(a =>
              a.indexOf(cwd) === 0
                ? './' +
                  a.substring(cwd.length + 1).replace(/\\/g, '/')
                : a
            )
            .join(' ')
            .trim()
        : command + ' ' + args.join(' ')
    ).replace(/\\/g, '/')
  }
}
