/**
 * Plugin class providing {@link @tapjs/before!Before#before} on the
 * {@link @tapjs/test!index.Test} class.
 *
 * @module
 */

import { TapPlugin, TestBase } from '@tapjs/core'
import { isPromise } from 'is-actual-promise'

/**
 * Implementation class returned by plugin function
 */
export class Before {
  #t: TestBase

  constructor(t: TestBase) {
    this.#t = t
  }

  /**
   * Just run the supplied function right away, but do not run any
   * child tests until it has completed.
   *
   * This is handy when some setup may require asynchronous actions, and
   * tests should wait until after it completes.
   *
   * @group Test Lifecycle Management
   */
  before(fn: () => any) {
    this.#t.currentAssert = this.before
    if (this.#t.occupied) {
      this.#t.queue.push(() => this.#call(fn, true))
    } else {
      this.#call(fn)
    }
  }

  #call(fn: () => any, deferred = false) {
    this.#t.currentAssert = this.before
    // if it throws, we let it kill the test
    const ret = fn.call(this.#t.t)

    // no need to waitOn it if we're already deferred, because the
    // TestBase will already wait on functions that return promises.
    if (isPromise(ret) && !deferred) {
      this.#t.waitOn(ret, w => {
        if (w.rejected) {
          // sort of a mini bailout, just for this one test
          // drop everything from the queue, quit right away
          this.#t.queue.length = 0
          this.#t.threw(w.value)
          this.#t.end()
        }
      })
    }

    return ret
  }
}

/**
 * Plugin method that creates the {@link @tapjs/before!Before} instance
 */
export const plugin: TapPlugin<Before> = (t: TestBase) =>
  new Before(t)
