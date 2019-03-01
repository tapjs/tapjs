const React = require('react')
const {Box, Color} = require('ink')
const util = require('util')
const yaml = require('tap-yaml')
const slen = require('string-length')
const {highlightFileSync} = require('cardinal')
const theme = require('./cardinal-theme.js')
const chalk = require('chalk')
const { red, bold } = chalk
const hex = chalk.hex.bind(chalk)
const bgHex = chalk.bgHex.bind(chalk)
const bgAnsi256 = chalk.bgAnsi256.bind(chalk)
const ansi256 = chalk.ansi256.bind(chalk)

const repeat = (n, c) => new Array(Math.max(n + 1, 0)).join(c)

// lol
const lp = (s,n) => `${
  (''+s).length < n ? new Array(n - (''+s).length + 1).join(' ') : ''
  }${s}`

const prettyDiff = patch => {
  if (!patch)
    return null

  let width = 0
  const maxLen = Math.max((process.stdout.columns || 0) - 5, 0)
  return patch.trimRight().split('\n').filter((line, index) => {
    if (slen(line) > width)
      width = Math.min(maxLen, slen(line))
    return !(
      line.match(/^\=+$/) ||
      line === '\\ No newline at end of file'
    )
  }).map(line =>
    slen(line) <= width
    ? line + repeat(width - slen(line) + 1, ' ')
    : line
  ).map(line =>
    line.charAt(0) === '+'
      ? ansi256(22)(bgAnsi256(193)(line))
    : line.charAt(0) === '-'
      ? ansi256(52)(bgAnsi256(218)(line))
    : bgHex('#fff')(hex('#111')(line))
  ).map(l => bgHex('#222')('  ') + l).join('\n').trimRight()
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
          } ` + hex('#777')('| ') +
          red(`${new Array(at.column).join('-')}${bold('^')}`)
      ] : []

    const title = hex('#aaa')('  ' + at.file)
    const before = lines.slice(startLine, at.line - 1)
    const line = (lines[at.line - 1])
    const after = lines.slice(at.line, endLine)

    const context = [title].concat(before.map((l, i) =>
      ` ${hex('#777')(lp(i + startLine + 1, numLen)+ ' | ')}${l}`))
      .concat(
        red(bold(`>`)) + lp(at.line, numLen) + hex('#777')(' | ') + line)
      .concat(caret)
      .concat(after.map((l, i) =>
        ` ${hex('#777')(lp(i + at.line + 1, numLen) + ' | ')}${l}`))

    const lineLength = Math.min(process.stdout.columns - 2,
      Math.max(...(context.map(l => slen(l) + 3))))

    const csplit = context.map(line =>
      bgHex('#222')(line +
        new Array(Math.max(0, lineLength - slen(line))).join(' ')))
      .join('\n')

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

module.exports = ({ok, id, name, diag, skip, todo, testName, counts, failures}) =>
   name ? (<TestPoint {...{ok, id, name, diag, testName, skip, todo}} />)
  : (<TestEnd {...{testName, ok, counts, failures}} />)

const TestEnd = ({testName, ok, counts, failures, skip, todo}) => (
  <Box flexDirection="column">
    <PassFail {...{ok, name: testName, skip, todo}} />
    {/*
    <Counts {...counts} />
    <Box flexDirection="column">
      {failures.map((res, i) => (<Box key={i}>
        <Color red>{'  ' + res.name}</Color>
      </Box>))}
    </Box>
    { failures.length ? '\n' : '' }
    */}
  </Box>
)

const Counts = ({total, pass, fail, todo, skip}) => (
  <Box flexDirection="column">
    <Box>
      <Box width={6}>total</Box><Box>{total}</Box>
    </Box>
    { pass !== total ? (
    <Box>
      <Box width={6}>pass</Box><Box>{pass}</Box>
    </Box> ) : ''}
    {fail ? (
    <Box>
      <Box width={6}>fail</Box><Box>{fail}</Box>
    </Box> ) : ''}
    {todo ? (
    <Box>
      <Box width={6}>skip</Box><Box>{todo}</Box>
    </Box> ) : ''}
    {skip ? (
    <Box>
      <Box width={6}>todo</Box><Box>{skip}</Box>
    </Box> ) : ''}
  </Box>
)


const PassFail = ({ok, name, skip, todo}) => (
  !name ? ''
  : skip ? (
    <Box>
      <Color bgBlue rgb={[255,255,255]} bold>{' SKIP '}</Color>
      { skip === true ? '' : (<Color cyan>{' ' + skip}</Color>)}
      {' ' + name}
    </Box>
  ) : todo ? (
    <Box>
      <Color bold bgRgb={[127,0,127]} rgb={[255,255,255]}>{' TODO '}</Color>
      <Color magenta>{ todo === true ? ' ' : ' ' + todo + ' '}</Color>
      {name}
    </Box>
  ) : ok ? (
    <Box>
      <Color bgGreen rgb={[0,0,0]} bold>{' PASS '}</Color>
      {' ' + name}
    </Box>
  ) : (
    <Box>
      <Color bgRed rgb={[0,0,0]} bold>{' FAIL '}</Color>
      <Color red>{' ' + name}</Color>
    </Box>
  )
)

const TestPoint = ({ok, id, name, diag, testName, skip, todo}) => {
  diag = diag || {}
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
      <PassFail ok={ok} name={testName} skip={skip} todo={todo} />
      <Box>{name + '\n'}</Box>
      { source ? (<Box>{source}</Box>) : '' }
      { diff ? (<Box>{ diff + '\n'}</Box>) : '' }
      { diag && Object.keys(diag).length ? (
        <Box>
          {`  ${
            yaml.stringify(diag).split('\n').join('\n  ')
          }`}
        </Box>
      ) : '' }
    </Box>
  )
}
