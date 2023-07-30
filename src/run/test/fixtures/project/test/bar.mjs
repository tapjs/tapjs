import { bar } from '../bar.mjs'
console.log(`TAP version 14
1..1
${bar() === 'bar' ? 'ok' : 'not ok'}
`)
