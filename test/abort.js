var t = require('tap')
var Parser = require('../')
var tapContent = function () {/*
ok 1 - nesting {
    1..2
    # Subtest: first
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first

    ok 2 - second {
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    }
}

ok 2 - this passes
ok 3 - this passes too
ok 4 - async kid {
    1..2
    ok 1 - timeout
    ok 2 - timeout
}

ok 5 - pass after async kid
1..5
*/}.toString().split('\n').slice(1, -1).join('\n') + '\n'

t.test('bufferd abort', function (t) {
  t.test('with diags', bufferedTest({some: 'diags'}))
  t.test('empty diags', bufferedTest({}))
  t.test('no diags', bufferedTest())
  t.end()
})

t.test('unbuffered abort', function (t) {
  t.test('with diags', unbufferedTest({some: 'diags'}))
  t.test('empty diags', unbufferedTest({}))
  t.test('no diags', unbufferedTest())
  t.end()
})


function bufferedTest (d) { return function (t) {
  var p = new Parser()
  var mid = Math.floor(tapContent.length / 2)
  var first = tapContent.slice(0, mid)
  var second = tapContent.slice(mid)
  var lines = []
  var expectLines = [
    'ok 1 - nesting {\n',
    '    1..2\n',
    '    # Subtest: first\n',
    '        1..2\n',
    '        ok 1 - true is ok\n',
    '        ok 2 - doag is also okay\n',
    '    ok 1 - first\n',
    '    ok 2 - second {\n',
    '        ok 1 - but that is ok\n',
    '        not ok 2 - nope\n',
    d && d.some ? '          ---\n' : '',
    d && d.some ? '          some: diags\n' : '',
    d && d.some ? '          ...\n' : '',
    '        1..2\n',
    '    }\n',
    '}\n',
    'not ok 2 - nope\n',
    d && d.some ? '  ---\n' : '',
    d && d.some ? '  some: diags\n' : '',
    d && d.some ? '  ...\n' : '',
    '1..2'
  ].join('').split('\n').map(function (l) { return l + '\n' })
  var expectResults = {
    "ok": false,
    "count": 2,
    "pass": 1,
    "fail": 1,
    "bailout": false,
    "todo": 0,
    "skip": 0,
    "plan": {
      "start": 1,
      "end": 2,
      "skipAll": false,
      "skipReason": "",
      "comment": ""
    },
    "failures": [
      {
        "ok": false,
        "id": 2,
        "name": "nope"
      }
    ]
  }
  if (d && d.some) expectResults.failures[0].diag = d
  p.on('line', lines.push.bind(lines))
  p.on('complete', function (results) {
    t.same(lines, expectLines)
    t.same(results, expectResults)
    t.end()
  })

  p.write(first)
  p.abort('nope', d)
  p.write(second)
}}

function unbufferedTest (d) { return function (t) {
  var p = new Parser()
  var mid = 90
  var first = tapContent.slice(0, mid)
  var second = tapContent.slice(mid)
  var lines = []
  var expectLines = [
    'ok 1 - nesting {\n',
    '    1..2\n',
    '    # Subtest: first\n',
    '        1..2\n',
    '        ok 1 - true is ok\n',
    '        not ok 2 - nope\n',
    d && d.some ? '          ---\n' : '',
    d && d.some ? '          some: diags\n' : '',
    d && d.some ? '          ...\n' : '',
    '    not ok 1 - nope\n',
    d && d.some ? '      ---\n' : '',
    d && d.some ? '      some: diags\n' : '',
    d && d.some ? '      ...\n' : '',
    '}\n',
    'not ok 2 - nope\n',
    d && d.some ? '  ---\n' : '',
    d && d.some ? '  some: diags\n' : '',
    d && d.some ? '  ...\n' : '',
    '1..2'
  ].join('').split('\n').map(function (l) { return l + '\n' })

  var expectResults = {
    "ok": false,
    "count": 2,
    "pass": 1,
    "fail": 1,
    "bailout": false,
    "todo": 0,
    "skip": 0,
    "plan": {
      "start": 1,
      "end": 2,
      "skipAll": false,
      "skipReason": "",
      "comment": ""
    },
    "failures": [
      {
        "ok": false,
        "id": 2,
        "name": "nope"
      }
    ]
  }
  if (d && d.some) expectResults.failures[0].diag = d
  p.on('line', lines.push.bind(lines))
  p.on('complete', function (results) {
    t.same(lines, expectLines)
    t.same(results, expectResults)
    t.end()
  })

  p.write(first)
  p.abort('nope', d)
  p.write(second)
}}
