const t = require('tap')
const Parser = require('../')

const buffered = `
TAP version 13
ok 1 - assert after delay # time=1234.567ms {
    ok 1 - test after 1 second delay
    1..1
}

ok 2 - assert before delay # time=420.69ms {
    ok 1 - test before 1 second delay
    1..1
}

1..2
# time=69.420ms
`
t.test('buffered with time directives', t => {
  const p = new Parser()
  t.equal(p.time, null)
  const times = []
  p.on('child', c => c.on('complete', r => {
    t.equal(c.time, r.time, 'child time found in final result')
    times.push(r.time)
  }))

  p.on('complete', r => {
    t.equal(p.time, r.time, 'parent time in final result')
    times.push(r.time)
  })

  p.end(buffered)
  t.same(times, [1234.567, 420.69, 69.420])
  t.end()
})

const streamed = `
TAP version 13
# Subtest: assert after delay
    ok 1 - test after 1 second delay
    1..1
ok 1 - assert after delay # time=1234.567ms

# Subtest: assert before delay
    ok 1 - test before 1 second delay
    1..1
ok 2 - assert before delay # time=420.69ms

1..2
# time=69.420ms
`

t.test('streamed with time directives', t => {
  const p = new Parser()
  t.equal(p.time, null)
  const times = []
  p.on('child', c => c.on('complete', r => {
    t.equal(c.time, r.time, 'child time found in final result')
    times.push(r.time)
  }))

  p.on('complete', r => {
    t.equal(p.time, r.time, 'parent time in final result')
    times.push(r.time)
  })

  p.end(streamed)
  t.same(times, [1234.567, 420.69, 69.420])
  t.end()
})

const notime = `
TAP version 13
    ok 1 - test after 1 second delay
    1..1
ok 1 - assert after delay

    ok 1 - test before 1 second delay
    1..1
ok 2 - assert before delay

1..2
`

t.test('no time directives', t => {
  const p = new Parser()
  t.equal(p.time, null)
  const times = []
  p.on('child', c => c.on('complete', r => {
    t.equal(c.time, r.time, 'child time found in final result')
    times.push(r.time)
  }))

  p.on('complete', r => {
    t.equal(p.time, r.time, 'parent time in final result')
    times.push(r.time)
  })

  p.end(notime)
  t.same(times, [null, null, null], 'no times found')
  t.end()
})
