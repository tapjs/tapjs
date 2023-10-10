import { plugin, Clock } from '../dist/esm/index.js'
import t from 'tap'
const withClock = t.applyPlugin(plugin)

t.equal(t.pluginLoaded(plugin), false, 'not loaded by default')
//@ts-expect-error
t.equal(t.clock, undefined)
t.match(withClock.clock, Clock, 't.clock is a Clock')
t.equal(
  withClock.clock,
  withClock.clock,
  'getter returns same object each time'
)
