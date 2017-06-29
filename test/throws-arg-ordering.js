var t = require('../')

var wanted_list = [
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

var extra_list = [
  { skip: false },
  {},
  null
]

var message_list = [
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

wanted_list.forEach(function (wanted) {
  extra_list.forEach(function (extra) {
    message_list.forEach(function (message) {
      // The wanted error object always has to come before the
      // 'extra', or else it'll think that you want an error
      // matching something like {skip:blah...}
      // Any other ordering should work fine tho.
      t.throws(thrower, wanted, extra, message)
      t.throws(thrower, wanted, message, extra)
      t.throws(thrower, message, wanted, extra)

      t.throws(wanted, thrower, extra, message)
      t.throws(wanted, thrower, message, extra)
      t.throws(wanted, extra, thrower, message)
      t.throws(wanted, extra, message, thrower)
      t.throws(wanted, message, thrower, extra)
      t.throws(wanted, message, extra, thrower)

      t.throws(message, wanted, extra, thrower)
      t.throws(message, wanted, thrower, extra)
      t.throws(message, thrower, wanted, extra)
    })
  })
})

t.end()
