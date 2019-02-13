// This is unlike Same and StrictSame in that:
//
// 1. Only keys in the pattern are tested.  Extra keys are ignored.
// 2. Only keys in the pattern are _printed_.  This means that if you pass
//    in a big request object with a pattern like { statusCode: 200 },
//    it'll only show that bit in the diff, not the whole request object.

const Has = require('./has.js')
const Strict = require('./strict.js')
class HasStrict extends Has {
  test () {
    return Strict.prototype.test.call(this)
  }
}

module.exports = HasStrict
