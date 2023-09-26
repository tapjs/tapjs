import { Box, Text } from 'ink'
import React, { FC, useLayoutEffect, useState } from 'react'
import { TestBase } from '@tapjs/core'
import { Result } from 'tap-parser'
import { Reporter } from './index.js'
import { listenCleanup } from './listen-cleanup.js'
import { ResultDetailList } from './result-detail-list.js'

type Color = 'red' | 'green' | 'cyan' | 'magenta'
const getColor = (r: Result) =>
  r.skip ? 'cyan' : r.todo ? 'magenta' : !r.ok ? 'red' : 'green'
const DOTS: Color[] = []
const Dots: FC<{ test: TestBase }> = ({ test }) => {
  const [dots, updateDots] = useState<Color[]>([])
  useLayoutEffect(
    () =>
      listenCleanup(test, 'assert', r => {
        DOTS.push(getColor(r))
        updateDots([...DOTS])
      }),
    [dots]
  )
  const width = Math.max(15, columns)
  return (
    <Box width={width} flexWrap="wrap">
      {dots.map((c, i) => (
        <Text key={i} color={c}>
          .
        </Text>
      ))}
    </Box>
  )
}

const { columns = 70 } = process.stdout

export const Dot: Reporter = ({ test }) => (
  <Box flexDirection="column">
    <Dots test={test} />
    <ResultDetailList
      test={test}
      filter={({ parser, counts }) =>
        !parser.ok || !!counts.todo || !!counts.fail
      }
    />
  </Box>
)
