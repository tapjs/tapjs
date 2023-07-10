import t from 'tap'
import DEF, * as extra from '../dist/mjs/esm.mjs'
import * as index from '../dist/mjs/index.js'
t.equal(DEF, t)
const { default: d, ...items } = extra
t.strictSame(items, { ...index })
