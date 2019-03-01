const React = require('react')
const {Box, Color} = require('ink')
const util = require('util')

// XXX include test count next to name?
module.exports = ({test}) => (
  <Box margin={0}>
    <Color bgYellow bold rgb={[0,0,0]}>{' RUNS '}</Color>
    {' ' + test.name}
  </Box>
)
