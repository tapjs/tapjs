import { LoadedConfig } from '@tapjs/config'
import { Cleanup } from 'foreground-child'
import { SpawnOptions, SpawnSyncOptions } from 'node:child_process'
import { resolve } from 'node:path'
import t from 'tap'

// strip off the env, but in the process, verify there's no npm junk
const deEnv = <T extends any>(o: T): T => {
  if (!o || typeof o !== 'object') return o
  if (Array.isArray(o)) return o.map(s => deEnv(s)) as T

  const { env, ...props } = o as Record<string, any>
  if (env) {
    const npmKeys = Object.keys(env).filter(k => /^npm/i.test(k))
    t.strictSame(npmKeys, [], 'no npm keys in env')
  }
  return Object.fromEntries([
    ['env', { ok: true }],
    ...deEnv(Object.entries(props)),
  ]) as T
}

t.formatSnapshot = o => deEnv(o)

// mocks for failing commands
let npmMockPrefix = t.testdir()
const mockFail = {
  'node:child_process': {
    spawnSync(cmd: string, args: string[], ___: SpawnSyncOptions) {
      return {
        status: 1,
        signal: 'SIGTERM',
        stdout:
          args[0] === 'prefix' && cmd === 'npm' ?
            npmMockPrefix
          : 'stdout',
        stderr: 'stderr',
      }
    },
  },
  'foreground-child': {
    foregroundChild(
      _: string,
      __: string[],
      ___: SpawnOptions,
      cb: Cleanup,
    ) {
      cb(1, 'SIGTERM')
    },
  },
}
const failSpawn = t.capture(
  mockFail['node:child_process'],
  'spawnSync',
  mockFail['node:child_process'].spawnSync,
).args
const failFG = t.capture(
  mockFail['foreground-child'],
  'foregroundChild',
  mockFail['foreground-child'].foregroundChild,
).args

// mocks for successful commands
const mockPass = {
  'node:child_process': {
    spawnSync(cmd: string, args: string[], ___: SpawnSyncOptions) {
      return {
        status: 0,
        signal: null,
        stdout:
          args[0] === 'prefix' && cmd === 'npm' ?
            npmMockPrefix
          : 'stdout',
        stderr: 'stderr',
      }
    },
  },
  'foreground-child': {
    foregroundChild(
      _: string,
      __: string[],
      ___: SpawnOptions,
      cb: Cleanup,
    ) {
      cb(0, null)
    },
  },
}
const passSpawn = t.capture(
  mockPass['node:child_process'],
  'spawnSync',
  mockPass['node:child_process'].spawnSync,
).args
const passFG = t.capture(
  mockPass['foreground-child'],
  'foregroundChild',
  mockPass['foreground-child'].foregroundChild,
).args

const mockConfig = {
  projectRoot: npmMockPrefix,
} as unknown as LoadedConfig

t.test('passing commands', async t => {
  const { npmBg, install, uninstall, npmFindCwd } =
    await t.mockImport<typeof import('../dist/esm/npm.js')>(
      '../dist/esm/npm.js',
      mockPass,
    )
  t.test('random command', async t => {
    const res = npmBg(['config', 'get', 'registry'], mockConfig.projectRoot)
    t.match(res, { status: 0, signal: null })
    t.matchSnapshot(passSpawn())
    t.strictSame(passFG(), [])
  })
  t.test('install', async t => {
    await npmFindCwd(mockConfig.projectRoot)
    t.match(passSpawn(), [])
    await install(['a', 'b'], mockConfig)
    t.strictSame(passSpawn(), [])
    t.matchSnapshot(passFG())
  })
  t.test('uninstall', async t => {
    await uninstall(['a', 'b'], mockConfig)
    t.strictSame(passSpawn(), [])
    t.matchSnapshot(passFG())
  })
})

t.test('failing commands', async t => {
  const { npmBg, install, uninstall, npmFindCwd } =
    await t.mockImport<typeof import('../dist/esm/npm.js')>(
      '../dist/esm/npm.js',
      mockFail,
    )
  t.test('random command', async t => {
    const res = npmBg(['config', 'get', 'registry'], mockConfig.projectRoot)
    t.match(res, { status: 1, signal: 'SIGTERM' })
    t.matchSnapshot(failSpawn())
    t.strictSame(failFG(), [])
  })
  t.test('install', async t => {
    await npmFindCwd(mockConfig.projectRoot)
    t.match(failSpawn(), [])
    await t.rejects(install(['a', 'b'], mockConfig))
    t.strictSame(failSpawn(), [])
    t.matchSnapshot(failFG())
  })
  t.test('uninstall', async t => {
    // uninstall doesn't reject, it just lets the process exit.
    await uninstall(['a', 'b'], mockConfig)
    t.strictSame(failSpawn(), [])
    t.matchSnapshot(failFG())
  })
})

t.test('npm installs go to workspace root', async t => {
  const testdir = {
    'package.json': JSON.stringify({
      workspaces: ['./packages/test'],
    }),
    packages: {
      test: {
        'package.json': JSON.stringify({}),
      },
    },
    node_modules: {
      tap: {
        'package.json': JSON.stringify({ main: 'index.js' }),
        'index.js': '',
      },
      '@tapjs': {
        test: {
          'package.json': JSON.stringify({ main: 'index.js' }),
          'index.js': '',
        },
      },
    },
  }
  t.test('find from location of tap dep', async t => {
    const { npmFindCwd } = await t.mockImport<
      typeof import('../dist/esm/npm.js')
    >('../dist/esm/npm.js', mockPass)
    mockConfig.projectRoot = resolve(
      t.testdir(testdir) + '/packages/test',
    )
    const expect = resolve(t.testdirName, 'packages/test/.tap/plugins')
    t.equal(await npmFindCwd(mockConfig.projectRoot), expect)
    // call second time to cover caching
    t.equal(await npmFindCwd(mockConfig.projectRoot), expect)
    t.strictSame(passSpawn(), [])
  })
  t.test('find from location of @tapjs/test dep', async t => {
    const { npmFindCwd } = await t.mockImport<
      typeof import('../dist/esm/npm.js')
    >('../dist/esm/npm.js', mockPass)
    mockConfig.projectRoot = resolve(
      t.testdir({
        ...testdir,
        // make the tap package a link out of node_modules
        tap: testdir.node_modules.tap,
        node_modules: {
          ...testdir.node_modules,
          tap: t.fixture('symlink', '../tap'),
        },
      }) + '/packages/test',
    )
    const expect = resolve(t.testdirName, 'packages/test/.tap/plugins')
    t.equal(await npmFindCwd(mockConfig.projectRoot), expect)
    t.strictSame(passSpawn(), [])
  })
  t.test('find from npm prefix cmd', async t => {
    const { npmFindCwd } = await t.mockImport<
      typeof import('../dist/esm/npm.js')
    >('../dist/esm/npm.js', mockPass)
    // both packages fail to resolve
    //@ts-ignore
    delete testdir.node_modules['@tapjs'].test['index.js']
    //@ts-ignore
    delete testdir.node_modules.tap['index.js']
    mockConfig.projectRoot = resolve(
      t.testdir(testdir) + '/packages/test',
    )
    const expect = resolve(t.testdirName, 'packages/test/.tap/plugins')
    t.equal(await npmFindCwd(mockConfig.projectRoot), expect)
    t.match(passSpawn(), [])
  })
  t.test('fall back to projectRoot', async t => {
    const { npmFindCwd } = await t.mockImport<
      typeof import('../dist/esm/npm.js')
    >('../dist/esm/npm.js', mockFail)
    //@ts-ignore
    delete testdir.node_modules['@tapjs']['index.js']
    mockConfig.projectRoot = resolve(
      t.testdir(testdir) + '/packages/test',
    )
    npmMockPrefix = ''
    t.equal(
      await npmFindCwd(mockConfig.projectRoot),
      resolve(mockConfig.projectRoot, '.tap/plugins'),
    )
    t.match(failSpawn(), [])
  })
})
