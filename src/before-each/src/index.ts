/**
 * Plugin class providing
 * {@link @tapjs/before-each!BeforeEach#beforeEach} on the
 * {@link @tapjs/test!index.Test} class.
 *
 * @module
 */

import type { Test } from '@tapjs/test'
import { loop } from 'function-loop'
import { TestBase } from '@tapjs/core'

/**
 * Implementation class returned by plugin
 */
export class BeforeEach {
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

  #onBeforeEach: ((t: Test) => any)[]

  /**
   * Run the supplied function before any child tests, and all of their
   * children, and so on.
   *
   * The test about to run is an argument to the function. While its test
   * method has not yet run, it is safe to call test methods on it, but note
   * that this may potentially be confusing if for example you call `t.plan()`
   * and this conflicts with the `t.plan()` called in the test method.
   */
  beforeEach(fn: (t: Test) => any) {
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

/**
 * plugin method that instantiates the {@link @tapjs/before-each!BeforeEach} object
 */
export const plugin = (t: TestBase) => new BeforeEach(t)
