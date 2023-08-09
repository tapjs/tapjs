import * as stack from '@tapjs/stack'
import { relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import t from 'tap'
import { mockRequire } from '../dist/mjs/mock-require.js'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

const __dirname = fileURLToPath(new URL('.', import.meta.url))

t.test('fail if stack.at fails', t => {
  t.throws(() => mockRequire('m', {}, () => {}), {
    message: 'could not get current call site',
  })
  t.end()
})

t.test('generate some mock requires', t => {
  t.testdir({
    'file.cjs': `
      exports.foo = 'bar'
      Object.assign(exports, require('./bar.cjs'))
      const fs = require('fs')
      exports.myFS = fs
      const baz = require('./baz.cjs')
      exports.baz = baz
      exports.at = require('@tapjs/stack').at
      exports.path = require('path')
      const b = require('./boo.cjs')
      exports.boo = { boo: b.boo }
    `,
    'bar.cjs': `
      export.some = 'day'
    `,
    'baz.cjs': `
      module.exports = { baz: 'original' }
    `,
    'boo.cjs': `
      module.exports = { boo: 'original' }
    `,
  })
  const mod = resolve(t.testdirName, 'file.cjs')
  const bar = resolve(t.testdirName, 'bar.cjs')
  const baz = './' + relative(__dirname, t.testdirName) + '/baz.cjs'
  const boo = resolve(t.testdirName, 'boo.cjs')
  const result = mockRequire(mod, {
    fs: 'hello from fs',
    'node:path': 'hello from path',
    [bar]: {
      some: 'exports',
    },
    [baz]: { baz: 'mocked' },
    [boo]: { boo: 'mocked' },
    '@tapjs/stack': t.createMock(stack, { at: 'attattat' }),
  })
  t.strictSame(result, {
    foo: 'bar',
    myFS: 'hello from fs',
    some: 'exports',
    baz: { baz: 'mocked' },
    boo: { boo: 'mocked' },
    at: 'attattat',
    path: 'hello from path',
  })
  t.end()
})

t.test('mockRequire without mocks', t => {
  t.testdir({
    'file.cjs': `module.exports = 'hello'`,
  })
  const mod = resolve(t.testdirName, 'file.cjs')
  const result = mockRequire(mod)
  t.strictSame(result, 'hello')
  t.end()
})

t.test('builtins mocked and unmocked', t => {
  t.testdir({
    'file.cjs': `
      module.exports = {
        path: require('path'),
        fs: require('node:fs'),
        module: require('module'),
        assert: require('node:assert'),
        bar: require('./bar.cjs'),
      }
    `,
    'bar.cjs': `
      module.exports = {
        dns: require('node:dns'),
        util: require('util'),
        punycode: require('node:punycode'),
        url: require('url'),
      }
    `,
  })

  const result = mockRequire(resolve(t.testdirName, 'file.cjs'), {
    module: 'mock module',
    assert: 'mock assert',
    punycode: 'mock punycode',
    url: 'mock url',
  })
  t.strictSame(result, {
    path: require('path'),
    fs: require('fs'),
    module: 'mock module',
    assert: 'mock assert',
    bar: {
      dns: require('dns'),
      util: require('util'),
      punycode: 'mock punycode',
      url: 'mock url',
    },
  })

  t.end()
})

t.test('builtins mocked and unmocked with node: name in mocks', t => {
  t.testdir({
    'file.cjs': `
      module.exports = {
        path: require('path'),
        fs: require('node:fs'),
        module: require('module'),
        assert: require('node:assert'),
        bar: require('./bar.cjs'),
      }
    `,
    'bar.cjs': `
      module.exports = {
        dns: require('node:dns'),
        util: require('util'),
        punycode: require('node:punycode'),
        url: require('url'),
      }
    `,
  })

  const result = mockRequire(resolve(t.testdirName, 'file.cjs'), {
    'node:module': 'mock module',
    'node:assert': 'mock assert',
    'node:punycode': 'mock punycode',
    'node:url': 'mock url',
  })
  t.strictSame(result, {
    path: require('path'),
    fs: require('fs'),
    module: 'mock module',
    assert: 'mock assert',
    bar: {
      dns: require('dns'),
      util: require('util'),
      punycode: 'mock punycode',
      url: 'mock url',
    },
  })

  t.end()
})

t.test('module singleton caching', t => {
  // cover the lines verifying that this always gets ignored
  stack.removeIgnoredPackage('@tapjs')
  t.teardown(() => stack.addIgnoredPackage('@tapjs'))

  const dir = t.testdir({
    'file.cjs': `
      module.exports = {
        foo: require('./foo.cjs'),
        bar: require('./bar.cjs'),
      }
    `,
    'foo.cjs': `
      module.exports = {
        path: require('path'),
        bar: require('./bar.cjs'),
      }
    `,
    'bar.cjs': `
      module.exports = 'bar'
    `,
  })
  const mod = resolve(dir, 'file.cjs')
  const bar = resolve(dir, 'bar.cjs')
  t.strictSame(mockRequire(mod, { 'node:path': 'mock path' }), {
    foo: {
      path: 'mock path',
      bar: 'bar',
    },
    bar: 'bar',
  })
  const res = mockRequire(mod, { [bar]: ['mock bar'] })
  t.strictSame(res, {
    foo: {
      path: require('path'),
      bar: ['mock bar'],
    },
    bar: ['mock bar'],
  })
  t.equal(res.foo.bar, res.bar)
  t.end()
})
