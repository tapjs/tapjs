var Parser = require('../')
var t = require('tap')

t.test('strictness is inherited', function (t) {
  var data = [
    'TAP version 13',
    '1..1',
    '# Subtest: foo',
    '    ok',
    '    flerggy blerg',
    '    1..1',
    'ok 1 foo',
    '# passed 1 of 1 tests',
    ''
  ].join('\n')

  var p = new Parser({ strict: true })
  p.on('complete', function (res) {
    t.matchSnapshot(res.failures, 'failures')
    t.end()
  })

  p.end(data)
})

t.test('strictness is reversible', function (t) {
  var data = [
    'TAP version 13',
    '1..1',
    '# Subtest: foo',
    '    ok',
    '    pragma -strict',
    '    flerggy blerg',
    '    1..1',
    'ok 1 foo',
    '# passed 1 of 1 tests',
    ''
  ].join('\n')

  var p = new Parser({ strict: true })

  p.on('complete', function (res) {
    t.same(res.failures, [])
    t.end()
  })

  p.end(data)
})

t.test('unstrict child does not make parent unstrict', function (t) {
  var data = [
    'TAP version 13',
    '1..1',
    '# Subtest: foo',
    '    pragma -strict',
    '    ok',
    '    1..1',
    'flerggy blerg',
    'ok 1 foo',
    '# passed 1 of 1 tests',
    ''
  ].join('\n')

  var p = new Parser({ strict: true })

  p.on('complete', function (res) {
    t.matchSnapshot(res.failures, 'failures')
    t.end()
  })

  p.end(data)
})
