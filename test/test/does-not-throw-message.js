var t = require('../..')
t.doesNotThrow(function () {
  throw new TypeError('this is a type of error')
})
