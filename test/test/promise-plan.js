var t = require('../..')
var P = typeof Promise === 'undefined' ? require('bluebird') : Promise

t.test('one', function (t) {
  console.log('running one')
  t.plan(1)

  return new P(function (resolve) {
    setTimeout(resolve, 50)
    t.pass('done one')
  }).then(function () {
    console.error('one promise was fulfilled')
  })
})

t.test('two', function (t) {
  console.log('running two')
  t.plan(1)

  return new P(function (resolve) {
    setTimeout(resolve, 50)
  }).then(function () {
    t.pass('done two')
    console.error('two promise was fulfilled')
  })
})

t.test('three', function (t) {
  console.log('running three')
  t.end()
})
