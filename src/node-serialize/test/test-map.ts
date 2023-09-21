import t, { Test, TestBase } from 'tap'
import { TestMap } from '../src/test-map.js'

const tm = new TestMap<number>()
const testOne = { t: {} } as unknown as TestBase
const testTwo = {} as unknown as TestBase
tm.set(testOne, 1)
t.equal(tm.has(testOne), true)
t.equal(tm.get(testOne), 1)
t.equal(tm.has(testOne.t), true)
t.equal(tm.get(testOne.t), 1)
tm.set(testTwo, 2)
t.equal(tm.has(testTwo), true)
t.equal(tm.get(testTwo), 2)
testTwo.t = {} as unknown as Test
t.equal(tm.has(testTwo), true)
t.equal(tm.get(testTwo), 2)
t.equal(tm.get(testTwo.t), 2)
