import { Base } from '@tapjs/core'
import { Text } from 'ink'
import React, { FC } from 'react'

export interface TestBadgeOpts {
  test: Base
}

export const TestBadge: FC<TestBadgeOpts> = ({ test }) => {
  const { results, counts, options, bailedOut } = test
  const { exitCode, signal, failSkip, failTodo } = options
  if (!results) {
    return (
      <Text backgroundColor="yellow" color="#000" bold>
        {' RUNS '}
      </Text>
    )
  }
  const { ok, skip: resultsSkip, plan } = results
  // we don't get these things on a bailout
  const { skipAll } = plan || {}
  const { fail, todo, skip } = counts || {}
  const isSkip = !!skip || skipAll || !!resultsSkip
  const isFail =
    !ok ||
    !!fail ||
    signal ||
    bailedOut ||
    exitCode ||
    (!!todo && failTodo) ||
    (isSkip && failSkip)
  return (
    isFail ?
      <Text backgroundColor="red" color="#fff" bold>
        {' FAIL '}
      </Text>
    : !!todo ?
      <Text backgroundColor="#808" color="#fff" bold>
        {' TODO '}
      </Text>
    : isSkip ?
      <Text backgroundColor="blue" color="#fff" bold>
        {' SKIP '}
      </Text>
    : <Text backgroundColor="#0a0" color="#000" bold>
        {' PASS '}
      </Text>
  )
}
