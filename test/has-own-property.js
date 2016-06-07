Object.prototype.foo = 42
require('../').pass('modifying Object.prototype did not break things')