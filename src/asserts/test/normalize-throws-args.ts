import { Extra } from '@tapjs/core'
import t from 'tap'
import { ErrorMatch, ThrowsArgs } from '../dist/esm/index.js'
import { normalizeThrowsArgs } from '../dist/esm/normalize-throws-args.js'

// [[...args], [...expect]][]
const cases: [ThrowsArgs, [ErrorMatch | undefined, string, Extra]][] =
  [
    [[], [undefined, 'defmsg', {}]],
    [['msg'], [undefined, 'msg', {}]],
    [
      [{ name: 'foo' }, 'msg'],
      [{ name: 'foo' }, 'msg', {}],
    ],
    [
      [{ name: 'foo' }, { skip: true }],
      [{ name: 'foo' }, 'defmsg', { skip: true }],
    ],
    [
      ['msg', { skip: true }],
      [undefined, 'msg', { skip: true }],
    ],
    [
      ['', { skip: true }],
      [undefined, 'defmsg', { skip: true }],
    ],
  ]

const defaultMessage = 'defmsg'
t.plan(cases.length)
for (const [throwsArgs, expect] of cases) {
  t.test(JSON.stringify(throwsArgs), t => {
    t.strictSame(
      normalizeThrowsArgs(defaultMessage, throwsArgs),
      expect
    )
    t.end()
  })
}
