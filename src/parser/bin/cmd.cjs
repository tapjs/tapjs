#!/usr/bin/env node

// not sure why all the c8 ignore is needed, but it's marking
// cases and conditionals as uncovered branches, when it's clear
// that they're actually being run.

const { Parser } = require('../dist/commonjs/index.js')
const util = require('util')

const args = process.argv.slice(2)
let json = null
let flat = false
let bail = false
let preserveWhitespace = true
let omitVersion = false
let strict = false

/* c8 ignore start */
function version() {
  console.log(require('../package.json').version)
  process.exit(0)
}
/* c8 ignore stop */

for (let i = 0; i < args.length; i++) {
  const arg = args[i]
  /* c8 ignore start */
  if (arg === '-j') {
    /* c8 ignore stop */
    const val = +args[i + 1]
    if (val >= 0) {
      json = val
      i += 1
    } else json = 2
    continue
    /* c8 ignore start */
  } else {
    /* c8 ignore stop */
    const m = arg.match(/^--json(?:=([0-9]+))?$/)
    /* c8 ignore start */
    if (m) {
      /* c8 ignore stop */
      if (+m[1] >= 0) {
        json = +m[1]
      } else if (+args[i + 1] >= 0) {
        json = +args[i + 1]
        i += 1
      } else {
        json = 2
      }
      continue
    }
  }

  switch (arg) {
    /* c8 ignore start */
    case '-v':
    case '--version':
      /* c8 ignore stop */
      version()
      break
    /* c8 ignore start */
    case '-o':
    case '--omit-version':
      /* c8 ignore stop */
      omitVersion = true
      break
    /* c8 ignore start */
    case '-w':
    case '--ignore-all-whitespace':
      /* c8 ignore stop */
      preserveWhitespace = false
      break
    /* c8 ignore start */
    case '--bail':
    case '-b':
      /* c8 ignore stop */
      bail = true
      break
    /* c8 ignore start */
    case '--no-bail':
    case '-B':
      /* c8 ignore stop */
      bail = false
      break
    /* c8 ignore start */
    case '-t':
    case '--tap':
      /* c8 ignore stop */
      json = 'tap'
      break
    /* c8 ignore start */
    case '-h':
    case '--help':
      /* c8 ignore stop */
      usage()
      break
    /* c8 ignore start */
    case '-l':
    case '--lines':
      /* c8 ignore stop */
      json = 'lines'
      break
    /* c8 ignore start */
    case '-f':
    case '--flat':
      /* c8 ignore stop */
      flat = true
      break
    /* c8 ignore start */
    case '-F':
    case '--no-flat':
      /* c8 ignore stop */
      flat = false
      break
    /* c8 ignore start */
    case '--strict':
      /* c8 ignore stop */
      strict = true
      break
    /* c8 ignore start */
    case '--no-strict':
      /* c8 ignore stop */
      strict = false
      break
    /* c8 ignore start */
    case '-s':
    case '--silent':
      /* c8 ignore stop */
      json = 'silent'
      break
    /* c8 ignore start */
    default:
      /* c8 ignore stop */
      console.error('Unrecognized arg: %j', arg)
      break
  }
}

/* c8 ignore start */
function usage() {
  console.log(`Usage:
  tap-parser <options>

Parses TAP data from stdin, and outputs the parsed result
in the format specified by the options.  Default output
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
    Ignore the \`TAP version 13\` or \`TAP version 14\` line at the start of tests

  --strict
    Run the parser in strict mode

  --no-strict
    Do not run the parser in strict mode

  -s | --silent
    Do not print output, just exit success/failure based on TAP stream
`)

  // prevent the EPIPE upstream when the data drops on the floor
  if (!process.stdin.isTTY) {
    process.stdin.resume()
  }

  process.exit()
}
/* c8 ignore stop */

function format(msg) {
  if (json === 'tap') {
    return Parser.stringify(msg, options)
    /* c8 ignore start */
  } else if (json !== null) {
    /* c8 ignore stop */
    return JSON.stringify(msg, null, +json)
  } else {
    return util.inspect(msg, null, Infinity)
  }
}

const options = {
  bail,
  preserveWhitespace,
  omitVersion,
  strict,
  flat,
}

/* c8 ignore start */
if (json === 'silent' || json === 'lines') {
  /* c8 ignore stop */
  const parser = new Parser(options)
  if (json === 'lines') {
    parser.on('line', l => process.stdout.write(l))
  }
  parser.on('complete', () => {
    process.exitCode = parser.ok ? 0 : 1
    if (!parser.ok) {
      console.error('not ok??', parser.results)
    }
  })
  process.stdin.pipe(parser)
} else {
  const input = []
  process.stdin
    .on('data', c => input.push(c))
    .on('end', () => {
      const buf = Buffer.concat(input)
      const result = Parser.parse(buf, options)
      let i = result.length - 1
      while (result[i] && Array.isArray(result[i])) {
        if (result[i][0] === 'finish' || result[i][0] === 'close') {
          i--
        } else {
          break
        }
      }
      const summary = result[i]
      console.log(format(result))
      /* c8 ignore start */
      if (summary[0] !== 'complete' || !summary[1].ok) {
        /* c8 ignore stop */
        process.exitCode = 1
      }
    })
}
