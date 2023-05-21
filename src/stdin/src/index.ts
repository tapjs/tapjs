import {
  Extra,
  parseTestArgs,
  PromiseWithSubtest,
  Stdin,
  StdinOpts,
  TapPlugin,
  TestBase,
} from '@tapjs/core'
import { FinalResults } from 'tap-parser'

export type PromiseWithStdin = PromiseWithSubtest<Stdin>

export class StdinPlugin {
  #t: TestBase
  constructor(t: TestBase) {
    this.#t = t
  }
  stdin(name: string, extra?: StdinOpts): PromiseWithStdin
  stdin(extra?: StdinOpts): Promise<FinalResults | null>
  stdin(name?: string | Extra, extra?: StdinOpts): PromiseWithStdin {
    if (name && typeof name === 'object') {
      extra = name
      name = undefined
    }
    return this.#t.sub(
      Stdin,
      parseTestArgs<Stdin>(name, extra, false, '/dev/stdin'),
      this.stdin
    )
  }
}

export const plugin: TapPlugin<StdinPlugin> = (t: TestBase) =>
  new StdinPlugin(t)
