'use strict'

// https://github.com/tapjs/node-tap/pull/506

const t = require('../')

t.plan(5000)
for (let i = 1; i <= 5000; i++) {
  t.pass(i)
}
