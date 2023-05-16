'use strict'
// See https://github.com/tapjs/node-tap/issues/422
const t = require('../')
t.test('just a lot of asserts in rapid succession', t => {
  for (let i = 0; i < 5000; i++) {
    t.pass('a number is ' + i)
  }
  t.end()
})
