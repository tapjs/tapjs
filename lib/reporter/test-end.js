const React = require('react')
const {Box} = require('ink')
const importJSX = require('import-jsx')
const PassFail = importJSX('./pass-fail.js')
const countsList = require('./counts.js')

module.exports = ({testName, ok, counts, failures, skip, todo}) => (
  <Box flexDirection="column">
    <PassFail {...{ok, name: testName + countsList(counts), skip, todo}} />
  </Box>
)
