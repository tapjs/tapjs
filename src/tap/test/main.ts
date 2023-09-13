import t from 'tap'
import DEF, * as extra from '../dist/esm/index.js'
import * as main from '../dist/esm/main.js'
t.equal(DEF, t)
const { default: d, ...items } = extra
t.strictSame(items, { ...main })
