var test = require('../').test

test('not much', function(t) {
  t.ok(true, 'always passes', {skip: true, explanation: 'skip it good'})
  t.ok(false, 'false', {skip: true, explanation: 'always fails'})
  t.ok(true, 'bonus', {todo: true, explanation: 'remove todo directive'})
  t.ok(false, 'expected', {todo: true, explanation: 'implement a thing'})
  t.ok(true, 'always passes without explanation', {skip: true})
  t.ok(false, 'false without explanation', {skip: true})
  t.ok(true, 'bonus without explanation', {todo: true})
  t.ok(false, 'expected without explanation', {todo: true})
  t.end()
})
