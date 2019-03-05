const React = require('react')
const {Box, Color} = require('ink')
const util = require('util')
const counts = require('./counts.js')
const chalk = require('chalk')
const yaml = require('tap-yaml')

const importJSX = require('import-jsx')
const AssertName = importJSX('./assert-name.js')
const StatusMark = importJSX('./status-mark.js')

const lists = test => (
  <Box flexDirection="column" marginBottom={
    (test.results && !test.results.ok) ||
    test.lists.fail.length ||
    test.lists.todo.length ||
    test.lists.skip.length ? 1 : 0 }>
    { test.lists.fail.length ? (
      <Box flexDirection="column">
        { test.lists.fail.map((res, i) => (
          <AssertName {...res} key={''+i} />
        ))}
      </Box>
    ) : ''}
    { test.lists.todo.length ? (
      <Box flexDirection="column">
        { test.lists.todo.map((res, i) => (
          <AssertName {...res} key={''+i} />
        ))}
      </Box>
    ) : ''}
    { test.lists.skip.length ? (
      <Box flexDirection="column">
        { test.lists.skip.map((res, i) => (
          <AssertName {...res} key={''+i} />
        ))}
      </Box>
    ) : ''}
    { // cases where no tests fail, but the test fails
      // eg, exiting with non-zero code, being killed, etc.
      test.results && !test.results.ok && !test.lists.fail.length ? (
      <Box>{'  ' + yaml.stringify({
        command: test.options.command,
        args: test.options.args,
        exitCode: test.options.exitCode,
        signal: test.options.signal,
      }).replace(/\n/g, '\n  ').trimRight()}</Box>) : '' }
  </Box>
)

const skipOrTodoReason = test =>
  test.options.skip && test.options.skip !== true
  ? ` > ${chalk.cyan(test.options.skip)}`
  : test.options.todo && test.options.todo !== true
  ? ` > ${chalk.magenta(test.options.todo)}`
  : ''

module.exports = ({test}) => (
  <Box flexDirection="column">
    <Box>
      <StatusMark test={test} />
      {' ' + test.name + skipOrTodoReason(test)}
      {counts(test.counts)}
    </Box>
    { test.results && (!test.results.ok || test.counts.pass !== test.counts.total)
      ? lists(test) : '' }
  </Box>
)
