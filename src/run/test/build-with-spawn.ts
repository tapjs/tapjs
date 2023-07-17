import t from 'tap'

import { LoadedConfig } from '@tapjs/config'
import type { TAP } from '@tapjs/core'
import * as CORE from '@tapjs/core'
import { plugin as SpawnPlugin } from '@tapjs/spawn'
import * as TEST from '@tapjs/test'
import { config } from '../dist/main-config.js'

const originalEnv = { ...process.env }
t.beforeEach(t =>
  t.intercept(process, 'env', { value: { ...originalEnv } })
)

t.test('nothing to do, have spawn already', async t => {
  const { buildWithSpawn } = (await t.mockImport(
    '../dist/build-with-spawn.js',
    {
      '../dist/build.js': {
        build: () => t.fail('should not run rebuild'),
      },
      '@tapjs/spawn': {
        plugin: SpawnPlugin,
      },
      '@tapjs/core': CORE,
      '@tapjs/test': TEST,
      'foreground-child': {
        foregroundChild: (
          _: any,
          __: any,
          cb: (code: number | null) => any
        ) => {
          t.fail('should not respawn')
          cb(1)
        },
      },
    }
  )) as typeof import('../dist/build-with-spawn.js')
  t.equal(await buildWithSpawn(t as TAP, config), false)
})

t.test('requires spawn to at least be intended', async t => {
  const { buildWithSpawn } = (await t.mockImport(
    '../dist/build-with-spawn.js',
    {
      '../dist/build.js': {
        build: () => t.fail('should not run rebuild'),
      },
      'foreground-child': {
        foregroundChild: (
          _: any,
          __: any,
          cb: (code: number | null) => any
        ) => {
          t.fail('should not respawn')
          cb(1)
        },
      },
    }
  )) as typeof import('../dist/build-with-spawn.js')

  t.rejects(
    buildWithSpawn(
      t as TAP,
      {
        pluginList: [],
      } as unknown as LoadedConfig
    ),
    {
      message: 'tap runner requires the @tapjs/spawn plugin',
    }
  )
})

t.test('attempt to rebuild, but fail to add spawn', async t => {
  // make it look like we're already in a respawn
  process.env._TAP_RUN_REBUILD_RESPAWN_ = '1'
  let buildRan = false
  const { buildWithSpawn } = (await t.mockImport(
    '../dist/build-with-spawn.js',
    {
      '../dist/build.js': { build: async () => (buildRan = true) },
      '@tapjs/test': {
        ...TEST,
        signature: 'no spawn here',
      },
    }
  )) as typeof import('../dist/build-with-spawn.js')
  await t.rejects(
    buildWithSpawn(
      {
        pluginLoaded: () => false,
      } as unknown as TAP,
      {
        pluginList: ['@tapjs/spawn'],
      } as unknown as LoadedConfig
    ),
    {
      message: 'Failed to build a tap with the spawn plugin',
    }
  )
  t.equal(buildRan, true)
})

t.test('rebuild and respawn', async t => {
  process.env._TAP_RUN_REBUILD_RESPAWN_ = ''
  let buildRan = false
  let respawned = false
  const testMock = {
    ...TEST,
    signature: 'no spawn here',
  }
  const { buildWithSpawn } = (await t.mockImport(
    '../dist/build-with-spawn.js',
    {
      '../dist/build.js': { build: async () => (buildRan = true) },
      '@tapjs/test': testMock,
      '@tapjs/core': CORE,
      'foreground-child': {
        foregroundChild: (
          cmd: any,
          args: any,
          cb: (
            code: number | null,
            signal: NodeJS.Signals | null
          ) => any
        ) => {
          t.equal(cmd, process.execPath)
          t.strictSame(args, [
            ...process.execArgv,
            ...process.argv.slice(1),
          ])
          respawned = true
          cb(null, null)
        },
      },
    }
  )) as typeof import('../dist/build-with-spawn.js')
  t.equal(
    await buildWithSpawn(
      {
        pluginLoaded: () => false,
      } as unknown as TAP,
      {
        pluginList: ['@tapjs/spawn'],
      } as unknown as LoadedConfig
    ),
    true
  )
  t.equal(buildRan, true)
  t.equal(respawned, true)
  t.equal(process.env._TAP_RUN_REBUILD_RESPAWN_, '1')
})
