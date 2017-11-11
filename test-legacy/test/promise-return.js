var P
if (typeof Promise === 'undefined') {
  // Making sure this is testable in node 0.8/0.10
  P = require('bluebird')
} else {
  P = Promise
}

var t = require('../..')

t.test('auto-end on resolve', function (t) {
  return new P(function (resolve) {
    setTimeout(function () {
      t.ok(true, 'true is ok')
      resolve()
    }, 150)
  })
})

t.test('rejected', function (t) {
  return new P(function (resolve, reject) {
    setTimeout(reject.bind(null, new Error('expected error'), 150))
  })
})
