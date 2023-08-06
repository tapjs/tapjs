/**
 * Plugin class providing {@link AfterEach#afterEach} on the {@link Test}
 * class.
 *
 * @module
 */

import { TapPlugin, TestBase } from '@tapjs/core'
import type { Test } from '@tapjs/test'
import { loop } from 'function-loop'

/**
 * Implementation class returned by plugin function
 */
export class AfterEach {
  static #refs = new Map<TestBase, AfterEach>()
  #t: TestBase

  constructor(t: TestBase) {
    this.#t = t
    AfterEach.#refs.set(t, this)
    const pae = t.parent && AfterEach.#refs.get(t.parent)
    if (
      pae &&
      (pae.#onAfterEach.length || pae.#parentOnAfterEach.length)
    ) {
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
  #onAfterEach: ((t: Test) => any)[] = []
  #parentOnAfterEach: ((t: Test) => any)[] = []

  /**
   * Run the supplied function after every *child* test, and any of those
   * child tests' children, and so on.
   *
   * The test that has just completed is passed in as an argument to the
   * function. Note that at this point, the test is fully ended, so attempting
   * to call assertion methods on it will raise an error.
   */
  afterEach(fn: (t: Test) => any) {
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

/**
 * Plugin method that creates the {@link AfterEach} instance
 */
export const plugin: TapPlugin<AfterEach> = (t: TestBase) =>
  new AfterEach(t)
