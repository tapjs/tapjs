var t = require('../')

var e = Object.create(null, {
  id: {
    value: 1,
    enumerable: false,
    writable: false,
    configurable: false
  }
})
t.has(e, {id: 1})

var f = Object.create(e)
t.has(f, {id: 1})
