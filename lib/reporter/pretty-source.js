const {highlightFileSync} = require('cardinal')
const theme = require('./cardinal-theme.js')
const chalk = require('chalk')
const { red, bold } = chalk
const hex = chalk.hex.bind(chalk)
const bgHex = chalk.bgHex.bind(chalk)
const slen = require('string-length')

// lol
const lp = (s,n) => `${
  (''+s).length < n ? new Array(n - (''+s).length + 1).join(' ') : ''
  }${s}`

module.exports = (diag) => {
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
