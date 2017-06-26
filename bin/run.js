#!/usr/bin/env node
'use strict'

const node = process.execPath
const fs = require('fs')
const spawn = require('child_process').spawn
const fg = require('foreground-child')
const opener = require('opener')
const colorSupport = require('color-support')
const nycBin = require.resolve('nyc/bin/nyc.js')
const glob = require('glob')
const isexe = require('isexe')
const osHomedir = require('os-homedir')
const yaml = require('js-yaml')
const path = require('path')
const exists = require('fs-exists-cached').sync
const os = require('os');

const coverageServiceTest = process.env.COVERAGE_SERVICE_TEST === 'true'

// NYC will not wrap a module in node_modules.
// So, we need to tell the child proc when it's been added.
if (process.env._TAP_COVERAGE_ === '1')
  global.__coverage__ = global.__coverage__ || {}

// console.error(process.argv.join(' '))
// console.error('CST=%j', process.env.COVERAGE_SERVICE_TEST)
// console.error('CRT=%j', process.env.COVERALLS_REPO_TOKEN)
if (coverageServiceTest)
  console.log('COVERAGE_SERVICE_TEST')

// Add new coverage services here.
// it'll check for the environ named and pipe appropriately.
//
// Currently only Coveralls is supported, but the infrastructure
// is left in place in case some noble soul fixes the codecov
// module in the future.  See https://github.com/tapjs/node-tap/issues/270
const coverageServices = [
  {
    env: 'COVERALLS_REPO_TOKEN',
    bin: require.resolve('coveralls/bin/coveralls.js'),
    name: 'Coveralls'
  }
]

main()

function main () {
  const args = process.argv.slice(2)

  if (!args.length && process.stdin.isTTY) {
    console.error(usage())
    process.exit(1)
  }

  // set default args
  const defaults = constructDefaultArgs()

  // parse dotfile
  const rcFile = process.env.TAP_RCFILE || (osHomedir() + '/.taprc')
  const rcOptions = parseRcFile(rcFile)

  // supplement defaults with parsed rc options
  if (rcOptions)
    Object.keys(rcOptions).forEach(function (k) {
      defaults[k] = rcOptions[k]
    })

  defaults.rcFile = rcFile

  // parse args
  const options = parseArgs(args, defaults)

  if (!options)
    return

  process.stdout.on('error', function (er) {
    if (er.code === 'EPIPE')
      process.exit()
    else
      throw er
  })

  options.files = globFiles(options.files)

  if ((options.coverageReport || options.checkCoverage) &&
      options.files.length === 0)
    return runCoverageReport(options)

  if (options.files.length === 0) {
    console.error('Reading TAP data from stdin (use "-" argument to suppress)')
    options.files.push('-')
  }

  if (options.files.length === 1 && options.files[0] === '-') {
    if (options.coverage)
      console.error('Coverage disabled because stdin cannot be instrumented')
    stdinOnly(options)
    return
  }

  // By definition, the next block cannot be covered, because
  // they are only relevant when coverage is turned off.

  /* istanbul ignore if */
  if (options.coverage && !global.__coverage__)
    return respawnWithCoverage(options)

  setupTapEnv(options)

  runTests(options)
}

function constructDefaultArgs () {
  const defaultTimeout = (global.__coverage__) ? 240 : 30

  const defaultArgs = {
    nodeArgs: [],
    nycArgs: [],
    testArgs: [],
    timeout: +process.env.TAP_TIMEOUT || defaultTimeout,
    color: !!colorSupport.level,
    reporter: null,
    files: [],
    grep: [],
    grepInvert: false,
    bail: false,
    saveFile: null,
    pipeToService: false,
    coverageReport: null,
    browser: true,
    coverage: undefined,
    checkCoverage: false,
    branches: 0,
    functions: 0,
    lines: 0,
    statements: 0,
    jobs: 1,
    outputFile: null
  }

  if (process.env.TAP_COLORS !== undefined)
    defaultArgs.color = !!(+process.env.TAP_COLORS)

  return defaultArgs
}

function parseArgs (args, defaults) {
  const options = defaults || {}

  const singleFlags = {
    b: 'bail',
    B: 'no-bail',
    i: 'invert',
    I: 'no-invert',
    c: 'color',
    C: 'no-color',
    T: 'no-timeout',
    J: 'jobs-auto',
    O: 'only',
    h: 'help',
    '?': 'help',
    v: 'version'
  }

  const singleOpts = {
    j: 'jobs',
    g: 'grep',
    R: 'reporter',
    t: 'timeout',
    s: 'save',
    o: 'output-file'
  }

  // If we're running under Travis-CI with a Coveralls.io token,
  // then it's a safe bet that we ought to output coverage.
  for (let i = 0; i < coverageServices.length && !options.pipeToService; i++) {
    if (process.env[coverageServices[i].env])
      options.pipeToService = true
  }

  let defaultCoverage = options.pipeToService
  let dumpConfig = false

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg.charAt(0) !== '-' || arg === '-') {
      options.files.push(arg)
      continue
    }

    // short-flags
    if (arg.charAt(1) !== '-' && arg !== '-gc') {
      const expand = []
      for (let f = 1; f < arg.length; f++) {
        const fc = arg.charAt(f)
        const sf = singleFlags[fc]
        const so = singleOpts[fc]
        if (sf)
          expand.push('--' + sf)
        else if (so) {
          const soslice = arg.slice(f + 1)
          const soval = soslice.charAt(0) === '=' ? soslice : '=' + soslice
          expand.push('--' + so + soval)
          f = arg.length
        } else if (arg !== '-' + fc)
          expand.push('-' + fc)
      }
      if (expand.length) {
        args.splice.apply(args, [i, 1].concat(expand))
        i--
        continue
      }
    }

    const argsplit = arg.split('=')
    const key = argsplit.shift()
    const val = argsplit.length ? argsplit.join('=') : null

    switch (key) {
      case '--help':
        console.log(usage())
        return null

      case '--dump-config':
        dumpConfig = true
        continue

      case '--nyc-help':
        nycHelp()
        return null

      case '--nyc-version':
        nycVersion()
        return null

      case '--version':
        console.log(require('../package.json').version)
        return null

      case '--jobs':
        options.jobs = +(val || args[++i])
        continue

      case '--jobs-auto':
        options.jobs = +os.cpus().length
        continue

      case '--coverage-report':
        options.coverageReport = val || args[++i]
        if (options.coverageReport === 'html')
          options.coverageReport = 'lcov'
        defaultCoverage = true
        continue

      case '--no-browser':
        options.browser = false
        continue

      case '--no-coverage-report':
        options.coverageReport = false
        continue

      case '--no-cov': case '--no-coverage':
        options.coverage = false
        continue

      case '--cov': case '--coverage':
        options.coverage = true
        continue

      case '--save':
        options.saveFile = val || args[++i]
        continue

      case '--reporter':
        options.reporter = val || args[++i]
        continue

      case '--gc': case '-gc': case '--expose-gc':
        options.nodeArgs.push('--expose-gc')
        continue

      case '--strict':
        options.nodeArgs.push('--use_strict')
        continue

      case '--debug':
        options.nodeArgs.push('--debug')
        continue

      case '--debug-brk':
        options.nodeArgs.push('--debug-brk')
        continue

      case '--harmony':
        options.nodeArgs.push('--harmony')
        continue

      case '--node-arg': {
        const v = val || args[++i]
        if (v !== undefined)
          options.nodeArgs.push(v)
        continue
      }

      case '--check-coverage':
        defaultCoverage = true
        options.checkCoverage = true
        continue

      case '--test-arg': {
        const v = val || args[++i]
        if (v !== undefined)
          options.testArgs.push(v)
        continue
      }

      case '--nyc-arg': {
        const v = val || args[++i]
        if (v !== undefined)
          options.nycArgs.push(v)
        continue
      }

      case '--100':
        defaultCoverage = true
        options.checkCoverage = true
        options.branches = 100
        options.functions = 100
        options.lines = 100
        options.statements = 100
        continue

      case '--branches':
      case '--functions':
      case '--lines':
      case '--statements':
        defaultCoverage = true
        options.checkCoverage = true
        options[key.slice(2)] = val || args[++i]
        continue

      case '--color':
        options.color = true
        continue

      case '--no-color':
        options.color = false
        continue

      case '--output-file': {
        const v = val || args[++i]
        if (v !== undefined)
          options.outputFile = v
        continue
      }

      case '--no-timeout':
        options.timeout = 0
        continue

      case '--timeout':
        options.timeout = +(val || args[++i])
        continue

      case '--invert':
        options.grepInvert = true
        continue

      case '--no-invert':
        options.grepInvert = false
        continue

      case '--grep': {
        const v = val || args[++i]
        if (v !== undefined)
          options.grep.push(strToRegExp(v))
        continue
      }

      case '--bail':
        options.bail = true
        continue

      case '--no-bail':
        options.bail = false
        continue

      case '--only':
        options.only = true
        continue

      case '--':
        options.files = options.files.concat(args.slice(i + 1))
        i = args.length
        continue

      default:
        throw new Error('Unknown argument: ' + arg)
    }
  }

  if (options.coverage === undefined)
    options.coverage = defaultCoverage

  if (process.env.TAP === '1')
    options.reporter = 'tap'

  // default to tap for non-tty envs
  if (!options.reporter)
    options.reporter = options.color ? 'classic' : 'tap'

  if (dumpConfig)
    return console.log(JSON.stringify(options, null, 2))

  return options
}

/* istanbul ignore next */
function respawnWithCoverage (options) {
  // console.error('respawn with coverage')
  // Re-spawn with coverage
  const args = [nycBin].concat(
    '--silent',
    '--cache=true',
    options.nycArgs,
    '--',
    process.execArgv,
    process.argv.slice(1)
  )
  process.env._TAP_COVERAGE_ = '1'
  const child = fg(node, args)
  child.removeAllListeners('close')
  child.on('close', function (code, signal) {
    runCoverageReport(options, code, signal)
  })
}

function pipeToCoverageServices (options, child) {
  // console.error('pipe to services')
  let piped = false
  for (let i = 0; i < coverageServices.length; i++) {
    // console.error('pipe to service?', coverageServices[i].env)
    if (process.env[coverageServices[i].env]) {
      pipeToCoverageService(coverageServices[i], options, child)
      piped = true
    }
  }

  /* istanbul ignore if */
  if (!piped)
    throw new Error('unknown service, internal error')
}

function pipeToCoverageService (service, options, child) {
  // console.error('pipe to service yes', service.env)
  let bin = service.bin

  if (coverageServiceTest) {
    // console.error('use fakey test bin')
    // test scaffolding.
    // don't actually send stuff to the service
    bin = require.resolve('../test/fixtures/cat.js')
    console.log('%s:%s', service.name, process.env[service.env])
  }

  const ca = spawn(node, [bin], {
    stdio: [ 'pipe', 1, 2 ]
  })

  child.stdout.pipe(ca.stdin)

  ca.on('close', function (code, signal) {
    if (signal)
      process.kill(process.pid, signal)
    else if (code)
      console.log('Error piping coverage to ' + service.name)
    else
      console.log('Successfully piped to ' + service.name)
  })
}

function runCoverageReport (options, code, signal) {
  if (options.checkCoverage)
    runCoverageCheck(options, code, signal)
  else
    runCoverageReportOnly(options, code, signal)
}

function runCoverageReportOnly (options, code, signal) {
  if (options.coverageReport === false)
    return close(code, signal)

  if (!options.coverageReport) {
    if (options.pipeToService || coverageServiceTest)
      options.coverageReport = 'text-lcov'
    else
      options.coverageReport = 'text'
  }

  const args = [nycBin, 'report', '--reporter', options.coverageReport]
  // console.error('run coverage report', args)

  let child
  // automatically hook into coveralls
  if (options.coverageReport === 'text-lcov' && options.pipeToService) {
    // console.error('pipeToService')
    child = spawn(node, args, { stdio: [ 0, 'pipe', 2 ] })
    pipeToCoverageServices(options, child)
  } else {
    // otherwise just run the reporter
    child = fg(node, args)
    if (options.coverageReport === 'lcov' && options.browser)
      child.on('exit', function () {
        opener('coverage/lcov-report/index.html')
      })
  }

  if (code || signal) {
    child.removeAllListeners('close')
    child.on('close', close)
  }

  function close (c, s) {
    if (signal || s) {
      setTimeout(function () {}, 200)
      return process.kill(process.pid, signal || s)
    }
    if (code || c)
      return process.exit(code || c)
  }
}

function coverageCheckArgs (options) {
  const args = []
  if (options.branches)
    args.push('--branches', options.branches)
  if (options.functions)
    args.push('--functions', options.functions)
  if (options.lines)
    args.push('--lines', options.lines)
  if (options.statements)
    args.push('--statements', options.statements)

  return args
}

function runCoverageCheck (options, code, signal) {
  const args = [nycBin, 'check-coverage'].concat(coverageCheckArgs(options))

  const child = fg(node, args)
  child.removeAllListeners('close')
  child.on('close', function (c, s) {
    runCoverageReportOnly(options, code || c, signal || s)
  })
}

function usage () {
  return fs.readFileSync(__dirname + '/usage.txt', 'utf8')
    .split('@@REPORTERS@@')
    .join(getReporters())
}

function nycHelp () {
  fg(node, [nycBin, '--help'])
}

function nycVersion () {
  console.log(require('nyc/package.json').version)
}

function getReporters () {
  const types = require('tap-mocha-reporter').types.reduce(function (str, t) {
    const ll = str.split('\n').pop().length + t.length
    if (ll < 40)
      return str + ' ' + t
    else
      return str + '\n' + t
  }, '').trim()
  const ind = '                              '
  return ind + types.split('\n').join('\n' + ind)
}

function setupTapEnv (options) {
  process.env.TAP_TIMEOUT = options.timeout
  if (options.color)
    process.env.TAP_COLORS = 1
  else
    process.env.TAP_COLORS = 0

  if (options.bail)
    process.env.TAP_BAIL = '1'

  if (options.grepInvert)
    process.env.TAP_GREP_INVERT = '1'

  if (options.grep.length)
    process.env.TAP_GREP = options.grep.map(function (pattern) {
      return pattern.toString()
    }).join('\n')

  if (options.only)
    process.env.TAP_ONLY = '1'
}

function globFiles (files) {
  return files.reduce(function (acc, f) {
    if (f === '-') {
      acc.push(f)
      return acc
    }

    // glob claims patterns MUST not include any '\'s
    if (!/\\/.test(f))
      f = glob.sync(f) || f

    return acc.concat(f)
  }, [])
}

function makeReporter (options) {
  const TMR = require('tap-mocha-reporter')
  return new TMR(options.reporter)
}

function stdinOnly (options) {
  // if we didn't specify any files, then just passthrough
  // to the reporter, so we don't get '/dev/stdin' in the suite list.
  // We have to pause() before piping to switch streams2 into old-mode
  process.stdin.pause()
  const reporter = makeReporter(options)
  process.stdin.pipe(reporter)
  process.stdin.resume()
}

function readSaveFile (options) {
  if (options.saveFile)
    try {
      return fs.readFileSync(options.saveFile, 'utf8').trim().split('\n')
    } catch (er) {}

  return null
}

function saveFails (options, tap) {
  if (!options.saveFile)
    return

  let fails = []
  const successes = []
  tap.on('result', function (res) {
    // we will continue to re-run todo tests, even though they're
    // not technically "failures".
    if (!res.ok && !res.extra.skip)
      fails.push(res.extra.file)
    else
      successes.push(res.extra.file)
  })

  tap.on('bailout', function (reason) {
    // add any pending test files to the fails list.
    fails.push.apply(fails, options.files.filter(function (file) {
      return successes.indexOf(file) === -1
    }))
    save()
  })

  tap.on('end', save)

  function save () {
    fails = fails.reduce(function (set, f) {
      if (set.indexOf(f) === -1)
        set.push(f)
      return set
    }, [])

    if (!fails.length)
      try {
        fs.unlinkSync(options.saveFile)
      } catch (er) {}
    else
      try {
        fs.writeFileSync(options.saveFile, fails.join('\n') + '\n')
      } catch (er) {}
  }
}

function filterFiles (files, saved, parallelOk) {
  return files.filter(function (file) {
    if (path.basename(file) === 'tap-parallel-ok')
      parallelOk[path.resolve(path.dirname(file))] = true
    else if (path.basename(file) === 'tap-parallel-not-ok')
      parallelOk[path.resolve(path.dirname(file))] = false
    else
      return saved === null || saved.indexOf(file) !== -1
  })
}

function isParallelOk (parallelOk, file) {
  const dir = path.resolve(path.dirname(file))
  return (dir in parallelOk) ? parallelOk[dir]
    : exists(dir + '/tap-parallel-ok')
    ? parallelOk[dir] = true
    : exists(dir + '/tap-parallel-not-ok')
    ? parallelOk[dir] = false
    : dir.length >= process.cwd().length
    ? isParallelOk(parallelOk, dir)
    : true
}

function runAllFiles (options, saved, tap) {
  let doStdin = false
  let parallelOk = Object.create(null)

  options.files = filterFiles(options.files, saved, parallelOk)

  for (let i = 0; i < options.files.length; i++) {
    const opt = {}
    const file = options.files[i]

    // Pick up stdin after all the other files are handled.
    if (file === '-') {
      doStdin = true
      continue
    }

    const st = fs.statSync(options.files[i])
    if (options.timeout)
      opt.timeout = options.timeout * 1000

    opt.file = file
    if (options.jobs > 1)
      opt.buffered = isParallelOk(parallelOk, file) !== false

    if (file.match(/\.js$/)) {
      const args = options.nodeArgs.concat(file).concat(options.testArgs)
      tap.spawn(node, args, opt, file)
    } else if (st.isDirectory()) {
      const dir = filterFiles(fs.readdirSync(file).map(function (f) {
        return file + '/' + f
      }), saved, parallelOk)
      options.files.push.apply(options.files, dir)
    } else if (isexe.sync(options.files[i]))
      tap.spawn(options.files[i], options.testArgs, opt, file)
  }

  if (doStdin)
    tap.stdin()
}

function runTests (options) {
  const saved = readSaveFile(options)

  // At this point, we know we need to use the tap root,
  // because there are 1 or more files to spawn.
  const tap = require('../lib/tap.js')
  tap.runOnly = false

  // greps are passed to children, but not the runner itself
  tap.grep = []
  tap.jobs = options.jobs
  tap.patchProcess()

  // if not -Rtap, then output what the user wants.
  // otherwise just dump to stdout
  tap.pipe(options.reporter === 'tap' ? process.stdout: makeReporter(options))

  // need to replay the first version line, because the previous
  // line will have flushed it out to stdout or the reporter already.
  if (options.outputFile !== null)
    tap.pipe(fs.createWriteStream(options.outputFile)).write('TAP version 13\n')

  saveFails(options, tap)

  runAllFiles(options, saved, tap)

  tap.end()
}

function parseRcFile (path) {
  try {
    const contents = fs.readFileSync(path, 'utf8')
    return yaml.safeLoad(contents) || {}
  } catch (er) {
    // if no dotfile exists, or invalid yaml, fail gracefully
    return {}
  }
}

function strToRegExp (g) {
  const p = g.match(/^\/(.*)\/([a-z]*)$/)
  g = p ? p[1] : g
  const flags = p ? p[2] : ''
  return new RegExp(g, flags)
}
