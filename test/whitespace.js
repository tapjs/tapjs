var Parser = require('../')
var t = require('tap')
var data = [
  'TAP version 13',
  '',
  '1..1',
  '',
  '# Subtest: foo',
  '    ',
  '    ok',
  '    ',
  '    1..1',
  'ok 1 foo',
  '',
  '# passed 1 of 1 tests',
  ''
].join('\n')

t.test('preserve whitespace', function (t) {
  var p = new Parser({ preserveWhitespace: true })
  var lines = []
  p.on('line', function (l) {
    lines.push(l)
  })
  p.on('complete', function () {
    t.equal(lines.join(''), data)
    t.end()
  })
  p.end(data)
})

t.test('drop whitespace', function (t) {
  var p = new Parser()
  var lines = []
  p.on('line', function (l) {
    lines.push(l)
  })
  p.on('complete', function () {
    t.equal(lines.join(''), data.split('\n').filter(function (line) {
      return line.trim()
    }).join('\n') + '\n')
    t.end()
  })
  p.end(data)
})
