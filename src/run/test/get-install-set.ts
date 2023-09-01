import './fixtures/chalk.js'

import { LoadedConfig } from '@tapjs/config'
import t from 'tap'

const logs = t.capture(console, 'log').args
const errs = t.capture(console, 'error').args
// throw so process.exit() jumps out of the flow
const exits = t.capture(process, 'exit', () => {
  throw 'exit'
}).args

t.test('plugin already built into tap', async t => {
  const { getInstallSet } = (await t.mockImport(
    '../dist/get-install-set.js',
    {
      '../dist/analyze-plugin-arg.js': {
        analyzePluginArg: async () => ({
          name: 'a',
          versionInstalled: '1.2.3',
          versionWant: '1.2.3',
        }),
      },
    }
  )) as typeof import('../dist/get-install-set.js')
  const config = {
    get: () => ['a', 'b', 'c'],
    values: {
      plugin: ['a', 'b', 'c'],
    },
    pluginList: ['a', 'b', 'c'],
  } as unknown as LoadedConfig

  t.strictSame(await getInstallSet(['x'], config), {
    added: new Set(),
    needInstall: new Set(),
    needCleanup: new Set(),
  })
  t.matchSnapshot(logs(), 'stdout')
  t.matchSnapshot(errs(), 'stderr')
  t.strictSame(exits(), [])
})

t.test('plugin already installed', async t => {
  const { getInstallSet } = (await t.mockImport(
    '../dist/get-install-set.js',
    {
      '../dist/analyze-plugin-arg.js': {
        analyzePluginArg: async () => ({
          name: 'x',
          versionInstalled: '1.2.3',
          versionWant: '1.2.3',
        }),
      },
    }
  )) as typeof import('../dist/get-install-set.js')
  const config = {
    get: () => ['a', 'b', 'c'],
    values: {
      plugin: ['a', 'b', 'c'],
    },
    pluginList: ['a', 'b', 'c'],
  } as unknown as LoadedConfig

  t.strictSame(await getInstallSet(['x'], config), {
    added: new Set(['x']),
    needInstall: new Set(),
    needCleanup: new Set(),
  })
  t.matchSnapshot(logs(), 'stdout')
  t.matchSnapshot(errs(), 'stderr')
  t.strictSame(exits(), [])
})

t.test('plugin exists, but wrong version', async t => {
  const { getInstallSet } = (await t.mockImport(
    '../dist/get-install-set.js',
    {
      '../dist/pkg-exists.js': {
        pkgExists: async () => true,
      },
      '../dist/analyze-plugin-arg.js': {
        analyzePluginArg: async () => ({
          name: 'x',
          versionInstalled: '1.2.0',
          versionWant: '1.2.3',
        }),
      },
    }
  )) as typeof import('../dist/get-install-set.js')
  const config = {
    get: () => ['a', 'b', 'c'],
    values: {
      plugin: ['a', 'b', 'c'],
    },
    pluginList: ['a', 'b', 'c'],
  } as unknown as LoadedConfig

  t.strictSame(await getInstallSet(['x'], config), {
    added: new Set(['x']),
    needInstall: new Set(['x@1.2.3']),
    needCleanup: new Set([]),
  })
  t.matchSnapshot(logs(), 'stdout')
  t.matchSnapshot(errs(), 'stderr')
  t.strictSame(exits(), [])
})

t.test('plugin not installed', async t => {
  const { getInstallSet } = (await t.mockImport(
    '../dist/get-install-set.js',
    {
      '../dist/pkg-exists.js': {
        pkgExists: async () => false,
      },
      '../dist/analyze-plugin-arg.js': {
        analyzePluginArg: async () => ({
          name: 'x',
          versionInstalled: '',
          versionWant: '1.2.3',
        }),
      },
    }
  )) as typeof import('../dist/get-install-set.js')
  const config = {
    get: () => ['a', 'b', 'c'],
    values: {
      plugin: ['a', 'b', 'c'],
    },
    pluginList: ['a', 'b', 'c'],
  } as unknown as LoadedConfig

  t.strictSame(await getInstallSet(['x'], config), {
    added: new Set(['x']),
    needInstall: new Set(['x@1.2.3']),
    needCleanup: new Set(['x']),
  })
  t.matchSnapshot(logs(), 'stdout')
  t.matchSnapshot(errs(), 'stderr')
  t.strictSame(exits(), [])
})

t.test('cannot resolve version', async t => {
  const { getInstallSet } = (await t.mockImport(
    '../dist/get-install-set.js',
    {
      '../dist/pkg-exists.js': {
        pkgExists: async () => false,
      },
      '../dist/analyze-plugin-arg.js': {
        analyzePluginArg: async () => ({
          name: 'x',
          versionInstalled: '',
          versionWant: undefined,
        }),
      },
    }
  )) as typeof import('../dist/get-install-set.js')
  const config = {
    get: () => ['a', 'b', 'c'],
    values: {
      plugin: ['a', 'b', 'c'],
    },
    pluginList: ['a', 'b', 'c'],
  } as unknown as LoadedConfig

  await t.rejects(getInstallSet(['x'], config))
  t.matchSnapshot(logs(), 'stdout')
  t.matchSnapshot(errs(), 'stderr')
  t.strictSame(exits(), [[1]])
})

t.test('re-adding disabled builtin', async t => {
  const { getInstallSet } = (await t.mockImport(
    '../dist/get-install-set.js',
    {
      '../dist/analyze-plugin-arg.js': {
        analyzePluginArg: async () => ({
          name: '@tapjs/mock',
          versionInstalled: '',
          versionWant: '',
        }),
      },
    }
  )) as typeof import('../dist/get-install-set.js')
  const config = {
    get: () => ['a', 'b', 'c', '!@tapjs/mock'],
    values: {
      plugin: ['a', 'b', 'c', '!@tapjs/mock'],
    },
    pluginList: ['a', 'b', 'c', '!@tapjs/mock'],
  } as unknown as LoadedConfig

  t.strictSame(await getInstallSet(['@tapjs/mock'], config), {
    added: new Set(['@tapjs/mock']),
    needInstall: new Set(),
    needCleanup: new Set(),
  })
  t.matchSnapshot(logs(), 'stdout')
  t.matchSnapshot(errs(), 'stderr')
  t.strictSame(exits(), [])
})
