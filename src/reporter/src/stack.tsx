// @tapjs/stack makes stack traces a bit nicer, but we can do even better
// with some colors and highlighting.

import { Box, Text } from 'ink'
import React, { FC } from 'react'

// a non-paren part followed by 0 or 1 or 2 parened parts
const re = /^([^(]+)( \([^)]+\))?( \([^)]+\))?$/
export const Stack: FC<{ stack?: string }> = ({ stack }) => {
  if (!stack) return <></>

  return (
    <Box flexDirection="column">
      {stack
        .replace(/\n$/, '')
        .split('\n')
        .map((line, key) => {
          const p = line.match(re)
          // don't match, oh well
          if (!p)
            return (
              <Text dimColor key={key}>
                {line}
              </Text>
            )
          if (p[3]) {
            // got two paren bits, then the first and last are what we want
            return (
              <Box key={key}>
                <Text dimColor>{p[1]}</Text>
                <Text dimColor>{p[3]}</Text>
              </Box>
            )
          } else if (p[2] && /:\d+:\d+$/.test(p[1])) {
            // got one paren bit, if the first is the generated, hide it
            return (
              <Box key={key}>
                <Text dimColor>{unparen(p[2])}</Text>
              </Box>
            )
          }

          // no generated callsite, just show as normal
          return (
            <Text dimColor key={key}>
              {line}
            </Text>
          )
        })}
    </Box>
  )
}

const unparen = (s: string): string =>
  s.trim().replace(/^\(|\)$/g, '')
