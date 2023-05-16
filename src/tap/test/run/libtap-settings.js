const {
  run,
  tap,
  t,
  clean,
} = require('./')

const { resolve } = require('path')

const path = t.testdir({
  settings: {
    'ok.js': `
      module.exports = {
        snapshotFile: (cwd, main, argv) => 'some-path/' + main + argv + '.test.cjs'
      }
    `,
    'ok-empty.js': `
      module.exports = {}
    `,
    'unknown-field.js': `
      module.exports = {
        foo: 'bar'
      }
    `,
    'wrong-type-field.js': `
      module.exports = {
        snapshotFile: 75
      }
    `,
    'export-function.js': `
      module.exports = () => {}
    `,
    'export-array.js': `
      module.exports = [1, 2, 3]
    `,
    'export-false.js': `
      module.exports = false
    `,
    'export-null.js': `
      module.exports = null
    `,
  },
  'test.js': `
    const t = require(${tap})
    t.comment(t.snapshotFile)
  `,
})

const testFile = resolve(path, 'test.js')
const settings = n => `--libtap-settings=settings/${n}.js`

t.test('print out a different snapshot file location', t => {
  run([settings('ok'), testFile], {cwd: path}, (er, o, e) => {
    t.notOk(er)
    t.equal(clean(e), '')
    t.matchSnapshot(o)
    t.end()
  })
})

t.test('print out the normal snapshot file location', t => {
  run([settings('ok-empty'), testFile], {cwd: path}, (er, o, e) => {
    t.notOk(er)
    t.equal(clean(e), '')
    t.matchSnapshot(o)
    t.end()
  })
})

t.test('fails if module not found', t => {
  run([settings('does-not-exist'), testFile], {cwd: path}, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(clean(e), 'Error: ') // specific msg different across node versions
    t.equal(o, '')
    t.end()
  })
})

t.test('adding an unknown field is invalid', t => {
  run([settings('unknown-field'), testFile], {cwd: path}, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(clean(e), 'Error: Unrecognized libtap setting: foo')
    t.equal(o, '')
    t.end()
  })
})

t.test('fields must be same type as libtap defines', t => {
  run([settings('wrong-type-field'), testFile], {cwd: path}, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(clean(e), 'Error: Invalid type for libtap setting snapshotFile. Expected function, received number.')
    t.equal(o, '')
    t.end()
  })
})

t.test('exporting function is invalid', t => {
  run([settings('export-function'), testFile], {cwd: path}, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(clean(e), 'Error: invalid libtap settings: function')
    t.equal(o, '')
    t.end()
  })
})

t.test('exporting array is invalid', t => {
  run([settings('export-array'), testFile], {cwd: path}, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(clean(e), 'Error: invalid libtap settings: array')
    t.equal(o, '')
    t.end()
  })
})

t.test('exporting false is invalid', t => {
  run([settings('export-false'), testFile], {cwd: path}, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(clean(e), 'Error: invalid libtap settings: boolean')
    t.equal(o, '')
    t.end()
  })
})

t.test('exporting null is invalid', t => {
  run([settings('export-null'), testFile], {cwd: path}, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(clean(e), 'Error: invalid libtap settings: null')
    t.equal(o, '')
    t.end()
  })
})
