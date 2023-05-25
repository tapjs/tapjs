import t from 'tap'
import * as yaml from '../..'
const o = new Date('1979-07-01')
const s1 = yaml.stringify(o)
t.equal(s1, '!!timestamp 1979-07-01\n', 'first stringify')
const p1 = yaml.parse(s1)
t.ok(p1 instanceof Date, 'got date')
t.matchSnapshot(p1, 'parsed stringified')
const s2 = yaml.stringify(p1)
t.equal(s2, s1, 'second stringify matches first')
const p2 = yaml.parse(s1)
t.ok(p2 instanceof Date, 'got date2')
t.equal(p1.getTime(), p2.getTime())
const d1 = s1.replace(/!!timestamp/, '!date')
const p3 = yaml.parse(d1)
t.ok(p3 instanceof Date, 'got date2')
t.equal(p3.getTime(), p2.getTime())

t.throws(() => yaml.parse('!!timestamp this is not a date'), {
  name: 'YAMLParseError',
  code: 'TAG_RESOLVE_FAILED',
})
t.throws(() => yaml.parse('!date this is not a date'), {
  name: 'YAMLParseError',
  code: 'TAG_RESOLVE_FAILED',
})
