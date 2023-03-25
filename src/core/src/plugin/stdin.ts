import { FinalResults } from 'tap-parser'
import { parseTestArgs } from '../parse-test-args.js'
import { Stdin, StdinOpts } from '../stdin.js'
import { TapPlugin, TestBase } from '../test-base.js'

class StdinPlugin {
  #t: TestBase
  constructor(t: TestBase) {
    this.#t = t
  }
  stdin(
    name: string,
    extra?: StdinOpts
  ): Promise<FinalResults | null>
  stdin(extra?: StdinOpts): Promise<FinalResults | null>
  stdin(
    name?: string | { [k: string]: any },
    extra?: StdinOpts
  ): Promise<FinalResults | null> {
    if (name && typeof name === 'object') {
      extra = name
      name = undefined
    }
    extra = parseTestArgs<Stdin>(
      name,
      extra,
      false,
      '/dev/stdin'
    )
    return this.#t.sub(Stdin, extra, this.stdin)
  }
}

const plugin: TapPlugin<StdinPlugin> = (t: TestBase) =>
  new StdinPlugin(t)
export default plugin
