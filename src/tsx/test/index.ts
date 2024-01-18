import { TestBase } from '@tapjs/core'
import t from 'tap'
import { config, plugin } from '../dist/esm/index.js'

t.matchSnapshot(config, 'config')

t.equal(t.pluginLoaded(plugin), false, 'plugin not loaded by default')

const originalEnv = { ...process.env }
t.beforeEach(t =>
  t.intercept(process, 'env', { value: { ...originalEnv } })
)

t.test('apply plugin to a test object', t => {
  const errs = t.capture(console, 'error')
  const tb = new TestBase({ name: 'tsx test' })
  const res = plugin(tb)
  t.strictSame(res, {}, 'just an empty object')
  t.strictSame(errs.args(), [
    [
      '\n' +
        '@tapjs/tsx may behave strangely when used along with\n' +
        'the @tapjs/typescript default plugin.\n' +
        '\n' +
        'Please run: tap plugin rm @tapjs/typescript\n',
    ],
  ])
  t.end()
})

t.test('only warn one time', t => {
  const errs = t.capture(console, 'error')
  const tb = new TestBase({ name: 'tsx test' })
  const res = plugin(tb)
  t.strictSame(res, {}, 'just an empty object')
  t.strictSame(errs.args(), [])
  t.end()
})

t.test('set the configs from tap configs', async t => {
  t.capture(console, 'error')
  delete process.env.TSX_TSCONFIG_PATH
  delete process.env.TSX_DISABLE_CACHE
  process.env.TAP_TSX_TSCONFIG_PATH = 'some-path'
  process.env.TAP_TSX_DISABLE_CACHE = '1'
  const { plugin } = await t.mockImport<
    typeof import('../dist/esm/index.js')
  >('../dist/esm/index.js')
  const tb = new TestBase({ name: 'tsx env test' })
  plugin(tb)
  t.match(process.env, {
    TSX_TSCONFIG_PATH: 'some-path',
    TSX_DISABLE_CACHE: '1',
  })
})
