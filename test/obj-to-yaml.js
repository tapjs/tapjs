'use strict'
const t = require('../')
const oty = require('../lib/obj-to-yaml.js')

t.match(oty({ todo: true }), '')
t.match(oty({ foo: 1 }), '  ---\n  foo: 1\n  ...')
