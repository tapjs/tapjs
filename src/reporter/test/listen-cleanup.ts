import t from 'tap'
import { listenCleanup } from '../dist/esm/listen-cleanup.js'
import EE from 'node:events'

const ee = new EE()
let called: number = 0
const cleanup = listenCleanup(ee, 'test', () => {
  called ++
})
ee.emit('test')
cleanup()
ee.emit('test')
t.equal(called, 1)

t.type(listenCleanup(null, 'asdf', () => {}), Function)
