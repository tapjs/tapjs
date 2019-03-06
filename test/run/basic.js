const {
  tmpfile,
  run,
  clean,
  bin,
  tap,
  node,
  dir,
  t,
} = require('./')

t.jobs = require('os').cpus().length

t.test('no args', t => {
  const c = run([], { env: { _TAP_IS_TTY: '1' } }, (er, o, e) => {
    t.match(er, null)
    t.match(e, /^Reading TAP data from stdin/)
    t.end()
  })
  c.stdin.end('TAP version 13\n1..1\nok\n')
})

t.test('no args, quiet', t => {
  const c = run([], { env: { _TAP_IS_TTY: '0' } }, (er, o, e) => {
    t.match(er, null)
    t.equal(e, '')
    t.end()
  })
  c.stdin.end('TAP version 13\n1..1\nok\n')
})

t.test('--help', t => {
  run(['--help'], null, (er, o, e) => {
    t.equal(er, null)
    t.match(o, /^Usage:/)
    t.end()
  })
})

t.test('--nyc-help', t => {
  run(['--nyc-help'], null, (er, o, e) => {
    t.equal(er, null)
    t.match(o, /\nOptions:\n/)
    t.end()
  })
})

t.test('--version', t => {
  run(['--version'], null, (er, o, e) => {
    t.equal(er, null)
    t.equal(o.trim(), require('../../package.json').version)
    t.end()
  })
})

t.test('--versions', t => {
  run(['--versions'], null, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'output')
    t.end()
  })
})

t.test('--parser-version', t => {
  run(['--parser-version'], null, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'output')
    t.end()
  })
})

t.test('--nyc-version', t => {
  run(['--nyc-version'], null, (er, o, e) => {
    t.equal(er, null)
    t.equal(o.trim(), require('nyc/package.json').version)
    t.end()
  })
})

t.test('unknown arg throws', t => {
  run(['--blerg'], null, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(e, 'invalid argument: --blerg')
    t.end()
  })
})

t.test('unknown short opt', t => {
  run(['-bCx'], null, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(e, 'invalid argument: -x')
    t.end()
  })
})

t.test('basic test run', t => {
  const ok = tmpfile(t, 'ok.js', `require(${tap}).pass('this is fine')`)
  const args = ['-iSCbt0', '-g/nope/i', '--', 'doesnt exist', ok]
  run(args, null, (err, stdout, stderr) => {
    t.matchSnapshot(clean(stdout), 'ok.js output')
    t.end()
  })
})
