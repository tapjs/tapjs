import * as stack from '@tapjs/stack'
import { CallSiteLike } from '@tapjs/stack'
import { relative, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import t from 'tap'
import {
  MockService as MSCJS,
  isMockServiceResponse as isMSRCJS,
} from '../dist/commonjs/mock-service.js'
import {
  MockService,
  isMockServiceResponse as isMSRMJS,
} from '../dist/esm/mock-service.js'
import { serviceKey } from '../dist/esm/service-key.js'

t.pass('this is fine')

const __dirname = resolve(
  fileURLToPath(new URL('.', import.meta.url))
)
const __filename = resolve(fileURLToPath(import.meta.url))

//@ts-ignore
t.throws(() => new MockService(), 'not to be constructed directly')

// this function definitely gets called a bunch in this test, but because
// it's used in the loader used to load this test, it gets loaded before
// we add coverage. And the version that got loaded is dependent on node
// version; only MJS after 20.6.
t.test('isMockServiceResponse', t => {
  t.plan(2)
  for (const [name, isMSR] of Object.entries({
    isMSRMJS,
    isMSRCJS,
  })) {
    t.test(name, t => {
      t.equal(
        isMSR({
          id: 'x',
          action: 'load',
          url: 'http://x',
          response: 'source',
        }),
        true
      )
      t.equal(
        isMSR({
          id: 'x',
          action: 'resolve',
          url: 'http://x',
          parentURL: 'http://y',
          response: undefined,
        }),
        true
      )
      t.equal(isMSR(false), false)
      t.end()
    })
  }
})

t.throws(() => MockService.get('not a valid key'), {
  message: 'mock service instance key not found',
})
t.throws(() => MSCJS.get('not a valid key'), {
  message: 'mock service instance key not found',
})

t.test('fails if stack.at fails', t => {
  t.rejects(() => MockService.create('m', {}, () => {}), {
    message: 'could not get current call site',
  })
  t.rejects(() => MSCJS.create('m', {}, () => {}), {
    message: 'could not get current call site',
  })
  t.end()
})

t.test('generate some mock imports', async t => {
  const abs = resolve(t.testdirName, 'abs.mjs')
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
      import b from ${JSON.stringify(
        String(pathToFileURL(resolve(t.testdirName, 'boo.mjs')))
      )}
      export const boo = { boo: b.boo }
      export { abs } from ${JSON.stringify(abs)}
      import * as unmocked from './unmocked.mjs'
      export { unmocked }
      import * as url from ${JSON.stringify(
        String(pathToFileURL(resolve(t.testdirName, 'url.mjs')))
      )}
      export { url }
    `,
    'abs.mjs': `
      export const abs = 'unmocked'
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
    'unmocked.mjs': `
      export { some } from './bar.mjs'
    `,
    'url.mjs': `
      export * from ${JSON.stringify(
        String(
          pathToFileURL(resolve(t.testdirName, './unmocked.mjs'))
        )
      )}
    `,
  })
  const mod = resolve(t.testdirName, 'file.mjs')
  const bar = resolve(t.testdirName, 'bar.mjs')
  const baz = './' + relative(__dirname, t.testdirName) + '/baz.mjs'
  const boo = String(pathToFileURL(resolve(t.testdirName, 'boo.mjs')))
  const service = await MockService.create(mod, {
    fs: 'hello from fs',
    'node:path': 'hello from path',
    [bar]: {
      some: 'exports',
    },
    [baz]: { baz: 'mocked' },
    [boo]: { boo: 'mocked' },
    ['./' + relative(__dirname, abs)]: { abs: 'mocked' },
    '@tapjs/stack': t.createMock(stack, { at: 'attattat' }),
  })
  t.equal(MockService.get(service.key), service, 'get by key')
  t.equal(
    MSCJS.get(service.key),
    service,
    'cjs service has same instances'
  )
  const expect = new URL(mod, import.meta.url)
  expect.searchParams.set('tapmock', `${serviceKey}.${service.key}`)
  t.equal(await service.module, String(expect))
  t.type(service.key, 'string')
  t.match(service, {
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
      [String(pathToFileURL(abs))]: {
        abs: 'mocked',
      },
      '@tapjs/stack': {
        ...stack,
        at: 'attattat',
      },
    },
    unmock: Function,
    key: String,
    caller: {
      path: __filename,
      dir: __dirname,
      url: new URL(import.meta.url),
      at: CallSiteLike,
      stack: String,
    },
  })
  t.strictSame(await import(await service.module), {
    __proto__: null,
    foo: 'bar',
    myFS: 'hello from fs',
    some: 'exports',
    baz: { baz: 'mocked' },
    boo: { boo: 'mocked' },
    at: 'attattat',
    path: 'hello from path',
    abs: 'mocked',
    unmocked: Object.assign(Object.create(null), { some: 'exports' }),
    url: Object.assign(Object.create(null), { some: 'exports' }),
  })
  service.unmock()
  t.equal(service.mocks, undefined)
  t.throws(
    () => MockService.get(service.key),
    'unmocked, removed from instances'
  )

  t.equal(
    await service.load({
      action: 'load',
      url: 'https://example.com',
      id: 'yolo',
    }),
    undefined
  )
  t.equal(
    await service.load({
      action: 'load',
      url: 'tapmock://example.com',
      id: 'yolo',
    }),
    undefined
  )
  t.end()
})

t.test('service methods direct tests', async t => {
  for (const MS of [MockService, MSCJS]) {
    t.equal(
      await MS.handle({
        action: 'load',
        url: 'https://example.com',
        id: 'yolo',
      }),
      undefined
    )
    t.equal(
      await MS.handle({
        action: 'resolve',
        url: 'https://example.com',
        parentURL: import.meta.url,
        id: 'yolo',
      }),
      undefined
    )
    t.equal(await MS.handle({ not: 'a service request' }), undefined)
  }
})

t.test('create with no mocks, nothing to resolve', async t => {
  const dir = t.testdir({
    'module.mjs': `console.log('hello')`,
    'blah.mjs': 'console.log("blah")',
  })
  const service = await MockService.create(resolve(dir, 'module.mjs'))
  const expect = pathToFileURL(resolve(t.testdirName, 'blah.mjs'))
  expect.searchParams.set('tapmock', `${serviceKey}.${service.key}`)

  t.equal(
    await MockService.resolve({
      action: 'resolve',
      id: 'whatever',
      url: './blah.mjs',
      parentURL: await service.module,
    }),
    String(expect)
  )

  t.equal(
    await MSCJS.resolve({
      action: 'resolve',
      id: 'whatever',
      url: './blah.mjs',
      parentURL: await service.module,
    }),
    String(expect)
  )

  t.equal(
    await service.resolve({
      action: 'resolve',
      id: 'whatever',
      url: './blah.mjs',
      parentURL: await service.module,
    }),
    String(expect)
  )

  t.equal(
    await service.resolve({
      action: 'resolve',
      id: 'another one',
      url: './nonexistent.mjs',
      parentURL: await service.module,
    }),
    undefined
  )
  t.equal(
    await MockService.resolve({
      action: 'resolve',
      id: 'another one',
      url: './nonexistent.mjs',
      parentURL: await service.module,
    }),
    undefined
  )
  t.equal(
    await MSCJS.resolve({
      action: 'resolve',
      id: 'another one',
      url: './nonexistent.mjs',
      parentURL: await service.module,
    }),
    undefined
  )
})
