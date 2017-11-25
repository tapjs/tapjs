var t = require('../..')
t.test('child test', function (t) {
  t.equal('foo\nbaz\nbar\n', 'foo\nblerb\nbar\n')
  t.equal('foo', 'foople')
  t.equal(1, '1')
  t.same({ foo: 'bar', bar: 1, extra: 9 }, { bar: 1, foo: 'baz', missing: true })
  t.same({ foop: 2, foo: 'bar', bar: 1, extra: 9 },
    { bar: 1, foo: 'baz', foop: 2, missing: true })
  t.same({ foo: 'baz', bar: 1, extra: 9, x: [1, 2], prop: 1 }, { prop: 1, bar: 1, foo: 'baz', missing: true, x: [1, 2], z: 1 })

  t.end()
})
