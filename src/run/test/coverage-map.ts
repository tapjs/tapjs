import { LoadedConfig } from '@tapjs/config'
import t from 'tap'

import { getCoverageMap } from '../dist/esm/coverage-map.js'

t.test('load no-op coverage map', async t => {
  const dir = t.testdir({
    'package.json': '{}',
    'map.js': 'please do not load this, it isnt even js',
  })
  const map = await getCoverageMap({
    globCwd: dir,
    get: () => undefined,
  } as unknown as LoadedConfig)
  t.strictSame(map('x'), [])
  // expect an error because it should be typed to take string arg
  //@ts-expect-error
  map()
})

t.test('load a coverage map from cjs', async t => {
  const dir = t.testdir({
    'package.json': '{}',
    'map.js': 'module.exports = () => "this is fine"',
  })
  const map = await getCoverageMap({
    globCwd: dir,
    get: () => 'map.js',
  } as unknown as LoadedConfig)
  t.equal(map('x'), 'this is fine')
})

t.test('load a coverage map from esm', async t => {
  const dir = t.testdir({
    'package.json': '{ "type": "module" }',
    'map.js': 'export default () => "this is fine"',
  })
  const map = await getCoverageMap({
    globCwd: dir,
    get: () => 'map.js',
  } as unknown as LoadedConfig)
  t.equal(map('x'), 'this is fine')
})

t.test('coverage-map config must be a module', async t => {
  const dir = t.testdir()
  await t.rejects(
    getCoverageMap({
      globCwd: dir,
      get: () => 'map.js',
    } as unknown as LoadedConfig)
  )
})

t.test('map must be a function', async t => {
  const dir = t.testdir({
    'package.json': '{ "type": "module" }',
    'map.js': 'export default "nope"',
  })
  await t.rejects(
    getCoverageMap({
      globCwd: dir,
      get: () => 'map.js',
    } as unknown as LoadedConfig)
  )
})

t.test('map must return string, string[], or null', async t => {
  const dir = t.testdir({
    'package.json': '{ "type": "module" }',
    'map.js': `
      export default t =>
        t === 'string' ? 'string'
        : t === 'arr' ? ['a', 'b']
        : t === 'null' ? null
        : { not: 'ok' }
    `,
  })
  const map = await getCoverageMap({
    globCwd: dir,
    get: () => 'map.js',
  } as unknown as LoadedConfig)
  t.equal(map('string'), 'string')
  t.strictSame(map('arr'), ['a', 'b'])
  t.equal(map('null'), null)
  t.throws(() => map('other'), {
    message:
      /^Coverage map .* must return string, string\[\], or null/,
  })
})
