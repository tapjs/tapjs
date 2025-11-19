import { resolve } from 'path'
import t from 'tap'
import { pathToFileURL } from 'url'
import { mungeMocks } from '../src/munge-mocks.js'

t.test('mung until no good', async t => {
  const mocks = {
    './relative.js': 'just a string',
    [resolve('/path/to/absolute')]: 'absolute',
    'node:fs': {
      stat: 'the node:fs module',
      default: { some: 'stuff' },
    },
    url: {
      parse: 'the url module',
    },
    path: 'no node:prefix',
    'node:path': 'has node:prefix',
    semver: ['bare', 'dep'],
    '@tapjs/core': 'namespaced module',
    '@tapjs/mock/import': 'namespaced submodule',
    [String(pathToFileURL('/url'))]: 'file:// url',
  }
  const munged = mungeMocks(mocks, t.testdirName)
  t.equal(munged.fs, munged['node:fs'], 'node builtin aliased')
  t.equal(munged.url, munged['node:url'], 'node builtin aliased')
  t.strictSame(
    munged,
    Object.assign(Object.create(null), {
      [String(pathToFileURL(resolve(t.testdirName, 'relative.js')))]: {
        default: 'just a string',
      },
      [String(pathToFileURL(resolve('/path/to/absolute')))]: {
        default: 'absolute',
      },
      'node:fs': {
        stat: 'the node:fs module',
        default: { some: 'stuff' },
      },
      fs: { stat: 'the node:fs module', default: { some: 'stuff' } },
      url: { parse: 'the url module' },
      'node:url': { parse: 'the url module' },
      path: { default: 'no node:prefix' },
      'node:path': { default: 'has node:prefix' },
      semver: { default: ['bare', 'dep'] },
      '@tapjs/core': { default: 'namespaced module' },
      '@tapjs/mock/import': { default: 'namespaced submodule' },
      'file:///url': { default: 'file:// url' },
    }),
  )
})
