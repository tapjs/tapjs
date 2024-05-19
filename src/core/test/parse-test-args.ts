import t from 'tap'
import { parseTestArgs } from '../dist/esm/parse-test-args.js'
import { TestBase, TestBaseOpts } from '../dist/esm/test-base.js'

const cb = (_: TestBase) => {}
function named(_: TestBase) {}
const extra: TestBaseOpts = { extra: true }

const empty = parseTestArgs()
t.matchSnapshot(empty, 'empty args')
t.throws(empty.cb, 'implicit todo cb throws error if called')
t.matchSnapshot(parseTestArgs('test name'), 'string name')
t.matchSnapshot(parseTestArgs(cb), 'cb only')
t.matchSnapshot(parseTestArgs(false), 'false cb only')
t.matchSnapshot(parseTestArgs(named), 'named cb only')
t.matchSnapshot(parseTestArgs('test name', cb), 'string name and cb')
t.matchSnapshot(
  parseTestArgs('test name', named),
  'string name and named cb',
)
t.matchSnapshot(
  parseTestArgs('test name', false),
  'string name and false cb',
)
t.matchSnapshot(parseTestArgs(extra), 'extra only')
t.matchSnapshot(parseTestArgs('name', extra), 'name and extra')
t.matchSnapshot(parseTestArgs<TestBase>(extra, cb), 'extra and cb')
t.matchSnapshot(
  parseTestArgs<TestBase>(extra, named),
  'extra and named cb',
)
t.matchSnapshot(
  parseTestArgs<TestBase>(extra, false),
  'extra and false cb',
)
t.matchSnapshot(
  parseTestArgs<TestBase>('name', extra, cb),
  'name extra and cb',
)
t.matchSnapshot(
  parseTestArgs<TestBase>('name', extra, cb, 'default'),
  'name extra cb and default name',
)
t.matchSnapshot(
  parseTestArgs<TestBase>('', extra, cb, 'default'),
  'name extra cb and default name (use default name)',
)

//@ts-expect-error
t.throws(() => parseTestArgs(null), 'invalid argument')
