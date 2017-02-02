var t = require('../..')

t.beforeEach(function (cb) {
  console.log('before 1', this.name)
  cb()
})

t.afterEach(function (cb) {
  console.log('after 1', this.name)
  cb()
})

console.log(0)
t.test('parent', { buffered: false }, function (t) {
  t.beforeEach(function (cb) {
    console.log('before 2', this.name)
    cb()
  })

  t.afterEach(function (cb) {
    console.log('after 2', this.name)
    cb()
  })

  console.log(2)
  t.test('child', function (t) {
    console.log(3)
    t.test('grandchild', function (t) {
      console.log(4)
      t.pass('the only actual assertion')
      console.log(5)
      t.end()
      console.log(6)
    })
    console.log(7)
    t.end()
    console.log(8)
  })
  console.log(9)
  t.end()
  console.log(10)
})
console.log('done')
