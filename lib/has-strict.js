const Has = require('./has.js')
const Strict = require('./strict.js')
class HasStrict extends Has {
  test () {
    return Strict.prototype.test.call(this)
  }
}

module.exports = HasStrict
