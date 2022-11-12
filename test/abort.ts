import t from 'tap'
import Parser from '../'
const tapContent = `ok 1 - nesting {
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
`

t.test('buffered abort', function (t) {
  t.test('with diags', bufferedTest({ some: 'diags' }))
  t.test('empty diags', bufferedTest({}))
  t.test('no diags', bufferedTest())
  t.end()
})

t.test('unbuffered abort', function (t) {
  t.test('with diags', unbufferedTest({ some: 'diags' }))
  t.test('empty diags', unbufferedTest({}))
  t.test('no diags', unbufferedTest())
  t.end()
})

function bufferedTest(d?: { [k: string]: any }) {
  return function (t: Tap.Test) {
    const p = new Parser()
    const mid = Math.floor(tapContent.length / 2)
    const first = tapContent.slice(0, mid)
    const second = tapContent.slice(mid)
    const lines: string[] = []
    p.on('line', function (line) {
      if (line.trim().match(/^# [^S]/)) return
      lines.push(line)
    })
    p.on('complete', function (results) {
      t.matchSnapshot(lines, 'lines')
      t.matchSnapshot(results, 'results')
      t.end()
    })

    p.write(first)
    if (d) {
      p.abort('nope', d)
    } else {
      p.abort()
    }
    p.write(second)
  }
}

function unbufferedTest(d?: { [k: string]: any }) {
  return function (t: Tap.Test) {
    const p = new Parser()
    const mid = 90
    const first = tapContent.slice(0, mid)
    const second = tapContent.slice(mid)
    const lines: string[] = []
    p.on('line', function (line) {
      if (line.trim().match(/^# [^S]/)) return
      lines.push(line)
    })
    p.on('complete', function (results) {
      t.matchSnapshot(lines, 'lines')
      t.matchSnapshot(results, 'results')
      t.end()
    })

    p.write(first)
    p.abort('nope', d)
    p.write(second)
  }
}
