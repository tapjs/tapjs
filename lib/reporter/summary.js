const React = require('react')
const {Box, Color} = require('ink')
const util = require('util')

module.exports = ({ results, counts, lists }) => (
  <Box flexDirection="column">
    {' '}
    <Box>
      <Box width={10}>
        <Color bold>Tests:</Color>
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
      { lists.todo.length || lists.skip.length ? (
        <Box>
          <Color magenta>{lists.todo.length + lists.skip.length} todo/skip</Color>
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
      
  </Box>
)
