const React = require('react')
const {Box} = require('ink')
const util = require('util')
const yaml = require('tap-yaml')

module.exports = ({ok, id, name, diag}) => (
  <Box>
    { ok ? 'ok' : 'not ok'}
    {' '}
    {id}
    {' '}
    {name}
    {' '}
    {diag ? yaml.stringify(diag) : ''}
  </Box>
)
