import t from 'tap'

import { LoadedConfig } from '@tapjs/config'
import { signature } from '@tapjs/test'

import { tryGetVersion } from '../dist/esm/try-get-version.js'
import { version } from '../dist/esm/version.js'

// any time the runner loads, it sets the envs to the resolved config
// reset it after every test. Use a fake intercept version instead.
const originalEnv = { ...process.env }
t.beforeEach(t =>
  t.intercept(process, 'env', { value: { ...originalEnv } })
)

t.test('basic version', async t => {
  const cases = ['version', '--version']
  let v: string | undefined = undefined
  for (const c of cases) {
    const config = {
      get: () => false,
    } as unknown as LoadedConfig
    t.test(c, async t => {
      const logs = t.capture(console, 'log')
      console.log
      await version([c], config)
      const result = logs.args()
      t.match(result, [[String]])
      t.equal(result.length, 1)
      t.equal(result[0]?.length, 1)
      if (!v) v = result[0]?.[0]
      else t.strictSame(result, [[v]])
    })
  }
})

t.test('basic versions', async t => {
  const cases = ['versions', '--versions']
  let v: string | undefined = undefined
  for (const c of cases) {
    const config = {
      get: () => c === `--versions`,
    } as unknown as LoadedConfig
    t.test(c, async t => {
      const logs = t.capture(console, 'log')
      await version([c], config)
      const result = logs.args()
      t.match(result, [[/tap: [0-9]+\.[0-9]+.[0-9]+(-.+)?\n/]])
      t.equal(result.length, 1)
      t.equal(result[0].length, 1)
      if (!v) v = result[0][0]
      else t.strictSame(result, [[v]])
    })
  }
})

t.test('fallback if version not found', async t => {
  const broken: string[] = []
  type T = typeof t

  const runTest = async (t: T, tv: RegExp | null) => {
    const { version } = (await t.mockImport('../dist/esm/version.js', {
      '@tapjs/test': {
        signature,
      },
      '../dist/esm/try-get-version.js': {
        tryGetVersion: (pkg: string) =>
          broken.includes(pkg) ? undefined : tryGetVersion(pkg),
      },
    })) as typeof import('../dist/esm/version.js')
    const logs = t.capture(console, 'log')
    const config = { get: () => false } as unknown as LoadedConfig
    if (tv === null) {
      await t.rejects(version([], config), {
        message:
          'Could not get version for tap, @tapjs/core, or @tapjs/run',
      })
    } else {
      await version([], config)
      const res = logs().map(
        ({ args }: { args: string[] }) => args[0]
      )[0]
      t.match(res, tv)
    }
    await version(['versions'], config)
    const allVersions = logs().map(
      ({ args }: { args: string[] }) => args[0]
    )[0]
    for (const b of broken) {
      t.notMatch(allVersions, `${b}: `)
      t.notMatch(allVersions, `"${b}": `)
    }
    t.match(allVersions, '\nplugins:\n')
  }

  await t.test('nothing broken', t =>
    runTest(t, /^[0-9]+\.[0-9+\.[0-9]+/)
  )
  broken.push('tap')
  await t.test('tap broken', t =>
    runTest(t, /^@tapjs\/core@[0-9]+\.[0-9+\.[0-9]+/)
  )
  broken.push('@tapjs/core')
  await t.test('@tapjs/core broken', t =>
    runTest(t, /^@tapjs\/run@[0-9]+\.[0-9+\.[0-9]+/)
  )

  broken.push('@tapjs/worker')
  await t.test('@tapjs/worker plugin broken', t =>
    runTest(t, /^@tapjs\/run@[0-9]+\.[0-9+\.[0-9]+/)
  )

  broken.push('@tapjs/run')
  await t.test('@tapjs/run broken', t => runTest(t, null))
})
