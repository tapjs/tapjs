const {
  tmpfile,
  run,
  tap,
  dir,
  t,
} = require('./')

const fs = require('fs')
t.test('bad rc file', t => {
  fs.writeFileSync(`${dir}/.taprc`, 'this : is not : valid : yaml')
  run(['--dump-config'], { cwd: dir }, (er, o, e) => {
    t.match(er, { code: 1 })
    t.end()
  })
})
