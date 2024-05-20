import chalk from 'chalk'
import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { Result } from 'tap-parser'
import { stringify } from 'tap-yaml'
import { same } from 'tcompare'
import { Diff } from './diff.js'
import { Source } from './source.js'
import { Stack } from './stack.js'

export const ResultDetails: FC<{
  result: Result
  seen?: unknown[]
  heading?: string
}> = ({ result, seen = [], heading }) => {
  if (!result.diag || typeof result.diag !== 'object') return <></>
  const {
    test,
    stack,
    at,
    source,
    location,
    cause,
    error,
    code,
    errorOrigin,
    message,
    ...otherDiags
  } = result.diag

  if (
    'expected' in otherDiags &&
    'actual' in otherDiags &&
    !('found' in otherDiags) &&
    !('wanted' in otherDiags)
  ) {
    otherDiags.found = otherDiags.actual
    otherDiags.wanted = otherDiags.expected
    delete otherDiags.actual
    delete otherDiags.expected
  }

  if (
    'found' in otherDiags &&
    'wanted' in otherDiags &&
    !('diff' in otherDiags)
  ) {
    const { diff } = same(otherDiags.found, otherDiags.wanted)
    otherDiags.diff = diff
  }

  // if we have a diff, don't show found/wanted, as it is frequently huge.
  if (otherDiags.diff?.trimEnd()) {
    delete otherDiags.found
    delete otherDiags.wanted
  }
  const { diff } = otherDiags
  delete otherDiags.diff

  return (
    <Box paddingLeft={heading ? 0 : 4} flexDirection="column">
      {heading ?
        <Box flexDirection="column" paddingTop={1}>
          <Text color="whiteBright" bold>
            {heading}
          </Text>
        </Box>
      : <></>}
      <Source
        stack={stack}
        location={location}
        at={at}
        source={source}
        errorOrigin={errorOrigin}
      />
      <Diff diff={diff} />
      {error ?
        <Text>
          {stringify({ error })
            .trimEnd()
            .replace(/^error:([^\n]*\n)?/, chalk.dim('error:$1'))}
        </Text>
      : <></>}
      {code ?
        <Text>
          {stringify({ code })
            .trimEnd()
            .replace(/^code:([^\n]*\n)?/, chalk.dim('code:$1'))}
        </Text>
      : <></>}
      {!!Object.keys(otherDiags).length && (
        <Text dimColor>{stringify(otherDiags).trimEnd()}</Text>
      )}
      <Stack stack={stack} />
      {cause !== undefined &&
        (!!cause && typeof cause === 'object' ?
          /* c8 ignore start - exceedingly unlikely */
          seen.includes(cause) ?
            '(circular)'
          : /* c8 ignore stop */
            <ResultDetails
              heading={`Cause${cause.message ? `: ${cause.message}` : ''}`}
              result={{
                ...result,
                diag: cause,
              }}
              seen={seen.concat(cause)}
            />
        : <Text dimColor>{stringify({ cause }).trimEnd()}</Text>)}
    </Box>
  )
}
