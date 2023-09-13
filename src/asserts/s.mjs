await import('/Users/isaacs/dev/tapjs/tapjs/src/asserts/dist/esm/index.js')
await import('/Users/isaacs/dev/tapjs/tapjs/src/asserts/dist/commonjs/index.js')

import { findSourceMap } from 'module'
console.error(findSourceMap('/Users/isaacs/dev/tapjs/tapjs/src/asserts/dist/esm/index.js').payload.sources)
console.error(findSourceMap('/Users/isaacs/dev/tapjs/tapjs/src/asserts/dist/commonjs/index.js').payload.sources)
