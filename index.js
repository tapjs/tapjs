var tap = require('./lib/root.js')

tap.test('child test', function (t) {
  t.ok(window, 'window is a global')
  t.ok(document, 'i have a document')
  t.test('grandchild', function (t) {
    t.plan(1)
    t.pass('this is fine')
  })
  t.end()
})
