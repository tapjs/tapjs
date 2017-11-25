var t = require('../..')
var P = typeof Promise === 'undefined' ? require('bluebird') : Promise
t.test('one', function (t) {
  return t.test('two', function (t) {
    return t.test('child of 2', function (t) {
      return t.test('grandchild of 2', function (t) {
        throw new Error('fail 1')
      })
    })
  }).then(function (t) {
    return t.test('second child of 2', function (t) {
      throw new Error('fail 2')
    })
  })
}).then(function (t) {
  return t.test('three', function (t) {
    setTimeout(function () {
      throw new Error('fail 3')
    })
  })
}).then(function (t) {
  return new P(function (resolve, reject) {
    setTimeout(function () {
      resolve(1)
    })
  }).then(function (x) {
    return t.test(function some_function_name (t) {
      process.nextTick(function () {
        throw new Error('fail 4')
      })
    })
  })
}).then(function (t) {
  throw new Error('fail 5')
}).then(function (t) {
  t.equal(t.name, 'TAP', 'is root tap test')
  t.notOk(t._parent, 'has no parent')
  t.pass('this is fine')
  t.end()
}).catch(t.threw)
