import { Base } from './base.js'

import ProcessInfo from '@tapjs/processinfo'
import {
  ChildProcess,
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
  public stdio: StdioOptions
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
    if (options.stdio) {
      if (typeof options.stdio === 'string')
        this.stdio = [options.stdio, 'pipe', options.stdio]
      else {
        this.stdio = options.stdio.slice(0) as StdioOptions
      }
    } else {
      this.stdio = [0, 'pipe', 2]
    }

    // stdout MUST be a pipe so we can collect tap data
    ;(this.stdio as string[])[1] = 'pipe'
    const env = options.env || process.env
    this.env = {
      ...env,
      TAP_CHILD_ID: String(
        options.childId ||
          env.TAP_CHILD_ID ||
          /* istanbul ignore next */ '0'
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
    }
    this.parser.abort('test unfinished')
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

    queueMicrotask(async () => {
      this.emit('preprocess', options)
      const proc = ProcessInfo.spawn(
        this.command,
        this.args,
        options
      )
      /* istanbul ignore next */
      if (!proc.stdout) {
        return this.threw(
          'failed to open child process stdout',
          this.options
        )
      }
      proc.stdout.pipe(this.parser)
      proc.on('close', (code, signal) =>
        this.#onprocclose(code, signal)
      )
      proc.on('error', er => this.threw(er))
      this.emit('process', proc)
      if (this.parent) {
        this.parent.emit('spawn', this)
      }
    })
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

  timeout(options: { expired?: string } = { expired: this.name}) {
    if (this.proc) {
      this.proc.kill('SIGTERM')
      const t = setTimeout(() => {
        if (
          this.proc &&
          !this.options.signal &&
          this.options.exitCode === undefined
        ) {
          super.timeout(options)
          this.proc.kill('SIGKILL')
        }
      }, 1000)
      t.unref()
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
