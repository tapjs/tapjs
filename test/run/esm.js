const {
  tmpfile,
  run,
  tap,
  t,
} = require('./')

const ver = process.versions.node.split('.')
const skip = ver[0] > 12 || (ver[0] >= 12 && ver[1] >= 2) ?
  'Skip due to https://github.com/standard-things/esm/issues/839' : false

t.test('mjs', {skip}, t => {
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
