const t = require('tap')
const yaml = require('../')
const o = new Date('1979-07-01')
const s1 = yaml.stringify(o)
t.matchSnapshot(s1, 'first stringify')
const p1 = yaml.parse(s1)
t.matchSnapshot(p1, 'parsed stringified')
const s2 = yaml.stringify(p1)
t.equal(s2, s1, 'second stringify matches first')

t.throws(() => yaml.parse('!date this is not a date'),
  new Error(`Invalid date string: this is not a date`))
