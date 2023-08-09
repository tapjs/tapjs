import t from 'tap'
import { stringify } from '../src/index.js'
const o = { cycle: { a: 1 } }
Object.assign(o.cycle, { cycle: o.cycle })
t.matchSnapshot(stringify(o), 'it creates yaml')
