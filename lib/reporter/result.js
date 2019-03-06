const React = require('react')
const {Box, Color} = require('ink')
const countsList = require('./counts.js')
const importJSX = require('import-jsx')
const TestPoint = importJSX('./test-point.js')
const Test = importJSX('./test.js')

module.exports = ({res, test}) =>
  res ? (<TestPoint res={res} />) : (<Test test={test} />)
