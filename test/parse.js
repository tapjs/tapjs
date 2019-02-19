const t = require('tap')
const {parse} = require('../')
t.matchSnapshot(parse(`cycle:
  &a1
  a: 1
  cycle: *a1`), 'it parses yaml')
