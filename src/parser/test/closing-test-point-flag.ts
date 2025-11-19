import t from 'tap'
import { Result } from '../src/result.js'

import { Parser } from '../src/index.js'

const p = new Parser()

const results: Result[] = []
const children: Parser[] = []
p.on('result', r => results.push(r))
const onChild = (p: Parser) => {
  p.on('child', onChild)
  children.push(p)
}
p.on('child', onChild)

p.end(`TAP version 14
1..2
ok 1 - this is fine
# Subtest: child test
    1..2
    # Subtest: child subtest
        1..1
        ok 1 - test point in subtest
    ok 2 - child subtest
    ok 1 - child assert
ok 2 - child test
`)

t.strictSame(
  results.map(({ name, closingTestPoint }) => [name, closingTestPoint]),
  [
    ['this is fine', false],
    ['test point in subtest', false],
    ['child assert', false],
  ],
)

t.match(
  children.map(({ name, closingTestPoint }) => [name, closingTestPoint]),
  [
    ['child test', { closingTestPoint: true }],
    ['child subtest', { closingTestPoint: true }],
  ],
)
