import { Box, Text } from 'ink'
import React, { FC } from 'react'
import { TapReportOpts } from '../../index.js'
import { Log } from './log.js'
import { Runs } from './runs.js'

export const Base: FC<TapReportOpts> = ({ tap, config }) => {
  return (
    <Box flexDirection="column">
      <Log tap={tap} config={config} />
      <Runs tap={tap} />
      <Box flexDirection="column">
        <Box>
          <Text color="green">
            {tap.fullname} {config.get('color')}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
