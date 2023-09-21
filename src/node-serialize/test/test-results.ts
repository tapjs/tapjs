import t, { Minimal, TestBase } from 'tap'
import { TestMap } from '../src/test-map.js'
import { testResults } from '../src/test-results.js'

const tap = new Minimal({ name: 'tap' })
const subsMap = new TestMap<TestBase[]>([[tap, []]])
const tests: Minimal[] = [tap]

t.cleanSnapshot = s =>
  s
    .replace(/"file": ".*",$/gm, '"file": "{FILE}",')
    .replace(/"line": [0-9]+,$/gm, '"line": ##,')
    .replace(/"column": [0-9]+,$/gm, '"column": ##,')
    .replace(/"duration_ms": [0-9.]+,$/gm, '"duration_ms": ##,')

const { subtest: zro } = tap.test('zro', t => {
  t.plan(1)
  t.end()
})
const { subtest: one } = tap.test('one', async t => {
  const { subtest: a } = t.test('a', async () => {})
  const { subtest: b } = t.test('b', async t => t.fail('b'))
  const { subtest: fail } = t.test('fail', t => {
    t.plan(3)
    t.fail('failure')
    t.pass('passing')
    t.fail('not ok')
  })
  const { subtest: todo } = t.test('todo', async t =>
    t.pass('todo', { todo: true })
  )
  const { subtest: skip } = t.test('skip', async t =>
    t.fail('skip this assert', { skip: true })
  )
  const { subtest: skipAll } = t.test('skipAll', async t => {
    t.plan(0, 'skip all of it')
  })
  if (!a || !b || !fail || !todo || !skip || !skipAll) {
    throw new Error('did not get subtest object??')
  }
  tests.push(a, b, fail, todo, skip, skipAll)
  subsMap.set(t, [a, b, fail, todo, skip, skipAll])
  t.end()
})

const { subtest: two } = tap.test('two', async () =>
  Promise.reject(new Error('failed promise'))
)
const { subtest: tre } = tap.test('tre', () => {
  throw new Error('thrown error')
})
const { subtest: failSkip } = tap.test(
  'failSkip',
  { failSkip: true },
  t => {
    t.pass('fails actually', { skip: true })
    t.end()
  }
)
const { subtest: failTodo } = tap.test(
  'failTodo',
  { failTodo: true },
  t => {
    t.pass('fails actually', { todo: true })
    t.end()
  }
)
const { subtest: oneFail } = tap.test('oneFail', t => {
  const { subtest: solo } = t.test('solo', async t => t.fail('nope'))
  if (!solo) {
    throw new Error('failed to get subtest')
  }
  tests.push(solo)
  subsMap.set(t, [solo])
  t.end()
})
if (
  !zro ||
  !one ||
  !two ||
  !tre ||
  !failSkip ||
  !failTodo ||
  !oneFail
) {
  throw new Error('did not get subtest object??')
}
subsMap
  .get(tap)
  ?.push(zro, one, two, tre, failSkip, failTodo, oneFail)
tests.push(zro, one, two, tre, failSkip, failTodo, oneFail)
tap.end()
await tap.concat()

t.plan(tests.length)
for (const test of tests) {
  t.test(test.fullname, t => {
    t.matchSnapshot(testResults(test, subsMap))
    t.end()
  })
}
