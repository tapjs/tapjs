// verify that stacks 
var t = require('../..')
var stack = require('stack-utils')

function foo (t) {
  bar(t)
}

function bar (t) {
  baz(t)
}

function baz (t) {
  blo(t)
}

function blo (t) {
  t.assertStack = stack.captureString(blo)
  t.assertAt = stack.at(blo)
  bler(t)
}

function bler (t) {
  t.fail('baz')
  t.fail('bler')
  t.assertAt = stack.at(baz)
  t.fail('bar')
  t.assertStack = stack.captureString(baz)
  t.fail('bar stack')
  t.end()
}

t.test(foo)
