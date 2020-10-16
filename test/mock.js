const { resolve } = require('path')
const t = require('../')
const Mock = require('../lib/mock.js')

t.throws(
  () => Mock.get(),
  /filename should be a string/,
  'should throw on invalid filename'
)

t.throws(
  () => Mock.get('./foo.js'),
  /mocks should be a a key\/value object in which keys/,
  'should throw on invalid mock-defining object'
)

t.test('mock', t => {
  const path = t.testdir({
    node_modules: {
      lorem: {
        'package.json': JSON.stringify({ name: 'lorem' }),
        'index.js': `module.exports = function () { return 'lorem' }`,
      }
    },
    lib: {
      'a.js': `
const { inspect } = require('util');
const lorem = require('lorem');
const b = require('./b.js');
const c = require('./utils/c');
module.exports = function() {
  return [inspect, lorem, b, c].map(i => i({})).join(' ')
};
`,
      'b.js': `module.exports = function () { return 'b' }`,
      utils: {
        'c.js': `module.exports = function () { return 'c' }`
      },
    }
  })

  t.equal(
    Mock.get(resolve(path, 'lib/a.js'), {
      './b.js': () => 'foo',
    })(),
    '{} lorem foo c',
    'should use injected version of a mock'
  )

  t.equal(
    require(resolve(path, 'lib/a.js'))(),
    '{} lorem b c',
    'should use original module when requiring prior to mocking'
  )

  t.equal(
    Mock.get(resolve(path, 'lib/a.js'), {
      './b.js': () => 'foo',
      './utils/c': () => 'bar',
    })(),
    '{} lorem foo bar',
    'should mock nested module'
  )

  t.equal(
    Mock.get(resolve(path, 'lib/a.js'), {
      'lorem': () => '***',
    })(),
    '{} *** b c',
    'should mock node_modules package'
  )

  t.equal(
    Mock.get(resolve(path, 'lib/a.js'), {
      'util': { inspect: obj => obj.constructor.prototype },
    })(),
    '[object Object] lorem b c',
    'should mock builtin module'
  )

  t.equal(
    require(resolve(path, 'lib/a.js'))(),
    '{} lorem b c',
    'should preserve original module after mocking'
  )

  t.end()
})
