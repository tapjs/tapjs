#!/usr/bin/env node
var args = process.argv.slice(2)

if (!args.length && process.stdin.isTTY) {
  console.error(usage())
  process.exit(1)
}

process.stdout.on('error', function (er) {
  if (er.code === 'EPIPE')
    process.exit()
  else
    throw er
})


// defaults
var nodeArgs = []

var timeout = process.env.TAP_TIMEOUT || 30
var color = require('supports-color')
if (process.env.TAP_COLORS !== undefined)
  color = !!(+process.env.TAP_COLORS)
var reporter
var files = []
var bail = false
var saveFile = null

var singleFlags = {
  b: 'bail',
  B: 'no-bail',
  c: 'color',
  C: 'no-color',
  h: 'help',
  '?': 'help',
  v: 'version'
}
var singleOpts = {
  R: 'reporter',
  t: 'timeout',
  s: 'save'
}

for (var i = 0; i < args.length; i++) {
  var arg = args[i]
  if (arg.charAt(0) !== '-' || arg === '-') {
    files.push(arg)
    continue
  }

  // short-flags
  if (arg.charAt(1) !== '-' && arg !== '-gc') {
    var expand = []
    for (var f = 1; f < arg.length; f++) {
      var fc = arg.charAt(f)
      var sf = singleFlags[fc]
      var so = singleOpts[fc]
      if (sf)
        expand.push('--' + sf)
      else if (so) {
        expand.push('--' + so + '=' + arg.slice(f + 1))
        f = arg.length
      }
    }
    if (expand.length) {
      args.splice.apply(args, [i, 1].concat(expand))
      i --
      continue
    }
  }

  // support -Rspec as well as --reporter=spec
  arg = arg.replace(/^-R/, '--reporter=')

  var key = arg
  var val
  if (key.match(/^--/) && arg.indexOf('=') !== -1) {
    var kv = arg.split('=')
    key = kv.shift()
    val = kv.join('=')
  }

  switch (key) {
    case '--help':
      return console.log(usage())

    case '--version':
      return console.log(require('../package.json').version)

    case '--save':
      val = val || args[++i]
      saveFile = val
      continue

    case '--reporter':
      val = val || args[++i]
      reporter = val
      continue

    case '--gc': case '-gc': case '--expose-gc':
      nodeArgs.push('--expose-gc')
      continue

    case '--strict':
      nodeArgs.push('--use_strict')
      continue

    case '--debug':
      nodeArgs.push('--debug')
      continue

    case '--debug-brk':
      nodeArgs.push('--debug-brk')
      continue

    case '--harmony':
      nodeArgs.push('--harmony')
      continue

    case '--color':
      color = true
      continue

    case '--no-color':
      color = false
      continue

    case '--timeout':
      val = val || args[++i]
      timeout = +val
      continue

    case '--bail':
      bail = true
      continue

    case '--no-bail':
      bail = false
      continue

    case '--':
      files = files.concat(args.slice(i + 1))
      i = args.length
      continue

    default:
      throw new Error('Unknown argument: ' + arg)
  }
}

if (process.env.TAP === '1')
  reporter = 'tap'

// default to tap for non-tty envs
if (!reporter)
  reporter = color ? 'classic' : 'tap'

function usage () {
  return function () {/*
Usage:
  tap [options] <files>

Executes all the files and interprets their output as TAP
formatted test result data.

To parse TAP data from stdin, specify "-" as a filename.

Short options are parsed gnu-style, so for example '-bCRspec' would be
equivalent to '--bail --no-color --reporter=spec'

Options:

  -c --color                  Use colors (Default for TTY)

  -C --no-color               Do not use colors (Default for non-TTY)

  -b --bail                   Bail out on first failure

  -B --no-bail                Do not bail out on first failure (Default)

  -R<type> --reporter=<type>  Use the specified reporter.  Defaults to
                              'classic' when colors are in use, or 'tap'
                              when colors are disabled.

                              Available reporters:
@@REPORTERS@@

  -s<file> --save=<file>      If <file> exists, then it should be a line-
                              delimited list of test files to run.  If
                              <file> is not present, then all command-line
                              positional arguments are run.

                              After the set of test files are run, any
                              failed test files are written back to the
                              save file.

                              This way, repeated runs with -s<file> will
                              re-run failures until all the failures are
                              passing, and then once again run all tests.

                              It's a good idea to .gitignore the file
                              used for this purpose, as it will churn a
                              lot.

  -t<n> --timeout=<n>         Time out test files after this many seconds.
                              Defaults to 30, or the value of the
                              TAP_TIMEOUT environment variable.

  -h --help                   print this thing you're looking at

  -v --version                show the version of this program

  -gc --expose-gc             Expose the gc() function to Node tests

  --debug                     Run JavaScript tests with node --debug

  --debug-brk                 Run JavaScript tests with node --debug-brk

  --harmony                   Enable all Harmony flags in JavaScript tests

  --strict                    Run JS tests in 'use strict' mode

  --                          Stop parsing flags, and treat any additional
                              command line arguments as filenames.
*/}.toString().split('\n').slice(1, -1).join('\n')
  .split('@@REPORTERS@@').join(getReporters())
}

function getReporters () {
  var types = require('tap-mocha-reporter').types
  types = types.reduce(function (str, t) {
    var ll = str.split('\n').pop().length + t.length
    if (ll < 40)
      return str + ' ' + t
    else
      return str + '\n' + t
  }, '').trim()
  var ind = '                              '
  return ind + types.split('\n').join('\n' + ind)
}

var isExe
if (process.platform == "win32") {
  // On windows, there is no good way to check that a file is executable
  isExe = function isExe () { return true }
} else {
  isExe = function isExe (stat) {
    var mod = stat.mode
    var uid = stat.uid
    var gid = stat.gid
    var u = parseInt('100', 8)
    var g = parseInt('010', 8)
    var o = parseInt('001', 8)
    var ug = u | g

    var ret = (mod & o)
        || (mod & g) && process.getgid && gid === process.getgid()
        || (mod & u) && process.getuid && uid === process.getuid()
        || (mod & ug) && process.getuid && 0 === process.getuid()

    return ret
  }
}

var fs = require('fs')
process.env.TAP_TIMEOUT = timeout
if (color)
  process.env.TAP_COLORS = 1
else
  process.env.TAP_COLORS = 0

if (bail)
  process.env.TAP_BAIL = '1'

var glob = require('glob')
files = files.reduce(function(acc, f) {
  // glob claims patterns MUST not include any '\'s
  if (!/\\/.test(f)) {
    f = glob.sync(f) || f
  }
  return acc.concat(f)
}, [])

if (files.length === 0) {
  console.error('Reading TAP data from stdin (use "-" argument to suppress)')
  files.push('-')
}

var TMR = require('tap-mocha-reporter')
if (files.length === 1 && files[0] === '-') {
  // if we didn't specify any files, then just passthrough
  // to the reporter, so we don't get '/dev/stdin' in the suite list.
  reporter = new TMR(reporter)
  process.stdin.pipe(reporter)
  return
}

var saved = files
if (saveFile) {
  try {
    saved = fs.readFileSync(saveFile, 'utf8').trim().split('\n')
  } catch (er) {}
}

// At this point, we know we need to use the tap root,
// because there are 1 or more files to spawn.
var tap = require('../lib/root.js')
if (reporter !== 'tap') {
  tap.unpipe(process.stdout)
  reporter = new TMR(reporter)
  tap.pipe(reporter)
}

if (saveFile) {
  var fails = []
  tap.on('result', function (res) {
    // we will continue to re-run todo tests, even though they're
    // not technically "failures".
    if (!res.ok && !res.extra.skip) {
      fails.push(res.extra.file)
    }
  })

  tap.on('end', function () {
    if (!fails.length)
      try {
        fs.unlinkSync(saveFile)
      } catch (er) {}
    else
      try {
        fs.writeFileSync(saveFile, fails.join('\n')+'\n')
      } catch (er){}
  })
}

for (var i = 0; i < files.length; i++) {
  var file = files[i]
  if (saved.indexOf(file) === -1)
    continue

  // Pick up stdin after all the other files are handled.
  if (file === '-') {
    tap.stdin()
    continue
  }

  var st = fs.statSync(files[i])
  var opt = {
    env: Object.keys(process.env).reduce(function (env, k) {
      if (!env[k])
        env[k] = process.env[k]
      return env
    }, {
      TAP: 1
    })
  }

  var extra = {}
  if (timeout)
    extra.timeout = timeout * 1000

  extra.file = file

  if (file.match(/\.js$/))
    tap.spawn(process.execPath, nodeArgs.concat(file), opt, file, extra)
  else if (st.isDirectory()) {
    files.push.apply(files, fs.readdirSync(file).map(function (f) {
      return file + '/' + f
    }))
  }
  else if (isExe(st))
    tap.spawn(files[i], [], opt, file, extra)
}

tap.end()
