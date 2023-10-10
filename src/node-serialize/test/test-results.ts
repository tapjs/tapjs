import t from 'tap'
import { testResults } from '../src/test-results.js'

t.cleanSnapshot = s =>
  s
    .replace(/"file": ".*",$/gm, '"file": "{FILE}",')
    .replace(/"line": [0-9]+,$/gm, '"line": ##,')
    .replace(/"column": [0-9]+,$/gm, '"column": ##,')
    .replace(/"duration_ms": [0-9.]+,$/gm, '"duration_ms": ##,')

import { tap, tests } from './fixtures/subtests.js'

await tap.concat()

t.plan(tests.length)
for (const test of tests) {
  t.test(test.fullname, t => {
    t.matchSnapshot(testResults(test, 10, 2), 'count=10')
    t.matchSnapshot(testResults(test, 0, 2), 'count=0')
    t.end()
  })
}
