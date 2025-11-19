import * as fs from 'node:fs'
import {
  GlobalPreloadContext,
  LoadFnOutput,
  LoadHookContext,
  ResolveFnOutput,
  ResolveHookContext,
} from 'node:module'
import { fileURLToPath } from 'node:url'
import { MessagePort } from 'node:worker_threads'
import { relative, resolve } from 'path'
import t from 'tap'
import { pathToFileURL } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

import * as hooks from '../dist/esm/hooks.mjs'

t.test('loader exists', async t => {
  t.matchOnly(hooks, {
    initialize: Function,
    globalPreload: Function,
    load: Function,
    resolve: Function,
  })
})

t.test('globalPreload', async t => {
  // yo dawg i heard you like mocks
  let resolveCalled: { url: string; parentURL: string } | undefined =
    undefined
  let loadCalled: string | undefined = undefined
  class MockMockClient {
    port: MessagePort
    constructor(port: MessagePort) {
      this.port = port
      client = this
    }
    resolve(url: string, parentURL: string) {
      resolveCalled = { url, parentURL }
    }
    load(url: string) {
      loadCalled = url
    }
  }
  let client: MockMockClient | undefined = undefined
  const hooks = await t.mockImport<typeof import('../dist/esm/hooks.mjs')>(
    '../dist/esm/hooks.mjs',
    {
      '../dist/esm/mock-service-client.js': {
        MockServiceClient: MockMockClient,
      },
    },
  )
  t.equal(client, undefined, 'no client until initialized')
  const message = (hook: 'load' | 'resolve') =>
    'initialize() or globalPreload() must be run prior to ' +
    `running the ${hook}() hook. Did you --loader when you meant ` +
    '--import or vice versa?'
  t.rejects(
    () =>
      hooks.resolve(
        'file://blah.js',
        {
          parentURL: 'file:///bloo',
        } as unknown as ResolveHookContext,
        () => {
          throw new Error('should not call nextLoad')
        },
      ) as Promise<ResolveFnOutput>,
    {
      message: message('resolve'),
    },
  )
  t.equal(resolveCalled, undefined)
  t.rejects(
    () =>
      hooks.load(
        'file://blah.js',
        {} as unknown as LoadHookContext,
        () => {
          throw new Error('should not call nextResolve')
        },
      ) as Promise<LoadFnOutput>,
    {
      message: message('load'),
    },
  )
  t.equal(loadCalled, undefined)

  const { port1 } = new MessageChannel()
  t.type(
    hooks.globalPreload({
      port: port1,
    } as unknown as GlobalPreloadContext),
    'string',
  )
  t.equal(
    await hooks.resolve(
      'file:///blahr.js',
      {
        parentURL: 'file:///bloor',
      } as unknown as ResolveHookContext,
      () => 'nextResolve called' as unknown as ResolveFnOutput,
    ),
    'nextResolve called',
  )
  t.strictSame(resolveCalled, {
    url: 'file:///blahr.js',
    parentURL: 'file:///bloor',
  })
  t.equal(
    await hooks.load(
      'file:///blah.js',
      {} as unknown as LoadHookContext,
      () => 'nextLoad called' as unknown as LoadFnOutput,
    ),
    'nextLoad called',
  )
  t.equal(loadCalled, 'file:///blah.js')
})

t.test('initialize', async t => {
  // yo dawg i heard you like mocks
  let resolveCalled: { url: string; parentURL: string } | undefined =
    undefined
  let loadCalled: string | undefined = undefined
  class MockMockClient {
    port: MessagePort
    constructor(port: MessagePort) {
      this.port = port
      client = this
    }
    resolve(url: string, parentURL: string) {
      resolveCalled = { url, parentURL }
    }
    load(url: string) {
      loadCalled = url
    }
  }
  let client: MockMockClient | undefined = undefined
  const hooks = await t.mockImport<typeof import('../dist/esm/hooks.mjs')>(
    '../dist/esm/hooks.mjs',
    {
      '../dist/esm/mock-service-client.js': {
        MockServiceClient: MockMockClient,
      },
    },
  )
  t.equal(client, undefined, 'no client until initialized')
  const message = (hook: 'load' | 'resolve') =>
    'initialize() or globalPreload() must be run prior to ' +
    `running the ${hook}() hook. Did you --loader when you meant ` +
    '--import or vice versa?'
  t.rejects(
    () =>
      hooks.resolve(
        'file://blah.js',
        {
          parentURL: 'file:///bloo',
        } as unknown as ResolveHookContext,
        () => {
          throw new Error('should not call nextLoad')
        },
      ) as Promise<ResolveFnOutput>,
    {
      message: message('resolve'),
    },
  )
  t.equal(resolveCalled, undefined)
  t.rejects(
    () =>
      hooks.load(
        'file://blah.js',
        {} as unknown as LoadHookContext,
        () => {
          throw new Error('should not call nextResolve')
        },
      ) as Promise<LoadFnOutput>,
    {
      message: message('load'),
    },
  )
  t.equal(loadCalled, undefined)

  const { port1 } = new MessageChannel()
  t.equal(
    hooks.initialize({
      port: port1,
    } as unknown as GlobalPreloadContext),
    undefined,
  )
  t.equal(
    await hooks.resolve(
      'file:///blah.js',
      { parentURL: 'file:///bloo' } as unknown as ResolveHookContext,
      () => 'nextResolve called' as unknown as ResolveFnOutput,
    ),
    'nextResolve called',
  )
  t.strictSame(resolveCalled, {
    url: 'file:///blah.js',
    parentURL: 'file:///bloo',
  })
  t.equal(
    await hooks.load(
      'file:///blah.js',
      {} as unknown as LoadHookContext,
      () => 'nextLoad called' as unknown as LoadFnOutput,
    ),
    'nextLoad called',
  )
  t.equal(loadCalled, 'file:///blah.js')

  // return a shortCircuit response when client returns a value
  client!.load = () => 'source code'
  client!.resolve = () => 'tapmock://x.y/z'
  t.strictSame(
    await hooks.load(
      'file:///blah.js',
      {} as unknown as LoadHookContext,
      () => {
        throw new Error('should not call nextLoad')
      },
    ),
    { format: 'module', source: 'source code', shortCircuit: true },
  )
  t.strictSame(
    await hooks.resolve(
      'file:///blah.js',
      { parentURL: 'file:///bloo' } as unknown as ResolveHookContext,
      () => {
        throw new Error('should not call nextResolve')
      },
    ),
    {
      url: 'tapmock://x.y/z',
      format: 'module',
      shortCircuit: true,
    },
  )
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

t.test('mockImport through proxy with full absolute path', async t => {
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
})

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
