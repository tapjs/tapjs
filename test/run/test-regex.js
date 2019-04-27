const {
  tmpfile,
  bin,
  tap,
  node,
  dir,
  t,
  run,
} = require('./')

t.test('no args, pull in default files, not exclusions', t => {
  tmpfile(t, 'file.spec.js', `
    const t = require(${tap})
    t.pass('this is fine')
  `)
  tmpfile(t, 'node_modules/bad.test.js', `
    const t = require(${tap})
    t.fail('should not run this')
  `)
  run([], { cwd: dir, env: { _TAP_IS_TTY: '1' }}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})

t.test('error out if loading files fails', t => {
  run([], { cwd: '/dev', env: { _TAP_IS_TTY: '1' }}, (er, o, e) => {
    t.match(er, { code: 1 })
    t.end()
  })
})
