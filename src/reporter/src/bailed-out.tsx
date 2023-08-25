import { Base } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { useBailedOut } from './hooks.js'

export const BailedOut: FC<{ test: Base }> = ({ test }) => {
  const bailedOut = useBailedOut(test)
  return bailedOut ? (
    <Box>
      <Text color="red" bold>
        Bailout!
        {typeof bailedOut === 'string' && ` (${bailedOut})`}
      </Text>
    </Box>
  ) : (
    <></>
  )
}
