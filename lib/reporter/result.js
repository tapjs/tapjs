const React = require('react')
const {Box, Color} = require('ink')
const countsList = require('./counts.js')
const importJSX = require('import-jsx')
const TestEnd = importJSX('./test-end.js')
const TestPoint = importJSX('./test-point.js')
const PassFail = importJSX('./pass-fail.js')

module.exports = ({ok, id, name, diag, skip, todo, testName, counts, failures}) =>
   name ? (<TestPoint {...{ok, id, name, diag, testName, skip, todo}} />)
  : (<TestEnd {...{testName, ok, counts, failures}} />)
