import t from 'tap'
import { Parser } from '../'
import etoa from 'events-to-array'
const p = new Parser()

let called: boolean = false
function cb(er?: Error) {
  if (er) throw er
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
  const p = new Parser()

  const events = etoa(p, ['pipe', 'unpipe', 'prefinish', 'finish', 'line'])

  p.on('assert', (res) => t.fail('no assertions expected', { res }))
  p.on('complete', function () {
    t.matchSnapshot(events, 'events')
    t.end()
  })
  p.end(
    [
      'TAP version 13',
      '    # Subtest',
      '    1..1',
      '    Bail out! child',
      '    ok 1',
      'ok 1',
      '1..1',
    ].join('\n')
  )
})
