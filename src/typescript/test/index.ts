import * as core from '@tapjs/core'
import { unlinkSync } from 'fs'
import { resolve } from 'path'
import t from 'tap'
import { config, loader } from '../dist/esm/index.js'
t.equal(loader, '@isaacs/ts-node-temp-fork-for-pr-2009/esm')
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
