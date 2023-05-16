var t = require('../lib/tap.js')
t.plan(2)

t.test('gun show', function (t) {
  t.plan(100)

  var n = 0
  var i = setInterval(function () {
    if (n % 123 === 5) {
      t.fail('FIRE!')
      t.fail('THE BUILDING IS ON FIRE')
    } else {
      t.pass('this is ok')
      t.pass('i am ok with how things are proceeding')
    }
    if (++n === 50) {
      return clearInterval(i)
    }
  }, 100)
})

t.test('wondermark', function (t) {
  t.plan(500)
  var n = 0
  var j = setInterval(function () {
    if (n % 123 === 35) {
      t.fail('I AM EATING BREAKFAST')
      t.fail('FUCKING SEALIONS')
    } else {
      t.pass('excuse me')
      t.pass('pardon me')
    }
    if (++n === 250) {
      return clearInterval(j)
    }
  }, 10)
})
