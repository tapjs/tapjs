import t from 'tap'

import { TestBase } from '@tapjs/core'
import { plugin } from '@tapjs/dummy-plugin'
import { Test } from '../scripts/test-template.js'

t.cleanSnapshot = s => s.replace(/# time=.*m?s$/gm, '# time={TIME}')

t.test('make a test, do some stuff with it', async t => {
  const tt = new Test({ name: 'my test' })
  t.equal(tt.name, 'my test')
  t.equal(tt.parent, undefined)
  //@ts-expect-error
  t.equal(tt.method, undefined)
  const td = tt.applyPlugin(plugin)
  const output = td.concat()
  t.throws(() => td.applyPlugin(plugin), {
    message: 'Plugin already applied',
  })
  t.type(td.method, 'function')
  t.equal(td.method, td.methodAlias, 'aliases stay aliased')
  t.equal(tt.pluginLoaded(plugin), false, 'plugin not on og object')
  t.matchSnapshot(tt.pluginSignature, 'pluginSignature')
  //@ts-expect-error
  t.equal(tt.method, undefined, 'method still undefined on og object')
  // just verify that it doesn't type error after the check
  // since this returns false, it doesn't actually run.
  if (tt.pluginLoaded(plugin)) {
    t.fail('should not report plugin loaded: ' + tt.dummyConfig)
  }
  // make some output
  tt.pass('this is fine')
  t.throws(() => tt.applyPlugin(plugin), {
    message: 'Plugins must be applied prior to any test output',
  })
  t.match(tt, TestBase, 'inherits from TestBase')
  t.equal(Test.prototype.pluginLoaded(plugin), false)
  t.strictSame(Test.prototype.plugins, [])
  t.strictSame(tt.plugins, [])
  t.strictSame(td.plugins, [plugin])
  t.equal(td.parent, undefined)
  t.equal(td.t, td)
  td.test(ttd => {
    t.equal(Object.getOwnPropertyDescriptor(ttd, 'foo'), undefined)
    //@ts-ignore
    ttd.foo = 'bar'
    //@ts-ignore
    t.equal(ttd.foo, 'bar')

    // one weird thing, unknown sets go to the *base* object, not
    // the extended object.
    // TODO: dig through all the places where we rely on making arbitrary sets
    // to TestBase, and replace with declared props. Might not be possible.
    // For now, just document the weirdness with this test, and leave it as an
    // edge case unlikely to ever matter.
    t.strictSame(
      Object.getOwnPropertyDescriptor(ttd, 'foo'),
      undefined,
    )

    t.strictSame(ttd.dummyConfig, {
      flag: false,
      flagSet: [],
      opt: '',
      optSet: [],
      num: 0,
      numSet: [],
    })
    ttd.dummyConfig.flag = true
    t.strictSame(ttd.dummyConfig, {
      flag: true,
      flagSet: [],
      opt: '',
      optSet: [],
      num: 0,
      numSet: [],
    })
    //@ts-expect-error
    ttd.dummyConfig = { barf: true }
    t.strictSame(ttd.dummyConfig, { barf: true })
    t.equal('dummyConfig' in ttd, true)
    t.equal('blahrgfg' in ttd, false)
    t.equal(
      Object.getOwnPropertyNames(Object.getPrototypeOf(ttd)).includes(
        'myOwnDummyProp',
      ),
      true,
    )
    t.equal(Object.getPrototypeOf(ttd).dummyConfig, ttd.dummyConfig)
    t.equal(ttd.whoami(), ttd)
    t.equal(ttd.whoami.name, 'whoami')
    t.strictSame(ttd.whoami.call({ fake: 'thing' }), {
      fake: 'thing',
    })

    t.type(ttd.method, 'function')
    t.equal(ttd.pluginLoaded(plugin), true)
    t.strictSame(ttd.plugins, [plugin])
    t.equal(ttd.parent, td)
    t.equal(ttd.t, ttd)
    t.equal(String(ttd), '[object Test]', 'correct toStringTag')
    t.equal(Object.prototype.toString.call(ttd), '[object Test]')
    // method caching and cache invalidation
    const m = ttd.method
    t.equal(m.toString().replace(/[\s;]+/g, ''), 'method(){return1}')
    t.equal(
      ttd.method.toString.toString(),
      'function toString() { [native code] }',
    )
    t.equal(ttd.method(), 1)
    t.equal(ttd.method(), 1)
    t.equal(ttd.method, m)
    ttd.method = () => 2
    t.equal(ttd.method.toString().replace(/[\s;]+/g, ''), '()=>2')
    t.equal(
      ttd.method.toString.toString(),
      'function toString() { [native code] }',
    )
    t.equal(ttd.method(), 2)
    t.equal(ttd.method(), 2)
    t.not(ttd.method, m)
    ttd.end()
  })
  td.end()
  t.equal(String(tt), '[object Test]', 'correct toStringTag')
  t.equal(Object.prototype.toString.call(tt), '[object Test]')
  t.matchSnapshot(await output, 'extended test output')
})

t.test('generate some output', async t => {
  const tt = new Test({ name: 'my test' })
  const output = tt.concat()
  tt.runMain(() => {})
  tt.test('child test', t => {
    t.pass('this is fine')
    t.end()
  })
  tt.skip('skipped test, do not run function', t => {
    t.fail('nope')
    t.end()
  })
  tt.todo('todo test, do not run function', t => {
    t.fail('nope')
    t.end()
  })
  tt.end()
  t.matchSnapshot(await output, 'test output')
})

t.test('plugin methods get bound to the plugin', t => {
  const tt = new Test({ name: 'binder' }).applyPlugin(plugin)
  const { whoami } = tt
  t.equal(whoami(), tt)
  t.end()
})
