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
  () => Mock.get(resolve(__filename), './foo.js', ''),
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
        const f = require('../f.cjs');
        module.exports = function() {
          return [inspect, lorem, b, c, d, f, require('../g.js')]
            .map(i => i({})).join(' ')
        };
        `,
      'b.js': `module.exports = function () { return 'b' }`,
      utils: {
        'c.js': `module.exports = function () { return 'c' }`
      },
    },
    helpers: {
      'd.js': `
        const e = require('./e.js');
        module.exports = function () { return ['d', e()].join(' ') }`,
      'e.js': `module.exports = function () { return 'e' }`,
    },
    'f.cjs': `module.exports = function () { return 'f' }`,
    'g.js': `module.exports = function () { return 'g' }`,
    'h.js': `module.exports = require.resolve('./g.js')`,
  })

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      [resolve(path, 'lib/b.js')]: () => 'foo',
    })(),
    '{} lorem foo c d e f g',
    'should use injected version of a mock',
  )

  t.equal(
    require(resolve(path, 'lib/a.js'))(),
    '{} lorem b c d e f g',
    'should be able to use original module post-mocking',
  )

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      [resolve(path, 'helpers/d.js')]: () => 'bar',
    })(),
    '{} lorem b c bar f g',
    'should mock module not located under the same parent folder',
  )

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      [resolve(path, 'f.cjs')]: () => 'bar',
    })(),
    '{} lorem b c d e bar g',
    'should mock module using cjs extension',
  )

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      [resolve(path, 'lib/b.js')]: () => 'foo',
      [resolve(path, 'lib/utils/c')]: () => 'bar',
    })(),
    '{} lorem foo bar d e f g',
    'should mock nested module',
  )

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'lib/a.js'), {
      util: { inspect: obj => obj.constructor.prototype },
    })(),
    '[object Object] lorem b c d e f g',
    'should mock builtin module',
  )

  t.equal(
    require(resolve(path, 'lib/a.js'))(),
    '{} lorem b c d e f g',
    'should preserve original module after mocking',
  )

  t.equal(
    Mock.get(resolve(__filename), resolve(path, 'h.js')),
    resolve(path, 'g.js'),
    'should preserve require properties and methods',
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
