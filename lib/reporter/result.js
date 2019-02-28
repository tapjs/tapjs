const React = require('react')
const {Box, Color} = require('ink')
const util = require('util')
const yaml = require('tap-yaml')
const uclen = require('unicode-length').get
const {highlightFileSync} = require('cardinal')
const theme = require('./cardinal-theme.js')
const { red, bold, white, dim } = require('chalk')

const repeat = (n, c) => new Array(Math.max(n + 1, 0)).join(c)

// lol
const lp = (s,n) => `${
  (''+s).length < n ? new Array(n - (''+s).length + 1).join(' ') : ''
  }${s}`

const prettyDiff = patch => {
  if (!patch)
    return null

  // pastel option, red is purplish, green is yellowish
  const removed = '\u001b[48;5;218m\u001b[38;5;52m'
  const added = '\u001b[48;5;193m\u001b[38;5;22m'
  const plain = '\u001b[38;5;233m'
  const bg = '\u001b[48;5;255m'
  const reset = '\u001b[m'

  let width = 0
  const maxLen = Math.max((process.stdout.columns || 0) - 5, 0)
  return patch.trimRight().split('\n').filter((line, index) => {
    if (uclen(line) > width)
      width = Math.min(maxLen, uclen(line))
    return !(
      line.match(/^\=+$/) ||
      line === '\\ No newline at end of file'
    )
  }).map(line =>
    uclen(line) <= width
    ? line + repeat(width - uclen(line) + 1, ' ')
    : line
  ).map(line =>
    line.charAt(0) === '+'
      ? bg + added + line + reset
    : line.charAt(0) === '-'
      ? bg + removed + line + reset
    : bg + plain + line + reset
  ).map(l => '  ' + l).join('\n').trimRight()
}

const prettySource = (diag) => {
  if (!diag || !diag.source || !diag.at || !diag.at.line || !diag.at.file)
    return diag && diag.source

  const source = diag.source
  const at = diag.at
  try {
    const lines = highlightFileSync(at.file, {
      jsx: true,
      theme,
    }).split('\n')

    const ctx = 3
    const startLine = Math.max(at.line - ctx, 0)
    const endLine = Math.min(at.line + ctx, lines.length)
    const numLen = endLine.toString().length + 1

    const caret = at.column
      ? [
        `  ${new Array(numLen).join(' ')
          } ` + dim('| ') +
          red(`${new Array(at.column).join('-')}${bold('^')}`)
      ] : []

    const before = lines.slice(startLine, at.line - 1)
    const line = (lines[at.line - 1])
    const after = lines.slice(at.line, endLine)

    const context = before.map((l, i) =>
      ` ${dim(lp(i + startLine, numLen)+ ' | ')}${l}`)
      .concat(
        red(bold(`>`)) + lp(at.line, numLen) + dim(' | ') + line)
      .concat(caret)
      .concat(after.map((l, i) =>
        ` ${dim(lp(i + at.line + 1, numLen) + ' | ')}${l}`))

    const csplit = context.join('\n').trimRight()
    if (csplit) {
      delete diag.at
      return csplit + '\n'
    }
  } catch (er) {
    console.error('failed prettying up', er)
    return source
  }
  return source
}

module.exports = ({ok, id, name, diag, testName}) =>
  testName ? (<TestPoint {...{ok, id, name, diag, testName}} />)
  : (<PassFail {...{name, ok}} />)

const PassFail = ({ok, name}) => (
  !name ? ''
  : ok ? (
    <Box>
      <Color bgGreen rgb={[0,0,0]} bold>{' PASS '}</Color>
      <Color>{' ' + name}</Color>
    </Box>
  ) : (
    <Box>
      <Color bgRed rgb={[0,0,0]} bold>{' FAIL '}</Color>
      <Color red>{' ' + name}</Color>
    </Box>
  )
)

const TestPoint = ({ok, id, name, diag, testName}) => {
  const diff = prettyDiff(diag && diag.diff)
  if (diff) {
    delete diag.diff
    delete diag.found
    delete diag.wanted
    delete diag.pattern
    delete diag.compare
  }
  const source = prettySource(diag)
  if (source)
    delete diag.source

  delete diag.didNotWant

  return (
    <Box flexDirection="column">
      <PassFail ok={ok} name={testName} />
      <Box>{name + '\n'}</Box>
      { source ? (<Box>{source}</Box>) : '' }
      { diff ? (<Box>{ diff + '\n'}</Box>) : '' }
      { diag ? (
        <Box>
          {`  ${
            yaml.stringify(diag).split('\n').join('\n  ')
          }`}
        </Box>
      ) : '' }
    </Box>
  )
}
