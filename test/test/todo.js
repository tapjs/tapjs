var t = require('../..')

t.test('a set of tests to be done later', function (t) {
  t.test('should have a thingie')
  t.test('should have a second whoosits also')
  t.test('the subset', function (t) {
    t.test('should be a child thingie')
    t.test('should also be a whoosits')
    t.test('has some of these things', function (t) {
      t.throws('someday this will be a function that throws')
      t.doesNotThrow('someday this will be a function that knows')
      t.ok(true, 'true is truthy')
      t.ok(10, 'ten is also truthy')
      t.end()
    })
    t.end()
  })
  t.end()
})

// literally nothing
t.test()

t.test('another set of tests', function (t) {
  t.test('is a second set')
  t.test('looks like english')
  t.test('is marked TODO')
  t.end()
})
