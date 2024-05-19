import { LoadedConfig } from '@tapjs/config'
import { TAP } from '@tapjs/core'
import EventEmitter from 'events'
import { resolve } from 'path'
import t from 'tap'

t.test('no before config, nothing to do', async t => {
  const { runBefore } = await t.mockImport<
    typeof import('../dist/esm/before.js')
  >('../dist/esm/before.js')
  let beforeCalled = false
  const tt = Object.assign(new EventEmitter(), {
    before: () => (beforeCalled = true),
  })
  runBefore(tt as unknown as TAP, [], {
    get: () => {},
  } as unknown as LoadedConfig)
  t.equal(beforeCalled, false)
})

t.test('have before config, adds before that spawns', async t => {
  const expectArgs = ['a', 'b']
  let foregroundChildCalled = false
  const { runBefore } = await t.mockImport<
    typeof import('../dist/esm/before.js')
  >('../dist/esm/before.js', {
    'foreground-child': {
      foregroundChild: (
        cmd: string,
        args: string[],
        cb: () => any,
      ) => {
        foregroundChildCalled = true
        t.equal(cmd, process.execPath)
        t.strictSame(args, expectArgs.concat(resolve('before.js')))
        t.equal(cb(), false)
      },
    },
  })
  let beforeFunction!: () => Promise<void>
  let beforeCalled = false
  const tt = Object.assign(new EventEmitter(), {
    before: async (fn: () => Promise<void>) => {
      beforeCalled = true
      beforeFunction = fn
    },
  })
  runBefore(tt as unknown as TAP, expectArgs, {
    get: () => 'before.js',
  } as unknown as LoadedConfig)
  t.equal(beforeCalled, true)
  t.type(beforeFunction, Function)
  await beforeFunction()
  t.equal(foregroundChildCalled, true)
})

t.test('let fg end process if before proc fails', async t => {
  const expectArgs = ['a', 'b']
  let foregroundChildCalled = false
  const { runBefore } = await t.mockImport<
    typeof import('../dist/esm/before.js')
  >('../dist/esm/before.js', {
    'foreground-child': {
      foregroundChild: (
        cmd: string,
        args: string[],
        cb: (code: number) => any,
      ) => {
        foregroundChildCalled = true
        t.equal(cmd, process.execPath)
        t.strictSame(args, expectArgs.concat(resolve('before.js')))
        t.equal(cb(1), undefined)
      },
    },
  })
  let beforeFunction!: () => Promise<void>
  let beforeCalled = false
  const tt = Object.assign(new EventEmitter(), {
    before: async (fn: () => Promise<void>) => {
      beforeCalled = true
      beforeFunction = fn
    },
  })
  runBefore(tt as unknown as TAP, expectArgs, {
    get: () => 'before.js',
  } as unknown as LoadedConfig)
  t.equal(beforeCalled, true)
  t.type(beforeFunction, Function)
  await beforeFunction()
  t.equal(foregroundChildCalled, true)
})
