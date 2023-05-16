const {
  tmpfile,
  tap,
  dir,
  t,
  run,
} = require('./')

t.test('no args, pull in default files, not exclusions', t => {
  tmpfile(t, 'file.spec.js', `
    const t = require(${tap})
    t.pass('this is fine')
  `)
  tmpfile(t, 'tests.cjs', `
    const t = require(${tap})
    t.pass('this is also fine')
  `)
  tmpfile(t, 'node_modules/bad.test.js', `
    const t = require(${tap})
    t.fail('should not run this')
  `)
  run([], { cwd: dir }, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})

t.test('error out if loading files fails', t => {
  run([], { cwd: '/dev' }, (er) => {
    t.match(er, { code: 1 })
    t.end()
  })
})
