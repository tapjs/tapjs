import { Base } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { Result } from 'tap-parser'
import { assertName } from './assert-name.js'
import { ResultDetails } from './result-details.js'

export interface ResultOpts {
  result: Result
  details?: boolean
  test: Base
}

export const ResultTag: FC<ResultOpts> = ({
  result,
  details = false,
  test,
}) => {
  const showCallsite = !details
  const c =
    result.skip ? '~ '
    : result.todo ? '☐ '
    : !result.ok ? '✖'
    : '✓ '
  const textc =
    result.skip ? 'cyan'
    : result.todo ? 'magenta'
    : !result.ok ? 'red'
    : 'green'
  const pref = (
    <Text bold color={textc}>
      {c}
    </Text>
  )
  let st = result.skip || result.todo || result.tapError
  const suff =
    typeof st === 'string' ? <Text color={textc}> {st}</Text> : <></>
  const at = result.diag?.at
  const fileName = at?.fileName
  const callsite =
    showCallsite && at && fileName ?
      <Text dimColor>
        {fileName}
        {at.lineNumber && at.columnNumber ?
          `:${at.lineNumber}:${at.columnNumber}`
        : ''}
      </Text>
    : <></>
  const name = assertName(result, test).trim()

  const inline = name.length < 25 && !details

  return (
    <Box flexDirection="column" gap={0}>
      <Box>
        <Box>
          {pref}
          <Text>{name}</Text>
        </Box>
        {suff}
        {inline ?
          <>
            <Text> </Text>
            {callsite}
          </>
        : <></>}
      </Box>
      {inline ?
        <></>
      : <Box paddingLeft={2}>{callsite}</Box>}
      {!!details && <ResultDetails result={result} />}
    </Box>
  )
}
