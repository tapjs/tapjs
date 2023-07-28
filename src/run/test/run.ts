import { LoadedConfig } from '@tapjs/config'
import * as CORE from '@tapjs/core'
import { spawn } from 'child_process'
import t from 'tap'

import { readFileSync } from 'fs'
import { resolve } from 'path'
import { resolveImport } from 'resolve-import'
import { fileURLToPath } from 'url'
const bin = fileURLToPath(
  await resolveImport('../dist/index.js', import.meta.url)
)
const node = process.execPath

t.cleanSnapshot = s =>
  s
    .replace(/# time=[0-9.]+m?s/g, '# time={TIME}')
    .replace(
      /\n  ---\n(.|\n)*?\n  \.\.\.\n/g,
      '\n  ---\n  {DIAGS}\n  ...\n'
    )

t.test('if respawn for rebuild, do nothing', async t => {
  let buildWithSpawnCalled = false
  // don't let env be modified here.
  const originalEnv = { ...process.env }
  t.intercept(process, 'env', { value: { ...originalEnv } })
  const { run } = (await t.mockImport('../dist/run.js', {
    '../dist/build-with-spawn.js': {
      buildWithSpawn: async () => {
        buildWithSpawnCalled = true
        return true
      },
    },
    '@tapjs/core': {
      ...CORE,
      tap: () => ({
        setTimeout: () => {
          throw new Error('should not have proceeded')
        },
      }),
    },
  })) as typeof import('../dist/run.js')
  await run([], { get: () => undefined } as unknown as LoadedConfig)
  t.equal(buildWithSpawnCalled, true)
})

type Result = {
  code: null | number
  signal: null | NodeJS.Signals
  stdout: string
  stderr: string
}

const run = async (
  cwd: string,
  args: string[] = [],
  stdin?: string,
  testEnv: Record<string, string | undefined> = {}
): Promise<Result> => {
  const env = Object.assign(
    Object.fromEntries(
      Object.entries(process.env).filter(([k]) => !/TAP/.test(k))
    ),
    testEnv
  )
  for (const [k, v] of Object.entries(env)) {
    if (v === undefined) delete env[k]
  }

  // nx tries very hard to be a "real" terminal, even when it isn't.
  // hard-code these so that we don't get spurious snapshot mismatches
  // when running in nx vs running via npm scripts directly.
  env.TAP = '1'
  env.TAP_COLOR = '0'
  env.COLOR = '0'
  env.FORCE_COLOR = '0'

  // just do this one as child procs, too hard to mock everything
  const proc = spawn(node, [bin, ...args], { cwd, env })

  const out: Buffer[] = []
  proc.stdout.on('data', c => out.push(c))

  const err: Buffer[] = []
  proc.stderr.on('data', c => err.push(c))

  if (stdin !== undefined) proc.stdin.end(stdin)

  return new Promise<Result>(res =>
    proc.on('close', (code, signal) => {
      res({
        code,
        signal,
        stdout: Buffer.concat(out).toString(),
        stderr: Buffer.concat(err).toString(),
      })
    })
  )
}

t.test('run some tests', async t => {
  const cwd = t.testdir({
    'bar.test.js': `
      import t from 'tap'
      t.pass('bar')
    `,
    'foo.test.js': `
      import t from 'tap'
      t.pass('foo')
    `,
    // make it think this is the project root
    '.taprc': 'jobs: 2\n',
    '.git': {},
  })
  const { code, signal, stdout, stderr } = await run(cwd)
  t.equal(code, 1, 'fail because no coverage')
  t.equal(signal, null)
  t.equal(stderr, '')
  t.matchSnapshot(stdout)
})

t.test('fail to find all named test files', async t => {
  const cwd = t.testdir({
    'bar.test.js': `
      import t from 'tap'
      t.pass('bar')
    `,
    'foo.test.js': `
      import t from 'tap'
      t.pass('foo')
    `,
    // make it think this is the project root
    '.taprc': 'jobs: 2\n',

    '.git': {},
  })
  const { code, signal, stdout, stderr } = await run(cwd, [
    'blah.test.js',
  ])
  t.equal(code, 1, 'fail because no valid files')
  t.equal(signal, null)
  t.matchSnapshot(stderr, '')
  t.equal(stdout, '')
})

t.test('set test envs', async t => {
  // testdirs are excluded by default, so use a different name
  t.testdirName = t.testdirName.replace(/tap-testdir/, 'XXX-testdir')
  const cwd = t.testdir({
    'env.test.js': `
      import t from 'tap'
      import { env } from './env.js'
      t.match(env(), {
        TEST_DELETED_ENV: undefined,
        TEST_EMPTY_ENV: '',
        TEST_FULL_ENV: 'full',
      })
    `,
    'env.js': `
      export const env = () => process.env
    `,
    'map.js': `
      export default () => './env.js'
    `,
    // make it think this is the project root
    '.taprc': `
test-env:
  - TEST_DELETED_ENV
  - TEST_EMPTY_ENV=
  - TEST_FULL_ENV=full
coverage-map: map.js
    `,
    '.git': {},
  })
  process.env.TEST_DELETED_ENV = 'deleteme'
  process.env.TEST_EMPTY_ENV = 'eraseme'
  process.env.TEST_FULL_ENV = 'fillme'
  const { code, signal, stdout, stderr } = await run(cwd)
  t.equal(code, 0)
  t.equal(signal, null)
  t.equal(stderr, '')
  t.matchSnapshot(stdout)
})

t.test('save test failures', async t => {
  const cwd = t.testdir({
    'failer.test.js': `
      import t from 'tap'
      t.fail('this is a failure')
    `,
    'env.test.js': `
      import t from 'tap'
      import { env } from './env.js'
      t.match(env(), {
        TEST_DELETED_ENV: undefined,
        TEST_EMPTY_ENV: '',
        TEST_FULL_ENV: 'full',
      })
    `,
    'env.js': `
      export const env = () => process.env
    `,
    'map.js': `
      export default () => null
    `,
    // make it think this is the project root
    '.taprc': `
coverage-map: map.js
test-env:
  - TEST_DELETED_ENV
  - TEST_EMPTY_ENV=
  - TEST_FULL_ENV=full
save: test-failures.txt
    `,
    '.git': {},
  })
  process.env.TEST_DELETED_ENV = 'deleteme'
  process.env.TEST_EMPTY_ENV = 'eraseme'
  process.env.TEST_FULL_ENV = 'fillme'
  process.env.SAVE_TEST_DEBUG = '1'
  const { code, signal, stdout, stderr } = await run(cwd)
  t.equal(code, 1)
  t.equal(signal, null)
  t.equal(stderr, '')
  t.matchSnapshot(stdout)
  t.equal(
    readFileSync(resolve(cwd, 'test-failures.txt'), 'utf8'),
    'failer.test.js\n'
  )
})

t.test('run stdin only', async t => {
  const cwd = t.testdir({
    '.taprc': '',
    '.git': {},
  })
  const { code, signal, stdout, stderr } = await run(
    cwd,
    ['-'],
    `TAP version 14
1..1
ok 1 - this is standard input
`
  )
  t.equal(code, 0)
  t.equal(signal, null)
  t.equal(stderr, '')
  t.matchSnapshot(stdout)
})

t.test('no files found to run', async t => {
  // testdirs are excluded by default, so use a different name
  t.testdirName = t.testdirName.replace(/tap-testdir/, 'XXX-testdir')

  const cwd = t.testdir({
    '.taprc': `
coverage-map: map.mjs
    `,
    '.git': {},
    'map.mjs': `
    export default () => 'foo.mjs'
    `,
    'foo.test.mjs': `
      import t from 'tap'
      import { foo } from './foo.mjs'
      t.equal(foo(), 'foo')
    `,
    'foo.mjs': `
      export const foo = () => 'foo'
    `,
  })
  // run once to make sure it is unchanged
  const { code } = await run(cwd, [], undefined, {
    TAP_EXCLUDE: undefined,
    TAP_INCLUDE: undefined,
  })
  t.equal(code, 0)

  t.test('no args, no files found to test', async t => {
    const { code, stdout, stderr } = await run(cwd, [], undefined, {
      TAP_EXCLUDE: '*.test.mjs',
    })
    t.equal(code, 1)
    t.equal(stdout, '')
    t.equal(stderr, 'No test files found\n')
  })

  t.test('args, no files found to test', async t => {
    const { code, stdout, stderr } = await run(cwd, ['blah'])
    t.equal(code, 1)
    t.equal(stdout, '')
    t.equal(stderr, 'No valid test files found matching "blah"\n')
  })

  t.test('no args, no changed', async t => {
    const { code, stdout, stderr } = await run(cwd, [], undefined, {
      TAP_CHANGED: '1',
    })
    t.equal(code, 0)
    t.equal(stdout, 'No new tests to run\n')
    t.equal(stderr, '')
  })

  t.test('valid arg, no changed', async t => {
    const { code, stdout, stderr } = await run(
      cwd,
      ['foo.test.mjs'],
      undefined,
      {
        TAP_CHANGED: '1',
      }
    )
    t.equal(code, 0)
    t.equal(stdout, 'No new tests to run\n')
    t.equal(stderr, '')
  })

  t.test('invalid arg, no changed', async t => {
    const { code, stdout, stderr } = await run(
      cwd,
      ['blah'],
      undefined,
      {
        TAP_CHANGED: '1',
      }
    )
    t.equal(code, 1)
    t.equal(stdout, '')
    t.equal(stderr, 'No valid test files found matching "blah"\n')
  })
})

t.test('run stdin with a file', async t => {
  // testdirs are excluded by default, so use a different name
  t.testdirName = t.testdirName.replace(/tap-testdir/, 'XXX-testdir')

  const cwd = t.testdir({
    'env.test.js': `
      import t from 'tap'
      import { env } from './env.js'
      t.match(env(), {
        TEST_DELETED_ENV: undefined,
        TEST_EMPTY_ENV: '',
        TEST_FULL_ENV: 'full',
      })
    `,
    'env.js': `
      export const env = () => process.env
    `,
    'map.js': `
      export default () => './env.js'
    `,
    // make it think this is the project root
    '.taprc': `
test-env:
  - TEST_DELETED_ENV
  - TEST_EMPTY_ENV=
  - TEST_FULL_ENV=full
coverage-map: map.js
    `,
    '.git': {},
  })
  const { code, signal, stdout, stderr } = await run(
    cwd,
    ['env.test.js', '/dev/stdin'],
    `TAP version 14
1..1
ok 1 - this is standard input
`
  )
  t.equal(code, 0)
  t.equal(signal, null)
  t.equal(stderr, '')
  t.matchSnapshot(stdout)
})
