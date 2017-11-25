var t = require('../')
var Test = t.Test

var tt

var out = ''
tt = new Test({ bail: false })
tt.name = 'two'

tt.on('data', function (c) {
  out += c
})
tt.test('child', function (tt) {
  tt.threw(new Error('whoops'))
  tt.end()
})
tt.end()

t.match(out, '\n    not ok 1 - whoops\n')
t.match(out, '\n        tt.threw(new Error(\'whoops\'))\n')
t.match(out, '\nnot ok 1 - child')
