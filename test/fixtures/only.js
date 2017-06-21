var test = require('../..').test

test('root test without {only: true}', function (t) {
  t.pass('test will not run without --only')
  t.end()
})

test('root test with {only: true}', {only: true}, function (t) {
  t.pass('test will log an error when run without --only')
  t.end()
})

test('group', function (group) {
  group.test('subtest without {only: true}', function (t) {
    t.pass('subtest will not run without --only')
    t.end()
  })

  group.test('subtest with {only: true}', {only: true}, function (t) {
    t.pass('test will log an error when run without --only')
    t.end()
  })

  group.end()
})
