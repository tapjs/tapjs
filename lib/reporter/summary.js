const React = require('react')
const {Box, Color} = require('ink')
const util = require('util')
const importJSX = require('import-jsx')
const Test = importJSX('./test.js')
const chalk = require('chalk')

const s = n => new Array(n + 1).join(' ')

const bannerWords = '  🌈 SUMMARY RESULTS 🌈  '
const banner = '\n' +
  chalk.bgHex('#fff')(s(bannerWords.length)) +
  '\n' +
  chalk.bgHex('#fff')(chalk.hex('#333')(chalk.bold(bannerWords))) +
  '\n' +
  chalk.bgHex('#fff')(s(bannerWords.length)) +
  '\n'

module.exports = ({ results, counts, lists, time, bailout }) => {
  const testCounts = {
    fail: lists.fail.length,
    pass: lists.pass.length,
    todo: lists.todo.length,
    skip: lists.skip.length,
    tests: lists.tests.length,
  }

  return (
    <Box flexDirection="column">
      { results ? (
      <Box flexDirection="column">
        {banner}
        <Box flexDirection="column">
          {
            lists.tests
              .filter(t => t.results && !t.results.ok ||
                (!bailout && (t.options.skip || t.options.todo)) ||
                t.counts.total !== t.counts.pass)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((test, i) => (<Test test={test} key={''+i} />))
          }
        </Box>
      </Box>
      ): ' '}
      <Box>
        <Box width={10}>
          <Color bold>Suites:</Color>
        </Box>
        { testCounts.fail ? (
          <Box>
            <Color red>{testCounts.fail} failed</Color>
            <Box>{', '}</Box>
          </Box>
        ) : ''}
        { testCounts.pass ? (
          <Box>
            <Color green>{testCounts.pass} passed</Color>
            <Box>{', '}</Box>
          </Box>
        ) : ''}
        { testCounts.todo ? (
          <Box>
            <Color magenta>{testCounts.todo} todo</Color>
            <Box>{', '}</Box>
          </Box>
        ) : ''}
        { testCounts.skip ? (
          <Box>
            <Color cyan>{testCounts.skip} skip</Color>
            <Box>{', '}</Box>
          </Box>
        ) : ''}
        <Box>
          { testCounts.todo +
            testCounts.pass +
            testCounts.skip +
            testCounts.fail} of {testCounts.tests} completed
        </Box>
      </Box>
      <Box>
        <Box width={10}>
          <Color bold>Asserts:</Color>
        </Box>
        { !counts.fail && !counts.pass && !counts.todo && !counts.skip
            ? '0 ' : ''
        }
        { counts.fail ? (
          <Box>
            <Color red>{counts.fail} failed</Color>
            <Box>{', '}</Box>
          </Box>
        ) : ''}
        { counts.pass ? (
          <Box>
            <Color green>{counts.pass} passed</Color>
            <Box>{', '}</Box>
          </Box>
        ) : ''}
        { counts.todo ? (
          <Box>
            <Color magenta>{counts.todo} todo</Color>
            <Box>{', '}</Box>
          </Box>
        ) : ''}
        { counts.skip ? (
          <Box>
            <Color cyan>{counts.skip} skip</Color>
            <Box>{', '}</Box>
          </Box>
        ) : ''}
        <Box>
          of {counts.total}
        </Box>
      </Box>
      <Box>
        <Box width={10}>
          <Color bold dim>Time:</Color>
        </Box>
        <Box>
          <Color bold dim>{''+time}s</Color>
        </Box>
      </Box>
    </Box>
  )
}
