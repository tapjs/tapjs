const {
  tmpfile,
  run,
  clean,
  tap,
  t,
} = require('./')

t.test('mjs', t => {
  const ok = tmpfile(t, 'mjs/ok.mjs', `'use strict'
    import t from ${tap}
    t.pass('this is fine')
  `)
  run([ok, '--esm'], {}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o))
    t.end()
  })
})

t.test('esm', t => {
  const ok = tmpfile(t, 'esm/ok.js', `'use strict'
    import {t} from ${tap}
    t.pass('this is fine')
  `)
  run([ok, '--esm'], {}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o))
    t.end()
  })
})

t.test('jsx', t => {
  const ok = tmpfile(t, 'jsx/ok.jsx', `
    const React = require('react')
    const t = require(${tap})
    const div = (<div>Hello</div>)
    t.pass('this is fine')
  `)
  run([ok], {}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o))
    t.end()
  })
})

t.test('ts', t => {
  const ok = tmpfile(t, 'ts/ok.ts', `
    import * as t from ${tap}
    t.pass('this is fine')
  `)
  run([ok], {}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o))
    t.end()
  })
})

t.test('tsx', t => {
  const ok = tmpfile(t, 'tsx/ok.tsx', `
    import * as React from 'react'
    import * as t from ${tap}
    const div = (<div>Hello</div>)
    t.pass('this is fine')
  `)
  run([ok], {}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o))
    t.end()
  })
})

t.test('running jsx thingie directly raises an error', t => {
  const jsx = require.resolve('../../bin/jsx.js')
  const {execFile} = require('child_process')
  execFile(process.execPath, [jsx], (er, o, e) => {
    t.match(er, { code: 1 })
    t.end()
  })
})
