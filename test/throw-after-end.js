var t = require('../')
var Test = t.Test

var tt = new Test({ bail: false })
tt._name = 'one'
tt.pass('this is fine')
tt.end()
t.throws(function () {
  tt.threw(new Error('whoops'))
}, { message: 'whoops', stack: /^Error: whoops\n/ })

var out = ''
tt = new Test({ bail: false })
tt._name = 'two'

tt.on('data', function (c) {
  out += c
})
tt.test('child', function (tt) {
  tt.threw(new Error('whoops'))
  tt.end()
})
tt.end()

t.match(out, '\n    not ok 1 - Error: whoops\n')
t.match(out, '\n        tt.threw(new Error(\'whoops\'))\n')
t.match(out, '\nnot ok 1 - child # time=')
