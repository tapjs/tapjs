var t = require('../..')

t.test('not much', function (t) {
  t.ok(true, 'always passes', {skip: 'skip it good'})
  t.ok(false, 'false', {skip: 'always fails'})
  t.ok(true, 'bonus', {todo: 'remove todo directive'})
  t.ok(false, 'expected', {todo: 'implement a thing'})
  t.ok(true, 'always passes without explanation', {skip: true})
  t.ok(false, 'false without explanation', {skip: true})
  t.ok(true, 'bonus without explanation', {todo: true})
  t.ok(false, 'expected without explanation', {todo: true})
  t.end()
})
