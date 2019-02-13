const Same = require('./same.js')
class Strict extends Same {
  test () {
    const a = this.object
    const b = this.expect
    return (
      super.test() === false ? false
      : a === b ? true
      : a !== a ? b !== b
      : typeof a !== 'object' || typeof b !== 'object' ? false
      : a === null || b === null ? false
      : Buffer.isBuffer(a) && Buffer.isBuffer(b) ? a.equals(b)
      : a instanceof Date && b instanceof Date ? a.getTime() === b.getTime()
      : a instanceof RegExp && b instanceof RegExp ? this.regexpSame()
      : a.constructor !== b.constructor &&
        !(Array.isArray(b) && Array.isArray(b) &&
          a.constructor.name === 'Array' && b.constructor.name === 'Array')
        ? false
      : 'COMPLEX'
    )
  }
}

module.exports = Strict
