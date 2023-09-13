const Module = require('module')
console.log('r.cjs', module.filename, module.parent, Object.keys(Module._cache))
