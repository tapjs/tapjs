import { Base } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { useTimedOut } from './hooks/use-timed-out.js'

export const TimedOut: FC<{ test: Base }> = ({ test }) => {
  const timedOut = useTimedOut(test)

  return timedOut ?
      <Box>
        <Text color="red" bold>
          Timed out
          {timedOut.signal && ` (${timedOut.signal})`}
        </Text>
      </Box>
    : <></>
}
