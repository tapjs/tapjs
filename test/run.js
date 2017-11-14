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

const clean = out => out
  .replace(/(^|\n)TAP [0-9]+ /g, '$1TAP {PID} ')
  .replace(
    /\n((?:  )+)requests:\n(\1  - type:(.*)\n\1 {4}context:\n(\1 {6}.*\n)+)+/g,
    '\n$1requests:\n$1  {REQUESTS}\n')
  .replace(/\bfd: [0-9]+/g, 'fd: {FD}')
  .replace(/# time=[0-9\.]+m?s( \{.*)?\n/g, '# {time}$1\n')
  .replace(/\n(( {2})+)stack: \|-?\n((\1  .*).*\n)+/gm,
    '\n$1stack: |\n$1  {STACK}\n')
  .replace(/\n(( {2})+)stack: \>-?\n((\1  .*).*\n(\1\n)?)+/gm,
    '\n$1stack: |\n$1  {STACK}\n')
  .replace(/(?:\n|^)([a-zA-Z]*Error): (.*)\n((    at .*\n)*)+/gm,
    '\n$1: $2\n    {STACK}\n')
  .replace(/:[0-9]+:[0-9]+(\)?\n)/g, '#:#$1')
  .replace(/(line|column): [0-9]+/g, '$1: #')
  .split(process.cwd()).join('{CWD}')

const run = (args, options, cb) => {
  if (options && options.env)
    options.env = Object.keys(process.env).reduce((env, k) => {
      if (env[k] === undefined)
        env[k] = process.env[k]
      return env
    }, options.env)

  return execFile(node, [bin].concat(args), options, cb)
}

const tmpfile = (t, filename, program) => {
  filename = path.join(dir, filename)
  t.teardown(() => rimraf.sync(filename))
  fs.writeFileSync(filename, program)
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
      '--no-browser', '--no-coverage-report', '--coverage-report', 'html',
      '--no-cov', '--cov', '--save', 'foo.txt', '--reporter=spec', '--gc',
      '--strict', '--debug', '--debug-brk', '--harmony', '--node-arg=xyz',
      '--check-coverage', '--test-arg=xyz', '--test-arg', 'abc', '--100',
      '--branches=99', '--lines', '100', '--color', '--no-color',
      '--output-file=out.txt', '--no-timeout', '--timeout', '99', '--invert',
      '--no-invert', '--grep', 'x', '--grep=/y/i', '--bail', '--no-bail',
      '--only', '-R', 'spec', '--node-arg', 'abc', '--nyc-arg', 'abc',
      '-o', 'out.txt'
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

  t.test('short options as well as short flags')
  t.test('undefined trailing value opts')

  t.end()
})

t.test('stdin only', t => {
  const tapcode = 'TAP version 13\n1..1\nok\n'
  const c = run(['-', '-C', '-Rspec', '-ofoo.txt'], { env: {
    _TAP_IS_TTY: '1',
    TAP: '0'
  }}, (er, o, e) => {
    t.equal(er, null)
    t.equal(e, '')
    t.match(o, '✓')
    t.equal(fs.readFileSync('foo.txt', 'utf8'), tapcode)
    fs.unlinkSync('foo.txt')
    t.end()
  })
  c.stdin.end(tapcode)
})

t.test('unknown arg throws', t => {
  run(['--blerg'], null, (er, o, e) => {
    t.match(er, { code: 1 })
    t.match(e, 'Unknown argument: --blerg')
    t.end()
  })
})

t.test('save file')
t.test('coverage service test, including inferred coverage')
t.test('coverage report only')
t.test('~/.taprc')
t.test('color, -c -C TAP_COLOR=1')
t.test('output file')
t.test('timeouts incl --no-timeout')
t.test('epipe')
t.test('parallel sigil files')
