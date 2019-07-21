'use strict'
const t = require('../')
const pta = require('../lib/parse-test-args.js')

const fn = _ => _
function named () {}
const todoCb = pta().cb

// call the funcs so that they're covered also
named()
fn()

const cases = [
  ['foo', {}, fn, null, { name: 'foo', cb: fn }],
  [undefined, {}, fn, null, { cb: fn }],
  [{}, named, undefined, undefined, { cb: named, name: 'named' }],
  [{}, named, false, undefined, { cb: named, name: 'named' }],
  [named, false, undefined, null, { cb: named, name: 'named' }],
  ['foo', undefined, undefined, null, { name: 'foo', todo: true, cb: todoCb }],
  [{name: 'foo'}, fn, undefined, null, { name: 'foo', cb: fn }],
  [undefined, undefined, undefined, 'def', { name: 'def', todo: true, cb: todoCb }]
]

cases.forEach(c => t.match(pta(c[0], c[1], c[2], c[3]), c[4]))

t.throws(_ => pta(null),
  new TypeError('unknown argument passed to parseTestArgs: null'))

t.throws(_ => pta().cb(), new Error('callback called for TODO test'))
