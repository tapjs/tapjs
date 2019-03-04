const React = require('react')
const {Box, Color} = require('ink')
const countsList = require('./counts.js')
const importJSX = require('import-jsx')
const TestEnd = importJSX('./test-end.js')
const TestPoint = importJSX('./test-point.js')
const Test = importJSX('./test.js')

module.exports = ({ok, id, name, diag, skip, todo, testName, test}) =>
   name ? (<TestPoint {...{ok, id, name, diag, testName, skip, todo}} />)
    : (<Test test={test} />)
