import { TestOpts } from '@tapjs/test'
import t, { Test } from 'tap'
import { plugin } from '../dist/mjs/index.js'
t.equal(t.pluginLoaded(plugin), true, 'plugin is loaded')

t.cleanSnapshot = s =>
  s
    .replace(/lineNumber: [0-9]+/, 'lineNumber: ##')
    .replace(/columnNumber: [0-9]+/, 'columnNumber: ##')
    .replace(/# time=[0-9\.]+m?s$/gm, '# time={TIME}')
    .replace(
      /stack: [|>]-?\n(.|\n)+\n  at:/g,
      'stack: {STACK}\n  at:'
    )
    .replace(/lineNumber: \d+/, 'lineNumber: ##')
    .replace(/columnNumber: \d+/, 'columnNumber: ##')

t.test('basic teardown timing', async t => {
  const tt = new Test({ name: 'testy test' })
  const output = tt.concat()
  let teardownRan = false
  let afterRan = false
  tt.teardown(() => (teardownRan = true))
  tt.after(() => (afterRan = true))
  tt.pass('this is fine')
  const p = tt.test('child test', async t => {
    t.pass('child test is fine')
  })
  t.equal(teardownRan, false, 'not run yet, not ended')
  t.equal(afterRan, false, 'not run yet, not ended')
  tt.end()
  t.equal(teardownRan, false, 'not run yet, child still running')
  t.equal(afterRan, false, 'not run yet, child still running')
  await p
  t.equal(teardownRan, true, 'ran teardown')
  t.equal(afterRan, true, 'ran after')
  t.matchSnapshot(await output, 'test output')
})

t.test('handle async teardown', async t => {
  const tt = new Test({ name: 'testy test' })
  const output = tt.concat()
  let teardownStarted = false
  let teardownDone = false
  tt.teardown(async () => {
    teardownStarted = true
    await new Promise<void>(r => setTimeout(r))
    teardownDone = true
  })
  tt.pass('this is fine')
  const p = tt.test('child test', async t => {
    t.pass('child test is fine')
  })
  t.equal(teardownStarted, false, 'not run yet, not ended')
  t.equal(teardownDone, false, 'not run yet, not ended')
  tt.end()
  t.equal(teardownStarted, false, 'not run yet, child still running')
  t.equal(teardownDone, false, 'not run yet, child still running')
  await p
  t.equal(
    teardownStarted,
    true,
    'ran teardown, but not done with it yet'
  )
  t.equal(
    teardownDone,
    false,
    'ran teardown, but not done with it yet'
  )
  t.matchSnapshot(await output, 'test output')
  t.equal(teardownDone, true, 'finished teardown')
})

t.test('teardown when onEOF is already async', async t => {
  const tt = new Test({ name: 'testy test' })
  const { onEOF } = tt
  tt.onEOF = async () => {
    await new Promise<void>(r => setTimeout(r))
    if (onEOF) return onEOF()
  }
  const output = tt.concat()
  let teardownRan = false
  tt.teardown(() => (teardownRan = true))
  tt.pass('this is fine')
  const p = tt.test('child test', async t => {
    t.pass('child test is fine')
  })
  t.equal(teardownRan, false, 'not run yet, not ended')
  tt.end()
  t.equal(teardownRan, false, 'not run yet, child still running')
  await p
  t.equal(teardownRan, false, 'need to await async onEOF')
  t.matchSnapshot(await output, 'test output')
  t.equal(teardownRan, true, 'ran teardown')
})

t.test('teardown that throws', async t => {
  const tt = new Test({ name: 'testy test' })
  const output = tt.concat()
  tt.pass('this is fine')
  tt.test('troublesome child', t => {
    t.teardown(() => {
      throw new Error('ohno')
    })
    t.pass('this is fine')
    t.end()
  })
  tt.end()
  t.matchSnapshot(await output)
})

t.test('teardown that rejects', async t => {
  const tt = new Test({ name: 'rejecty test' } as TestOpts)
  const output = tt.concat()
  tt.pass('this is fine')
  tt.test('rejected child', { diagnostic: false }, async t => {
    t.plan(1)
    t.teardown(async () => {
      throw new Error('broken promise')
    })
    t.pass('child is fine')
  })
  tt.end()
  t.matchSnapshot(await output)
})
