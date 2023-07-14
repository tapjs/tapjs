import * as stack from '@tapjs/stack'
import { CallSiteLike } from '@tapjs/stack'
import { relative, resolve } from 'path'
import t from 'tap'
import { pathToFileURL } from 'url'
import { mockImport } from '../dist/cjs/mock-import.js'
import type { Mocks } from '../dist/cjs/mocks.js'

const loaderSymbol = Symbol.for('__tapmockLoader')
declare var global: {
  [loaderSymbol]: string
  [k: `__tapmock${string}`]: Mocks
}

t.test('fail if stack.at fails', t => {
  t.throws(() => mockImport('m', {}, () => {}), {
    message: 'could not get current call site',
  })
  t.end()
})

t.test('generate some mock imports', async t => {
  t.testdir({
    'file.mjs': `
      export const foo = 'bar'
      export * from './bar.mjs'
      import fs from 'fs'
      export const myFS = fs
      import baz from './baz.mjs'
      export { baz }
      export { at } from '@tapjs/stack'
      import path from 'path'
      export { path }
      import b from './boo.mjs'
      export const boo = { boo: b.boo }
    `,
    'bar.mjs': `
      export const some = 'day'
    `,
    'baz.mjs': `
      export default { baz: 'original' }
    `,
    'boo.mjs': `
      export default { boo: 'original' }
    `,
  })
  const mod = resolve(t.testdirName, 'file.mjs')
  const bar = resolve(t.testdirName, 'bar.mjs')
  const baz = './' + relative(__dirname, t.testdirName) + '/baz.mjs'
  const boo = String(pathToFileURL(resolve(t.testdirName, 'boo.mjs')))
  const [key, importer] = mockImport(mod, {
    fs: 'hello from fs',
    'node:path': 'hello from path',
    [bar]: {
      some: 'exports',
    },
    [baz]: { baz: 'mocked' },
    [boo]: { boo: 'mocked' },
    '@tapjs/stack': t.createMock(stack, { at: 'attattat' }),
  })
  t.type(importer, 'function')
  t.type(key, 'string')
  t.match(global[`__tapmock${key}`], {
    mocks: {
      fs: { default: 'hello from fs' },
      'node:fs': { default: 'hello from fs' },
      path: { default: 'hello from path' },
      'node:path': { default: 'hello from path' },
      [String(pathToFileURL(resolve(t.testdirName, 'bar.mjs')))]: {
        some: 'exports',
      },
      [String(pathToFileURL(resolve(t.testdirName, 'baz.mjs')))]: {
        baz: 'mocked',
      },
      [boo]: {
        boo: 'mocked',
      },
      '@tapjs/stack': {
        ...stack,
        at: 'attattat',
      },
    },
    unmock: Function,
    key,
    caller: {
      path: __filename,
      dir: __dirname,
      url: pathToFileURL(__filename),
      at: CallSiteLike,
      stack: String,
    },
  })
  t.strictSame(await importer(), {
    __proto__: null,
    foo: 'bar',
    myFS: 'hello from fs',
    some: 'exports',
    baz: { baz: 'mocked' },
    boo: { boo: 'mocked' },
    at: 'attattat',
    path: 'hello from path',
  })
  global[`__tapmock${key}`].unmock()
  t.equal(global[`__tapmock${key}`].mocks, undefined)
  t.end()
})

t.test('mockImport without mocks', async t => {
  // cover the lines verifying that this always gets ignored
  stack.removeIgnoredPackage('@tapjs')
  t.teardown(() => stack.addIgnoredPackage('@tapjs'))

  t.testdir({
    'file.mjs': `export default 'hello'`,
  })
  const mod = resolve(t.testdirName, 'file.mjs')
  const [key, importer] = mockImport(mod)
  t.type(key, 'string')
  t.strictSame(await importer(), {
    __proto__: null,
    default: 'hello',
  })
})

t.test('argv checking various ways', async t => {
  // verify that we're not just getting it by accident lol
  const unmocked = process.argv.slice(-2)
  t.strictNotSame(unmocked, ['hello', 'world'])

  const d = t.testdir({
    'direct.mjs': `export default process.argv`,
    'argv-via-core.mjs': `
      import { argv } from '@tapjs/core'
      export default argv
    `,
    'proc-via-core.mjs': `
      import { proc } from '@tapjs/core'
      export default proc?.argv
    `,
    'config-positionals.mjs': `
      import { TapConfig } from '@tapjs/config'
      const config = await TapConfig.load()
      const { positionals } = config.parse()
      export default positionals
    `,
  })

  // verify that the modules are cached and get the original value
  // when argv hasn't been mutated.
  t.test('original values', async t => {
    const direct = await t.mockImport(resolve(d, 'direct.mjs'))
    const argvViaCore = await t.mockImport(
      resolve(d, 'argv-via-core.mjs')
    )
    const procViaCore = await t.mockImport(
      resolve(d, 'proc-via-core.mjs')
    )
    const configPos = await t.mockImport(
      resolve(d, 'config-positionals.mjs')
    )

    for (const { default: value } of [
      direct,
      argvViaCore,
      procViaCore,
    ]) {
      t.type(value, Array)
      t.strictSame(value.slice(-2), unmocked)
    }
    // we might have an argv less than 2 items, so this one will be empty,
    // because it drops the execPath and main
    const c = configPos.default
    t.type(c, Array)
    t.strictSame(c, process.argv.slice(2))
  })

  t.test('mocked values', async t => {
    const { argv } = process
    t.teardown(() => (process.argv = argv))
    process.argv = [
      process.execPath,
      process.argv[1],
      'hello',
      'world',
    ]
    const direct = await t.mockImport(resolve(d, 'direct.mjs'))
    const argvViaCore = await t.mockImport(
      resolve(d, 'argv-via-core.mjs')
    )
    const procViaCore = await t.mockImport(
      resolve(d, 'proc-via-core.mjs')
    )
    const configPos = await t.mockImport(
      resolve(d, 'config-positionals.mjs')
    )

    for (const { default: value } of [
      direct,
      argvViaCore,
      procViaCore,
      configPos,
    ]) {
      t.type(value, Array)
      t.strictSame(value.slice(-2), ['hello', 'world'])
    }
  })
})
