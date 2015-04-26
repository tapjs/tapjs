#!/usr/bin/env node
var args = process.argv.slice(2)

if (!args.length && process.stdin.isTTY) {
  console.error(usage())
  process.exit(1)
}


// defaults
var nodeArgs = []

var timeout = process.env.TAP_TIMEOUT || 120
var color = require('supports-color')
var reporter
var files = []

for (var i = 0; i < args.length; i++) {
  var arg = args[i]
  if (arg.charAt(0) !== '-' || arg === '-') {
    files.push(arg)
    continue
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
    case '-h': case '--help': case '-?':
      return console.log(usage())

    case '-v': case '--version':
      return console.log(require('../package.json').version)

    case '--reporter':
      val = val || args[++i]
      reporter = val
      continue

    case '--gc': case '-gc': case '--expose-gc':
      nodeArgs.push('--expose-gc')
      continue

    case '--strict':
      nodeArgs.push('--strict')
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

    case '-c': case '--color':
      color = true
      continue

    case '-C': case '--no-color':
      color = false
      continue

    case '-t': case '--timeout':
      val = val || args[++i]
      timeout = +val
      continue

    case '--':
      files = files.concat(args.slice(i + 1))
      i = args.length
      continue

    default:
      throw new Error('Unknown argument: ' + arg)
  }
}

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

Options:

  -c --color                  Force use of colors

  -C --no-color               Force no use of colors

  -R<type> --reporter=<type>  Use the specified reporter.  Defaults to
                              'classic' when colors are in use, or 'tap'
                              when colors are disabled.

                              Available reporters:
@@REPORTERS@@

  -gc --expose-gc             Expose the gc() function to Node tests

  --debug                     Run JavaScript tests with node --debug

  --debug-brk                 Run JavaScript tests with node --debug-brk

  --harmony                   Enable all Harmony flags in JavaScript tests

  --strict                    Run JS tests in 'use strict' mode

  -t<n> --timeout=<n>         Time out tests after this many seconds.
                              Defaults to 120, or the value of the
                              TAP_TIMEOUT environment variable.

  -h --help                   print this thing you're looking at

  -v --version                show the version of this program

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

// At this point, we know we need to use the tap root,
// because there are 1 or more files to spawn.
var tap = require('../lib/root.js')
if (reporter !== 'tap') {
  tap.unpipe(process.stdout)
  reporter = new TMR(reporter)
  tap.pipe(reporter)
}

for (var i = 0; i < files.length; i++) {
  var file = files[i]

  // Pick up stdin after all the other files are handled.
  if (file === '-') {
    tap.stdin()
    continue
  }

  var st = fs.statSync(files[i])

  if (file.match(/\.js$/))
    tap.spawn(process.execPath, nodeArgs.concat(file))
  else if (st.isDirectory()) {
    files.push.apply(files, fs.readdirSync(file).map(function (f) {
      return file + '/' + f
    }))
  }
  else if (isExe(st))
    tap.spawn(files[i], [])
}

tap.end()
