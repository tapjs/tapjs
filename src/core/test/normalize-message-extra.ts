import t from 'tap'
import { normalizeMessageExtra } from '../dist/esm/normalize-message-extra.js'
import { Extra, MessageExtra } from '../dist/esm/index.js'

const cases: [string, MessageExtra, [string, Extra]][] = [
  ['defmsg', [], ['defmsg', {}]],
  ['defmsg', ['msg'], ['msg', {}]],
  ['defmsg', [{ a: 1 }], ['defmsg', { a: 1 }]],
  ['defmsg', ['msg', { a: 1 }], ['msg', { a: 1 }]],
  ['defmsg', ['', { a: 1 }], ['defmsg', { a: 1 }]],
]

t.plan(cases.length)
for (const [defaultMessage, messageExtra, expect] of cases) {
  t.strictSame(
    normalizeMessageExtra(defaultMessage, messageExtra),
    expect,
    {
      defaultMessage,
      messageExtra,
    }
  )
}
