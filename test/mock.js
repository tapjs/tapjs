const { resolve } = require('path')
const t = require('../')
const Mock = require('../lib/mock.js')

t.throws(
  () => Mock.get(),
  'A parentFilename is required to resolve Mocks paths',
  'should throw on missing parentFilename',
)

t.throws(
  () => Mock.get(resolve(__filename)),
  /first argument should be a string/,
  'should throw on invalid filename',
)

t.throws(
  () => Mock.get(resolve(__filename), './foo.js'),
  /mocks should be a a key\/value object in which keys/,
  'should throw on invalid mock-defining object',
)

t.test('mock', t => {
  const path = t.testdir({
    node_modules: {
      lorem: {
        'package.json': JSON.stringify({ name: 'lorem' }),
        'index.js': `module.exports = function () { return 'lorem' }`,
      },
    },
    lib: {
      'a.js': `
const { inspect } = require('util');
const lorem = require('lorem');
const b = require('./b.js');
const c = require('./utils/c');
const d = require('../helpers/d.js');
const e = require('../e.cjs');
module.exports = function() {
  return [inspect, lorem, b, c, d, e].map(i => i({})).join(' ')
};
`,
      'b.js': `module.exports = function () { return 'b' }`,
      utils: {
        'c.js': `module.exports = function () { return 'c' }`
      },
    },
    helpers: {
      'd.js': `module.exports = function () { return 'd' }`,
    },
    'e.cjs': `module.exports = function () { return 'e' }`,
  })

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      [resolve(path, 'lib/b.js')]: () => 'foo',
    })(),
    '{} lorem foo c d e',
    'should use injected version of a mock',
  )

  t.equal(
    require(resolve(path, 'lib/a.js'))(),
    '{} lorem b c d e',
    'should be able to use original module post-mocking',
  )

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      [resolve(path, 'helpers/d.js')]: () => 'bar',
    })(),
    '{} lorem b c bar e',
    'should mock module not located under the same parent folder',
  )

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      [resolve(path, 'e.cjs')]: () => 'bar',
    })(),
    '{} lorem b c d bar',
    'should mock module using cjs extension',
  )

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      [resolve(path, 'lib/b.js')]: () => 'foo',
      [resolve(path, 'lib/utils/c')]: () => 'bar',
    })(),
    '{} lorem foo bar d e',
    'should mock nested module',
  )

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      util: { inspect: obj => obj.constructor.prototype },
    })(),
    '[object Object] lorem b c d e',
    'should mock builtin module',
  )

  t.equal(
    require(resolve(path, 'lib/a.js'))(),
    '{} lorem b c d e',
    'should preserve original module after mocking',
  )

  // lorem is an unknown module id in the context of the current script,
  // trying to mock it will result in an error while trying to resolve
  // the filename for generating the mocks map
  t.throws(
    () => Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      lorem: () => '***',
    })(),
    { code: 'MODULE_NOT_FOUND' },
    'can only mock known installed modules',
  )
  t.end()
})
