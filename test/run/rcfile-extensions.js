const {
  run,
  dir,
  t,
} = require('./')

const fs = require('fs')
t.test('finds rc file with .yaml and .yml', t => {
  const files = [
    '.taprc',
    '.taprc.yml',
    '.taprc.yaml',
  ]

  t.plan(files.length)
  for (const file of files) {
    t.test(file, t => {
      const cwd = t.testdir({
        [file]: 'check-coverage: false',
      })
      run(['--dump-config'], { cwd }, (er, o, e) => {
        t.match(o, /check-coverage: false/)
        t.end()
      })
    })
  }
})
