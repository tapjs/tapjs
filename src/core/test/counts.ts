import t from 'tap'
import { Counts } from '../dist/esm/counts.js'

const c = new Counts()
t.same(c, {
  total: 0,
  pass: 0,
  fail: 0,
  skip: 0,
  todo: 0,
  complete: 0,
  toJSON: c.toJSON,
})
t.same(c.toJSON(), {
  total: 0,
  pass: 0,
})

const d = new Counts(c.toJSON())
d.fail++
d.todo++
d.pass++
d.skip++
d.complete = 4
d.total += 4

t.same(d.toJSON(), {
  pass: 1,
  total: 4,
  fail: 1,
  todo: 1,
  skip: 1,
  complete: 4,
})
