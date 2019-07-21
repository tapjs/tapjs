const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

const ok = tmpfile(t, 'comments/ok.js', `'use strict'
  const t = require(${tap})
  t.comment('root')
  t.test('parent', t => {
    t.comment('parent')
    t.test('child', t => {
      t.comment('child')
      t.end()
    })
    t.end()
  })
`)

t.plan(1)
run(['--comments', ok], {}, (er, o, e) =>
  t.equal(e, 'root\nparent\nchild\n'))
