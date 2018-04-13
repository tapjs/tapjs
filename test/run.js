'use strict'
const fs = require('fs')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
// const rimraf = { sync: () => {} }
const path = require('path')
const cp = require('child_process')
const execFile = cp.execFile
const node = process.execPath
const bin = require.resolve('../bin/run.js')
const tap = JSON.stringify(path.join(__dirname, '..') + '/')
const t = require('../')

const dir = path.join(__dirname, 'cli-tests')
mkdirp.sync(dir)
t.teardown(() => rimraf.sync(dir))

// set this forcibly so it doesn't interfere with other tests.
delete process.env.TAP_DIAG
delete process.env.TAP_BAIL
delete process.env.TAP_COLORS
delete process.env.TAP_TIMEOUT

const cleanStacks = require('./clean-stacks.js')
// also clean up NYC output a bit, because the line lengths
// in the text report can vary on different platforms.
const clean = string => cleanStacks(string)
  .replace(/uncovered line( #)?s/i, 'Uncovered Lines')
  .replace(/ +\|/g, ' |')
  .replace(/\| +/g, '| ')
  .replace(/-+\|/g, '-|')
  .replace(/\|-+/g, '|-')

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
  const parts = filename.split('/')
  // make any necessary dirs
  if (parts.length > 1)
    mkdirp.sync(path.join(dir, parts.slice(0, -1).join('/')))
  if (t.tmpfiles)
    t.tmpfiles.push(path.join(dir, parts[0]))
  else {
    t.tmpfiles = [path.join(dir, parts[0])]
    t.teardown(() => t.tmpfiles.forEach(f => rimraf.sync(f)))
  }
  filename = path.join(dir, filename)
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
  run(['-Cbt0', '--', 'doesnt exist', ok], null, (err, stdout, stderr) => {
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
    ], { env: {
      TAP: '0',
      TAP_BAIL: '0',
      _TAP_IS_TTY: '1'
    }}, (er, o, e) => {
      t.equal(er, null)
      t.match(JSON.parse(o), {
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
        reporter: 'spec',
        files: [],
        grep: [ Object, Object ],
        grepInvert: false,
        bail: false,
        saveFile: 'foo.txt',
        pipeToService: Boolean,
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
        rcFile: /\.taprc$/,
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
    run(['--dump-config', '-c'], { env: {
      TAP_RCFILE: rc,
      TAP: '0',
      _TAP_IS_TTY: '1',
      TAP_COLORS: '1'
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

t.test('rc file specifies test files', t => {
  const testfile = tmpfile(t, 'via-rcfile.js', `
    'use strict'
    require(${tap}).test('child', t => {
      t.pass('this is fine')
      t.end()
    })
  `)

  const rc = tmpfile(t, 'taprc', `
files: [ ${testfile} ]
reporter: tap
  `)

  const c = run([], { env: { TAP_RCFILE: rc }}, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'expected stdout')
    t.equal(e, '')
    t.end()
  })
})

t.test('stdin', t => {
  const tapcode = 'TAP version 13\n1..1\nok\n'

  t.test('with output file', t => {
    const c = run(['-', '-c', '-Rspec', '-ofoo.txt', '--cov'], { env: {
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
    const c = run(['--only', '-gx', '-iC', '-Rclassic'], { env: {
      _TAP_IS_TTY: '1',
      TAP: '0'
    }}, (er, o, e) => {
      t.equal(er, null)
      t.match(e, /^Reading TAP data from stdin \(use "-" argument to suppress\)\n/)
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

t.test('epipe on stdout', t => {
  const c = run(['-', '-C'], { stdio: 'pipe' }, (er, o, e) => {
    t.equal(er, null)
    t.equal(o, 'TAP version 13\n1..9\nok\n')
    t.end()
  })
  c.stdin.write('TAP version 13\n1..9\nok\n')
  c.stdout.on('data', chunk => {
    c.stdout.destroy()
    c.stdin.write('ok\nok\nok\nok\n')
    c.stdin.write('ok\nok\nok\nok\n')
  })
})

t.test('unknown arg throws', t => {
  run(['--blerg'], null, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(e, 'Unknown argument: --blerg')
    t.end()
  })
})

t.test('coverage', t => {
  const cwd = process.cwd()
  process.chdir(dir)
  t.teardown(() => process.chdir(cwd))
  const ok = tmpfile(t, 'ok.js', `'use strict'
    module.exports = (x, y) => {
      if (x)
        return y || x
      else
        return y
    }`)

  tmpfile(t, 'package.json', '{"name":"just a placeholder"}')

  const t1 = tmpfile(t, '1.test.js', `'use strict'
    const ok = require('./ok.js')
    require(${tap}).equal(ok(1), 1)`)

  const t2 = tmpfile(t, '2.test.js', `'use strict'
    const ok = require('./ok.js')
    require(${tap}).equal(ok(1, 2), 2)`)

  const t3 = tmpfile(t, '3.test.js', `'use strict'
    const ok = require('./ok.js')
    require(${tap}).equal(ok(0, 3), 3)`)

  // escape from new york
  const esc = tmpfile(t, 'runtest.sh',
`"${node}" "${bin}" "\$@" --cov --nyc-arg=--include="${ok}"
`)

  const escape = (args, options, cb) => {
    options = options || {}
    const env = Object.keys(process.env).filter(
      k => !/TAP|NYC|SW_ORIG/.test(k)
    ).reduce((env, k) => {
      if (!env.hasOwnProperty(k))
        env[k] = process.env[k]
      return env
    }, options.env || {})
    options.env = env
    return execFile('bash', [esc].concat(args), options, cb)
  }

  t.test('--100', t => {
    t.test('pass', t => {
      escape([t1, t2, t3, '--100'], null, (er, o, e) => {
        t.equal(er, null)
        t.matchSnapshot(clean(o), '100 pass')
        t.end()
      })
    })
    t.test('fail', t => {
      escape([t1, t2, '--100'], null, (er, o, e) => {
        t.match(er, { code: 1 })
        t.matchSnapshot(clean(o), '100 fail')
        t.end()
      })
    })
    t.end()
  })

  t.test('report only', t => {
    escape(['--coverage-report=text-lcov'], null, (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(clean(o), 'lcov output')
      t.end()
    })
  })

  t.test('report with checks', t => {
    escape(['--100', '--coverage-report=text-lcov'], null, (er, o, e) => {
      t.match(er, { code: 1 })
      t.matchSnapshot(clean(o), 'lcov output and 100 check')
      t.end()
    })
  })

  t.test('pipe to service', t => {
    escape(['--coverage-report=text-lcov'], { env: {
      COVERAGE_SERVICE_TEST: 'true'
    }}, (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(clean(o), 'piped to coverage service cat')
      t.end()
    })
  })

  t.end()
})

t.test('save file', t => {
  const xy1 = tmpfile(t, 'x/y/1.js', `'use strict'
    const t = require(${tap})
    t.pass('one')
  `)

  const ab2 = tmpfile(t, 'a/b/2.js', `'use strict'
    const t = require(${tap})
    t.pass('2')
  `)

  const abf1 = tmpfile(t, 'a/b/f1.js', `'use strict'
    require(${tap}).fail('a/b')
  `)

  const abf2 = tmpfile(t, 'z.js', `'use strict'
    require(${tap}).fail('c/d')
  `)

  const savefile = path.resolve(tmpfile(t, 'fails.txt', ''))

  t.test('with bailout, should save all untested', t => {
    run(['a', 'x', 'z.js', '-s', savefile, '-b'], { cwd: dir }, (er, o, e) => {
      t.match(er, { code: 1 })
      t.matchSnapshot(clean(o), 'stdout')
      t.equal(e, '')
      t.matchSnapshot(clean(fs.readFileSync(savefile, 'utf8')), 'savefile')
      t.end()
    })
  })

  t.test('without bailout, run untested, save failures', t => {
    run(['a', 'x', 'z.js', '-s', savefile], { cwd: dir }, (er, o, e) => {
      t.match(er, { code: 1 })
      t.matchSnapshot(clean(o), 'stdout')
      t.equal(e, '')
      t.matchSnapshot(clean(fs.readFileSync(savefile, 'utf8')), 'savefile')
      t.end()
    })
  })

  t.test('make fails pass', t => {
    fs.writeFileSync(abf1, `'use strict'
      require(${tap}).pass('fine now')
    `)
    fs.writeFileSync(abf2, `'use strict'
      require(${tap}).pass('fine now too')
    `)
    t.end()
  })

  t.test('pass, empty save file', t => {
    run(['a', 'x', 'z.js', '-s', savefile], { cwd: dir }, (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(clean(o), 'stdout')
      t.equal(e, '')
      t.throws(() => fs.statSync(savefile), 'save file is gone')
      t.end()
    })
  })

  t.test('empty save file, run all tests', t => {
    run(['a', 'x', 'z.js', '-s', savefile], { cwd: dir }, (er, o, e) => {
      t.equal(er, null)
      t.matchSnapshot(clean(o), 'stdout')
      t.equal(e, '')
      t.throws(() => fs.statSync(savefile), 'save file is gone')
      t.end()
    })
  })

  t.end()
})

t.test('parallel', t => {
  // should see start, start, end, end, in the output
  tmpfile(t, 'p/y/1.js', `'use strict'
    console.error('start')
    setTimeout(() => console.error('end'), 100)
    const t = require(${tap})
    t.pass('one')
  `)

  tmpfile(t, 'p/y/2.js', `'use strict'
    console.error('start')
    setTimeout(() => console.error('end'), 100)
    const t = require(${tap})
    t.pass('2')
  `)

  tmpfile(t, 'p/tap-parallel-not-ok', '')
  tmpfile(t, 'p/y/tap-parallel-ok', '')

  tmpfile(t, 'q/b/f1.js', `'use strict'
    require(${tap}).pass('a/b')
    setTimeout(() => console.error('f1'), 100)
  `)

  tmpfile(t, 'q/b/f2.js', `'use strict'
    require(${tap}).pass('c/d')
    console.error('f2')
  `)

  tmpfile(t, 'q/tap-parallel-ok', '')
  tmpfile(t, 'q/b/tap-parallel-not-ok', '')

  tmpfile(t, 'r/y/1.js', `'use strict'
    console.error('ry1')
    setTimeout(() => console.error('ry1'), 100)
    const t = require(${tap})
    t.pass('one')
  `)

  tmpfile(t, 'r/y/2.js', `'use strict'
    console.error('ry2')
    setTimeout(() => console.error('ry2'), 100)
    const t = require(${tap})
    t.pass('2')
  `)

  tmpfile(t, 'r/tap-parallel-not-ok', '')

  tmpfile(t, 'z/y/1.js', `'use strict'
    console.error('start')
    setTimeout(() => console.error('end'), 100)
    const t = require(${tap})
    t.pass('one')
  `)

  tmpfile(t, 'z/y/2.js', `'use strict'
    console.error('start')
    setTimeout(() => console.error('end'), 100)
    const t = require(${tap})
    t.pass('2')
  `)

  run(['p/y/*.js', 'q', 'r/y', 'z', '-j2'], { cwd: dir }, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(clean(o), 'output')
    t.equal(e,
      'start\nstart\nend\nend\n' +
      'ry1\nry1\nry2\nry2\n' +
      'f1\nf2\n' +
      'start\nstart\nend\nend\n'
    )
    t.end()
  })
})

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
    t.matchSnapshot(clean(o))
    t.equal(e, '')
    t.end()
  })
})
