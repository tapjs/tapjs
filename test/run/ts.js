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

t.test('ts manually', t => {
  const ok = tmpfile(t, 'mixed/ok.js', `
    require('./foo.ts')
  `)
  const foots = tmpfile(t, 'mixed/foo.ts', `
    import * as t from ${tap}
    t.pass('this is fine')
  `)
  const args = [ok, foots, '--no-ts', '--node-arg=--require', '--node-arg=ts-node/register']
  run(args, {}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(o)
    t.end()
  })
})
