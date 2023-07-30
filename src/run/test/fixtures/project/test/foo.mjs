import { foo } from '../foo.mjs'
console.log(`TAP version 14
1..1
${foo() === 'foo' ? 'ok' : 'not ok'}
`)
