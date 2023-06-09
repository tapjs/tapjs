import { TapPlugin, TestBase } from '@tapjs/core'

export class After {
  #t: TestBase
  #onTeardown: (() => any)[] = []
  #didOnEOF: boolean = false
  constructor(t: TestBase) {
    this.#t = t
  }

  /**
   * Alias for `t.after(fn)`
   */
  teardown(fn: () => any) {
    return this.after(fn)
  }

  /**
   * Just run the supplied function right away.
   * Runs after the test is completely finished, and before the next
   * test starts.
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

  #callTeardown() {
    let fn: (() => any) | undefined
    while ((fn = this.#onTeardown.shift())) {
      try {
        const ret = fn.call(this.#t.t)
        if (isPromise(ret)) {
          this.#t.waitOn(ret, w => {
            if (w.rejected) {
              this.#t.threw(w.value)
            } else {
              this.#callTeardown()
            }
          })
          return ret
        }
      } catch (e) {
        this.#t.threw(e)
        return
      }
    }
  }
}

export const plugin: TapPlugin<After> = (t: TestBase) => new After(t)

const isPromise = (p: any): p is Promise<any | void> =>
  !!p && typeof p === 'object' && typeof p.then === 'function'
