import { relative } from 'path'
import t, { Test } from 'tap'
import { loader, plugin } from '../dist/esm/index.js'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

import * as fs from 'node:fs'
import { fileURLToPath } from 'url'

t.equal(t.pluginLoaded(plugin), true, 'plugin loaded by default')
t.equal(loader, '@tapjs/mock/loader', 'loader')

t.test('mockRequire', t => {
  const dir = t.testdir({
    'file.cjs': `
      exports.foo = require('./foo.cjs')
    `,
    'foo.cjs': `
      module.exports = 'original foo'
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  const mocked = t.mockRequire(rel + 'file.cjs', {
    [rel + 'foo.cjs']: 'mocked foo',
  })
  t.strictSame(mocked, { foo: 'mocked foo' })
  t.end()
})

t.test('mockRequire with mockAll', t => {
  const dir = t.testdir({
    'file.cjs': `
      exports.foo = require('./foo.cjs')
    `,
    'foo.cjs': `
      module.exports = 'original foo'
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  t.mockAll({
    [rel + 'foo.cjs']: 'mocked foo',
  })
  t.test('child test inherits', t => {
    t.strictSame(t.mockAll(), t.parent?.t.mockAll())
    t.end()
  })
  const mocked = t.mockRequire(rel + 'file.cjs')
  t.strictSame(mocked, { foo: 'mocked foo' })
  t.end()
})

t.test('deprecated t.mock alias', t => {
  const logs = t.capture(console, 'error')
  const dir = t.testdir({
    'file.cjs': `
      exports.foo = require('./foo.cjs')
    `,
    'foo.cjs': `
      module.exports = 'original foo'
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  const mocked = t.mock(rel + 'file.cjs', {
    [rel + 'foo.cjs']: 'mocked foo',
  })
  t.strictSame(mocked, { foo: 'mocked foo' })
  t.match(logs(), [
    {
      args: [
        't.mock() is now t.mockRequire(). Please update your tests.',
      ],
    },
  ])
  t.end()
})

t.test('mockImport', async t => {
  const dir = t.testdir({
    'file.mjs': `
      import f from './foo.mjs'
      export const foo = f
    `,
    'foo.mjs': `
      export default 'original foo'
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  const mocked = await t.mockImport(rel + 'file.mjs', {
    [rel + 'foo.mjs']: 'mocked foo',
  })
  t.strictSame(mocked, { __proto__: null, foo: 'mocked foo' })
  t.end()
})

t.test('mockImport with mockAll', async t => {
  const dir = t.testdir({
    'file.mjs': `
      import f from './foo.mjs'
      export const foo = f
    `,
    'foo.mjs': `
      export default 'original foo'
    `,
  })
  const rel = './' + relative(__dirname, dir) + '/'
  t.mockAll({
    [rel + 'foo.mjs']: 'mocked foo',
  })
  const mocked = await t.mockImport(rel + 'file.mjs')
  t.strictSame(mocked, { __proto__: null, foo: 'mocked foo' })
  t.end()
})

t.test('createMock', t => {
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

t.test('createMock nested', t => {
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
  const mocked = t.mockRequire(
    rel + 'file.cjs',
    t.createMock(
      { fs },
      {
        fs: { statSync: () => 'mocked statSync' },
      },
    ),
  )
  t.match(mocked, { foo: ['mocked statSync', fs.Stats] })
  t.end()
})

t.test('createMock array', t => {
  t.strictSame(t.createMock([1, 2, 3], [3, 2, 1]), [3, 2, 1])
  t.end()
})

t.test('mockAll editing', t => {
  t.same(t.mockAll({ a: 'blah' }), { a: 'blah' })
  t.same(t.mockAll({ b: 'blah' }), { a: 'blah', b: 'blah' })
  const x = t.mockAll({ c: 'c', b: undefined })
  t.strictSame(new Set(Object.keys(x)), new Set(['a', 'c']))
  const y = t.mockAll({ c: null })
  t.same(Object.keys(y), ['a'])
  t.same(t.mockAll(null), {})
  t.end()
})

t.test('cannot mock node builtins', async t => {
  const tt = new Test({ name: 'failing mocker' })
  tt.runMain(() => {})
  tt.test('subtest', async t => {
    await t.mockImport('fs')
    t.mockRequire('fs')
  })
  tt.end()
  const result = await tt.concat()
  t.equal(tt.passing(), false)
  t.match(
    result,
    `
            await t.mockImport('fs')
        ------------^
`,
  )
  t.match(
    result,
    `
            t.mockRequire('fs')
        ------^
`,
  )
})
