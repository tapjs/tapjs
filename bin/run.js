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
const os = require('os')
const isTTY = process.stdin.isTTY || process.env._TAP_IS_TTY === '1'

const coverageServiceTest = process.env.COVERAGE_SERVICE_TEST === 'true'

// NYC will not wrap a module in node_modules.
// So, we need to tell the child proc when it's been added.
// Of course, this can't reasonably be branch-covered, so ignore it.
/* istanbul ignore next */
if (process.env._TAP_COVERAGE_ === '1')
  global.__coverage__ = global.__coverage__ || {}
else if (process.env._TAP_COVERAGE_ === '0') {
  global.__coverage__ = null
  Object.keys(process.env).filter(k => /NYC/.test(k)).forEach(k =>
    process.env[k] = '')
}

/* istanbul ignore next */
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

const main = _ => {
  const args = process.argv.slice(2)

  // set default args
  const defaults = constructDefaultArgs()

  // parse dotfile
  const rcFile = process.env.TAP_RCFILE || (osHomedir() + '/.taprc')
  const rcOptions = parseRcFile(rcFile)

  // supplement defaults with parsed rc options
  Object.keys(rcOptions).forEach(k =>
    defaults[k] = rcOptions[k])

  defaults.rcFile = rcFile

  // parse args
  const options = parseArgs(args, defaults)

  if (!options)
    return

  process.stdout.on('error', er => {
    /* istanbul ignore else */
    if (er.code === 'EPIPE')
      process.exit()
    else
      throw er
  })

  options.files = globFiles(options.files)

  if (!args.length && !options.files.length && isTTY) {
    console.error(usage())
    process.exit(1)
  }

  // this is only testable by escaping from the covered environment
  /* istanbul ignore next */
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
    setupTapEnv(options)
    stdinOnly(options)
    return
  }

  // By definition, the next block cannot be covered, because
  // they are only relevant when coverage is turned off.
  /* istanbul ignore next */
  if (options.coverage && !global.__coverage__) {
    return respawnWithCoverage(options)
  }

  setupTapEnv(options)
  runTests(options)
}

const constructDefaultArgs = _ => {
  /* istanbul ignore next */
  const defaultTimeout = global.__coverage__ ? 240 : 30

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

const parseArgs = (args, options) => {
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
    /* istanbul ignore next */
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
        options[key.slice(2)] = +(val || args[++i])
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

// Obviously, this bit isn't going to ever be covered, because
// it only runs when we DON'T have coverage enabled, to enable it.
/* istanbul ignore next */
const respawnWithCoverage = options => {
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
  child.on('close', (code, signal) =>
    runCoverageReport(options, code, signal))
}

/* istanbul ignore next */
const pipeToCoverageServices = (options, child) => {
  let piped = false
  for (let i = 0; i < coverageServices.length; i++) {
    if (process.env[coverageServices[i].env]) {
      pipeToCoverageService(coverageServices[i], options, child)
      piped = true
    }
  }

  if (!piped)
    throw new Error('unknown service, internal error')
}

/* istanbul ignore next */
const pipeToCoverageService = (service, options, child) => {
  let bin = service.bin

  if (coverageServiceTest) {
    // test scaffolding.
    // don't actually send stuff to the service
    bin = require.resolve('../test-legacy/fixtures/cat.js')
    console.log('%s:%s', service.name, process.env[service.env])
  }

  const ca = spawn(node, [bin], {
    stdio: [ 'pipe', 1, 2 ]
  })

  child.stdout.pipe(ca.stdin)

  ca.on('close', (code, signal) =>
    signal ? process.kill(process.pid, signal)
    : code ? console.log('Error piping coverage to ' + service.name)
    : console.log('Successfully piped to ' + service.name))
}

/* istanbul ignore next */
const runCoverageReport = (options, code, signal) =>
  signal ? null
  : options.checkCoverage ? runCoverageCheck(options, code, signal)
  : runCoverageReportOnly(options, code, signal)

/* istanbul ignore next */
const runCoverageReportOnly = (options, code, signal) => {
  const close = (s, c) => {
    if (signal || s) {
      setTimeout(() => {}, 200)
      process.kill(process.pid, signal || s)
    } else if (code || c)
      process.exit(code || c)
  }

  if (options.coverageReport === false)
    return close(code, signal)

  if (!options.coverageReport) {
    if (options.pipeToService || coverageServiceTest)
      options.coverageReport = 'text-lcov'
    else
      options.coverageReport = 'text'
  }

  const args = [nycBin, 'report', '--reporter', options.coverageReport]

  let child
  // automatically hook into coveralls
  if (options.coverageReport === 'text-lcov' && options.pipeToService) {
    child = spawn(node, args, { stdio: [ 0, 'pipe', 2 ] })
    pipeToCoverageServices(options, child)
  } else {
    // otherwise just run the reporter
    child = fg(node, args)
    if (options.coverageReport === 'lcov' && options.browser)
      child.on('exit', () =>
        opener('coverage/lcov-report/index.html'))
  }

  if (code || signal) {
    child.removeAllListeners('close')
    child.on('close', close)
  }
}

/* istanbul ignore next */
const coverageCheckArgs = options => {
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

/* istanbul ignore next */
const runCoverageCheck = (options, code, signal) => {
  const args = [nycBin, 'check-coverage'].concat(coverageCheckArgs(options))

  const child = fg(node, args)
  child.removeAllListeners('close')
  child.on('close', (c, s) =>
    runCoverageReportOnly(options, code || c, signal || s))
}

const usage = _ => fs.readFileSync(__dirname + '/usage.txt', 'utf8')
    .split('@@REPORTERS@@')
    .join(getReporters())

const nycHelp = _ => fg(node, [nycBin, '--help'])

const nycVersion = _ => console.log(require('nyc/package.json').version)

const getReporters = _ => {
  const types = require('tap-mocha-reporter').types.reduce((str, t) => {
    const ll = str.split('\n').pop().length + t.length
    if (ll < 40)
      return str + ' ' + t
    else
      return str + '\n' + t
  }, '').trim()
  const ind = '                              '
  return ind + types.split('\n').join('\n' + ind)
}

const setupTapEnv = options => {
  process.env.TAP_TIMEOUT = options.timeout
  if (options.color)
    process.env.TAP_COLORS = '1'
  else
    process.env.TAP_COLORS = '0'

  if (options.bail)
    process.env.TAP_BAIL = '1'

  if (options.grepInvert)
    process.env.TAP_GREP_INVERT = '1'

  if (options.grep.length)
    process.env.TAP_GREP = options.grep.map(p => p.toString())
      .join('\n')

  if (options.only)
    process.env.TAP_ONLY = '1'
}

const globFiles = files => files.reduce((acc, f) =>
  acc.concat(f === '-' ? f : glob.sync(f, { nonull: true })), [])

const makeReporter = options =>
  new (require('tap-mocha-reporter'))(options.reporter)

const stdinOnly = options => {
  // if we didn't specify any files, then just passthrough
  // to the reporter, so we don't get '/dev/stdin' in the suite list.
  // We have to pause() before piping to switch streams2 into old-mode
  process.stdin.pause()
  const reporter = makeReporter(options)
  process.stdin.pipe(reporter)
  if (options.outputFile !== null)
    process.stdin.pipe(fs.createWriteStream(options.outputFile))
  process.stdin.resume()
}

const readSaveFile = options => {
  if (options.saveFile)
    try {
      const s = fs.readFileSync(options.saveFile, 'utf8').trim()
      if (s)
        return s.split('\n')
    } catch (er) {}

  return null
}

const saveFails = (options, tap) => {
  if (!options.saveFile)
    return

  let fails = []
  const successes = []
  tap.on('result', res => {
    // we will continue to re-run todo tests, even though they're
    // not technically "failures".
    if (!res.ok && !res.extra.skip)
      fails.push(res.extra.file)
    else
      successes.push(res.extra.file)
  })

  const save = () => {
    fails = fails.reduce((set, f) => {
      f = f.replace(/\\/g, '/')
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

  tap.on('bailout', reason => {
    // add any pending test files to the fails list.
    fails.push.apply(fails, options.files.filter(file =>
      successes.indexOf(file) === -1))
    save()
  })

  tap.on('end', save)
}

const filterFiles = (files, saved, parallelOk) =>
  files.filter(file =>
    path.basename(file) === 'tap-parallel-ok' ?
      ((parallelOk[path.resolve(path.dirname(file))] = true), false)
    : path.basename(file) === 'tap-parallel-not-ok' ?
      parallelOk[path.resolve(path.dirname(file))] = false
    : onSavedList(saved, file)
  )

// check if the file is on the list, or if it's a parent dir of
// any items that are on the list.
const onSavedList = (saved, file) =>
  !saved || !saved.length ? true
  : saved.indexOf(file) !== -1 ? true
  : saved.some(f => f.indexOf(file + '/') === 0)

const isParallelOk = (parallelOk, file) => {
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

const runAllFiles = (options, saved, tap) => {
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

    let st
    try {
      st = fs.statSync(file)
    } catch (er) {
      continue
    }

    if (options.timeout)
      opt.timeout = options.timeout * 1000

    opt.file = file
    if (st.isDirectory()) {
      const dir = filterFiles(fs.readdirSync(file).map(f =>
        file + '/' + f), saved, parallelOk)
      options.files.push.apply(options.files, dir)
    } else {
      if (options.jobs > 1)
        opt.buffered = isParallelOk(parallelOk, file) !== false
      if (file.match(/\.js$/)) {
        const args = options.nodeArgs.concat(file).concat(options.testArgs)
        tap.spawn(node, args, opt, file)
      } else if (isexe.sync(options.files[i]))
        tap.spawn(options.files[i], options.testArgs, opt, file)
    }
  }

  if (doStdin)
    tap.stdin()
}

const runTests = options => {
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

const parseRcFile = path => {
  try {
    const contents = fs.readFileSync(path, 'utf8')
    return yaml.safeLoad(contents) || {}
  } catch (er) {
    // if no dotfile exists, or invalid yaml, fail gracefully
    return {}
  }
}

const strToRegExp = g => {
  const p = g.match(/^\/(.*)\/([a-z]*)$/)
  g = p ? p[1] : g
  const flags = p ? p[2] : ''
  return new RegExp(g, flags)
}

main()
