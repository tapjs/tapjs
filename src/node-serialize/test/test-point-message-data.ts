import t, { Minimal } from 'tap'

import * as stack from '@tapjs/stack'
import { Parser, Result } from 'tap-parser'
import { testPointMessageData } from '../src/test-point-message-data.js'

const p = new Parser()
const results: Result[] = []
p.on('result', res => results.push(res))
p.end(`TAP version 14
ok 1 - this is fine
ok 2 - skip bool # SKIP
ok 3 - skip msg # SKIP msg
ok 4 - todo bool # TODO
ok 5 - todo msg # TODO msg
not ok 6 - fail skip bool # SKIP
not ok 7 - fail skip msg # SKIP msg
not ok 8 - fail todo bool # TODO
not ok 9 - fail todo msg # TODO msg
not ok 10 - fail with diag
  ---
  at:
    fileName: some/file.js
    lineNumber: 420
    columnNumber: 69
  stack: |
    some/file.js:420:69
  ...
not ok 11 - fail no diag
1..11
`)

const tb = new Minimal({ name: 'root', at: stack.at() })
// we'd never have a nestingLevel=0 irl
tb.nestingLevel++

for (const res of results) {
  t.matchSnapshot(testPointMessageData(res, tb))
}
