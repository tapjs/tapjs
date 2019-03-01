const React = require('react')
const {Box, Color} = require('ink')
const prettyDiff = require('./pretty-diff.js')
const prettySource = require('./pretty-source.js')
const yaml = require('tap-yaml')
const importJSX = require('import-jsx')
const PassFail = importJSX('./pass-fail.js')

module.exports = ({ok, id, name, diag, testName, skip, todo}) => {
  diag = diag || {}
  const diff = prettyDiff(diag && diag.diff)
  if (diff) {
    delete diag.diff
    delete diag.found
    delete diag.wanted
    delete diag.pattern
    delete diag.compare
  }
  const source = prettySource(diag)
  if (source)
    delete diag.source


  delete diag.didNotWant

  return (
    <Box flexDirection="column">
      <PassFail ok={ok} name={testName} skip={skip} todo={todo} />
      <Box>{name + '\n'}</Box>
      { source ? (<Box>{source}</Box>) : '' }
      { diff ? (<Box>{ diff + '\n'}</Box>) : '' }
      { diag && Object.keys(diag).length ? (
        <Box>
          {`  ${
            yaml.stringify(diag).split('\n').join('\n  ')
          }`}
        </Box>
      ) : '' }
    </Box>
  )
}
