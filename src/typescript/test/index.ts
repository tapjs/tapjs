import * as core from '@tapjs/core'
import t from 'tap'
import { config, loader } from '../dist/cjs/index.js'
t.equal(loader, 'ts-node/esm')
t.matchSnapshot(config)

t.test('no typecheck setting, no effect', t => {
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
  const { plugin } = t.mockRequire(
    '../dist/cjs/index.js',
    mock
  ) as typeof import('../dist/cjs/index.js')
  plugin(t)
  plugin(t)
  t.equal(env.TS_NODE_TRANSPILE_ONLY, undefined)
  t.end()
})

t.test('typecheck true => transpile only false', t => {
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
  const { plugin } = t.mockRequire(
    '../dist/cjs/index.js',
    mock
  ) as typeof import('../dist/cjs/index.js')
  plugin(t)
  plugin(t)
  t.equal(env.TS_NODE_TRANSPILE_ONLY, '0')
  t.end()
})

t.test('typecheck false => transpile only true', t => {
  const mock = {
    '@tapjs/core': t.createMock(core, {
      env: {
        TS_NODE_TRANSPILE_ONLY: undefined,
        TAP_TYPECHECK: '0',
      },
    }),
  }
  const {
    '@tapjs/core': { env },
  } = mock
  const { plugin } = t.mockRequire(
    '../dist/cjs/index.js',
    mock
  ) as typeof import('../dist/cjs/index.js')
  plugin(t)
  plugin(t)
  t.equal(env.TS_NODE_TRANSPILE_ONLY, '1')
  t.end()
})
