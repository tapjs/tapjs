const React = require('react')
const {Box} = require('ink')
const importJSX = require('import-jsx')
const PassFail = importJSX('./pass-fail.js')
const countsList = require('./counts.js')
const Test = importJSX('./test.js')

module.exports = ({testName, ok, counts, failures, skip, todo}) => (
  <Box flexDirection="column">
    <Test test={test} />
  </Box>
)
