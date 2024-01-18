import { LoadedConfig } from '@tapjs/config'
import * as CORE from '@tapjs/core'
import { Minimal, TAP } from '@tapjs/core'
import { resolve } from 'path'
import t from 'tap'

// the executeTestSuite function is fully covered by the run tests
// this is just verifying that when provided with a test file, we
// evaluate the saved .tap results.

t.cleanSnapshot = s =>
  s.replace(/# time=[0-9.]+m?s/g, '# time={TIME}')

t.test('replay a saved test result', async t => {
  const mockTap = new Minimal({ name: 'mock TAP' }) as unknown as TAP
  const dir = t.testdir({
    '.tap': {
      'test-results': {
        'test.js.tap': `TAP version 14
ok 1 - this is fine
1..1
`,
      },
    },
    'test.js': `import t from 'tap'
t.pass('this is fine')
`,
  })
  const mockConfig = {
    globCwd: dir,
  } as unknown as LoadedConfig
  const { replay } = await t.mockImport<
    typeof import('../dist/esm/replay.js')
  >('../dist/esm/replay.js', {
    '../dist/esm/execute-test-suite.js': {
      executeTestSuite: async (
        args: string[],
        config: any,
        applyPlugins: (tap: any) => any,
        setup: (tap: any) => any,
        execute: (t: TAP, file: string) => any
      ) => {
        t.strictSame(args, [])
        t.equal(config, mockConfig)
        t.equal(applyPlugins(mockTap), mockTap)
        t.equal(setup(mockTap), undefined)
        await execute(mockTap, resolve(dir, 'test.js'))
      },
    },
    '@tapjs/core': CORE,
  })

  await replay([], mockConfig)
  mockTap.end()
  t.matchSnapshot(await mockTap.concat())
})
