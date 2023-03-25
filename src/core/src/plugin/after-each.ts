import loop from 'function-loop'
import { TapPlugin, TestBase } from '../test-base.js'
import type { Test } from '@tapjs/test'

class AfterEach {
  static #refs = new Map<TestBase, AfterEach>()
  #t: TestBase
  constructor(t: TestBase) {
    this.#t = t
    AfterEach.#refs.set(t, this)
    const runMain = t.runMain
    t.runMain = (cb: () => void) => {
      runMain.call(t, () => this.#runAfterEach(this.#t, cb))
    }
  }
  #onAfterEach: ((t: Test) => void)[] = []
  afterEach(fn: (t: Test) => void | Promise<void>) {
    this.#onAfterEach.push(fn)
  }
  #runAfterEach(who: TestBase, cb: () => void) {
    // run all the afterEach methods from the parent
    const onerr = (er: any) => {
      who.threw(er)
      cb()
    }
    const p = this.#t.parent
    const pae = !!p && AfterEach.#refs.get(p)
    const run = () => {
      if (pae) {
        pae.#runAfterEach(who, cb)
      } else {
        cb()
      }
    }
    if (who !== this.#t) {
      loop(this.#onAfterEach, run, onerr)
    } else {
      run()
    }
  }
}

const plugin: TapPlugin<AfterEach> = (t: TestBase) => new AfterEach(t)
export default plugin
