var t = require('../..')
var Promise = require('bluebird')

t.beforeEach(function (cb) {
  var self = this
  return new Promise(function (resolve, reject) {
    console.log('before 1', self.name)
    process.nextTick(resolve)
  })
})

t.afterEach(function (cb) {
  console.log('after 1', this.name)
  cb()
})

t.test('parent', function (t) {
  t.beforeEach(function (cb) {
    console.log('before 2', this.name)
    cb()
  })

  t.afterEach(function (cb) {
    var self = this
    return new Promise(function (resolve, reject) {
      console.log('after 2', self.name)
      if (self.name === 'grandchild') {
        return reject(new Error('this is fine'))
      }
      resolve()
    })
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
