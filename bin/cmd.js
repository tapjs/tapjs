#!/usr/bin/env node

const Parser = require('../')
const etoa = require('events-to-array')
const util = require('util')

const args = process.argv.slice(2)
let json = null
let flat = false
let bail = false
let preserveWhitespace = true
let omitVersion = false
let strict = false

function version () {
  console.log(require('../package.json').version)
  process.exit(0)
}

for (let i = 0; i < args.length; i++) {
  const arg = args[i]
  if (arg === '-j') {
    const val = +args[i + 1]
    if (val >= 0) {
      json = val
      i += 1
    } else
      json = 2
    continue
  } else {
    const m = arg.match(/^--json(?:=([0-9]+))?$/)
    if (m) {
      if (+m[1] >= 0)
        json = +m[1]
      else if (+args[i + 1] >= 0) {
        json = +args[i + 1]
        i += 1
      } else
        json = 2
      continue
    }
  }

  if (arg === '-v' || arg === '--version')
    version()
  else if (arg === '-o' || arg === '--omit-version')
    omitVersion = true
  else if (arg === '-w' || arg === '--ignore-all-whitespace')
    preserveWhitespace = false
  else if (arg === '-b' || arg === '--bail')
    bail = true
  else if (arg === '-B' || arg === '--no-bail')
    bail = false
  else if (arg === '-t' || arg === '--tap')
    json = 'tap'
  else if (arg === '-l' || arg === '--lines')
    json = 'lines'
  else if (arg === '-h' || arg === '--help')
    usage()
  else if (arg === '-f' || arg === '--flat')
    flat = true
  else if (arg === '-F' || arg === '--no-flat')
    flat = false
  else if (arg === '--strict')
    strict = true
  else if (arg === '--no-strict')
    strict = false
  else if (arg === '-s' || arg === '--silent')
    json = 'silent'
  else
    console.error('Unrecognized arg: %j', arg)
}

function usage () {
  console.log(`Usage:
  tap-parser <options>

Parses TAP data from stdin, and outputs the parsed result
in the format specified by the options.  Default output is
uses node's \`util.inspect()\` method.

Options:

  -j [<indent>] | --json[=indent]
    Output event data as JSON with the specified indentation (default=2)

  -t | --tap
    Output data as reconstituted TAP based on parsed results

  -l | --lines
    Output each parsed line as it is recognized by the parser

  -b | --bail
    Emit a \`Bail out!\` at the first failed test point encountered

  -B | --no-bail
    Do not bail out at the first failed test point encountered
    (Default)

  -f | --flat
    Flatten all assertions to the top level parser

  -F | --no-flat
    Do not flatten all assertions to the top level parser
    (Default)

  -w | --ignore-all-whitespace
    Skip over blank lines outside of YAML blocks

  -o | --omit-version
    Ignore the \`TAP version 13\` line at the start of tests

  --strict
    Run the parser in strict mode

  --no-strict
    Do not run the parser in strict mode

  -s | --silent
    Do not print output, just exit success/failure based on TAP stream
`)

  // prevent the EPIPE upstream when the data drops on the floor
  /* istanbul ignore else */
  if (!process.stdin.isTTY)
    process.stdin.resume()

  process.exit()
}

const yaml = require('tap-yaml')
let id = 1
function tapFormat (msg, indent) {
  return indent + msg.map(function (item) {
    switch (item[0]) {
      case 'child':
        const comment = item[1][0]
        const child = item[1].slice(1)
        return tapFormat([comment], '') + tapFormat(child, '    ')

      case 'version':
        return 'TAP version ' + item[1] + '\n'

      case 'plan':
        if (flat) {
          item[1].start = 1
          item[1].end = id - 1
        }
        return item[1].start + '..' + item[1].end
          + (item[1].comment ? ' # ' + item[1].comment : '') + '\n'

      case 'pragma':
        return 'pragma ' + (item[2] ? '+' : '-') + item[1] + '\n'

      case 'bailout':
        return 'Bail out!' + (item[1] ? (' ' + item[1]) : '') + '\n'

      case 'result':
      case 'assert':
        const res = item[1]
        if (item[0] === 'result') {
          res.id = id++
          const name = []
          if (res.fullname)
            name.push(res.fullname)
          if (res.name)
            name.push(res.name)
          res.name = name.join(' > ').trim()
        }
        return (res.ok ? '' : 'not ') + 'ok ' + res.id +
          (res.name ? ' - ' + res.name.replace(/ \{$/, '') : '') +
          (res.skip ? ' # SKIP' +
            (res.skip === true ? '' : ' ' + res.skip) : '') +
          (res.todo ? ' # TODO' +
            (res.todo === true ? '' : ' ' + res.todo) : '') +
          (res.time ? ' # time=' + res.time + 'ms' : '') +
          '\n' +
          (res.diag ?
             '  ---\n  ' +
             yaml.stringify(res.diag).split('\n').join('\n  ').trim() +
             '\n  ...\n'
             : '')

      case 'extra':
      case 'comment':
        return item[1]
    }
  }).join('').split('\n').join('\n' + indent).trim() + '\n'
}

function format (msg) {
  if (json === 'tap')
    return tapFormat(msg, '')
  else if (json !== null)
    return JSON.stringify(msg, null, +json)
  else
    return util.inspect(events, null, Infinity)
}

const options = {
  bail: bail,
  preserveWhitespace: preserveWhitespace,
  omitVersion: omitVersion,
  strict: strict,
}

const parser = new Parser(options)
const ignore = [
  'pipe',
  'unpipe',
  'prefinish',
  'finish',
  'line',
  'pass',
  'fail',
  'todo',
  'skip',
]
if (flat)
  ignore.push('assert', 'child')
else
  ignore.push('result')

const events = etoa(parser, ignore)

if (json === 'lines')
  parser.on('line', function (l) {
    process.stdout.write(l)
  })

process.on('exit', function () {
  if (json !== 'silent' && json !== 'lines')
    console.log(format(events))
  if (!parser.ok)
    process.exit(1)
})

process.stdin.pipe(parser)
