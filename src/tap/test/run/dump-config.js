const {
  tmpfile,
  run,
  t,
  clean,
} = require('./')

t.cleanSnapshot = o => clean(o).replace(/jobs: \d+/, 'jobs: {number}')

t.test('shotgun a bunch of option parsing junk', t => {
  run([
    '--dump-config', '-J', '--jobs', '4',
    '--no-browser', '--no-coverage-report', '--coverage-report', 'json',
    '--coverage-report=html', '--no-cov', '--cov', '--save', 'foo.txt',
    '--reporter=spec', '--gc', '--strict', '--debug', '--debug-brk',
    '--harmony', '--node-arg=xyz', '--check-coverage', '--test-arg=xyz',
    '--test-arg', 'abc', '--100', '--branches=99', '--lines', '100',
    '--color', '-C', '--output-file=out.txt', '--no-timeout',
    '--timeout', '99', '--invert', '--no-invert', '--grep', 'x',
    '--grep=/y/i', '--bail', '--no-bail', '--only', '-R', 'spec',
    '--node-arg', 'abc', '--nyc-arg', 'abc', '-o', 'out.txt',
    '--comments', '-M', 'map.js', '--no-coverage-map'
  ], { env: {
    TAP: '0',
    TAP_BAIL: '0',
  }}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})

t.test('package.json parsing', t => {
  const cases = {
    good: JSON.stringify({
      tap: {
        100: true,
        bail: true,
      }
    }),
    bad: '!$@Q$AERWA#WERSTE$%W',
    missing: JSON.stringify({
      foo: {
        lines: 69,
        bail: true,
      }
    })
  }
  for (const c in cases) {
    t.test(c, t => {
      const data = cases[c]
      const pj = tmpfile(t, 'package.json', data)
      const path = require('path')
      const dir = path.dirname(pj)
      run(['--dump-config', '-B'], {
        cwd: dir,
      }, (er, o) => {
        t.equal(er, null)
        t.matchSnapshot(o, 'output')
        t.end()
      })
    })
  }
  t.end()
})

t.test('turn color off and back on again', t => {
  run(['--no-color', '-c', '--dump-config'], { env: {
    TAP: '0',
    TAP_COLORS: '1',
  }}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})

t.test('short options as well as short flags', t => {
  run(['--dump-config','-j2','-Cb','-t=0' ], { env: {
    TAP: '0'
  }}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})

t.test('good rc file', t => {
  const rc = tmpfile(t, 'taprc', `
reporter: spec
jobs: 3
100: true
`)
  run(['--dump-config', '-j4'], { env: {
    TAP_RCFILE: rc,
    TAP: 0
  }}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})

t.test('empty rc file', t => {
  const rc = tmpfile(t, 'taprc', '')
  run(['--dump-config', '-c'], { env: {
    TAP_RCFILE: rc,
    TAP: '0',
    TAP_COLORS: '1'
  }}, (er, o) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'output')
    t.end()
  })
})
