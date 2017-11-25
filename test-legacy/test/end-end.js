var t = require('../..')

t.test('end end', function (t) {
  t.end()
  t.end()
})

t.test('end then async end', function (t) {
  t.end()
  setTimeout(function () {
    t.end()
  })
})

t.test('double async end', function (t) {
  setTimeout(function () {
    t.end()
  })
  setTimeout(function () {
    t.end()
  }, 100)
})

t.test('plan end', function (t) {
  t.plan(1)
  t.pass('this is fine')
  t.end()
})

t.test('plan then async end', function (t) {
  t.plan(1)
  t.pass('this is fine')
  setTimeout(function () { t.end() })
})

t.test('plan end end', function (t) {
  t.plan(1)
  t.pass('this is fine')
  t.end()
  t.end()
})
