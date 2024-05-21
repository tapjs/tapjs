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
  flush?: boolean
}> = ({ result, seen = [], heading, flush }) => {
  if (!result.diag || typeof result.diag !== 'object') return <></>
  const {
    test,
    stack,
    at,
    source,
    location,
    cause,
    error,
    errors,
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
    <Box paddingLeft={!!heading ? 0 : 4} flexDirection="column">
      {heading ?
        <Box flexDirection="column" paddingTop={flush ? 0 : 1}>
          <Text color="white" bold>
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
              heading={`cause: ${
                typeof cause.message === 'string' ?
                  `${typeof cause.type === 'string' ? cause.type : 'Error'}: ${cause.message}`
                : ''
              }`}
              flush={false}
              result={{
                ...result,
                diag: cause,
              }}
              seen={seen.concat(cause)}
            />
        : <Box paddingTop={1}>
            <Text>
              {chalk.white.bold('cause: ')}
              {chalk.dim(stringify(cause).trimEnd())}
            </Text>
          </Box>)}
      {(
        errors !== undefined && Array.isArray(errors) && errors.length
      ) ?
        [
          <Box flexDirection="column" key={-1} paddingTop={1}>
            <Text color="white" bold>
              errors: [
            </Text>
          </Box>,
          ...errors.map((e, i) => (
            <Box
              key={i}
              flexDirection="row"
              paddingLeft={2}
              paddingTop={+!!i}>
              <Text color="white" bold>
                {`- `}
              </Text>
              {!!e && typeof e === 'object' ?
                <ResultDetails
                  flush
                  result={{
                    ...result,
                    diag: e,
                  }}
                  heading={`${
                    typeof e.message === 'string' ?
                      `${typeof e.type === 'string' ? e.type : 'Error'}: ${e.message}`
                    : ''
                  }`}
                  seen={seen.concat(e)}
                />
              : <Text dimColor>{stringify(e).trimEnd()}</Text>}
            </Box>
          )),
          <Box flexDirection="column" key={errors.length}>
            <Text color="white" bold>
              ]
            </Text>
          </Box>,
        ]
      : <></>}
    </Box>
  )
}
