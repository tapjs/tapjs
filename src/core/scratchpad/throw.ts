import { tap } from '../dist/cjs/tap.js'
const t = tap()
t.pass('this is fine')
throw new Error('poop')
