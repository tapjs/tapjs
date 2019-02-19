const t = require('tap')
const {stringify} = require('../')
const o = { cycle: { a: 1 } }
o.cycle.cycle = o.cycle
t.matchSnapshot(stringify(o), 'it creates yaml')
