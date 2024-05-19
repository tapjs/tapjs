import {
  parseTestArgs,
  PromiseWithSubtest,
  Stdin,
  StdinOpts,
  TapPlugin,
  TestBase,
} from '@tapjs/core'

export type PromiseWithStdin = PromiseWithSubtest<Stdin>

/* c8 ignore start */
const stdinCB = () => {
  throw new Error('this should not be called')
}
/* c8 ignore stop */

export class StdinPlugin {
  #t: TestBase
  constructor(t: TestBase) {
    this.#t = t
  }
  /**
   * Parse standard input as a child test
   *
   * @group Subtest Methods
   */
  stdin(): PromiseWithStdin
  stdin(name: string): PromiseWithStdin
  stdin(name: string, extra: StdinOpts): PromiseWithStdin
  stdin(extra: StdinOpts): PromiseWithStdin
  stdin(
    name?: string | StdinOpts,
    extra?: StdinOpts,
  ): PromiseWithStdin {
    if (name && typeof name === 'object') {
      extra = name
      name = undefined
    }
    name ??= '/dev/stdin'
    extra ??= {}
    return this.#t.sub(
      Stdin,
      parseTestArgs<Stdin>(name, extra, stdinCB),
      this.#t.t.stdin,
    )
  }
}

export const plugin: TapPlugin<StdinPlugin> = (t: TestBase) =>
  new StdinPlugin(t)
