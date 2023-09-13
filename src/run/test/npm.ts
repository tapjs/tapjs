import { LoadedConfig } from '@tapjs/config'
import { Cleanup } from 'foreground-child'
import { SpawnOptions, SpawnSyncOptions } from 'node:child_process'
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
const mockFail = {
  'node:child_process': {
    spawnSync(_: string, __: string[], ___: SpawnSyncOptions) {
      return {
        status: 1,
        signal: 'SIGTERM',
        stdout: 'stdout',
        stderr: 'stderr',
      }
    },
  },
  'foreground-child': {
    foregroundChild(
      _: string,
      __: string[],
      ___: SpawnOptions,
      cb: Cleanup
    ) {
      cb(1, 'SIGTERM')
    },
  },
}
const failSpawn = t.capture(
  mockFail['node:child_process'],
  'spawnSync',
  mockFail['node:child_process'].spawnSync
).args
const failFG = t.capture(
  mockFail['foreground-child'],
  'foregroundChild',
  mockFail['foreground-child'].foregroundChild
).args

// mocks for successful commands
const mockPass = {
  'node:child_process': {
    spawnSync(_: string, __: string[], ___: SpawnSyncOptions) {
      return {
        status: 0,
        signal: null,
        stdout: 'stdout',
        stderr: 'stderr',
      }
    },
  },
  'foreground-child': {
    foregroundChild(
      _: string,
      __: string[],
      ___: SpawnOptions,
      cb: Cleanup
    ) {
      cb(0, null)
    },
  },
}
const passSpawn = t.capture(
  mockPass['node:child_process'],
  'spawnSync',
  mockPass['node:child_process'].spawnSync
).args
const passFG = t.capture(
  mockPass['foreground-child'],
  'foregroundChild',
  mockPass['foreground-child'].foregroundChild
).args

const mockConfig = {
  globCwd: '/path/to/project',
} as unknown as LoadedConfig

t.test('passing commands', async t => {
  const { npmBg, install, uninstall } = (await t.mockImport(
    '../dist/esm/npm.js',
    mockPass
  )) as typeof import('../dist/esm/npm.js')
  t.test('random command', async t => {
    const res = npmBg(['config', 'get', 'registry'], mockConfig)
    t.match(res, { status: 0, signal: null })
    t.matchSnapshot(passSpawn())
    t.strictSame(passFG(), [])
  })
  t.test('install', async t => {
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
  const { npmBg, install, uninstall } = (await t.mockImport(
    '../dist/esm/npm.js',
    mockFail
  )) as typeof import('../dist/esm/npm.js')
  t.test('random command', async t => {
    const res = npmBg(['config', 'get', 'registry'], mockConfig)
    t.match(res, { status: 1, signal: 'SIGTERM' })
    t.matchSnapshot(failSpawn())
    t.strictSame(failFG(), [])
  })
  t.test('install', async t => {
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
