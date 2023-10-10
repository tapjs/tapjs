import t, { Test } from 'tap'
import { TestMap } from '../src/test-map.js'

const tm = new TestMap<number>()
const testOne = new Test({ name: 'one' })
const testTwo = new Test({ name: 'two' })
tm.set(testOne, 1)
t.equal(tm.has(testOne), true)
t.equal(tm.get(testOne), 1)
t.equal(tm.has(testOne.t), true)
t.equal(tm.get(testOne.t), 1)
tm.set(testTwo, 2)
t.equal(tm.has(testTwo), true)
t.equal(tm.get(testTwo), 2)
t.equal(tm.has(testTwo.t), true)
t.equal(tm.get(testTwo.t), 2)

const tm2 = new TestMap<number>([
  [testOne, 1],
  [testTwo, 2],
])
t.equal(tm2.has(testOne), true)
t.equal(tm2.get(testOne), 1)
t.equal(tm2.has(testOne.t), true)
t.equal(tm2.get(testOne.t), 1)
t.equal(tm2.has(testTwo), true)
t.equal(tm2.get(testTwo), 2)
t.equal(tm2.has(testTwo.t), true)
t.equal(tm2.get(testTwo.t), 2)
