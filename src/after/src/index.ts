/**
 * Plugin class providing {@link After#after} and {@link After#teardown}
 * on the {@link Test} class.
 *
 * @module
 */

import { TapPlugin, TestBase } from '@tapjs/core'
import { isPromise } from 'is-actual-promise'

/**
 * Implementation class returned by plugin function
 */
export class After {
  #t: TestBase
  #onTeardown: (() => any)[] = []
  #didOnEOF: boolean = false

  constructor(t: TestBase) {
    this.#t = t
  }

  /**
   * Alias for {@link After#after}
   */
  teardown(fn: () => any) {
    return this.after(fn)
  }

  /**
   * Runs the supplied function after the test is completely finished, and
   * before the next test starts.
   */
  after(fn: () => any) {
    this.#onTeardown.push(fn)

    if (!this.#didOnEOF) {
      this.#didOnEOF = true
      const onEOF = this.#t.onEOF
      this.#t.onEOF = () => {
        const ret = onEOF()
        if (isPromise(ret)) {
          return ret.then(() => this.#callTeardown())
        }
        return this.#callTeardown()
      }
    }
  }

  /**
   * call the teardown functions
   *
   * @internal
   */
  #callTeardown(): void | Promise<void> {
    let fn: (() => any) | undefined
    while ((fn = this.#onTeardown.shift())) {
      try {
        const ret = fn.call(this.#t.t)
        if (isPromise(ret)) {
          return ret.then(() => this.#callTeardown())
        }
      } catch (e) {
        this.#onTeardown.length = 0
        this.#t.threw(e)
        return
      }
    }
  }
}

/**
 * Plugin method that creates the {@link After} instance
 */
export const plugin: TapPlugin<After> = (t: TestBase) => new After(t)
