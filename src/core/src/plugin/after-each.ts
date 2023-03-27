import type { Test } from '@tapjs/test'
import loop from 'function-loop'
import { TapPlugin, TestBase } from '../test-base.js'

class AfterEach {
  static #refs = new Map<TestBase, AfterEach>()
  #t: TestBase
  constructor(t: TestBase) {
    this.#t = t
    AfterEach.#refs.set(t, this)
    const pae = t.parent && AfterEach.#refs.get(t.parent)
    if (pae && pae.#onAfterEach.length) {
      this.#parentOnAfterEach = [
        ...pae.#onAfterEach,
        ...pae.#parentOnAfterEach,
      ]
    } else {
      this.#parentOnAfterEach = []
    }
    if (this.#parentOnAfterEach.length) {
      const runMain = t.runMain
      t.runMain = (cb: () => void) => {
        runMain.call(t, () => this.#runAfterEach(cb))
      }
    }
  }
  #onAfterEach: ((t: Test) => void)[] = []
  #parentOnAfterEach: ((t: Test) => void)[] = []
  afterEach(fn: (t: Test) => void | Promise<void>) {
    this.#onAfterEach.push(fn)
  }
  #runAfterEach(cb: () => void) {
    const onerr = (er: any) => {
      this.#t.threw(er)
      cb()
    }
    loop(
      this.#parentOnAfterEach.map(f => () => f(this.#t.t)),
      cb,
      onerr
    )
  }
}

const plugin: TapPlugin<AfterEach> = (t: TestBase) =>
  new AfterEach(t)
export default plugin
