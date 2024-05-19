// turn a diff string into pretty colors
import { Box, Text } from 'ink'
import React, { FC } from 'react'

import stringLength from 'string-length'

// Color scheme to work with protanopia, deuteranopia, and tritanopia,
// since diffs use color as a meaningful indicator.
// should this be configurable?
const theme = {
  green: {
    bg: '#3A7500',
    fg: '#F2FFE5',
  },
  red: {
    bg: '#AC3EA3',
    fg: '#FFE5F1',
  },
  ctx: {
    bg: '#222',
    fg: '#759EEF',
    extra: '#E599FF',
  },
  white: {
    fg: '#ccc',
    bg: '#333',
  },
}

const columns = process.stdout.columns || 80

const Line: FC<{ line: string }> = ({ line }) =>
  line.charAt(0) === '+' ? <Green line={line} />
  : line.charAt(0) === '-' ? <Red line={line} />
  : line.charAt(0) === '@' ? <Ctx line={line} />
  : <White line={line} />

const White: FC<{ line: string }> = ({ line }) => (
  <Text backgroundColor={theme.white.bg} color={theme.white.fg}>
    {line}
  </Text>
)

const Ctx: FC<{ line: string }> = ({ line }) => {
  const f = line.match(/^(\@\@.*?\@\@)( .*)$/)
  return f ?
      <Box>
        <Text
          bold
          backgroundColor={theme.ctx.bg}
          color={theme.ctx.fg}>
          {f[1]}
        </Text>
        <Text
          bold
          backgroundColor={theme.ctx.bg}
          color={theme.ctx.extra}>
          {f[2]}
        </Text>
      </Box>
    : <Text bold backgroundColor={theme.ctx.bg} color={theme.ctx.fg}>
        {line}
      </Text>
}

const Green: FC<{ line: string }> = ({ line }) => (
  <Text color={theme.green.fg} backgroundColor={theme.green.bg}>
    {line}
  </Text>
)
const Red: FC<{ line: string }> = ({ line }) => (
  <Text color={theme.red.fg} backgroundColor={theme.red.bg}>
    {line}
  </Text>
)

export const Diff: FC<{ diff: string }> = ({ diff = '' }) => {
  const sd: string = diff.trimEnd()
  if (!sd) return <></>

  let width = 0
  const maxLen = Math.max(columns - 5, 0)
  const lines = sd
    .replace(/\x1b/g, '\\' + 'x1b')
    .split('\n')
    .filter(line => {
      if (line.length > width) {
        width = Math.min(maxLen, line.length)
      }
      return (
        line !== '\\ No newline at end of file' && !/^\=+$/.test(line)
      )
    })
  return (
    <Box flexDirection="column">
      {lines
        .map(line =>
          stringLength(line) <= width ?
            line + ' '.repeat(width - stringLength(line))
          : line,
        )
        .map((line, key) => (
          <Box key={key}>
            <Line line={line} />
          </Box>
        ))}
    </Box>
  )
}
