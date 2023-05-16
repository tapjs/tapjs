const {
  run,
  t,
} = require('./')

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
      run(['--dump-config'], { cwd }, (er, o) => {
        t.match(o, /check-coverage: false/)
        t.end()
      })
    })
  }
})
