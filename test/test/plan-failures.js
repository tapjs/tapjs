var t = require('../..')

function test (t, first, second, plan) {
  if (plan) {
    t.plan(1)
  }
  t[first]('ok')
  if (!plan) {
    t.end()
  }
  t[second]('extra')
}

var methods = [ 'pass', 'fail' ]

methods.forEach(function (first) {
  methods.forEach(function (second) {
    t.test(first + ' then ' + second + ' plan()', function (t) {
      test(t, first, second, true)
    })
    t.test(first + ' then ' + second + ' end()', function (t) {
      test(t, first, second, false)
    })
  })
})
