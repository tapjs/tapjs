import {
  BaseOpts,
  PromiseWithSubtest,
  Spawn,
  TapPlugin,
  TestBase,
} from '@tapjs/core'
import { StdioOptions } from 'child_process'

export interface SpawnOpts extends BaseOpts {
  cwd?: string
  command?: string
  args?: string[]
  stdio?: StdioOptions
  env?: { [k: string]: string } | typeof process.env
  exitCode?: number | null
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
