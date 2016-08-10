var t = require('tap')
var Parser = require('../')
var p = new Parser()

var called = false
function cb (er) {
  if (er)
    throw er
  called = true
}

p.write('Bail out! this is fine\nok 2 - this is ok\n')
t.notOk(called)
t.ok(p.bailedOut)
p.write('ok 1 - i am ok with how things are proceeding\n', cb)
t.notOk(called)
setTimeout(function () {
  t.ok(called)
})
