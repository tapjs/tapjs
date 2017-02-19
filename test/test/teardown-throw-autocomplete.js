console.error = console.log
var t = require('../..')
t.tearDown(function () {
  throw new Error('TAP teardown')
})
t.afterEach(function (cb) {
  throw new Error('afterEach')
  cb()
})
t.test('child', function (t) {
  t.tearDown(function () {
    throw new Error('child teardown')
  })
})
