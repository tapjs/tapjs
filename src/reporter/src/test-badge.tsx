import { Base } from '@tapjs/core'
import { Text } from 'ink'
import React, { FC } from 'react'

export interface TestBadgeOpts {
  test: Base
}

export const TestBadge: FC<TestBadgeOpts> = ({ test }) => {
  const { results, counts } = test
  if (!results) {
    return (
      <Text backgroundColor="yellow" color="black" bold>
        {' RUNS '}
      </Text>
    )
  }
  const { ok } = results
  const { fail, todo, skip } = counts
  return !ok || !!fail ? (
    <Text backgroundColor="red" color="white" bold>
      {' FAIL '}
    </Text>
  ) : !!todo ? (
    <Text backgroundColor="#808" color="white" bold>
      {' TODO '}
    </Text>
  ) : !!skip || test.results?.plan.skipAll ? (
    <Text backgroundColor="blue" color="white" bold>
      {' SKIP '}
    </Text>
  ) : (
    <Text backgroundColor="#0a0" color="black" bold>
      {' PASS '}
    </Text>
  )
}
