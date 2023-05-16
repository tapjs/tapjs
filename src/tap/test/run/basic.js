const mkdirp = require('mkdirp')
const {
  tmpfile,
  run,
  tap,
  dir,
  t,
} = require('./')

if (process.env.TAP_SNAPSHOT !== '1')
  t.jobs = require('os').cpus.length

t.test('no args', t => {
  run([], {
    cwd: dir,
  }, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(o, /no tests specified/)
    t.equal(e, '')
    t.end()
  })
})

t.test('stdin parsing', t => {
  const c = run(['-'], {}, (er, o, e) => {
    t.match(er, null)
    t.equal(e, '')
    t.end()
  })
  c.stdin.end('TAP version 13\n1..1\nok\n')
})

t.test('--help', t => {
  run(['--help'], null, (er, o) => {
    t.equal(er, null)
    t.match(o, /^Usage:/)
    t.end()
  })
})

t.test('--nyc-help', t => {
  run(['--nyc-help'], null, (er, o) => {
    t.equal(er, null)
    t.match(o, /\nOptions:\n/)
    t.end()
  })
})

t.test('--version', t => {
  run(['--version'], null, (er, o) => {
    t.equal(er, null)
    t.equal(o.trim(), require('../../package.json').version)
    t.end()
  })
})

t.test('--versions', t => {
  run(['--versions'], null, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o.replace(/^([^:]+): (.*)$/gm, '$1: {version}'), 'output')
    t.end()
  })
})

t.test('--parser-version', t => {
  run(['--parser-version'], null, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})

t.test('--nyc-version', t => {
  run(['--nyc-version'], null, (er, o) => {
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
  const args = ['-iSCbFt0', '-g/nope/i', '--', ok]
  run(args, null, (err, stdout) => {
    t.matchSnapshot(stdout, 'ok.js output')
    t.end()
  })
})

t.test('ignored files', t => {
  mkdirp.sync(`${dir}/ig/test/node_modules`)
  mkdirp.sync(`${dir}/ig/node_modules`)
  tmpfile(t, 'ig/test/ok.js',
    `require(${tap}).pass('this is fine')`)
  tmpfile(t, 'ig/node_modules/nope.test.js',
    `require(${tap}).fail('i should not be included')`)
  tmpfile(t, 'ig/test/node_modules/nope.test.js',
    `require(${tap}).fail('should also not be included')`)
  tmpfile(t, 'ig/test/node_modules/foo.test.js',
    `require(${tap}).fail('no foo included')`)
  tmpfile(t, 'ig/test/foo.test.js',
    `require(${tap}).fail('no foo included')`)
  tmpfile(t, 'ig/foo.test.js',
    `require(${tap}).fail('no foo included')`)

  const args = ['--test-ignore=foo\\.test\\.js$']
  const env = {}
  const cwd = dir + '/ig'
  run([args], { cwd, env }, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stdout')
    t.end()
  })
})

t.test('nonexistent file', t => {
  run(['does not exist'], null, (er, o, e) => {
    t.match(er, { code: 1 })
    t.matchSnapshot(o, 'stdout')
    t.matchSnapshot(e, 'stderr')
    t.end()
  })
})
