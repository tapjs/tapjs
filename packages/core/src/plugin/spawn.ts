import { StdioOptions } from 'child_process'
import { FinalResults } from 'tap-parser'
import { BaseOpts } from '../base.js'
import { Spawn } from '../spawn.js'
import { TapPlugin, TestBase } from '../test-base.js'

export interface SpawnOpts extends BaseOpts {
  cwd?: string
  command?: string
  args?: string[]
  stdio?: StdioOptions
  env?: { [k: string]: string } | typeof process.env
  exitCode?: number | null
  signal?: string | null
}

class SpawnPlugin {
  #t: TestBase
  constructor(t: TestBase) {
    this.#t = t
  }
  spawn(cmd: string): Promise<FinalResults | null>
  spawn(
    cmd: string,
    options: SpawnOpts,
    name?: string
  ): Promise<FinalResults | null>
  spawn(
    cmd: string,
    args: string | string[],
    name?: string
  ): Promise<FinalResults | null>
  spawn(
    cmd: string,
    args: string | string[],
    options: SpawnOpts,
    name?: string
  ): Promise<FinalResults | null>
  spawn(
    cmd: string,
    args?: string | string[] | SpawnOpts,
    options?: SpawnOpts | string,
    name?: string
  ): Promise<FinalResults | null> {
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
    if (options.name === undefined) {
      options.name = name
    }
    options.command = cmd
    options.args = args
    return this.#t.sub(Spawn, options, this.spawn)
  }
}

const plugin: TapPlugin<SpawnPlugin> = (t: TestBase) =>
  new SpawnPlugin(t)
export default plugin
