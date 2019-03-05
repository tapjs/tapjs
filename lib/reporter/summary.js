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

module.exports = ({ results, counts, lists, time }) => {
  try {
    return summary({results, counts, lists, time})
  } catch (er) {
    console.error('summary error', er)
  }
}

const summary = ({ results, counts, lists, time }) => (
  <Box flexDirection="column">
    { results ? (
    <Box flexDirection="column">
      {banner}
      <Box flexDirection="column">
        {
          lists.tests
            .filter(t => !t.results.ok ||
              t.options.skip || t.options.todo ||
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
      { lists.fail.length ? (
        <Box>
          <Color red>{lists.fail.length} failed</Color>
          <Box>{', '}</Box>
        </Box>
      ) : ''}
      { lists.pass.length ? (
        <Box>
          <Color green>{lists.pass.length} passed</Color>
          <Box>{', '}</Box>
        </Box>
      ) : ''}
      { lists.todo.length ? (
        <Box>
          <Color magenta>{lists.todo.length} todo</Color>
          <Box>{', '}</Box>
        </Box>
      ) : ''}
      { lists.skip.length ? (
        <Box>
          <Color cyan>{lists.skip.length} skip</Color>
          <Box>{', '}</Box>
        </Box>
      ) : ''}
      <Box>
        { lists.todo.length +
          lists.pass.length +
          lists.skip.length +
          lists.fail.length} of {lists.tests.length} completed
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
