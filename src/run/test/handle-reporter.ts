import { LoadedConfig } from '@tapjs/config'
import { Minimal, TAP, TestBase } from '@tapjs/core'
import type { TapReportOpts } from '@tapjs/reporter'
import * as REPORTER from '@tapjs/reporter'
import { Minipass } from 'minipass'
import * as CP from 'node:child_process'
import { SpawnOptions } from 'node:child_process'
import { readFileSync, statSync } from 'node:fs'
import { relative, resolve } from 'node:path'
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
let mockProcess: {
  stdin: Minipass<string>
  stdout: Minipass<string> | null
}
const mockCP = t.createMock(CP, {
  spawn: (cmd: string, args: string[], options: SpawnOptions) => {
    spawnCalled.push([cmd, args, options])
    return (mockProcess = {
      stdin: new Minipass<string>({ encoding: 'utf8' }),
      stdout:
        options?.stdio?.[1] === 'pipe'
          ? new Minipass<string>({ encoding: 'utf8' })
          : null,
    })
  },
})

import which from 'which'

import * as FS from 'node:fs'
let fileWriteStream: FS.WriteStream | undefined = undefined
const mockFS = t.createMock(FS, {
  createWriteStream: (path: string) => {
    if (fileWriteStream) {
      throw new Error('multiple fs write streams created')
    }
    fileWriteStream = FS.createWriteStream(path)
    fileWriteStream.on('finish', () => (fileWriteStream = undefined))
    return fileWriteStream
  },
})

const { handleReporter } = (await t.mockImport(
  '../dist/esm/handle-reporter.js',
  {
    '@tapjs/reporter': mockReporter,
    'node:child_process': mockCP,
    'node:fs': mockFS,
    './fixtures/custom-react-reporter/index.js': await import(
      './fixtures/custom-react-reporter/index.js'
    ),
    './fixtures/custom-stream-reporter/index.js': await import(
      './fixtures/custom-stream-reporter/index.js'
    ),
    which: (path: string) =>
      path === 'test-exe-reporter' ? `/bin/${path}` : which(path),
  }
)) as typeof import('../dist/esm/handle-reporter.js')

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
    const config = {
      get: (key: string) =>
        key === 'reporter-file' ? undefined : 'tap',
    } as unknown as LoadedConfig
    t.equal(await handleReporter(tb as TAP, config), false)
    tb.pass('this is fine')
    tb.end()
    t.match(await output, 'ok 1 - this is fine\n')
  })

  t.test('TAP=1 env', async t => {
    process.env.TAP = '1'
    const dir = t.testdir()
    const stdout = new Minipass<string>({ encoding: 'utf8' })
    const output = stdout.concat()
    t.intercept(process, 'stdout', { value: stdout })
    const tb = new Minimal({ name: 'raw tap output' })
    // have to manually end the pipe because it's stdout allegedly
    tb.on('end', () => stdout.end())
    const config = {
      get: (key: string) =>
        key === 'reporter-file'
          ? resolve(dir, 'should-not-exist')
          : 'base',
    } as unknown as LoadedConfig
    t.equal(await handleReporter(tb as TAP, config), false)
    tb.pass('this is fine')
    tb.end()
    t.match(await output, 'ok 1 - this is fine\n')
    t.throws(
      () => statSync(resolve(dir, 'should-not-exist')),
      'no reporter-file for TAP=1 test process'
    )
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
      get: (key: string) =>
        key === 'reporter-file'
          ? undefined
          : 'unknown !# reporter $@ not exist \x06\x07',
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
  const config = {
    get: (key: string) =>
      key === 'reporter-file' ? undefined : 'base',
  } as unknown as LoadedConfig
  t.equal(await handleReporter(tb as TAP, config), true)
  t.strictSame(reporterCalled, [['base', tb, config]])
})

t.test('silent', async t => {
  let registerCalled = false
  const tb = Object.assign(
    new Minimal({
      name: 'base reporter',
    }),
    {
      register: () => (registerCalled = true),
      pipe: () => {
        throw new Error('should not pipe anywhere')
      },
    }
  )
  const dir = t.testdir()
  const config = {
    get: (key: string) =>
      key === 'reporter-file'
        ? resolve(dir, 'should-not-exist')
        : 'silent',
  } as unknown as LoadedConfig
  t.equal(await handleReporter(tb as unknown as TAP, config), true)
  t.strictSame(reporterCalled, [])
  t.equal(tb.flowing, true)
  t.equal(registerCalled, true, 'register called')
  t.throws(
    () => statSync(resolve(dir, 'should-not-exist')),
    'no reporter-file for silent reporter'
  )
})

t.test('silent because -R/dev/null', async t => {
  let registerCalled = false
  const tb = Object.assign(
    new Minimal({
      name: 'base reporter',
    }),
    {
      register: () => (registerCalled = true),
      pipe: () => {
        throw new Error('should not pipe anywhere')
      },
    }
  )
  const config = {
    get: (key: string) =>
      key === 'reporter-file' ? '/dev/null' : 'json',
  } as unknown as LoadedConfig
  t.equal(await handleReporter(tb as unknown as TAP, config), true)
  t.strictSame(reporterCalled, [])
  t.equal(tb.flowing, true)
  t.equal(registerCalled, true, 'register called')
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
  const config = {
    get: (key: string) => (key === 'reporter-file' ? undefined : p),
  } as unknown as LoadedConfig
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
  const config = {
    get: (key: string) => (key === 'reporter-file' ? undefined : p),
  } as unknown as LoadedConfig
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

t.test('custom stream reporter to file', async t => {
  const file = resolve(t.testdir(), 'file')
  t.intercept(process, 'stdout', {
    value: {
      write() {
        throw new Error('should not write to stdout')
      },
    },
  })
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
  const config = {
    get: (key: string) => (key === 'reporter-file' ? file : p),
  } as unknown as LoadedConfig
  t.equal(await handleReporter(tb as TAP, config), false)
  const done = new Promise<void>(res => {
    if (!fileWriteStream) {
      throw new Error('no fs write stream created')
    }
    fileWriteStream.on('close', () => {
      t.match(
        readFileSync(file, 'utf8'),
        'TAP version 14\nok 1 - this is fine\n1..1\n' +
          JSON.stringify(tb.results),
        'report output'
      )
      res()
    })
  })
  tb.pass('this is fine')
  tb.end()
  t.strictSame(reporterCalled, [], 'did not use @tapjs/reporter')
  const i = instances()
  t.equal(i.length, 1)
  await done
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

t.test('custom cli program reporter to file', async t => {
  const cases = {
    'with args': [
      ['some', 'args'],
      ['some', 'args'],
    ],
    'no args': [undefined, []],
  }
  const file = resolve(t.testdir(), 'file')
  for (const [name, [cnf, args]] of Object.entries(cases)) {
    t.test(name, async t => {
      const tb = new Minimal({ name: 'custom stream reporter' })
      const config = {
        get: (k: string) =>
          k === 'reporter'
            ? 'test-exe-reporter'
            : k === 'reporter-arg'
            ? cnf
            : k === 'reporter-file'
            ? file
            : undefined,
      } as unknown as LoadedConfig
      t.equal(await handleReporter(tb as TAP, config), false)
      tb.pass('this is fine')
      tb.end()
      t.strictSame(reporterCalled, [], 'did not use @tapjs/reporter')
      const cmd = '/bin/test-exe-reporter'
      const opt = {
        shell: true,
        stdio: ['pipe', 'pipe', 'inherit'],
      }
      t.strictSame(spawnCalled, [[cmd, args, opt]], 'spawn called')
      if (!mockProcess) throw new Error('mockProcess not set')
      const done = new Promise<void>(res => {
        if (!fileWriteStream) {
          throw new Error('no fileWriteStream created')
        }
        fileWriteStream.on('close', () => {
          t.equal(readFileSync(file, 'utf8'), 'exe reporter output')
          res()
        })
      })
      t.ok(mockProcess.stdout, 'piping stdout')
      t.equal(
        await mockProcess.stdin.concat(),
        'TAP version 14\nok 1 - this is fine\n1..1\n'
      )
      mockProcess.stdout?.end('exe reporter output')
      await mockProcess.stdout?.promise()
      await done
    })
  }
})
