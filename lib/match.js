const Format = require('./format.js')
const Has = require('./has.js')
class Match extends Has {
  test () {
    const obj = this.object
    const pattern = this.expect
    return (
      super.test() === true ? true

      // failures that would also fail in the super class
      : pattern == null ? false
      : pattern instanceof RegExp && obj instanceof RegExp ? false

      : typeof pattern === 'symbol' ?
        typeof obj === 'symbol' && obj.toString() === pattern.toString()
      : pattern instanceof RegExp ? pattern.test('' + obj)
      : typeof obj === 'string' && typeof pattern === 'string' && pattern
        ? obj.indexOf(pattern) !== -1
      : obj instanceof Date && typeof pattern === 'string'
        ? obj.getTime() === new Date(pattern).getTime()
      : pattern === Buffer ? Buffer.isBuffer(obj)
      : pattern === Function ? typeof obj === 'function'
      : pattern === Number
        ? typeof obj === 'number' && obj === obj && isFinite(obj)
      : pattern === String ? typeof obj === 'string'
      : pattern === Symbol ? typeof obj === 'symbol'
      : pattern === Boolean ? typeof obj === 'boolean'
      : pattern === Map ? this.isMap()
      : pattern === Set ? this.isSet()
      : pattern === Object ? obj && typeof obj === 'object'
      : pattern === Array ? this.isArray()
      : this.isSet() && !(pattern instanceof Set) ? false
      : this.isMap() && !(pattern instanceof Map) ? false
      : this.isArray() && !(new Format(pattern).isArray()) ? false
      : typeof pattern === 'function' && typeof obj === 'object'
        ? obj instanceof pattern
      : typeof obj !== 'object' || typeof pattern !== 'object' ? false
      : 'COMPLEX'
    )
  }
}

module.exports = Match
