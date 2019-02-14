const Has = require('./has.js')
const Strict = require('./strict.js')
class HasStrict extends Has {}
HasStrict.prototype.test = Strict.prototype.test
module.exports = HasStrict
