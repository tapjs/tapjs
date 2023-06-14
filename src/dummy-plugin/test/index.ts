import t from 'tap'
import { plugin, config, loader } from '../dist/cjs/index.js'
const withPlug = t.applyPlugin(plugin)
t.test('loader has global preload only', async t => {
  //@ts-ignore
  const loader = await import('@tapjs/dummy-plugin/loader')
  t.matchOnly(loader, { globalPreload: Function })
  t.equal(loader.globalPreload(), 'global.DUMMY_PLUGIN_LOADED = true')
})
t.test('plugin adds methods', async t => {
  t.equal(withPlug.testBase.name, 'TAP')
  t.equal(withPlug.method(), 1)
  t.matchSnapshot(withPlug.dummyConfig)
})
