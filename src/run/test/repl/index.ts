import { LoadedConfig } from '@tapjs/config'
import { ChildProcess, spawn, SpawnOptions } from 'child_process'
import { ChokidarOptions } from 'chokidar'
import { readdirSync, utimesSync, writeFileSync } from 'fs'
import { Minipass } from 'minipass'
import * as CP from 'node:child_process'
import EventEmitter from 'node:events'
import { resolve } from 'node:path'
import { ReplOptions } from 'node:repl'
import { ReadStream, WriteStream } from 'node:tty'
import { fileURLToPath } from 'node:url'
import { basename } from 'path'
import { resolveImportSync } from 'resolve-import/resolve-import-sync'
import t from 'tap'
import { options as watchOptions } from '../../dist/esm/repl/chokidar-options.js'
const bin = fileURLToPath(
  resolveImportSync('../../dist/esm/index.js', import.meta.url),
)

// just run tests in raw TAP mode
process.env.TAP = '1'
process.env.TAP_REPORTER = 'tap'

t.cleanSnapshot = s =>
  s
    .replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')
    .replace(/SIG[A-Z]+/g, '{SIGNAL}')
    .replaceAll('\x1b[?25h', '')
    .replaceAll('\\u001b[?25h', '')
    .replace(/TAP\> /g, '')

const mockFSWatcher = new (class extends EventEmitter {
  running: boolean = true
  close() {
    this.running = false
    this.removeAllListeners()
  }
})()

const mockChokidar = new (class {
  files?: string[]
  watch(fileList: string[], opts: ChokidarOptions) {
    if (!t.strictSame(opts, watchOptions, 'expected watch options')) {
      throw new Error('got incorrect chokidar options')
    }
    this.files = fileList
    return mockFSWatcher
  }
})()

const mockRepl = new (class extends EventEmitter {
  historyPath?: string
  start(options: ReplOptions) {
    Object.assign(this, options)
    return this
  }
  setupHistory(path: string, fn: Function) {
    this.historyPath = path
    fn()
  }
  on(ev: string, listener: (...a: any[]) => any) {
    if (ev !== 'SIGINT') {
      throw new Error('unexpected event listened for: ' + ev)
    }
    return super.on(ev, listener)
  }
})()

const mockSpawn = (cmd: string, args: string[], options: SpawnOptions) => {
  t.equal(options.stdio, 'inherit')
  t.equal(options.env?._TAP_REPL, '1')
  let exited = false
  const exit = (code: number | null, signal: NodeJS.Signals | null) => {
    if (!exited) {
      exited = true
      proc.emit('close', code, signal)
    }
  }
  const proc = Object.assign(new EventEmitter(), {
    cmd,
    args,
    kill: (signal: NodeJS.Signals) => exit(null, signal),
    exit: (code: number) => exit(code, null),
  })
  setTimeout(() => proc.exit(0))
  return proc
}

type Result = {
  code: null | number
  signal: null | NodeJS.Signals
  stdout: string
  stderr: string
}

interface PromiseWithProcess<T> extends Promise<T> {
  proc: ChildProcess
}

const node = process.execPath
const run = (
  cwd: string,
  args: string[] = [],
  stdin?: string,
  testEnv: Record<string, string | undefined> = {},
): PromiseWithProcess<Result> => {
  const env = Object.assign(
    Object.fromEntries(
      Object.entries(process.env).filter(([k]) => !/TAP/.test(k)),
    ),
    testEnv,
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
  const proc = spawn(node, [bin, 'repl', ...args], { cwd, env })

  const out: Buffer[] = []
  proc.stdout.on('data', c => out.push(c))

  const err: Buffer[] = []
  proc.stderr.on('data', c => err.push(c))

  if (stdin !== undefined) proc.stdin.end(stdin)

  return Object.assign(
    new Promise<Result>(res =>
      proc.on('close', (code, signal) => {
        res({
          code,
          signal,
          stdout: Buffer.concat(out).toString(),
          stderr: Buffer.concat(err).toString(),
        })
      }),
    ),
    { proc },
  ) as PromiseWithProcess<Result>
}

// run a few simple commands directly so we can cover running without args
// the rest will be spawned, so we can capture stdout properly.
t.test('default options', async t => {
  const { Repl } = await t.mockImport<
    typeof import('../../dist/esm/repl/index.js')
  >('../../dist/esm/repl/index.js', {
    'node:repl': { start: mockRepl.start.bind(mockRepl) },
    chokidar: { watch: mockChokidar.watch.bind(mockChokidar) },
  })

  const dir = t.testdir({ '.tap': { processinfo: {} } })
  const r = new Repl({
    projectRoot: dir,
    get: () => {},
  } as unknown as LoadedConfig)
  t.equal(r.input, process.stdin)
  t.equal(r.output, process.stdout)
  t.equal(r.dir, resolve(dir, '.tap'))
  t.equal(r.processInfo.dir, resolve(dir, '.tap/processinfo'))
  t.equal(r.saveFile, resolve(dir, '.tap/repl_failures'))
})

t.test('show help', async t => {
  const dir = t.testdir({
    '.tap': {
      processinfo: {},
    },
    '.taprc': 'jobs: 4',
    '.git': {},
  })
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir(dir)

  const { Repl } = await t.mockImport<
    typeof import('../../dist/esm/repl/index.js')
  >('../../dist/esm/repl/index.js', {
    'node:repl': { start: mockRepl.start.bind(mockRepl) },
    chokidar: { watch: mockChokidar.watch.bind(mockChokidar) },
  })

  const input = new Minipass<string>({ encoding: 'utf8' })
  const output = new Minipass<string>({ encoding: 'utf8' })

  const r = new Repl(
    {
      projectRoot: dir,
      get: () => {},
    } as unknown as LoadedConfig,
    input as unknown as ReadStream,
    output as unknown as WriteStream,
  )
  r.start()
  const help = await r.parseCommand('h')
  t.matchSnapshot(help)
  t.equal(await r.parseCommand('?'), help)
  t.equal(await r.parseCommand('-h'), help)
  t.equal(await r.parseCommand('help'), help)
  t.equal(await r.parseCommand('--help'), help)
  t.equal(await r.parseCommand('aieahef8a9hg8h'), help)

  // throw these in here too, while we have a local repl obj
  t.equal(await r.parseCommand('cls'), '\u001b[2J\u001b[H')
  t.equal(await r.parseCommand(''), undefined)

  t.equal(await r.parseCommand('f?'), 'no failed tests from previous runs')

  let spawnTapCalled: any = false
  //@ts-ignore
  r.spawnTap = (args: string[]) => {
    spawnTapCalled = args
  }
  await r.parseCommand('tap help')
  t.strictSame(spawnTapCalled, ['help'])
  await r.parseCommand('u foo.test.mjs')
  t.strictSame(spawnTapCalled, ['run', 'foo.test.mjs'])
  const { exit } = r
  let exitCalled = false
  r.exit = () => {
    exitCalled = true
    exit.call(r)
  }
  await r.parseCommand('exit')
  t.equal(exitCalled, true)
})

t.test('sigint handling', async t => {
  t.intercept(process, 'pid', { value: 123 })
  const kills = t.capture(process, 'kill')

  const dir = t.testdir({
    '.tap': {
      processinfo: {},
    },
    '.taprc': 'jobs: 4',
    '.git': {},
  })
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir(dir)

  const { Repl } = await t.mockImport<
    typeof import('../../dist/esm/repl/index.js')
  >('../../dist/esm/repl/index.js', {
    'node:repl': { start: mockRepl.start.bind(mockRepl) },
    chokidar: { watch: mockChokidar.watch.bind(mockChokidar) },
  })

  const input = new Minipass<string>({ encoding: 'utf8' })
  const output = new Minipass<string>({ encoding: 'utf8' })

  const r = new Repl(
    {
      projectRoot: dir,
      get: () => {},
    } as unknown as LoadedConfig,
    input as unknown as ReadStream,
    output as unknown as WriteStream,
  )
  r.start()
  const proc = {
    killed: '',
    kill: (sig: NodeJS.Signals) => {
      proc.killed = sig
      r.proc = undefined
    },
  }
  Object.assign(r, { proc })
  if (!r.repl) throw new Error('no repl??')
  r.repl.emit('SIGINT')
  t.equal(r.proc, undefined, 'subproc removed')
  t.equal(proc.killed, 'SIGINT', 'subproc killed with sigint')
  t.strictSame(kills(), [], 'did not kill main process')
  r.repl.emit('SIGINT')
  t.strictSame(kills.args(), [[123, 'SIGINT']], 'killed main process')
  output.end()
  // the first prints nothing, the second prints ^C, then show cursor
  t.equal(await output.concat(), '\n^C\n\x1B[?25h')
})

t.test('parse some tap', async t => {
  const dir = t.testdir({
    '.tap': {
      processinfo: {},
    },
    '.taprc': `
jobs: 4
coverage-map: map.js
    `,
    '.git': {},
    'foo.test.mjs': `
      import t from 'tap'
      import { foo } from './foo.mjs'
      t.equal(foo(), 'foo')
    `,
    'foo.mjs': `
      export const foo = () => 'foo'
    `,
    'map.js': `export default () => 'foo.mjs'`,
  })

  t.matchSnapshot(
    await run(
      dir,
      [],
      `parse\n
TAP version 14
# Subtest: child
    1..1
    ok 1 - assert in child test
ok 1 - child
ok 2 - other assertion
1..2
`,
    ),
  )
})

t.test('run the suite', async t => {
  // testdirs are excluded file file tracking, so use a different name
  t.testdirName = t.testdirName.replace(/\.tap[\\\/]fixtures/, 'XXX')

  const dir = t.testdir({
    '.tap': {
      processinfo: {},
    },
    '.taprc': `
jobs: 4
coverage-map: map.js
    `,
    '.git': {},
    'foo.test.mjs': `
      import t from 'tap'
      import { foo } from './foo.mjs'
      t.equal(foo(), 'foo')
    `,
    'foo.mjs': `
      export const foo = () => 'foo'
    `,
    'map.js': `export default () => 'foo.mjs'`,
  })
  t.test('normal run', async t => {
    const res = await run(dir, [], 'r\n')
    t.equal(res.code, 0)
    t.equal(res.signal, null)
    t.equal(res.stderr, '')
    t.matchSnapshot(res.stdout)
  })

  t.test('kill tests with ^C', async t => {
    // separate dir, because this one is a jerk
    const dir = t.testdir({
      '.tap': {
        processinfo: {},
      },
      '.taprc': `
jobs: 4
coverage-map: map.js
    `,
      '.git': {},
      'foo.test.mjs': `
      console.error('TEST RUNNING')
      // become ungovernable
      process.on('SIGINT', () => {})
      process.on('SIGTERM', () => {})
    `,
      'foo.mjs': `
      export const foo = () => 'foo'
    `,
      'map.js': `export default () => 'foo.mjs'`,
    })
    const p = run(dir, [], 'r\nlist\n', {
      _TAP_REPL_KILL_TIMEOUT: '1',
    })
    p.proc.stderr?.once('data', () => p.proc.kill('SIGINT'))
    const res = await p
    t.equal(res.code, 0)
    t.equal(res.signal, null)
    t.equal(res.stderr, 'TEST RUNNING\n')
    t.matchSnapshot(res.stdout)
  })

  t.test('completions', async t => {
    const cwd = process.cwd()
    t.teardown(() => process.chdir(cwd))
    process.chdir(dir)

    // test after running, so that we can see processinfo completions
    const { Repl } = await t.mockImport<
      typeof import('../../dist/esm/repl/index.js')
    >('../../dist/esm/repl/index.js', {
      'node:repl': { start: mockRepl.start.bind(mockRepl) },
      chokidar: { watch: mockChokidar.watch.bind(mockChokidar) },
    })

    const r = new Repl({
      projectRoot: dir,
      get: () => {},
    } as unknown as LoadedConfig)

    for (const fc of ['r', 'u', 'n', 'f']) {
      const i = `${fc} fo`
      t.strictSame(r.completer(i), [[`${i}o.mjs`, `${i}o.test.mjs`], i])
      const j = `${fc} foo.t`
      t.strictSame(r.completer(j), [[`${j}est.mjs `], j])
    }
    for (const fc of [
      'f?',
      'w',
      'w?',
      'cls',
      'parse',
      'build',
      'version',
      'versions',
      'list',
      'config',
    ]) {
      t.strictSame(r.completer(fc), [[fc], fc])
    }
    t.strictSame(r.completer('i '), [['i foo.test.mjs '], 'i '])
    t.strictSame(r.completer('ver'), [['version', 'versions'], 'ver'])
  })

  t.test('get processinfo', async t => {
    const res = await run(dir, [], 'i foo.test.mjs\n')
    t.match(res, { code: 0, signal: null })
    t.ok(
      res.stdout.startsWith(`TAP> i foo.test.mjs
foo.test.mjs:
  date:`),
    )
    const piFiles = readdirSync(resolve(dir, '.tap/processinfo'))
    t.equal(piFiles.length, 1)
    const uuid = basename(String(piFiles[0]), '.json')
    const byUuid = await run(dir, [], `i ${uuid}\n`)
    t.strictSame(
      res.stdout.split(/[\r\n]+/).slice(2),
      byUuid.stdout.split(/[\r\n]+/).slice(2),
      'same entry two different ways',
    )
    t.matchSnapshot(
      await run(dir, [], 'i not-a-valid-id\n'),
      'no data found',
    )
    t.matchSnapshot(await run(dir, [], 'i\n'), 'no id provided')
  })

  t.test('processinfo with child processes', async t => {
    writeFileSync(
      dir + '/cp.test.mjs',
      `
      import t from 'tap'
      t.spawn(process.execPath, ['./foo.test.mjs'], { externalID: 'blah' })
    `,
    )
    await run(dir, ['r', 'cp.test.mjs'], '')
    const res = await run(dir, [], 'i cp.test.mjs\n')
    t.ok(
      res.stdout.startsWith(`TAP> i cp.test.mjs
cp.test.mjs:
  date:`),
    )
    t.match(res.stdout, 'children:')
  })

  t.test('update snapshots', async t => {
    const res = await run(dir, [], 'u\n')
    t.match(res, { code: 0, signal: null })
  })

  t.test('run changed', async t => {
    const unchanged = await run(dir, [], 'n\n')
    utimesSync(resolve(dir, 'foo.mjs'), new Date(), new Date())
    const changed = await run(dir, [], 'n\n')
    t.matchSnapshot({
      unchanged: unchanged.stdout,
      changed: changed.stdout,
    })
  })

  t.test('run failed', async t => {
    writeFileSync(dir + '/.tap/repl_failures', 'foo.test.mjs\n')
    const res = await run(dir, [], 'f?\nf\n')
    t.match(res, { code: 0, signal: null })
    t.matchSnapshot(res.stdout)
  })

  t.test('list files', async t => {
    const res = await run(dir, [], 'list\n')
    const out = res.stdout.replace(/ /g, '')
    t.match(out, 'foo.test.mjs')
    t.match(out, 'cp.test.mjs')
    t.match(out, 'code:0')
    t.match(out, 'signal:null')
  })

  t.test('run a coverage report', async t => {
    const res = await run(dir, ['c'], '')
    t.match(res.stdout.replace(/ /g, ''), '\nfoo.mjs|100|100|100|100|\n')
  })

  t.test('show watch', async t => {
    t.cleanSnapshot = s =>
      s.replace(/dependency files watched: [0-9]+/g, '{DEP FILES}')
    const res = await run(dir, [], 'w\nw\nw?\nw on\nw on\nw?\nw off\nw?\n')
    t.match(res, { code: 0, signal: null })
    t.matchSnapshot(res.stdout)
  })
})

t.test('watch for changes that happen during a test run', async t => {
  const { Repl } = await t.mockImport<
    typeof import('../../dist/esm/repl/index.js')
  >('../../dist/esm/repl/index.js', {
    'node:repl': { start: mockRepl.start.bind(mockRepl) },
    chokidar: { watch: mockChokidar.watch.bind(mockChokidar) },
    'node:child_process': t.createMock(CP, { spawn: mockSpawn }),
  })

  const dir = t.testdir({ '.tap': { processinfo: {} } })
  const input = new Minipass<string>({ encoding: 'utf8' })
  const output = new Minipass<string>({ encoding: 'utf8' })
  const r = new Repl(
    {
      projectRoot: dir,
      get: () => {},
    } as unknown as LoadedConfig,
    input as unknown as NodeJS.ReadStream,
    output as unknown as NodeJS.WriteStream,
  )
  let paused = false
  Object.assign(r, {
    repl: {
      pause: () => (paused = true),
      displayPrompt: () => output.write('<PROMPT>'),
      setupHistory: () => {},
      on: () => {},
      removeAllListeners: () => {},
      close: () => output.end(),
      resume: () => (paused = false),
    },
  })

  // emit a change while a process is active, but turns out not valid
  Object.assign(r.watch, {
    validateChanges: async () => false,
  })
  r.spawnTap([])
  t.equal(paused, true, 'repl is paused')
  r.watch.onChange()
  await new Promise<void>((res, rej) => {
    if (!r.proc) rej(new Error('expected to have a process going'))
    else r.proc.on('close', () => res())
  })
  t.equal(r.proc, undefined)
  t.equal(paused, false, 'repl is resumed')

  // now emit a change while in progress, but it IS valid
  Object.assign(r.watch, {
    validateChanges: async () => true,
  })
  r.spawnTap([])
  r.watch.onChange()
  await new Promise<void>((res, rej) => {
    if (!r.proc) rej(new Error('expected to have a process going'))
    else r.proc.on('close', () => res())
  })
  t.not(r.proc, undefined)
  // don't run forever though
  Object.assign(r.watch, {
    validateChanges: async () => false,
  })
  await new Promise<void>((res, rej) => {
    if (!r.proc) rej(new Error('expected to have a process going'))
    else r.proc.on('close', () => res())
  })
  t.equal(r.proc, undefined)

  // now spawn a change when we're NOT already running
  r.watch.onChange()
  await new Promise<void>((res, rej) => {
    if (!r.proc) rej(new Error('expected to have a process going'))
    else r.proc.on('close', () => res())
  })
  const showCursor = '\x1B[?25h'
  const out = output.read()
  t.equal(
    out?.split(showCursor).join(''),
    `code: 0
signal: null
change detected
`,
    'got expected output',
  )
})
