const t = require('../..')
const { resolve } = require('path')

t.afterEach(() => delete process.env.TAP_LIBTAP_SETTINGS)

t.test('override the snapshot location', t => {
  process.env.TAP_LIBTAP_SETTINGS = resolve(t.testdir({
    'settings.js': `
      module.exports = {
        snapshotFile: (cwd, main, argv) => 'some-path/' + main + argv + '.snap'
      }
    `
  }), 'settings.js')
  const settings = t.mock('../../settings.js')
  t.equal(settings.snapshotFile('a', 'b', 'c'), 'some-path/bc.snap')
  t.end()
})

t.test('no fields, thats ok', t => {
  process.env.TAP_LIBTAP_SETTINGS = resolve(t.testdir({
    'settings.js': `
      module.exports = {}
    `
  }), 'settings.js')
  const settings = t.mock('../../settings.js')
  t.strictSame(settings, require('../../settings.js'))
  t.end()
})

t.test('wrong export tests', t => {
  const cases = Object.entries({
    function: '() => {}',
    boolean: 'false',
    array: '[]',
    null: 'null',
    'unknown field': `{ foo: 'bar' }`,
    'wrong field type': '{ snapshotFile: 1234 }',
  })
  t.plan(cases.length)
  for (const [name, code] of cases) {
    t.test(`export ${name}`, t => {
      process.env.TAP_LIBTAP_SETTINGS = resolve(t.testdir({
        'settings.js': `
          module.exports = ${code}
        `
      }), 'settings.js')
      t.throws(() => t.mock('../../settings.js'))
      t.end()
    })
  }
})
