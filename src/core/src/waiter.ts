// basically just a fancy Deferred, wrapped around an existing promise.
// The callback function is called when it's been either resolved or
// rejected. The Waiter internal promise is resolved if the wrapped
// promise matches our expectation. The value member is the resolved
// value or rejection error.
export class Waiter {
  cb: null | ((w: Waiter) => any)
  ready: boolean = false
  value: any = undefined
  resolved: boolean = false
  rejected: boolean = false
  done: boolean = false
  finishing: boolean = false
  expectReject: boolean
  promise: Promise<void>
  resolve: null | ((value?: any) => void) = null

  constructor(
    promise: Promise<any | void>,
    cb: (w: Waiter) => any,
    expectReject: boolean = false
  ) {
    this.cb = cb
    this.expectReject = !!expectReject
    this.promise = new Promise<void>(res => (this.resolve = res))
    promise
      .then(value => {
        // promises should always resolve/reject at most one time.
        /* c8 ignore start */
        if (this.done) {
          return
        }
        /* c8 ignore stop */

        this.resolved = true
        this.value = value
        this.done = true
        this.finish()
      })
      .catch(er => this.reject(er))
  }

  reject(er: any) {
    // promises should always resolve/reject at most one time.
    /* c8 ignore start */
    if (this.done) {
      return
    }
    /* c8 ignore stop */

    this.value = er
    this.rejected = true
    this.done = true
    this.finish()
  }

  // TODO: consider AbortSignal maybe?
  abort(er: Error) {
    /* c8 ignore start */
    if (this.done) {
      return
    }
    /* c8 ignore stop */

    this.ready = true
    this.finishing = false
    this.done = true
    this.value = er
    // make it clear that this is a problem by doing
    // the opposite of what was requested.
    this.rejected = !this.expectReject
    return this.finish()
  }

  finish() {
    if (this.ready && this.done && !this.finishing) {
      this.finishing = true
      this.cb?.(this)
      this.resolve?.()
    }
  }
}
