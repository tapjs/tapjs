import t from 'tap'
import { config, loader, plugin } from '../dist/mjs/index.js'

const withPlug = t.applyPlugin(plugin)
t.test('loader has global preload only', async t => {
  //@ts-ignore
  const loader = await import('@tapjs/dummy-plugin/loader')
  t.matchOnly(loader, { globalPreload: Function })
  t.equal(loader.globalPreload(), 'global.DUMMY_PLUGIN_LOADED = true')
})

t.test('just verify the other exports', t => {
  t.equal(loader, '@tapjs/dummy-plugin/loader')
  t.matchSnapshot(config)
  t.end()
})

t.test('plugin adds stuff', async t => {
  t.equal(withPlug.testBase.name, 'TAP')
  t.equal(withPlug.whoami(), withPlug)
  const o = {}
  t.equal(withPlug.whoami.call(o), o)
  t.equal(withPlug.method(), 1)
  t.strictSame(withPlug.dummyConfig, {
    flag: false,
    flagSet: [],
    opt: '',
    optSet: [],
    num: 0,
    numSet: [],
  })
  //@ts-expect-error
  withPlug.dummyConfig = { foo: 'bar' }
  t.strictSame(withPlug.dummyConfig, { foo: 'bar' })
  //@ts-expect-error
  withPlug.dummyConfig = null
  process.env.TAP_DUMMY_FLAG_SET = '1\n0\n1'
  process.env.TAP_DUMMY_OPT_SET = 'foo\nbar'
  process.env.TAP_DUMMY_NUM_SET = '1\n2\n3'
  process.env.TAP_DUMMY_FLAG = '1'
  process.env.TAP_DUMMY_OPT = 'baz'
  process.env.TAP_DUMMY_NUM = '123'
  t.match(withPlug.dummyConfig, {
    flag: true,
    flagSet: [true, false, true],
    opt: 'baz',
    optSet: ['foo', 'bar'],
    num: 123,
    numSet: [1, 2, 3],
  })
})
