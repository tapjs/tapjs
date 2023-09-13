const Module = require('module')
console.log('m.cjs', module.filename, module.parent, Object.keys(Module._cache))
require('./r.cjs')
