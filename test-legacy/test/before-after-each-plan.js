var t = require('../..')
t.plan(1)

t.beforeEach(function (cb) {
  console.log('before 1', this.name)
  cb()
})

t.afterEach(function (cb) {
  console.log('after 1', this.name)
  cb()
})

t.test('parent', function (t) {
  t.plan(1)
  t.beforeEach(function (cb) {
    console.log('before 2', this.name)
    cb()
  })

  t.afterEach(function (cb) {
    console.log('after 2', this.name)
    cb()
  })

  t.test('child', function (t) {
    t.plan(1)
    t.test('grandchild', function (t) {
      t.plan(1)
      t.pass('the only actual assertion')
    })
  })
})

console.log('done')
