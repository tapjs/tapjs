import type {ProcessInfo} from '@tapjs/processinfo'
import t from 'tap'
import { processinfoCompletions as comp } from '../../dist/repl/processinfo-completions.js'

const mockPI = {
  uuids: new Map([
    ['uuid-01234', {}],
    ['uuid-98765', {}],
  ]),
  externalIDs: new Map([
    ['eid-01234', {}],
    ['eid-98765', {}],
  ])
} as ProcessInfo

t.strictSame(comp(mockPI, ['eid-'], 'x eid-'), [
  ['x eid-01234', 'x eid-98765'], 'x eid-'
])
t.strictSame(comp(mockPI, ['eid-0'], 'x eid-0'), [
  ['x eid-01234 '], 'x eid-0'
])
t.strictSame(comp(mockPI, [], 'x '), [
  ['x eid-01234', 'x eid-98765'], 'x '
])
t.strictSame(comp(mockPI, ['u'], 'x  u'), [
  ['x  uuid-01234', 'x  uuid-98765'], 'x  u'
])
