var t = require('../..')

t.test('step1', function (t) {
  console.log('##############', 'step1 startup')
  t.tearDown(function () {
    console.log('############## step1 teardown')
    throw new Error('############## step1 teardown')
  })
  setImmediate(t.done)
})

t.test('step2', function (t) {
  console.log('##############', 'step2 startup')
  t.tearDown(function () {
    console.log('############## step2 teardown')
    throw new Error('############## step1 teardown')
  })
  setImmediate(t.done)
})

t.test('step3', function (t) {
  console.log('##############', 'step3 startup')
  t.tearDown(function () {
    console.log('############## step3 teardown')
    throw new Error('############## step3 teardown')
  })
  t.done()
})

t.test('step4', function (t) {
  console.log('##############', 'step4 startup')
  t.tearDown(function () {
    console.log('############## step4 teardown')
    throw new Error('############## step1 teardown')
  })
  t.done()
})
