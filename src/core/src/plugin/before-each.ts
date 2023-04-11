/// <reference types="node" />
import type { Test } from '@tapjs/test'
import loop from 'function-loop'
import { TestBase } from '../test-base.js'

class BeforeEach {
  static #refs = new Map<TestBase, BeforeEach>()
  #t: TestBase
  constructor(t: TestBase) {
    this.#t = t
    BeforeEach.#refs.set(t, this)
    const pbe = t.parent && BeforeEach.#refs.get(t.parent)
    if (pbe) {
      this.#onBeforeEach = [...pbe.#onBeforeEach]
    } else {
      this.#onBeforeEach = []
    }
    if (this.#onBeforeEach.length) {
      const runMain = t.runMain
      // only wrap runMain if there actually is a beforeEach
      // on the parent test. we only do this once, so any beforeEach
      // added between test initiation and test run is ignored.
      t.runMain = (cb: () => void) => {
        this.#runBeforeEach(() => runMain.call(t, cb))
      }
    }
  }
  #onBeforeEach: ((t: Test) => void)[]

  /**
   * Run the supplied function before any child tests.
   *
   * The test about to run is passed in as an argument to the function
   */
  beforeEach(fn: (t: Test) => void | Promise<void>) {
    this.#onBeforeEach.push(fn)
  }
  #runBeforeEach(cb: () => void) {
    const onerr = (er: any) => {
      this.#t.threw(er)
      cb()
    }
    loop(
      this.#onBeforeEach.map(f => () => f(this.#t.t)),
      cb,
      onerr
    )
  }
}

export const plugin = (t: TestBase) => new BeforeEach(t)
