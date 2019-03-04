const React = require('react')
const {Box, Color} = require('ink')
const util = require('util')
const counts = require('./counts.js')
const chalk = require('chalk')

const pending = () => (<Color hex='#000' bgYellow bold>{' RUNS '}</Color>)
const fail = () => (<Color hex='#000' bgRed bold>{' FAIL '}</Color>)
const skip = () => (<Color bgBlue rgb={[255,255,255]} bold>{' SKIP '}</Color>)
const todo = () => (<Color bold bgRgb={[127,0,127]} rgb={[255,255,255]}>{' TODO '}</Color>)
const pass = () => (<Color bgGreen rgb={[0,0,0]} bold>{' PASS '}</Color>)

const status = test => {
  try {
    return status_(test)
  } catch (er) {
    console.error('error in status', er)
  }
}
const status_ = test =>
  !test.results ? pending()
  : !test.results.ok ? fail()
  : test.options.skip || test.counts.skip > test.counts.todo ? skip()
  : test.options.todo || test.counts.todo ? todo()
  : pass()

const lists = test => {
  try {
    return lists_(test)
  } catch (er) {
    console.error('lists error', er)
  }
}

const lists_ = test => (
  <Box flexDirection="column" marginBottom={
    test.lists.fail.length ||
    test.lists.todo.length ||
    test.lists.skip.length ? 1 : 0 }>
    { test.lists.fail.length ? (
      <Box flexDirection="column">
        { test.lists.fail.map((res, i) => (
          <Box key={''+i}>
            <Box width={3}><Color red bold>{' ! '}</Color></Box>
            <Box>{res.name}</Box>
          </Box>
        ))}
      </Box>
    ) : ''}
    { test.lists.todo.length ? (
      <Box flexDirection="column">
        { test.lists.todo.map((res, i) => (
          <Box key={''+i}>
            <Box width={3}><Color magenta bold>{' ☐ '}</Color></Box>
            <Box>{res.name + (
              res.todo !== true ? ' > ' +
              chalk.magenta(res.todo) : '')}</Box>
          </Box>
        ))}
      </Box>
    ) : ''}
    { test.lists.skip.length ? (
      <Box flexDirection="column">
        { test.lists.skip.map((res, i) => (
          <Box key={''+i}>
            <Box width={3}><Color bold cyan>{' ~ '}</Color></Box>
            <Box>{res.name + (
              res.skip !== true ? ' > ' +
              chalk.cyan(res.skip) : '')}</Box>
          </Box>
        ))}
      </Box>
    ) : ''}
  </Box>
)

module.exports = ({test}) => {
  try {
    return Test({test})
  } catch (er) {
    console.error('error rendering test', er)
  }
}
const Test = ({test}) => (
  <Box flexDirection="column">
    <Box>
      {status(test)}
      {' ' + test.name}
      {counts(test.counts)}
    </Box>
    { test.results && test.counts.pass !== test.counts.total
      ? lists(test) : '' }
  </Box>
)
