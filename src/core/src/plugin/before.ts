import { TapPlugin, TestBase } from '../test-base.js'

class Before {
  #t: TestBase
  constructor(t: TestBase) {
    this.#t = t
  }

  /**
   * Just run the supplied function right away.
   * This is handy when some setup may require asynchronous actions, and
   * tests should wait until after it completes.
   */
  before(fn: () => any) {
    this.#t.currentAssert = arguments.callee
    if (this.#t.printedResult) {
      throw new Error(
        't.before() called after starting tests'
      )
    }

    if (this.#t.occupied) {
      this.#t.queue.push(() => this.#call(fn))
    } else {
      this.#call(fn)
    }
  }

  #call(fn: () => any) {
    // if it throws, we let it kill the test
    const ret = fn.call(this.#t.t)

    if (isPromise(ret)) {
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
  }
}

const plugin: TapPlugin<Before> = (t: TestBase) =>
  new Before(t)
export default plugin

const isPromise = (p: any): p is Promise<any | void> =>
  !!p &&
  typeof p === 'object' &&
  typeof p.then === 'function'
