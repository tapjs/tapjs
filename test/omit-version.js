var t = require('tap')

var tapContent = function () {/*
TAP version 13
ok 1 - this is fine
1..1
*/}.toString().split('\n').slice(1, -1).join('\n')

var P = require('../')
var etoa = require('events-to-array')
var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener', 'line' ]
var p = new P({ omitVersion: true })
var events = etoa(p, ignore)
p.on('version', function (v) {
  t.fail('should not see version event')
})
var lines = []
p.on('line', lines.push.bind(lines))
p.end(tapContent)
t.same(lines, [ 'ok 1 - this is fine\n', '1..1\n' ], 'saw expected lines')
t.same(events, [
  [
    "assert",
    {
      "ok": true,
      "id": 1,
      "name": "this is fine"
    }
  ],
  [
    "plan",
    {
      "start": 1,
      "end": 1
    }
  ],
  [
    "complete",
    {
      "ok": true,
      "count": 1,
      "pass": 1,
      "fail": 0,
      "bailout": false,
      "todo": 0,
      "skip": 0,
      "plan": {
        "start": 1,
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "comment": ""
      },
      "failures": []
    }
  ]
], 'saw expected events')
