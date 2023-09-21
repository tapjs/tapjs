import { LoadedConfig } from '@tapjs/config'
import { TAP } from '@tapjs/core'
import EventEmitter from 'events'
import { resolve } from 'path'
import t from 'tap'

t.test('no after config, nothing to do', async t => {
  const { runAfter } = (await t.mockImport(
    '../dist/esm/after.js'
  )) as typeof import('../dist/esm/after.js')
  let afterCalled = false
  const tt = Object.assign(new EventEmitter(), {
    after: () => (afterCalled = true),
  })
  runAfter(tt as unknown as TAP, [], {
    get: () => {},
  } as unknown as LoadedConfig)
  t.equal(afterCalled, false)
})

t.test('have after config, adds after that spawns', async t => {
  const expectArgs = ['a', 'b']
  let foregroundChildCalled = false
  const { runAfter } = (await t.mockImport('../dist/esm/after.js', {
    'foreground-child': {
      foregroundChild: (
        cmd: string,
        args: string[],
        cb: () => any
      ) => {
        foregroundChildCalled = true
        t.equal(cmd, process.execPath)
        t.strictSame(args, expectArgs.concat(resolve('after.js')))
        t.equal(cb(), false)
      },
    },
  })) as typeof import('../dist/esm/after.js')
  let afterFunction!: () => Promise<void>
  let afterCalled = false
  const tt = Object.assign(new EventEmitter(), {
    after: async (fn: () => Promise<void>) => {
      afterCalled = true
      afterFunction = fn
    },
  })
  runAfter(tt as unknown as TAP, expectArgs, {
    get: () => 'after.js',
  } as unknown as LoadedConfig)
  t.equal(afterCalled, true)
  t.type(afterFunction, Function)
  await afterFunction()
  t.equal(foregroundChildCalled, true)
})

t.test('let fg end process if after proc fails', async t => {
  const expectArgs = ['a', 'b']
  let foregroundChildCalled = false
  const { runAfter } = (await t.mockImport('../dist/esm/after.js', {
    'foreground-child': {
      foregroundChild: (
        cmd: string,
        args: string[],
        cb: (code: number) => any
      ) => {
        foregroundChildCalled = true
        t.equal(cmd, process.execPath)
        t.strictSame(args, expectArgs.concat(resolve('after.js')))
        t.equal(cb(1), undefined)
      },
    },
  })) as typeof import('../dist/esm/after.js')
  let afterFunction!: () => Promise<void>
  let afterCalled = false
  const tt = Object.assign(new EventEmitter(), {
    after: async (fn: () => Promise<void>) => {
      afterCalled = true
      afterFunction = fn
    },
  })
  runAfter(tt as unknown as TAP, expectArgs, {
    get: () => 'after.js',
  } as unknown as LoadedConfig)
  t.equal(afterCalled, true)
  t.type(afterFunction, Function)
  await afterFunction()
  t.equal(foregroundChildCalled, true)
})
