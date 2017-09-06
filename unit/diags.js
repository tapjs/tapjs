'use strict'
const t = require('../')
const diags = require('../lib/diags.js')

t.match(diags({ todo: true }), '')
t.match(diags({ foo: 1 }), '  ---\n  foo: 1\n  ...\n')
