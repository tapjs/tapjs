const {
  tmpfile,
  run,
  dir,
  t,
} = require('./')
const fs = require('fs')

t.test('executables', {
  todo: process.platform === 'win32' ?
    'port the shell scripts to equivalent CMD files' : false
}, t => {
  const ok = tmpfile(t, 'exe/ok.sh', `#!/bin/sh
    echo 1..1
    echo ok 1 File with executable bit should be executed
  `)
  fs.chmodSync(ok, 0o755)
  const notok = tmpfile(t, 'exe/notok.sh', `!#/bin/sh
    echo 1..1
    echo not ok 1 File without executable bit should not be run
    exit 1
  `)
  fs.chmodSync(notok, 0o644)
  run(['exe', '-C'], { cwd: dir }, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(o)
    t.equal(e, '')
    t.end()
  })
})
