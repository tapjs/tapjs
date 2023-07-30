import { TAP } from '@tapjs/core'
import { Box, Text } from 'ink'
import React, { FC, useState } from 'react'

const reporter: FC<{ test: TAP }> = ({ test }) => {
  let [results, setResults] = useState<any>()
  test.once('complete', results => setResults(results))

  return (
    <Box>
      <Text>{test.name}</Text>
      <Text>{results && JSON.stringify(results)}</Text>
    </Box>
  )
}

export default reporter
