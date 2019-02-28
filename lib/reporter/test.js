const React = require('react')
const {Box} = require('ink')
const util = require('util')

module.exports = ({test}) => (
  <Box margin={0}>
    <Box>{'running ' + test.name}</Box>
  </Box>
)
