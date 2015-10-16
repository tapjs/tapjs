var t = require('../..')

t.test('first', function (t) {
  console.log('> start first')
  process.nextTick(function () {
    t.on('end', function () {
      console.log('> first end event')
    })
    console.log('> before ending first')
    t.end()
    console.log('> after ending first')
  })
})

t.test('second', function (t) {
  console.log('> start second')
  process.nextTick(function () {
    t.on('end', function () {
      console.log('> second end event')
    })
    console.log('> before ending second')
    t.end()
    console.log('> after ending second')
  })
})
