import { LoadedConfig } from '@tapjs/config'
import { Minimal, TAP, TestBase } from '@tapjs/core'
import type { TapReportOpts } from '@tapjs/reporter'
import * as REPORTER from '@tapjs/reporter'
import { Minipass } from 'minipass'
import * as CP from 'node:child_process'
import { SpawnOptions } from 'node:child_process'
import { relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FC } from 'react'
import { resolveImport } from 'resolve-import'
import t from 'tap'

const reporterCalled: [string | FC<TapReportOpts>, TestBase, any][] =
  []

const env = { ...process.env }
for (const k of Object.keys(env)) {
  if (k.startsWith('TAP')) delete env[k]
}
t.beforeEach(t => t.intercept(process, 'env', { value: { ...env } }))

const mockReporter = t.createMock(REPORTER, {
  report: async (
    Type: string | FC<TapReportOpts>,
    tap: TAP,
    config: LoadedConfig
  ): Promise<boolean> => {
    reporterCalled.push([Type, tap, config])
    return true
  },
})

let spawnCalled: [string, string[], SpawnOptions][] = []
let mockProcess: { stdin: Minipass<string> }
const mockCP = t.createMock(CP, {
  spawn: (cmd: string, args: string[], options: SpawnOptions) => {
    spawnCalled.push([cmd, args, options])
    return (mockProcess = {
      stdin: new Minipass<string>({ encoding: 'utf8' }),
    })
  },
})

import which from 'which'

const { handleReporter } = (await t.mockImport(
  '../dist/handle-reporter.js',
  {
    '@tapjs/reporter': mockReporter,
    'node:child_process': mockCP,
    './fixtures/custom-react-reporter/index.js': await import(
      './fixtures/custom-react-reporter/index.js'
    ),
    './fixtures/custom-stream-reporter/index.js': await import(
      './fixtures/custom-stream-reporter/index.js'
    ),
    which: (path: string) =>
      path === 'test-exe-reporter' ? `/bin/${path}` : which(path),
  }
)) as typeof import('../dist/handle-reporter.js')

t.beforeEach(() => {
  reporterCalled.length = 0
  spawnCalled.length = 0
})

t.test('force TAP output', async t => {
  t.test('tap config', async t => {
    const stdout = new Minipass<string>({ encoding: 'utf8' })
    const output = stdout.concat()
    t.intercept(process, 'stdout', { value: stdout })
    const tb = new Minimal({ name: 'raw tap output' })
    // have to manually end the pipe because it's stdout allegedly
    tb.on('end', () => stdout.end())
    const config = { get: () => 'tap' } as unknown as LoadedConfig
    t.equal(await handleReporter(tb as TAP, config), false)
    tb.pass('this is fine')
    tb.end()
    t.match(await output, 'ok 1 - this is fine\n')
  })

  t.test('TAP=1 env', async t => {
    process.env.TAP = '1'
    const stdout = new Minipass<string>({ encoding: 'utf8' })
    const output = stdout.concat()
    t.intercept(process, 'stdout', { value: stdout })
    const tb = new Minimal({ name: 'raw tap output' })
    // have to manually end the pipe because it's stdout allegedly
    tb.on('end', () => stdout.end())
    const config = { get: () => 'base' } as unknown as LoadedConfig
    t.equal(await handleReporter(tb as TAP, config), false)
    tb.pass('this is fine')
    tb.end()
    t.match(await output, 'ok 1 - this is fine\n')
  })

  t.test('fallback if nothing is found', async t => {
    const errs = t.capture(console, 'error')
    const stdout = new Minipass<string>({ encoding: 'utf8' })
    const output = stdout.concat()
    t.intercept(process, 'stdout', { value: stdout })
    const tb = new Minimal({ name: 'raw tap output' })
    // have to manually end the pipe because it's stdout allegedly
    tb.on('end', () => stdout.end())
    const config = {
      get: () => 'unknown !# reporter $@ not exist \x06\x07',
    } as unknown as LoadedConfig
    t.equal(await handleReporter(tb as TAP, config), false)
    tb.pass('this is fine')
    tb.end()
    t.match(await output, 'ok 1 - this is fine\n')
    t.strictSame(errs.args(), [
      [
        'Could not load "unknown !# reporter $@ not exist \\u' +
          '0006\\u' +
          '0007" reporter. Displaying raw TAP.',
      ],
    ])
  })
})

t.test('builtin reporter', async t => {
  const tb = new Minimal({ name: 'base reporter' })
  const config = { get: () => 'base' } as unknown as LoadedConfig
  t.equal(await handleReporter(tb as TAP, config), true)
  t.strictSame(reporterCalled, [['base', tb, config]])
})

t.test('custom react reporter', async t => {
  const u = await resolveImport(
    './fixtures/custom-react-reporter/index.js',
    import.meta.url
  )
  const f = fileURLToPath(u)
  const p = './' + relative(process.cwd(), fileURLToPath(u))
  const mod = (await import(f)).default
  t.type(mod, 'function', 'gut check, fixture exports a fc')
  t.equal(mod.prototype, undefined, 'fc has no prototype')
  const tb = new Minimal({ name: 'custom react reporter' })
  const config = { get: () => p } as unknown as LoadedConfig
  t.equal(await handleReporter(tb as TAP, config), true)
  t.strictSame(reporterCalled, [[mod, tb, config]])
})

t.test('custom stream reporter', async t => {
  const stdout = new Minipass<string>({ encoding: 'utf8' })
  t.intercept(process, 'stdout', { value: stdout })
  const u = await resolveImport(
    './fixtures/custom-stream-reporter/index.js',
    import.meta.url
  )
  const f = fileURLToPath(u)
  const p = './' + relative(process.cwd(), fileURLToPath(u))
  const { default: mod, instances } = await import(f)
  t.type(mod, 'function', 'gut check, fixture exports a fn')
  t.not(mod.prototype, undefined, 'class has a prototype')
  t.type(mod.prototype, Minipass, 'prototype inherits from Minipass')
  const tb = new Minimal({ name: 'custom stream reporter' })
  const config = { get: () => p } as unknown as LoadedConfig
  t.equal(await handleReporter(tb as TAP, config), false)
  tb.pass('this is fine')
  tb.end()
  t.strictSame(reporterCalled, [], 'did not use @tapjs/reporter')
  const i = instances()
  t.equal(i.length, 1)
  const [instance] = i
  // manually end, it thinks it's stdout
  instance.on('end', () => stdout.end())
  t.match(
    await stdout.concat(),
    'TAP version 14\nok 1 - this is fine\n1..1\n' +
      JSON.stringify(tb.results),
    'report output'
  )
})

t.test('custom cli program reporter', async t => {
  const cases = {
    'with args': [
      ['some', 'args'],
      ['some', 'args'],
    ],
    'no args': [undefined, []],
  }
  for (const [name, [cnf, args]] of Object.entries(cases)) {
    t.test(name, async t => {
      const tb = new Minimal({ name: 'custom stream reporter' })
      const config = {
        get: (k: string) =>
          k === 'reporter'
            ? 'test-exe-reporter'
            : k === 'reporter-arg'
            ? cnf
            : undefined,
      } as unknown as LoadedConfig
      t.equal(await handleReporter(tb as TAP, config), false)
      tb.pass('this is fine')
      tb.end()
      t.strictSame(reporterCalled, [], 'did not use @tapjs/reporter')
      const cmd = '/bin/test-exe-reporter'
      const opt = {
        shell: true,
        stdio: ['pipe', 'inherit', 'inherit'],
      }
      t.strictSame(spawnCalled, [[cmd, args, opt]], 'spawn called')
      if (!mockProcess) throw new Error('mockProcess not set')
      t.equal(
        await mockProcess.stdin.concat(),
        'TAP version 14\nok 1 - this is fine\n1..1\n'
      )
    })
  }
})
