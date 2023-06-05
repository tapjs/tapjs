import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { Result } from 'tap-parser'
import { stringify } from 'tap-yaml'
import { Diff } from './diff.js'
import { Source } from './source.js'

export const ResultDetails: FC<{ result: Result }> = ({ result }) => {
  if (!result.diag) return <></>
  const { diff, at, source, ...otherDiags } = result.diag

  return (
    <Box paddingLeft={4} flexDirection="column">
      <Diff diff={diff} />
      <Source at={at} source={source} />
      <Text dimColor>{stringify(otherDiags).trim()}</Text>
    </Box>
  )
}
