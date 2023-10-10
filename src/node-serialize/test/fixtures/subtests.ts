import { Minimal, TAP, TestBase } from '@tapjs/core'
import { TestMap } from '../../src/test-map.js'

export const tap = new Minimal({ name: 'tap' }) as unknown as TAP
export const subsMap = new TestMap<TestBase[]>([[tap, []]])
export const tests: Minimal[] = [tap]

const { subtest: zro } = tap.test('zro', t => {
  t.plan(99)
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
  const { subtest: skipOpt } = t.test('skipOpt', async () => {})
  const { subtest: skipMsgOpt } = t.test('skipOpt', async () => {})
  const { subtest: todoOpt } = t.test('todoOpt', async () => {})
  const { subtest: todoMsgOpt } = t.test('todoOpt', async () => {})
  const { subtest: mysteryFail } = t.test(
    'mysteryFail',
    async () => {}
  )
  if (
    !a ||
    !b ||
    !fail ||
    !todo ||
    !skip ||
    !skipAll ||
    !skipOpt ||
    !skipMsgOpt ||
    !todoOpt ||
    !todoMsgOpt ||
    !mysteryFail
  ) {
    throw new Error('did not get subtest object??')
  }
  skipOpt.options.skip = true
  skipMsgOpt.options.skip = 'message'
  todoOpt.options.todo = true
  todoMsgOpt.options.todo = 'message'
  mysteryFail.on('complete', r => (r.ok = false))
  const s = [
    a,
    b,
    fail,
    todo,
    skip,
    skipAll,
    skipOpt,
    skipMsgOpt,
    todoOpt,
    todoMsgOpt,
    mysteryFail,
  ]
  t.on('complete', () => {
    if (!mysteryFail.results) throw new Error('wat??')
    mysteryFail.results.ok = false
  })
  tests.push(...s)
  subsMap.set(t, s)
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

export const diagsMap = new TestMap<DiagnosticData[]>([
  [tap, [{ message: 'top', nesting: 0 }]],
  [zro, [{ message: 'zro diag', nesting: 1 }]],
])

subsMap
  .get(tap)
  ?.push(zro, one, two, tre, failSkip, failTodo, oneFail)
tests.push(zro, one, two, tre, failSkip, failTodo, oneFail)
tap.end()
