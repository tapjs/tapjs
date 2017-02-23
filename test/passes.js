var t = require('tap')

var tapContent = function () {/*
TAP version 13
1..2
ok 1 this is fine
  ---
  message: 1 passed
  ...
not ok 2
  ---
  message: 2 failed
  ...
*/}.toString().split('\n').slice(1, -1).join('\n')

var P = require('../')
var etoa = require('events-to-array')
var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener', 'line', 'version' ]
var p = new P({ passes: true })
var events = etoa(p, ignore)
p.end(tapContent)
t.same(events, [
  [
    "plan",
    {
      "start": 1,
      "end": 2
    }
  ],
  [
    "assert",
    {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "diag": {
        "message": "1 passed"
      }
    }
  ],
  [
    "assert",
    {
      "ok": false,
      "id": 2,
      "diag": {
        "message": "2 failed"
      }
    }
  ],
  [
    "comment",
    "# failed 1 of 2 tests\n"
  ],
  [
    "complete",
    {
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
          "diag": {
            "message": "2 failed"
          }
        }
      ],
      "passes": [
        {
          "ok": true,
          "id": 1,
          "name": "this is fine",
          "diag": {
            "message": "1 passed"
          }
        }
      ]
    }
  ]
], 'saw expected events')
