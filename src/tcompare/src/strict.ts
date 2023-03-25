import { Format } from './format.js'
import { Same } from './same.js'
export class Strict extends Same {
  test() {
    const a = this.object
    const b = this.expect
    const st = super.test()
    return st === false
      ? false
      : a === b
      ? true
      : a !== a
      ? b !== b
      : typeof a !== 'object' || typeof b !== 'object'
      ? false
      : Buffer.isBuffer(a) && Buffer.isBuffer(b)
      ? st
      : a instanceof Date && b instanceof Date
      ? st
      : a instanceof RegExp && b instanceof RegExp
      ? st
      : this.isArguments() && !new Format(b).isArguments()
      ? false
      : a.constructor !== b.constructor &&
        !(
          Array.isArray(b) &&
          Array.isArray(b) &&
          a.constructor.name === b.constructor.name
        )
      ? false
      : 'COMPLEX'
  }
}
