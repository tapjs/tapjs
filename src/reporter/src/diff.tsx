// turn a diff string into pretty colors
import { Box, Text } from 'ink'
import React, { FC } from 'react'

import stringLength from 'string-length'

const columns = process.stdout.columns || 80

const Line: FC<{ line: string }> = ({ line }) =>
  line.charAt(0) === '+' ? (
    <Green line={line} />
  ) : line.charAt(0) === '-' ? (
    <Red line={line} />
  ) : line.charAt(0) === '@' ? (
    <Ctx line={line} />
  ) : (
    <White line={line} />
  )

const White: FC<{ line: string }> = ({ line }) => (
  <Text backgroundColor="#fff" color="#111" bold dimColor>
    {line}
  </Text>
)

const Ctx: FC<{ line: string }> = ({ line }) => {
  const f = line.match(/^(\@\@.*?\@\@)( .*)$/)
  return f ? (
    <Box>
      <Text bold backgroundColor="#FFFFFF" color="#d700ff">
        {f[1]}
      </Text>
      <Text bold backgroundColor="#FFFFFF" color="#5f87d7">
        {f[1]}
      </Text>
    </Box>
  ) : (
    <Text bold backgroundColor="#FFFFFF" color="#d700ff">
      {line}
    </Text>
  )
}

const Green: FC<{ line: string }> = ({ line }) => (
  <Text color="#005F00" backgroundColor="#D7FFAF">
    {line}
  </Text>
)
const Red: FC<{ line: string }> = ({ line }) => (
  <Text color="#5F0000" backgroundColor="#FFAFD7">
    {line}
  </Text>
)

export const Diff: FC<{ diff: any }> = ({ diff = '' }) => {
  if (typeof diff !== 'string') return <Text>{'1: ' + JSON.stringify(diff)}</Text>
  const sd: string = diff.trimEnd()
  if (!sd) return <Text>{'2: ' + JSON.stringify(diff)}</Text>


  let width = 0
  const maxLen = Math.max(columns - 5, 0)
  const lines = sd.split('\n').filter(line => {
    if (stringLength(line) > width) {
      width = Math.min(maxLen, stringLength(line))
    }
    return line !== '\\ No newline at end of file' && !/^\=+$/.test(line)
  })
  return (
    <Box flexDirection="column">
      {lines
        .map(line =>
          stringLength(line) <= width
            ? line + ' '.repeat(width - stringLength(line))
            : line
        )
        .map((line, key) => (
          <Box key={key}>
            <Line line={line} />
          </Box>
        ))}
    </Box>
  )
}
