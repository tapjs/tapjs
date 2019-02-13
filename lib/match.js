// This is unlike Same and StrictSame in that:
//
// 1. Only keys in the pattern are tested.  Extra keys are ignored.
// 2. Only keys in the pattern are _printed_.  This means that if you pass
//    in a big request object with a pattern like { statusCode: 200 },
//    it'll only show that bit in the diff, not the whole request object.
// 3. The pattern is very loose.  So, for example, a class matches its
//    members, strings match against substrings, and so on.

const Format = require('./format.js')
const Has = require('./has.js')
class Match extends Has {
  test () {
    const obj = this.object
    const pattern = this.expect
    return (
      super.test() === true ? true
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
