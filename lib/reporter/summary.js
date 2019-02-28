const React = require('react')
const {Box, Color} = require('ink')
const util = require('util')

module.exports = ({ results, counts, lists }) => (
  <Box flexDirection="column">
    {util.inspect({results, counts, lists})}
  </Box>
)
