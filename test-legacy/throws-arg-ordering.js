var t = require('../')

var wanted = [
  Error,
  { message: 'hello' },
  new Error('hello'),
  TypeError,
  TypeError('hello'),
  new TypeError('hello'),
  new Error('hello'),
  { code: 123, syscall: 'hi' },
  /[g-i]ell.$/
]

var extra = [
  { skip: false },
  {},
  null
]

var message = [
  'the thing throws',
  null,
  ''
]

function thrower () {
  var er = new TypeError('hello')
  er.code = 123
  er.syscall = 'hi'
  throw er
}

wanted.forEach(function (wanted) {
  extra.forEach(function (extra) {
    message.forEach(function (message) {
      // The wanted error object always has to come before the
      // 'extra', or else it'll think that you want an error
      // matching something like {skip:blah...}
      // Any other ordering should work fine tho.
      var a = [ thrower, wanted, extra, message ]
      t.throws(a[0], a[1], a[2], a[3])
      t.throws(a[0], a[1], a[3], a[2])
      t.throws(a[0], a[3], a[1], a[2])

      t.throws(a[1], a[0], a[2], a[3])
      t.throws(a[1], a[0], a[3], a[2])
      t.throws(a[1], a[2], a[0], a[3])
      t.throws(a[1], a[2], a[3], a[0])
      t.throws(a[1], a[3], a[0], a[2])
      t.throws(a[1], a[3], a[2], a[0])

      t.throws(a[3], a[1], a[2], a[0])
      t.throws(a[3], a[1], a[0], a[2])
      t.throws(a[3], a[0], a[1], a[2])
    })
  })
})

t.end()
