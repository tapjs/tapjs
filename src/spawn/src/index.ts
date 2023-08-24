import {
  BaseOpts,
  PromiseWithSubtest,
  Spawn,
  TapPlugin,
  TestBase,
} from '@tapjs/core'
import { StdioOptions } from 'child_process'

/**
 * Options for `t.spawn()`
 *
 * All of the normal Base and Extra options are also allowed.
 */
export interface SpawnOpts extends BaseOpts {
  /**
   * the current working directory of the subprocess
   */
  cwd?: string
  /**
   * the command to run (set by first argument to t.spawn)
   *
   * @internal
   */
  command?: string
  /**
   * arguments to subprocess (set by second argument to t.spawn)
   *
   * @internal
   */
  args?: string[]
  /**
   * ChildProcess `stdio` option.
   * Standard output is always set to `'pipe'`, because that's how it
   * communicates test results, and file descriptor 3 is set to an IPC
   * channel for sending timeout signals.
   */
  stdio?: StdioOptions
  /**
   * Environment variables for the subprocess
   * Defaults to `process.env`
   */
  env?: { [k: string]: string } | typeof process.env
  /**
   * Set on exit. The exit code of the process, or null if terminated
   * with a signal.
   *
   * @internal
   */
  exitCode?: number | null
  /**
   * Set on exit. Terminating signal, or null of not terminated with a
   * signal.
   *
   * @internal
   */
  signal?: string | null
}

export type PromiseWithSpawn = PromiseWithSubtest<Spawn>

export class SpawnPlugin {
  #t: TestBase
  constructor(t: TestBase) {
    this.#t = t
  }
  /**
   * Spawn a child process and parse its standard output as a subtest
   *
   * @group Subtest Methods
   */
  spawn(cmd: string): PromiseWithSpawn
  spawn(
    cmd: string,
    options: SpawnOpts,
    name?: string
  ): PromiseWithSpawn
  spawn(
    cmd: string,
    args: string | string[],
    name?: string
  ): PromiseWithSpawn
  spawn(
    cmd: string,
    args: string | string[],
    options: SpawnOpts,
    name?: string
  ): PromiseWithSpawn
  spawn(
    cmd: string,
    args?: string | string[] | SpawnOpts,
    options?: SpawnOpts | string,
    name?: string
  ): PromiseWithSpawn {
    if (typeof args === 'string') {
      args = [args]
    }
    if (typeof options === 'string') {
      name = options
      options = {}
    }
    if (typeof args === 'object' && !Array.isArray(args)) {
      options = args
      args = []
    }
    options = options || {}
    if (options.name === undefined && name !== undefined) {
      options.name = name
    }
    options.command = cmd
    options.args = args !== undefined ? args : []
    return this.#t.sub(Spawn, options, this.#t.t.spawn)
  }
}

export const plugin: TapPlugin<SpawnPlugin> = (t: TestBase) =>
  new SpawnPlugin(t)
