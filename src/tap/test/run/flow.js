const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')


t.test('flow', t => {
  const ok = tmpfile(t, 'flow/ok.js', `
    // @flow
    const t = require(${tap})
    function square(n: number): number {
      return n * n;
    }
    t.pass('this is fine')
  `)

  const args = [ok, '--flow']

  run(args, {}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o)
    t.end()
  })
})

t.test('flow manually', t => {
  const ok = tmpfile(t, 'flow/ok2.js', `
    // @flow
    const t = require(${tap})
    function square(n: number): number {
      return n * n;
    }
    t.pass('this is fine')
  `)

  const args = [ok, '--node-arg=--require', '--node-arg=flow-remove-types/register']

  run(args, {}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o)
    t.end()
  })
})
