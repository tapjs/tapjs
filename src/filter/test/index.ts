import { TestOpts } from '@tapjs/test'
import t, { Test } from 'tap'
import { config, plugin } from '../dist/esm/index.js'

t.equal(t.pluginLoaded(plugin), true, 'plugin is loaded')

t.cleanSnapshot = s =>
  s.replace(/# time=[0-9.]+m?s/g, '# time={TIME}')

const run = async (
  opts: TestOpts,
  setRunOnly: boolean | null = null,
): Promise<string> => {
  const tt = new Test(opts)
  tt.runMain(() => {})
  t.equal(
    tt.runOnly,
    process.env.TAP_ONLY ?
      process.env.TAP_ONLY === '1'
    : !!opts.runOnly,
  )
  if (setRunOnly !== null) {
    tt.runOnly = setRunOnly
    t.equal(tt.runOnly, setRunOnly)
  }
  tt.test('cat', async tt => {
    tt.test('hiss', async tt => tt.pass('sssss'))
    tt.test('purr', async tt => tt.pass('rrrrr'))
    tt.pass('meow')
  })
  tt.only('unicorn', async tt => {
    tt.pass('this is fine')
  })
  tt.test('dog', async tt => {
    tt.test('growl', async tt => tt.pass('grrr'))
    tt.test('howl', async tt => tt.pass('howww'))
    tt.test('dig', async tt =>
      tt.test('dig', async tt =>
        tt.test('keep digging', async tt =>
          tt.test('dig some more', async tt => tt.pass('found it')),
        ),
      ),
    )
    tt.pass('woof')
  })
  tt.end()
  return tt.concat()
}

t.test('grep', async t =>
  t.matchSnapshot(
    await run({ name: 'grepper', grep: ['cat', 'purr'] }),
  ),
)

t.test('grep, failSkip:true', async t =>
  t.matchSnapshot(
    await run({
      name: 'grepper',
      failSkip: true,
      grep: ['cat', 'purr'],
    }),
  ),
)

t.test('grep invert', async t =>
  t.matchSnapshot(
    await run({
      name: 'grep invert',
      grep: /unicorn|dog/,
      grepInvert: true,
    }),
  ),
)

t.test('grep invert, failSkip:true', async t =>
  t.matchSnapshot(
    await run({
      name: 'grep invert',
      grep: /unicorn|dog/,
      grepInvert: true,
      failSkip: true,
    }),
  ),
)

t.test('only', async t =>
  t.matchSnapshot(
    await run({ name: 'only the lonely', runOnly: true }),
  ),
)

t.test('only, failSkip: true', async t =>
  t.matchSnapshot(
    await run({
      name: 'only the lonely',
      runOnly: true,
      failSkip: true,
    }),
  ),
)

t.test('only, but by setting t.runOnly', async t =>
  t.matchSnapshot(await run({ name: 'only the lonely' }, true)),
)

t.test('warn if using only() unnecessarily', async t =>
  t.matchSnapshot(await run({ name: 'run it all' })),
)

t.test('cli runner runs everything no matter what', async t =>
  t.matchSnapshot(
    await run({
      name: 'pretend cli',
      context: Symbol.for('tap.isRunner'),
      grep: /unicorn|dog/,
      grepInvert: true,
    }),
  ),
)

t.test('get defaults from env', t => {
  t.test('grep', async t => {
    const { TAP_GREP } = process.env
    if (TAP_GREP !== undefined) {
      t.teardown(() => (process.env.TAP_GREP = TAP_GREP))
    } else {
      t.teardown(() => {
        delete process.env.TAP_GREP
      })
    }
    process.env.TAP_GREP = '/dOg/i\ndig'
    t.matchSnapshot(await run({ name: 'env grep' }))
  })
  t.test('grep invert', async t => {
    const { TAP_GREP, TAP_INVERT } = process.env
    t.teardown(() => {
      if (TAP_GREP === undefined) delete process.env.TAP_GREP
      else process.env.TAP_GREP = TAP_GREP
      if (TAP_INVERT === undefined) delete process.env.TAP_INVERT
      else process.env.TAP_INVERT = TAP_INVERT
    })
    Object.assign(process.env, {
      TAP_GREP: '/unicorn|dog/',
      TAP_INVERT: '1',
    })
    t.matchSnapshot(await run({ name: 'grep invert' }))
  })
  t.test('only', async t => {
    const { TAP_ONLY } = process.env
    t.teardown(() => {
      if (TAP_ONLY !== undefined) process.env.TAP_ONLY = TAP_ONLY
      else delete process.env.TAP_ONLY
    })
    process.env.TAP_ONLY = '1'
    t.matchSnapshot(await run({ name: 'only the lonely' }))
  })
  t.end()
})

t.test('assign filter args for node as well', t => {
  t.strictSame(config.grep.nodeArgs(['a', 'b']), [
    '--test-name-pattern=a',
    '--test-name-pattern=b',
  ])
  t.strictSame(config.only.nodeArgs(true), ['--test-only'])
  t.strictSame(config.only.nodeArgs(false), [])
  t.end()
})
