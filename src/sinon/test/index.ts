import tap from 'tap'
import { plugin } from '../dist/esm/index.js'

const t = tap.applyPlugin(plugin)

t.equal(tap.pluginLoaded(plugin), false, 'plugin not loaded by default')
//@ts-expect-error
t.equal(tap.sinon, undefined, 'no sinon object on og root')

t.test('plugin adds sinon feature', t => {
  t.equal(t.pluginLoaded(plugin), true, 'pluginLoaded() true')
  const { sinon } = t
  t.ok(sinon, 'sinon property set')
  t.equal(t.sinon, sinon, 'same sandbox returned once created')

  let restoreCalled = false
  t.test('child test to do auto-restore', t => {
    const restore = t.sinon.restore
    t.sinon.restore = () => {
      restore.call(t.sinon)
      restoreCalled = true
    }
    t.end()
  })
  t.equal(restoreCalled, true)
  t.end()
})
