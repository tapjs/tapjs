// node bin/run.js test/test/ok.js -C --grep=nesting --grep=/[ASDF].*d$/gi

var run = require.resolve('../../bin/run.js')
var node = process.execPath
var ok = require.resolve('./ok.js')
var t = require('../..')

var greps = ['--grep=nesting', '--grep=/[ASDF].*d$/gi']

var spawn = require('child_process').spawn

t.spawn(node, [run, ok, '-C'].concat(greps))
t.spawn(node, [run, ok, '-C', '-i'].concat(greps))

var inverts = [ false, true ]
inverts.forEach(function (invert) {
  t.comment('invert=%j', invert)
  t.test('a', {
    grepInvert: invert,
    grep: [/[^z]/, /b/, /[246]+/]
  }, function (t) {
    t.test('x', top)
    t.test('y', top)
    t.test('z', top)
    t.end()
    function top (t) {
      t.test('abc', second)
      t.test('xyz', second)
      t.end()
    }
    function second (t) {
      t.test('123', leaf)
      t.test('ijk', leaf)
      t.end()
    }
    function leaf (t) {
      t.pass('this is fine')
      t.end()
    }
  })
})
