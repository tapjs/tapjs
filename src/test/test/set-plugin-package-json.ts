import { readFileSync } from 'fs'
import { dirname } from 'path'
import { resolveImport } from 'resolve-import'
import t from 'tap'
import { fileURLToPath } from 'url'
import { setPluginPackageJson } from '../src/set-plugin-package-json.js'

const core = dirname(
  fileURLToPath(
    await resolveImport('@tapjs/core/package.json', import.meta.url),
  ),
)
const expect = {
  devDependencies: { '@tapjs/core': 'file://' + core },
}

t.test('set pj if not present', async t => {
  const dir = t.testdir()
  setPluginPackageJson(dir, core)
  t.strictSame(
    JSON.parse(readFileSync(dir + '/package.json', 'utf8')),
    expect,
  )
})

t.test('clobber pj if cannot be read', async t => {
  const dir = t.testdir({
    'package.json': {},
  })
  setPluginPackageJson(dir, core)
  t.strictSame(
    JSON.parse(readFileSync(dir + '/package.json', 'utf8')),
    expect,
  )
})

t.test('clobber pj if invalid JSON', async t => {
  const dir = t.testdir({
    'package.json': 'heblo i mean hoblow i mean hello',
  })
  setPluginPackageJson(dir, core)
  t.strictSame(
    JSON.parse(readFileSync(dir + '/package.json', 'utf8')),
    expect,
  )
})

t.test('clobber pj if JSON is not an object', async t => {
  const dir = t.testdir({
    'package.json': JSON.stringify(['hello', 'world']),
  })
  setPluginPackageJson(dir, core)
  t.strictSame(
    JSON.parse(readFileSync(dir + '/package.json', 'utf8')),
    expect,
  )
})

t.test('merge pj if valid', async t => {
  const dir = t.testdir({
    'package.json': JSON.stringify({
      dependencies: { asdf: '*' },
    }),
  })
  setPluginPackageJson(dir, core)
  t.strictSame(
    JSON.parse(readFileSync(dir + '/package.json', 'utf8')),
    {
      ...expect,
      dependencies: { asdf: '*' },
    },
  )
})

t.test('merge pj if valid, but invalid @tapjs/core', async t => {
  const dir = t.testdir({
    'package.json': JSON.stringify({
      dependencies: { asdf: '*' },
      devDependencies: {
        '@tapjs/core': '2.0.3',
        foo: '*',
      },
    }),
  })
  setPluginPackageJson(dir, core)
  t.strictSame(
    JSON.parse(readFileSync(dir + '/package.json', 'utf8')),
    {
      ...expect,
      devDependencies: {
        ...expect.devDependencies,
        foo: '*',
      },
      dependencies: { asdf: '*' },
    },
  )
})
