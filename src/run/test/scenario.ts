import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import t from 'tap'
import {
  ScenarioCrashError,
  ScenarioRegistry,
  findScenarioFile,
  isScenarioFile,
  terminateScenario,
} from '../dist/esm/scenario.js'

t.test('isScenarioFile matches #1067 pattern', t => {
  for (const name of [
    '_tap-scenario.ts',
    '_tap-scenario.cts',
    '_tap-scenario.mts',
    '_tap-scenario.js',
    '_tap-scenario.cjs',
    '_tap-scenario.mjs',
  ]) {
    t.equal(isScenarioFile(name), true, name)
  }
  for (const name of [
    'tap-scenario.ts',
    '_tap-scenario.tsx',
    '_tap-scenario.jsx',
    '_tap-scenario.test.ts',
    'test.js',
    '_tap-scenario.',
  ]) {
    t.equal(isScenarioFile(name), false, name)
  }
  t.end()
})

t.test('findScenarioFile', async t => {
  const dir = t.testdir({
    '_tap-scenario.js': 'console.log("ready")',
    'test.js': '',
    nested: {
      '_tap-scenario.mjs': 'console.log("n")',
    },
    empty: {},
  })
  t.equal(await findScenarioFile(dir), resolve(dir, '_tap-scenario.js'))
  t.equal(
    await findScenarioFile(resolve(dir, 'nested')),
    resolve(dir, 'nested/_tap-scenario.mjs'),
  )
  t.equal(await findScenarioFile(resolve(dir, 'empty')), undefined)
  t.equal(await findScenarioFile(resolve(dir, 'missing')), undefined)
})

t.test('terminateScenario escalates signals', async t => {
  // ignore SIGHUP/SIGTERM so we can observe the escalation path.
  // Write to stdout once handlers are armed so we do not race startup.
  const proc = spawn(
    process.execPath,
    [
      '-e',
      `
      process.on('SIGHUP', () => {})
      process.on('SIGTERM', () => {})
      process.stdout.write('armed\\n')
      setInterval(() => {}, 1000)
      `,
    ],
    { stdio: ['ignore', 'pipe', 'ignore'] },
  )
  t.teardown(() => {
    try {
      proc.kill('SIGKILL')
    } catch {}
  })
  await new Promise<void>((res, rej) => {
    proc.stdout?.once('data', () => res())
    proc.once('exit', () => rej(new Error('exited before armed')))
  })
  const start = Date.now()
  await terminateScenario(proc)
  t.ok(
    Date.now() - start >= 2000,
    'waited through SIGHUP and SIGTERM grace',
  )
  t.ok(
    proc.exitCode !== null || proc.signalCode !== null,
    'process exited',
  )
})

t.test('ScenarioRegistry starts, shares, and tears down', async t => {
  const dir = t.testdir({
    '_tap-scenario.js': `
      process.stdout.write('port=4321\\n')
      setInterval(() => {}, 1000)
    `,
    'a.js': '',
    'b.js': '',
  })
  const reg = new ScenarioRegistry([], dir)
  t.teardown(() => reg.dispose())

  const a = await reg.ensure(resolve(dir, 'a.js'))
  t.ok(a)
  t.equal(a?.output, 'port=4321')
  const b = await reg.ensure(resolve(dir, 'b.js'))
  t.equal(b?.output, 'port=4321')
  t.equal(a?.file, b?.file)

  // no scenario in other dirs
  t.equal(await reg.ensure(resolve(dir, '../nope/x.js')), undefined)

  await a!.done()
  // still running until second release
  await b!.done()
})

t.test('concurrent ensure shares one process', async t => {
  const dir = t.testdir({
    'a.js': '',
    'b.js': '',
    'c.js': '',
  })
  const lock = resolve(dir, 'started')
  writeFileSync(
    resolve(dir, '_tap-scenario.js'),
    `
      import { writeFileSync, existsSync } from 'node:fs'
      if (existsSync(${JSON.stringify(lock)})) process.exit(99)
      writeFileSync(${JSON.stringify(lock)}, '1')
      process.stdout.write('once\\n')
      setInterval(() => {}, 1000)
    `,
  )
  const reg = new ScenarioRegistry([], dir)
  t.teardown(() => reg.dispose())
  const handles = await Promise.all([
    reg.ensure(resolve(dir, 'a.js')),
    reg.ensure(resolve(dir, 'b.js')),
    reg.ensure(resolve(dir, 'c.js')),
  ])
  t.equal(handles[0]?.output, 'once')
  t.equal(handles[1]?.output, 'once')
  t.equal(handles[2]?.output, 'once')
  t.equal(handles[0]?.file, handles[1]?.file)
  await handles[0]!.done()
  await handles[1]!.done()
  await handles[2]!.done()
})

t.test(
  'ScenarioRegistry fails if scenario exits before output',
  async t => {
    const dir = t.testdir({
      '_tap-scenario.js': 'process.exit(1)',
      'a.js': '',
    })
    const reg = new ScenarioRegistry([], dir)
    t.teardown(() => reg.dispose())
    await t.rejects(reg.ensure(resolve(dir, 'a.js')), ScenarioCrashError)
  },
)

t.test('ScenarioRegistry fails if scenario crashes mid-run', async t => {
  const dir = t.testdir({
    '_tap-scenario.js': `
      process.stdout.write('ready\\n')
      setTimeout(() => process.exit(2), 50)
    `,
    'a.js': '',
  })
  const reg = new ScenarioRegistry([], dir)
  t.teardown(() => reg.dispose())
  const a = await reg.ensure(resolve(dir, 'a.js'))
  t.equal(a?.output, 'ready')
  await new Promise(r => setTimeout(r, 150))
  await t.rejects(a!.done(), ScenarioCrashError)
})

t.test('ScenarioRegistry.dispose tears down active scenarios', async t => {
  const dir = t.testdir({
    '_tap-scenario.js': `
      process.stdout.write('up\\n')
      setInterval(() => {}, 1000)
    `,
    'a.js': '',
  })
  const reg = new ScenarioRegistry([], dir)
  const a = await reg.ensure(resolve(dir, 'a.js'))
  t.equal(a?.output, 'up')
  await reg.dispose()
  // second dispose is a no-op
  await reg.dispose()
})

t.test('terminateScenario no-ops when already exited', async t => {
  const proc = spawn(process.execPath, ['-e', 'process.exit(0)'], {
    stdio: 'ignore',
  })
  await new Promise<void>(res => proc.once('exit', () => res()))
  await terminateScenario(proc)
  t.pass('already-exited terminate is fine')
})

t.test('stderr before stdout does not count as ready', async t => {
  const dir = t.testdir({
    '_tap-scenario.js': `
      process.stderr.write('noise\\n')
      setTimeout(() => process.stdout.write('ready\\n'), 20)
      setInterval(() => {}, 1000)
    `,
    'a.js': '',
  })
  const reg = new ScenarioRegistry([], dir)
  t.teardown(() => reg.dispose())
  const a = await reg.ensure(resolve(dir, 'a.js'))
  t.equal(a?.output, 'ready')
  await a!.done()
})

t.test('scenario killed by signal before output', async t => {
  const dir = t.testdir({
    '_tap-scenario.js': `
      setInterval(() => {}, 1000)
      process.kill(process.pid, 'SIGKILL')
    `,
    'a.js': '',
  })
  const reg = new ScenarioRegistry([], dir)
  t.teardown(() => reg.dispose())
  await t.rejects(reg.ensure(resolve(dir, 'a.js')), ScenarioCrashError)
})
