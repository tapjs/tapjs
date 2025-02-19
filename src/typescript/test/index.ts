import * as core from '@tapjs/core'
import { unlinkSync } from 'fs'
import { resolve } from 'path'
import t from 'tap'
import { config, importLoader, loader } from '../dist/esm/index.js'
t.equal(loader, '@tapjs/typescript/esm')
t.equal(importLoader, '@tapjs/typescript/import')
t.matchSnapshot(config)

t.test('typecheck defaults to false', async t => {
  const mock = {
    '@tapjs/core': t.createMock(core, {
      env: {
        TS_NODE_TRANSPILE_ONLY: undefined,
        TAP_TYPECHECK: undefined,
      },
    }),
  }
  const {
    '@tapjs/core': { env },
  } = mock
  const { plugin } = await t.mockImport<
    typeof import('../dist/esm/index.js')
  >('../dist/esm/index.js', mock)
  plugin(t)
  plugin(t)
  t.equal(env.TS_NODE_TRANSPILE_ONLY, '1')
  t.end()
})

t.test('typecheck true => transpile only false', async t => {
  const mock = {
    '@tapjs/core': t.createMock(core, {
      env: {
        TS_NODE_TRANSPILE_ONLY: undefined,
        TAP_TYPECHECK: '1',
      },
    }),
  }
  const {
    '@tapjs/core': { env },
  } = mock
  const { plugin } = await t.mockImport<
    typeof import('../dist/esm/index.js')
  >('../dist/esm/index.js', mock)
  plugin(t)
  plugin(t)
  t.equal(env.TS_NODE_TRANSPILE_ONLY, '0')
  t.end()
})

t.test('--tsconfig option', async t => {
  const cwd = t.testdirName
  const mock = {
    '@tapjs/core': t.createMock(core, {
      env: {
        TS_NODE_PROJECT: undefined,
        TAP_TSCONFIG: 'tsconfig.foo.json',
        TAP_CWD: cwd,
      },
    }),
  }
  const {
    '@tapjs/core': { env },
  } = mock
  const { plugin } = await t.mockImport<
    typeof import('../dist/esm/index.js')
  >('../dist/esm/index.js', mock)
  plugin(t)
  plugin(t)
  t.equal(env.TS_NODE_PROJECT, resolve(cwd, 'tsconfig.foo.json'))
  t.end()
})

t.test('--tsconfig defaults', async t => {
  const files = [
    'tsconfig.tap.json',
    'tsconfig.test.json',
    'tsconfig.spec.json',
    'tsconfig.json',
  ]
  const cwd = t.testdir(Object.fromEntries(files.map(f => [f, ''])))

  for (const file of files) {
    t.test(file, async t => {
      const mock = {
        '@tapjs/core': t.createMock(core, {
          env: {
            TS_NODE_PROJECT: undefined,
            TAP_TSCONFIG: undefined,
            TAP_CWD: cwd,
          },
        }),
      }
      const {
        '@tapjs/core': { env },
      } = mock
      const { plugin } = await t.mockImport<
        typeof import('../dist/esm/index.js')
      >('../dist/esm/index.js', mock)
      plugin(t)
      plugin(t)
      t.equal(env.TAP_TSCONFIG, file)
      t.equal(env.TS_NODE_PROJECT, resolve(cwd, file))
      unlinkSync(resolve(cwd, file))
    })
  }

  t.end()
})

t.test('type strip only', async t => {
  const { NODE_OPTIONS = '', TAP_TYPE_STRIP_ONLY = '' } = process.env
  t.beforeEach(() => (process.env.TAP_TYPE_STRIP_ONLY = '1'))
  t.afterEach(() =>
    Object.assign(process.env, { NODE_OPTIONS, TAP_TYPE_STRIP_ONLY }),
  )

  t.test('not supported on node <22', async t => {
    t.intercept(process.versions, 'node', { value: 20 })
    const { plugin } =
      await t.mockImport<typeof import('../src/index.js')>(
        '../src/index.js',
      )
    t.strictSame(plugin({} as unknown as core.TestBase), {})
    t.equal(
      process.env.NODE_OPTIONS,
      NODE_OPTIONS,
      'untouched node options',
    )
    t.equal(process.env.TAP_TYPE_STRIP_ONLY, '0', 'tso turned off')
  })

  t.test('supported with experimental flag on 22', async t => {
    t.intercept(process.versions, 'node', { value: 22 })
    process.env.NODE_OPTIONS = 'hello'
    const { plugin } =
      await t.mockImport<typeof import('../src/index.js')>(
        '../src/index.js',
      )
    t.strictSame(plugin({} as unknown as core.TestBase), {})
    t.equal(
      process.env.NODE_OPTIONS,
      `hello --no-warnings --experimental-strip-types`.trim(),
      'updated node options',
    )
    t.equal(process.env.TAP_TYPE_STRIP_ONLY, '1', 'tso enabled')
  })

  t.test('supported on 23+', async t => {
    t.intercept(process.versions, 'node', { value: 23 })
    delete process.env.NODE_OPTIONS
    const { plugin } =
      await t.mockImport<typeof import('../src/index.js')>(
        '../src/index.js',
      )
    t.strictSame(plugin({} as unknown as core.TestBase), {})
    t.equal(
      process.env.NODE_OPTIONS,
      `--no-warnings`.trim(),
      'updated node options',
    )
    t.equal(process.env.TAP_TYPE_STRIP_ONLY, '1', 'tso enabled')
  })
})
