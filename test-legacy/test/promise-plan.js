var t = require('../..')
var P = typeof Promise === 'undefined' ? require('bluebird') : Promise

t.test('one', function (t) {
  console.log('running one')
  t.plan(1)

  t.on('end', function () {
    console.log('one end')
  })

  return new P(function (resolve) {
    setTimeout(resolve, 50)
    t.pass('done one')
    console.log('after plan fulfilled')
  }).then(function () {
    console.log('one promise was fulfilled')
  })
})

console.log('after one block')

t.test('two', function (t) {
  console.log('running two')
  t.plan(1)

  return new P(function (resolve) {
    setTimeout(resolve, 50)
  }).then(function () {
    t.pass('done two')
    console.log('two promise was fulfilled')
  })
})

t.test('three', function (t) {
  console.log('running three')
  t.end()
})

t.test('broken promises', function (t) {
  t.plan(2)
  t.test('end()', function (t) {
    t.end()
    return new P(function () {
      throw new Error('wtf')
    })
  })
  t.test('plan', function (t) {
    t.plan(1)
    t.pass('this is fine')
    return new P(function () {
      throw new Error('wtf')
    })
  })
})

t.test('thrown with timeouts', function (t) {
  t.plan(2)
  t.test('end()', function (t) {
    t.end()
    return new P(function () {
      setTimeout(function () {
        throw new Error('wtf')
      })
    })
  })
  t.test('plan', function (t) {
    t.plan(1)
    t.pass('this is fine')
    return new P(function () {
      setTimeout(function () {
        throw new Error('wtf')
      })
    })
  })
})
