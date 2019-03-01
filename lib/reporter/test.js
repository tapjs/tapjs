const React = require('react')
const {Box, Color} = require('ink')
const util = require('util')
const counts = require('./counts.js')

// XXX include test count next to name?
module.exports = ({test}) => (
  <Box>
    <Color hex='#000' bgYellow bold>{' RUNS '}</Color>
    {' ' + test.name}
    {counts(test.counts)}
  </Box>
)
