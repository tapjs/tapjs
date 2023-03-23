
export class Waiter {
  cb: null | ((w:Waiter)=>any)
  ready: boolean = false
  value: any = null
  resolved: boolean = false
  rejected: boolean = false
  done: boolean = false
  finishing: boolean = false
  expectReject: boolean
  promise: Promise<void>
  resolve: null | ((value?:any)=>void) = null

  constructor (promise: Promise<any|void>, cb:(w:Waiter)=>any, expectReject:boolean = false) {
    this.cb = cb
    this.expectReject = !!expectReject
    this.promise = new Promise<void>(res => this.resolve = res)
    promise.then(value => {
      if (this.done) {
        return
      }

      this.resolved = true
      this.value = value
      this.done = true
      this.finish()
    }).catch(er => this.reject(er))
  }

  reject (er:any) {
    if (this.done) {
      return
    }

    this.value = er
    this.rejected = true
    this.done = true
    this.finish()
  }

  abort (er:Error) {
    if (this.done) {
      return
    }

    this.ready = true
    this.finishing = false
    this.done = true
    this.value = er
    // make it clear that this is a problem by doing
    // the opposite of what was requested.
    this.rejected = !this.expectReject
    return this.finish()
  }

  finish () {
    if (this.ready && this.done && !this.finishing) {
      this.finishing = true
      this.cb && this.cb(this)
      this.resolve && this.resolve()
    }
  }
}
