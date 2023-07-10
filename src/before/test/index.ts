import { TestOpts } from '@tapjs/test'
import t, { Test } from 'tap'
import { plugin } from '../dist/cjs/index.js'
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

t.test('basic before timing', async t => {
  const tt = new Test({ name: 'testy test' } as TestOpts)
  const output = tt.concat()
  let beforeRan = false
  tt.before(() => (beforeRan = true))
  t.equal(beforeRan, true)
  tt.test('child', async t => t.pass('this is fine'))
  let secondBeforeRan = false
  tt.before(() => (secondBeforeRan = true))
  t.equal(secondBeforeRan, false)
  tt.test('second', async tt => {
    t.equal(secondBeforeRan, true)
    tt.pass('this is fine')
  })
  tt.end()
  t.matchSnapshot(await output)
})

t.test('before awaits promise', async t => {
  const tt = new Test({ name: 'testy test' } as TestOpts)
  const output = tt.concat()
  const log: string[] = []
  tt.before(async () => {
    log.push('first before')
    tt.pass('first before')
  })
  tt.before(async () => {
    log.push('second before')
    tt.pass('second before')
  })
  tt.test('child test', async tt => {
    log.push('child test')
    tt.pass('this is fine')
  })
  // have to defer so we don't end before the second assertion is made
  setTimeout(() => tt.end())
  // even though the log shows the actual order, the TAP output will put
  // the second before assertion AFTER the child test, because it ends up
  // in the queue after the child test has been scheduled.
  t.matchSnapshot(await output)
  t.strictSame(log, ['first before', 'second before', 'child test'])
})

t.test('rejected before fails test', async t => {
  const tt = new Test({ name: 'testy test' } as TestOpts)
  tt.test('child', tt => {
    tt.before(async () => {
      throw new Error('oops')
    })
    tt.pass('this is fine')
    tt.end()
  })
  tt.end()
  t.match(
    await tt.concat(),
    `
            tt.before(async () => {
              throw new Error('oops')
        ------------^
            })
`
  )
})

t.test('throwing before fails test', async t => {
  const tt = new Test({ name: 'testy test' } as TestOpts)
  tt.test('child', tt => {
    tt.before(() => {
      throw new Error('oops')
    })
    tt.pass('this is fine')
    tt.end()
  })
  tt.end()
  t.match(
    await tt.concat(),
    `
            tt.before(() => {
              throw new Error('oops')
        ------------^
            })
`
  )
})
