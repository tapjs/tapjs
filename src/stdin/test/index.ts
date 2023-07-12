import { Minipass } from 'minipass'
import t from 'tap'
import { plugin } from '../dist/cjs/index.js'

t.equal(t.pluginLoaded(plugin), true, 'plugin loaded by default')

t.cleanSnapshot = s => s.replace(/# time=[0-9.]+m?s/g, '# time={TIME}')

t.test('basic behavior', async t => {
  const tapStream = new Minipass<string>({ encoding: 'utf8' })
  const desc = Object.getOwnPropertyDescriptor(process, 'stdin') as PropertyDescriptor
  //@ts-ignore
  Object.defineProperty(process, 'stdin', {
    value: tapStream,
    configurable: true,
    writable: true,
    enumerable: true,
  })
  t.teardown(() => Object.defineProperty(process, 'stdin', desc))
  let output!:Promise<string>
  t.test('parent test', t => {
    output = t.concat()
    t.jobs = 4
    t.test('consume stdin with just options', t => {
      t.stdin({ tapStream })
      t.end()
    })
    t.test('consume stdin with a name', t => {
      t.stdin('standard input', { tapStream })
      t.end()
    })
    t.test('consume process.stdin', t => {
      t.stdin()
      t.end()
    })
    t.test('consume process.stdin named', t => {
      t.stdin('standard input')
      t.end()
    })
    t.end()
  })
  tapStream.end(`TAP version 14
ok 1 - this is fine
1..1
`)
  t.matchSnapshot(await output)
})
