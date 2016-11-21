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
  var p = Parser()
  var etoa = require('events-to-array')

  var events = etoa(p, [ 'pipe', 'unpipe', 'prefinish', 'finish', 'line' ])
  var expect = [
    [ 'version', 13 ],
    [ 'child',
      [ [ 'comment', '# Subtest\n' ],
        [ 'plan', { start: 1, end: 1 } ],
        [ 'bailout', 'child' ],
        [ 'complete',
          { ok: false,
            count: 0,
            pass: 0,
            fail: 0,
            skip: 0,
            todo: 0,
            bailout: 'child',
            plan: { start: 1, end: 1 },
            failures: [] } ] ] ],
    [ 'bailout', 'child' ],
    [ 'complete',
      { ok: false, count: 0, pass: 0, fail: 0, skip: 0, todo: 0, bailout: 'child', failures: [] } ]
  ]

  p.on('assert', t.fail)
  p.on('complete', function () {
    t.same(events, expect)
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
