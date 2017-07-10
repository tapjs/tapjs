var tapContent = function () {/*
TAP version 13
ok 1 - this is fine
# Subtest: child
    # this is a child
Bail out! # saw that coming
*/}.toString().split('\n').slice(1, -1).join('\n')

var P = require('../')
var etoa = require('events-to-array')
var ignore = [ 'pipe', 'unpipe', 'prefinish', 'finish', 'newListener', 'line' ]
var p = new P()
var events = etoa(p, ignore)
p.end(tapContent)

require('tap').same(events, [
  [
    'version',
    13
  ],
  [
    'assert',
    {
      'ok': true,
      'id': 1,
      'name': 'this is fine'
    }
  ],
  [
    'child',
    [
      [
        'comment',
        '# Subtest: child\n'
      ],
      [
        'comment',
        '# this is a child\n'
      ]
    ]
  ],
  [
    'bailout',
    '# saw that coming'
  ],
  [
    'complete',
    {
      'ok': false,
      'count': 1,
      'pass': 1,
      'fail': 0,
      'bailout': '# saw that coming',
      'todo': 0,
      'skip': 0,
      'plan': {
        'start': null,
        'end': null,
        'skipAll': false,
        'skipReason': '',
        'comment': ''
      },
      'failures': []
    }
  ]
])
