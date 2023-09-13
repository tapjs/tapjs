import Module, { createRequire } from 'module'
const require = createRequire(import.meta.url)
require('./m.cjs')
console.error(Module._cache)
