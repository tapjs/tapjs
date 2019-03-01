const slen = require('string-length')
const chalk = require('chalk')
const hex = chalk.hex.bind(chalk)
const bgHex = chalk.bgHex.bind(chalk)
const bgAnsi256 = chalk.bgAnsi256.bind(chalk)
const ansi256 = chalk.ansi256.bind(chalk)

const repeat = (n, c) => new Array(Math.max(n + 1, 0)).join(c)

module.exports = patch => {
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
