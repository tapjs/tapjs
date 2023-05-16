process.env.TAP_JSX = '1'

const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

t.test('jsx', t => {
  const ok = tmpfile(t, 'jsx/ok.jsx', `
    const React = require('react')
    const t = require(${tap})
    const div = (<div>Hello</div>)
    t.pass('this is fine')
  `)
  run([ok], {}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o)
    t.end()
  })
})

t.test('running jsx thingie directly raises an error', t => {
  const jsx = require.resolve('../../bin/jsx.js')
  const {execFile} = require('child_process')
  execFile(process.execPath, [jsx], (er) => {
    t.match(er, { code: 1 })
    t.end()
  })
})
