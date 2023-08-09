import t from 'tap'
import { diags } from '../dist/mjs/diags.js'

t.matchSnapshot(diags({}), 'empty object')
//@ts-expect-error
t.matchSnapshot(diags(null), 'null diags')
t.matchSnapshot(diags({ a: 1 }), 'object with data')
