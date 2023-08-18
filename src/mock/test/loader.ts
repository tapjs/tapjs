import * as fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { relative, resolve } from 'path'
import { resolveImport } from 'resolve-import'
import t from 'tap'
import { pathToFileURL } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

interface Context {
  importAssertions: { [k: string]: string }
  conditions: string[]
  parentURL?: string
}
interface ResolveResult {
  format?: null | 'builtin' | 'commonjs' | 'json' | 'module' | 'wasm'
  importAssertions?: { [k: string]: string }
  shortCircuit?: boolean
  url: string
}
interface LoadResult {
  format: string
  shortCircuit?: boolean
  source: string | ArrayBuffer | Uint8Array
}
type NextResolveFunction = (
  url: string,
  context: Context
) => Promise<ResolveResult>
type ResolveFunction = (
  url: string,
  context: Context,
  nextResolve: NextResolveFunction
) => Promise<ResolveResult>
type LoadFunction = (
  url: string,
  context: Context,
  nextLoad: NextLoadFunction
) => Promise<LoadResult>
type NextLoadFunction = (
  url: string,
  context: Context
) => Promise<LoadResult>

type Loader = {
  load: LoadFunction
  resolve: ResolveFunction
}

import type { Mocks } from '../dist/mjs/mocks.js'

const loaderSymbol = Symbol.for('__tapmockLoader')
declare var global: {
  [loaderSymbol]: string
  [k: `__tapmock${string}`]: Mocks
}

let loader!: Loader

// load the loader
t.before(async () => {
  loader = await import('../dist/mjs/loader.js')
})

t.test('loader exists', async t => {
  t.match(
    loader,
    await import('../dist/mjs/index.js'),
    'index is re-exported on loader'
  )
  t.match(loader, {
    load: Function,
    resolve: Function,
  })
  t.equal(
    global[loaderSymbol],
    String(
      await resolveImport('../dist/mjs/loader.js', import.meta.url)
    )
  )
})

t.test('cannot load loader multiple times', async t => {
  t.rejects(t.mockImport('../dist/mjs/loader.js', {}), {
    message: 'Multiple @tapjs/mock loaders detected',
  })
})

t.test('mockImport', async t => {
  const dir = t.testdir({
    'file.mjs': `
      import f, { bar } from './foo.mjs'
      export const foo = f
      export { bar } from './foo.mjs'
      export const fooBar = 'foo ' + bar
    `,
    'foo.mjs': `
      export const bar = 'bar'
      export default 'original foo'
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  const mocked = await t.mockImport(rel + 'file.mjs', {
    [rel + 'foo.mjs']: {
      default: 'mocked foo',
      bar: 'mocked bar',
    },
  })
  t.strictSame(mocked, {
    __proto__: null,
    foo: 'mocked foo',
    bar: 'mocked bar',
    fooBar: 'foo mocked bar',
  })
})

t.test('mockImport with full absolute path', async t => {
  const path = resolve(t.testdirName, 'foo.mjs')
  const dir = t.testdir({
    'file.mjs': `
      import f, { bar } from ${JSON.stringify(path)}
      export const foo = f
      export { bar } from ${JSON.stringify(path)}
      export const fooBar = 'foo ' + bar
    `,
    'foo.mjs': `
      export const bar = 'bar'
      export default 'original foo'
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  const mocked = await t.mockImport(rel + 'file.mjs', {
    [rel + 'foo.mjs']: {
      default: 'mocked foo',
      bar: 'mocked bar',
    },
  })
  t.strictSame(mocked, {
    __proto__: null,
    foo: 'mocked foo',
    bar: 'mocked bar',
    fooBar: 'foo mocked bar',
  })
})

t.test(
  'mockImport through proxy with full absolute path',
  async t => {
    const path = resolve(t.testdirName, 'bar.mjs')
    const dir = t.testdir({
      'file.mjs': `
      import f, { bar } from ${JSON.stringify(path)}
      export const foo = f
      export { bar } from ${JSON.stringify(path)}
      export const fooBar = 'foo ' + bar
    `,
      'bar.mjs': `
      export * from './foo.mjs'
      import f from './foo.mjs'
      export default f
    `,
      'foo.mjs': `
      export const bar = 'bar'
      export default 'original foo'
    `,
    })
    const rel = './' + relative(__dirname, dir) + '/'
    const mocked = await t.mockImport(rel + 'file.mjs', {
      [rel + 'foo.mjs']: {
        default: 'mocked foo',
        bar: 'mocked bar',
      },
    })
    t.strictSame(mocked, {
      __proto__: null,
      foo: 'mocked foo',
      bar: 'mocked bar',
      fooBar: 'foo mocked bar',
    })
  }
)

t.test('mockImport with full file:// url', async t => {
  const url = pathToFileURL(resolve(t.testdirName, 'foo.mjs'))
  const dir = t.testdir({
    'file.mjs': `
      import f, { bar } from ${JSON.stringify(String(url))}
      export const foo = f
      export { bar } from ${JSON.stringify(String(url))}
      export const fooBar = 'foo ' + bar
    `,
    'foo.mjs': `
      export const bar = 'bar'
      export default 'original foo'
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  const mocked = await t.mockImport(rel + 'file.mjs', {
    [rel + 'foo.mjs']: {
      default: 'mocked foo',
      bar: 'mocked bar',
    },
  })
  t.strictSame(mocked, {
    __proto__: null,
    foo: 'mocked foo',
    bar: 'mocked bar',
    fooBar: 'foo mocked bar',
  })
})

t.test('mockImport through proxy with full file:// url', async t => {
  const url = pathToFileURL(resolve(t.testdirName, 'bar.mjs'))
  const dir = t.testdir({
    'file.mjs': `
      import f, { bar } from ${JSON.stringify(String(url))}
      export const foo = f
      export { bar } from ${JSON.stringify(String(url))}
      export const fooBar = 'foo ' + bar
    `,
    'bar.mjs': `
      export * from './foo.mjs'
      import f from './foo.mjs'
      export default f
    `,
    'foo.mjs': `
      export const bar = 'bar'
      export default 'original foo'
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  const mocked = await t.mockImport(rel + 'file.mjs', {
    [rel + 'foo.mjs']: {
      default: 'mocked foo',
      bar: 'mocked bar',
    },
  })
  t.strictSame(mocked, {
    __proto__: null,
    foo: 'mocked foo',
    bar: 'mocked bar',
    fooBar: 'foo mocked bar',
  })
})

t.test('mockImports without mock', async t => {
  const dir = t.testdir({
    'file.mjs': `
      import f, { bar } from './foo.mjs'
      export const foo = f
      export { bar } from './foo.mjs'
      export const fooBar = 'foo ' + bar
    `,
    'foo.mjs': `
      export const bar = 'bar'
      export default 'original foo'
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  const first = await t.mockImport(rel + 'file.mjs')
  const second = await t.mockImport(rel + 'file.mjs')
  t.strictSame(first, second)
  t.not(first, second)
})

t.test('mockImport without explicit default', async t => {
  const dir = t.testdir({
    'file.mjs': `
      import f, { bar } from './foo.mjs'
      export const foo = f.x
      export { bar } from './foo.mjs'
      export const fooBar = 'foo ' + bar
    `,
    'foo.mjs': `
      export const bar = 'bar'
      export default { x: 1 }
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  const mocked = await t.mockImport(rel + 'file.mjs', {
    [rel + 'foo.mjs']: {
      x: 2,
      bar: 'mocked bar',
    },
  })
  t.strictSame(mocked, {
    __proto__: null,
    foo: 2,
    bar: 'mocked bar',
    fooBar: 'foo mocked bar',
  })
})

t.test('mock node:fs', t => {
  const dir = t.testdir({
    'file.cjs': `
      exports.foo = require('./foo.cjs')
    `,
    'foo.cjs': `
      module.exports = [
        require('fs').statSync(__filename),
        require('fs').lstatSync(__filename),
      ]
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  const mocked = t.mockRequire(rel + 'file.cjs', {
    fs: t.createMock(fs, { statSync: () => 'mocked statSync' }),
  })
  t.match(mocked, { foo: ['mocked statSync', fs.Stats] })
  t.end()
})
