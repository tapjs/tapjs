const React = require('react')
const {Box} = require('ink')
const util = require('util')

module.exports = ({test, state}) => (
  <Box margin={0}>
    <Box width={8}>{state === 'pending' ? '' : state}</Box>
    <Box>{test.name}</Box>
  </Box>
)
