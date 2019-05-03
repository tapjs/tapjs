const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

t.test('ts', t => {
  const ok = tmpfile(t, 'ts/ok.ts', `
    import * as t from ${tap}
    t.pass('this is fine')
  `)
  run([ok], {}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(o)
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
    t.matchSnapshot(o)
    t.end()
  })
})

t.test('js requiring ts', t => {
  const tsModule = tmpfile(t, 'ts/tsmodule.ts', `
    export function allIsWell() { return true; }
  `)
  const ok = tmpfile(t, 'ts/ok.js', `
    const t = require(${tap})
    const tsmodule = require('./tsmodule')
    t.ok(tsmodule.allIsWell())
  `)
  run([ok, '--ts'], {}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(o)
    t.end()
  })
})
