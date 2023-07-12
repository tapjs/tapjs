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
    'file.mjs': `export default 'hello'`
  })
  const mod = resolve(t.testdirName, 'file.mjs')
  const [key, importer] = mockImport(mod)
  t.type(key, 'string')
  t.strictSame(await importer(), {
    __proto__: null,
    default: 'hello'
  })
})
