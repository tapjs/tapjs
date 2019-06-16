// test/basic.js
const tap = require('../../../..')
const mam = require('../my-awesome-module.js')

// Always call as (found, wanted) by convention
tap.equal(mam(1), 'odd')
tap.equal(mam(2), 'even')
tap.equal(mam(200), 'big')
tap.equal(mam(-10), 'negative')
