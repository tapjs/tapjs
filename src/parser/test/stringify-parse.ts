import t from 'tap'
import { Parser } from '../dist/esm/index.js'
t.test('just parse some tap', t => {
  const tap = `TAP version 13
not ok - 1
# Subtest: child
    ok - foo
    ok
    1..2
ok 2 - child
pragma -strict
1..2
`
  t.matchSnapshot(Parser.parse(tap), 'basic')
  t.matchSnapshot(Parser.parse(tap, { flat: true }), 'flattened')
  t.end()
})

t.test('stringify nested result', t => {
  const res = Parser.parse(`TAP version 13
not ok - 1
pragma +strict
# Subtest: child
    ok - foo
    pragma +strict
    ok
    pragma -strict
    1..2
ok 2 - child
pragma -strict
1..2
`)
  t.matchSnapshot(Parser.stringify(res), 'basic')
  t.matchSnapshot(Parser.stringify(res, { flat: true }), 'flattened')
  t.end()
})

t.test('stringify flattened result', t => {
  const res = Parser.parse(
    `TAP version 13
not ok - 1
# Subtest: child
    ok - foo
    ok
    1..2
ok 2 - child
1..2
`,
    { flat: true },
  )
  t.matchSnapshot(Parser.stringify(res), 'basic')
  t.matchSnapshot(Parser.stringify(res, { flat: true }), 'flattened')
  t.end()
})

t.test('stringify with bailout', t => {
  const res = Parser.parse(
    `TAP version 13
not ok - 1
# Subtest: child
    ok - foo
    ok
    Bail out! cannot continue
not ok 2 - child
1..2
`,
    { flat: true },
  )
  t.matchSnapshot(Parser.stringify(res), 'basic')
  t.matchSnapshot(Parser.stringify(res, { flat: true }), 'flattened')
  t.end()
})
