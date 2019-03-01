const React = require('react')
const {Box, Color} = require('ink')

module.exports = ({ok, name, skip, todo}) => (
  !name ? ''
  : skip ? (
    <Box>
      <Color bgBlue rgb={[255,255,255]} bold>{' SKIP '}</Color>
      { skip === true ? '' : (<Color cyan>{' ' + skip}</Color>)}
      {' ' + name}
    </Box>
  ) : todo ? (
    <Box>
      <Color bold bgRgb={[127,0,127]} rgb={[255,255,255]}>{' TODO '}</Color>
      <Color magenta>{ todo === true ? ' ' : ' ' + todo + ' '}</Color>
      {name}
    </Box>
  ) : ok ? (
    <Box>
      <Color bgGreen rgb={[0,0,0]} bold>{' PASS '}</Color>
      {' ' + name}
    </Box>
  ) : (
    <Box>
      <Color bgRed rgb={[0,0,0]} bold>{' FAIL '}</Color>
      {' ' + name}
    </Box>
  )
)
