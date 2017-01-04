var tapContent = function () {/*
TAP version 13
ok 1 - this is fine
not ok 2 - going to bail
Bail out! # saw that coming
*/}.toString().split('\n').slice(1, -1).join('\n')

var P = require('../')
var etoa = require('events-to-array')
var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener', 'line' ]
var p = new P()
var events = etoa(p, ignore)
p.on('bailout', function (reason) {
  p.bailout('new ' + reason)
})
p.end(tapContent)
var expect = [
  [
    "version",
    13
  ],
  [
    "assert",
    {
      "ok": true,
      "id": 1,
      "name": "this is fine"
    }
  ],
  [
    "assert",
    {
      "ok": false,
      "id": 2,
      "name": "going to bail"
    }
  ],
  [
    "bailout",
    "# saw that coming"
  ],
  [
    "complete",
    {
      "ok": false,
      "count": 2,
      "pass": 1,
      "fail": 1,
      "bailout": "# saw that coming",
      "todo": 0,
      "skip": 0,
      "plan": {
        "start": null,
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "comment": ""
      },
      "failures": [
        {
          "ok": false,
          "id": 2,
          "name": "going to bail"
        }
      ]
    }
  ]
]

require('tap').same(events, expect)
