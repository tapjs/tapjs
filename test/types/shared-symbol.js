const t = require('tap')
const yaml = require('../..')
const o = Symbol.for('foo')
const s1 = yaml.stringify(o)
t.matchSnapshot(s1, 'first stringify')
const p1 = yaml.parse(s1)
t.equal(p1, o, 'got the same shared symbol back')
t.matchSnapshot(p1, 'parsed stringified')
const s2 = yaml.stringify(p1)
t.equal(s2, s1, 'second stringify matches first')

t.throws(() => yaml.parse('!sym/for this is not a symbol'),
  new Error(`Invalid Symbol Expression: this is not a symbol`))
