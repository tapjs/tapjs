'use strict'
const fs = require('fs')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const path = require('path')
const execFile = require('child_process').execFile
const node = process.execPath
const bin = require.resolve('../bin/run.js')
const tap = JSON.stringify(path.join(__dirname, '..') + '/')
const t = require('../')

const dir = path.join(__dirname, 'cli-tests')
mkdirp.sync(dir)

const clean = require('./clean-stacks.js')

const run = (args, options, cb) => {
  if (options && options.env)
    options.env = Object.keys(process.env).reduce((env, k) => {
      if (env[k] === undefined)
        env[k] = process.env[k]
      return env
    }, options.env)

  return execFile(node, [bin].concat(args), options, cb)
}

const tmpfile = (t, filename, content) => {
  filename = path.join(dir, filename)
  t.teardown(() => rimraf.sync(filename))
  fs.writeFileSync(filename, content)
  return path.relative('', filename)
}

t.test('usage and other basics', t => {
  t.test('no args', t => {
    run([], { env: { _TAP_IS_TTY: '1' } }, (er, o, e) => {
      t.match(er, {
        signal: null,
        code: 1,
        killed: false
      })
      t.match(e, /^Usage:/)
      t.end()
    })
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
      t.equal(o.trim(), require('../package.json').version)
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
  t.end()
})

t.test('basic', t => {
  const ok = tmpfile(t, 'ok.js', `require(${tap}).pass('this is fine')`)
  run(['-Cb', '--', ok], null, (err, stdout, stderr) => {
    t.matchSnapshot(clean(stdout), 'ok.js output')
    t.end()
  })
})

t.test('dump config stuff', t => {
  t.test('shotgun a bunch of option parsing junk', t => {
    run([
      '--dump-config', '-J', '--jobs', '4',
      '--no-browser', '--no-coverage-report', '--coverage-report', 'json',
      '--coverage-report=html', '--no-cov', '--cov', '--save', 'foo.txt',
      '--reporter=spec', '--gc', '--strict', '--debug', '--debug-brk',
      '--harmony', '--node-arg=xyz', '--check-coverage', '--test-arg=xyz',
      '--test-arg', 'abc', '--100', '--branches=99', '--lines', '100',
      '--color', '--no-color', '--output-file=out.txt', '--no-timeout',
      '--timeout', '99', '--invert', '--no-invert', '--grep', 'x',
      '--grep=/y/i', '--bail', '--no-bail', '--only', '-R', 'spec',
      '--node-arg', 'abc', '--nyc-arg', 'abc', '-o', 'out.txt'
    ], null, (er, o, e) => {
      t.equal(er, null)
      t.same(JSON.parse(o), {
        nodeArgs:
         [ '--expose-gc',
           '--use_strict',
           '--debug',
           '--debug-brk',
           '--harmony',
           'xyz',
           'abc' ],
        nycArgs: [ 'abc' ],
        testArgs: [ 'xyz', 'abc' ],
        timeout: 99,
        color: false,
        reporter: 'tap',
        files: [],
        grep: [ /x/, /y/i ],
        grepInvert: false,
        bail: false,
        saveFile: 'foo.txt',
        pipeToService: false,
        coverageReport: 'lcov',
        browser: false,
        coverage: true,
        checkCoverage: true,
        branches: 99,
        functions: 100,
        lines: 100,
        statements: 100,
        jobs: 4,
        outputFile: 'out.txt',
        rcFile: '/Users/isaacs/.taprc',
        only: true })
      t.end()
    })
  })

  t.test('short options as well as short flags', t => {
    run(['--dump-config','-j2','-Cb','-t=0' ], { env: {
      TAP: '0'
    }}, (er, o, e) => {
      t.equal(er, null)
      t.match(JSON.parse(o), {
        bail: true,
        color: false,
        reporter: 'tap',
        jobs: 2,
        timeout: 0
      })
      t.end()
    })
  })

  t.test('unknown short opt', t => {
    run(['-bCx'], null, (er, o, e) => {
      t.match(er, { code: 1 })
      t.match(e, 'Unknown argument: -x')
      t.end()
    })
  })

  t.test('undefined trailing value opts', t => {
    const opts = [
      '--node-arg',
      '--test-arg',
      '--nyc-arg',
      '--output-file',
      '--grep'
    ]
    const expect = {
      nodeArgs: [],
      testArgs: [],
      nycArgs: [],
      outputFile: null,
      grep: []
    }
    t.plan(opts.length)
    opts.forEach(opt => t.test(opt, t => run([
      '--dump-config', opt
    ], null, (er, o, e) => {
      t.equal(er, null)
      t.match(JSON.parse(o), expect)
      t.end()
    })))
  })

  t.test('good rc file', t => {
    const rc = tmpfile(t, 'taprc', `
reporter: spec
jobs: 3
`)
    run(['--dump-config'], { env: {
      TAP_RCFILE: rc,
      TAP: 0
    }}, (er, o, e) => {
      t.equal(er, null)
      t.match(JSON.parse(o), {
        reporter: 'spec',
        jobs: 3
      })
      t.end()
    })
  })

  t.test('empty rc file', t => {
    const rc = tmpfile(t, 'taprc', '')
    run(['--dump-config'], { env: {
      TAP_RCFILE: rc,
      TAP: 0
    }}, (er, o, e) => {
      t.equal(er, null)
      t.match(JSON.parse(o), {
        reporter: 'classic',
        jobs: 1
      })
      t.end()
    })
  })

  t.end()
})

t.test('stdin', t => {
  const tapcode = 'TAP version 13\n1..1\nok\n'

  t.test('with output file', t => {
    const c = run(['-', '-C', '-Rspec', '-ofoo.txt', '--cov'], { env: {
      _TAP_IS_TTY: '1',
      TAP: '0'
    }}, (er, o, e) => {
      t.equal(er, null)
      t.equal(e, 'Coverage disabled because stdin cannot be instrumented\n')
      t.match(o, '✓')
      t.equal(fs.readFileSync('foo.txt', 'utf8'), tapcode)
      fs.unlinkSync('foo.txt')
      t.end()
    })
    c.stdin.end(tapcode)
  })

  t.test('no output file', t => {
    const c = run(['-', '--only', '-gx', '-iC', '-Rclassic'], { env: {
      _TAP_IS_TTY: '1',
      TAP: '0'
    }}, (er, o, e) => {
      t.equal(er, null)
      t.equal(e, '')
      t.match(o, /total \.+ 1\/1/)
      t.throws(() => fs.statSync('foo.txt'))
      t.end()
    })
    c.stdin.end(tapcode)
  })

  t.test('with file', t => {
    const foo = tmpfile(t, 'foo.test.js', `
      'use strict'
      require(${tap}).test('child', t => {
        t.pass('this is fine')
        t.end()
      })
    `)
    const args = ['-', foo, '-CRclassic', '-ofoo.txt']
    const c = run(args, { env: { TAP: 0, TAP_BUFFER: 1 }}, (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(clean(fs.readFileSync('foo.txt', 'utf8')))
      t.match(o, /foo.test.js \.+ 1\/1.*\n\/dev\/stdin \.+ 1\/1\n/)
      fs.unlinkSync('foo.txt')
      t.end()
    })
    c.stdin.end(tapcode)
  })

  t.end()
})

t.test('unknown arg throws', t => {
  run(['--blerg'], null, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(e, 'Unknown argument: --blerg')
    t.end()
  })
})

t.test('save file')
t.test('coverage service piping')
t.test('coverage report only')
t.test('color, -c -C TAP_COLOR=1')
t.test('timeouts incl --no-timeout')
t.test('epipe')
t.test('parallel sigil files')
