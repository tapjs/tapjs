import { tap } from '../dist/cjs/tap.js'
tap().pass('this is fine')
throw 'not an error'
