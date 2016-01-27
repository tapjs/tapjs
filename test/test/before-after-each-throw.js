var t = require('../..')

t.beforeEach(function (cb) {
  console.log('before 1', this._name)
  cb()
})

t.afterEach(function (cb) {
  console.log('after 1', this._name)
  cb()
})

t.test('parent', function (t) {
  t.beforeEach(function (cb) {
    console.log('before 2', this._name)
    cb()
  })

  t.afterEach(function (cb) {
    console.log('after 2', this._name)
    if (this._name === 'grandchild') {
      var er = new Error('this is fine')
      console.error(er.stack)
      throw er
    }
    cb()
  })

  t.test('child', function (t) {
    t.test('grandchild', function (t) {
      t.pass('the only actual assertion')
      t.end()
    })
    t.end()
  })
  t.end()
})

console.log('done')
