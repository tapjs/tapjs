process.on('exit', function (code) {
  process.exit()
})

var t = require('../..')

if (process.argv[2] !== 'subtest')
  t.spawn(process.execPath, [__filename, 'subtest'], { buffered: true })
else {
  var BIG = 10
  t.test('memoizes identical registry requests', function (t) {
    t.tearDown(function () {})
    t.plan(2)
    setTimeout(function () {
      t.pass('got a manifest')
      t.pass('got a manifest')
    })
  })

  t.test('tag requests memoize versions', function (t) {
    t.plan(2)
    setTimeout(t.pass.bind('got a manifest'))
    setTimeout(t.pass.bind('got a manifest'))
  })

  t.test('tag requests memoize tags', function (t) {
    t.plan(2)
    t.tearDown(function () {})
    setTimeout(function () {
      t.pass('got a manifest')
      t.pass('got a manifest')
    })
  })

  t.test('memoization is scoped to a given cache')
  t.test('inflights concurrent requests', function (t) {
    t.plan(2)
    t.tearDown(function () {})
    setTimeout(function () {
      t.pass('got a manifest')
      t.pass('got a manifest')
    })
  })

  t.test('supports fetching from an optional cache', function (t) {
    t.same(1, '1')
    t.tearDown(function () {})
    setTimeout(t.end)
  })

  t.test('expires stale request data')
  t.test('falls back to registry if cache entry is invalid JSON')
  t.test('does not insert plain manifests into the cache')
  t.test('falls back to registry if cache entry missing', function (t) {
    t.tearDown(function () {})
    setTimeout(function () {
      t.end()
    })
  })
  t.test('allows forcing use of cache when data stale')
}
