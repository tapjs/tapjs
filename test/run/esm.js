const {
  tmpfile,
  run,
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
    t.matchSnapshot(o)
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
    t.matchSnapshot(o)
    t.end()
  })
})
