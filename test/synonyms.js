'use strict'
const t = require('../')
const synonyms = require('../lib/synonyms.js')

t.match(synonyms, {
  notOk: [
    'notOk',
    'notok',
    'not_ok',
    'false',
    'assertNot',
    'assertnot',
    'assert_not'
  ],
  type: [ 'type', 'isa', 'isA', 'isa', 'is_a' ]
})
