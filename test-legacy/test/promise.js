var t = require('../..')
var P = typeof Promise === 'undefined' ? require('bluebird') : Promise
t.test('one', function (t) {
  return t.test('two', function (t) {
    return t.test('child of 2', function (t) {
      return t.test('grandchild of 2', function (t) {
        t.pass('this is fine')
        t.end()
      })
    })
  }).then(function (t) {
    return t.test('second child of 2', function (t) {
      t.end()
    })
  })
}).then(function (t) {
  return t.test('three', function (t) {
    setTimeout(function () {
      t.end()
    })
  })
}).then(function (t) {
  return new P(function (resolve, reject) {
    setTimeout(function () {
      resolve(1)
    })
  }).then(function (x) {
    return t.test(function some_function_name (t) {
      t.equal(x, 1, 'resolved to 1')
      t.end()
    })
  })
}).then(function (t) {
  return (process.argv[2] === 'child') ?
    t.test(function spawned (t) {
      t.pass('in the spawned child')
      t.end()
    }) :
    t.spawn(process.execPath, [__filename, 'child'])
}).then(function (t) {
  t.equal(t.name, 'TAP', 'is root tap test')
  t.notOk(t._parent, 'has no parent')
  t.pass('this is fine')
  t.end()
})
