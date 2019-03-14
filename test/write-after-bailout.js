var t = require('tap')
var Parser = require('../')
var p = new Parser()

var called = false
function cb (er) {
  if (er)
    throw er
  called = true
}

p.write('Bail out! this is fine\nok 2 - this is ok\n')
t.notOk(called)
t.ok(p.bailedOut)
p.write('ok 1 - i am ok with how things are proceeding\n', cb)
t.notOk(called)
setTimeout(function () {
  t.ok(called)
})

t.test('child calling _parse after bailout', function (t) {
  var p = new Parser()
  var etoa = require('events-to-array')

  var events = etoa(p, [ 'pipe', 'unpipe', 'prefinish', 'finish', 'line' ])

  p.on('assert', t.fail)
  p.on('complete', function () {
    t.matchSnapshot(events, 'events')
    t.end()
  })
  p.end([
    'TAP version 13',
    '    # Subtest',
    '    1..1',
    '    Bail out! child',
    '    ok 1',
    'ok 1',
    '1..1'
  ].join('\n'))
})
