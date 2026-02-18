import { spawn } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { resolveImportSync } from 'resolve-import/resolve-import-sync'
import { rimrafSync } from 'rimraf'
import t from 'tap'
const buildScriptURL = resolveImportSync(
  '../dist/esm/build.mjs',
  import.meta.url,
)
if (!buildScriptURL) throw new Error('could not load build script')
const buildScript = fileURLToPath(buildScriptURL)

import { lstatSync, readFileSync, readlinkSync } from 'node:fs'
import os from 'node:os'
import { fileURLToPath } from 'node:url'
const p =
  os.availableParallelism ? os.availableParallelism() : os.cpus().length
t.jobs = Math.max(1, Math.ceil(p / 2 || 1))

interface Result {
  target: string
  plugins: string[]
  stdout: string
  stderr: string
  code: number | null
  signal: NodeJS.Signals | null
}
const build = async (
  target: string,
  plugins: string[],
  expectFail = false,
  cwd = process.cwd(),
) => {
  const cmd = `_TESTING_TEST_BUILD_TARGET_=${target} ${
    process.execPath
  } ${[buildScript, ...plugins].map(a => JSON.stringify(a)).join(' ')}`
  return new Promise<Result>((res, rej) => {
    const c = spawn(process.execPath, [buildScript, ...plugins], {
      cwd,
      env: {
        ...process.env,
        _TESTING_TEST_BUILD_TARGET_: target,
      },
    })
    c.on('error', rej)
    const out: Buffer[] = []
    const err: Buffer[] = []
    c.stdout.on('data', c => out.push(c))
    c.stderr.on('data', c => err.push(c))
    c.on('close', (code, signal) => {
      if (expectFail !== !!(code || signal))
        console.error(cmd, { code, signal })
      res({
        target,
        plugins,
        code,
        signal,
        stdout: Buffer.concat(out).toString(),
        stderr: Buffer.concat(err).toString(),
      })
    })
  })
}

t.test('good plugins, sort order tests', async t => {
  const plugins = [
    // intentionally unsorted
    '@tapjs/typescript',
    '@tapjs/dummy-plugin',
    '@tapjs/worker',
    '@tapjs/asserts',
  ]
  let built: string
  t.jobs = 3
  t.test('unsorted', async t => {
    const dir = t.testdir()
    const res = await build(dir, plugins)
    t.same(res, {
      target: dir,
      plugins,
      code: 0,
      signal: null,
      stderr: '',
      stdout: '',
    })
    const result = readFileSync(resolve(dir, 'src/index.ts'), 'utf8')
    built ??= result
    t.equal(result, built)
  })
  t.test('sorted', async t => {
    const dir = t.testdir()
    const sorted = plugins.sort((a, b) => a.localeCompare(b, 'en'))
    t.same(await build(dir, sorted), {
      target: dir,
      plugins: sorted,
      code: 0,
      signal: null,
      stderr: '',
      stdout: '',
    })
    const result = readFileSync(resolve(dir, 'src/index.ts'), 'utf8')
    built ??= result
    t.equal(result, built)
  })
  t.test('rsorted', async t => {
    const dir = t.testdir()
    const rsorted = plugins.sort((a, b) => a.localeCompare(b, 'en'))
    t.same(await build(dir, rsorted), {
      target: dir,
      plugins: rsorted,
      code: 0,
      signal: null,
      stderr: '',
      stdout: '',
    })
    const result = readFileSync(resolve(dir, 'src/index.ts'), 'utf8')
    built ??= result
    t.equal(result, built)
  })
})

t.test('missing plugin', async t => {
  const dir = t.testdir()
  const plugin = resolve(dir, 'plugin')
  const target = resolve(dir, 'target')
  const res = await build(target, [plugin], true)
  t.matchOnly(res, {
    target,
    plugins: [plugin],
    code: 1,
    signal: null,
    stderr:
      `'${plugin}' does not appear to be a tap plugin. ` +
      `Could not load module with require(). Cannot find module '${plugin}'`,
    stdout: '',
  })
})

t.test('invalid plugin', async t => {
  const dir = t.testdir({
    node_modules: {
      plugin: {
        'index.cjs': 'exports.pullGrin = () => console.log("yolo")',
        'index.mjs': 'export const pullGrin = () => console.log("yolo")',
        'package.json': JSON.stringify({
          name: 'bad-plugin',
          exports: {
            import: './index.mjs',
            require: './index.cjs',
            types: './index.d.ts',
          },
        }),
      },
    },
    target: {},
  })
  const plugin = 'plugin'
  const target = resolve(dir, 'target')
  const res = await build(target, [plugin], true)
  t.matchOnly(res, {
    target,
    plugins: [plugin],
    code: 1,
    signal: null,
    stderr: `'${plugin}' does not appear to be a tap plugin. `,
    stdout: '',
  })
})

t.test('invalid config', async t => {
  const dir = t.testdir({
    node_modules: {
      plugin: {
        'index.cjs': `exports.config = { foo: { bar: 'baz' }}`,
        'index.mjs': `export const config = { foo: { bar: 'baz' }}`,
        'package.json': JSON.stringify({
          name: 'bad-plugin',
          exports: {
            import: './index.mjs',
            require: './index.cjs',
            types: './index.d.ts',
          },
        }),
      },
    },
    target: {},
  })
  const plugin = 'plugin'
  const target = resolve(dir, 'target')
  const res = await build(target, [plugin], true)
  t.same(res, {
    target,
    plugins: [plugin],
    code: 1,
    signal: null,
    stderr: `Invalid config option 'foo' defined in plugin: '${plugin}'\n`,
    stdout: '',
  })
})

t.test('invalid testFileExtensions, not an array', async t => {
  const dir = t.testdir({
    node_modules: {
      plugin: {
        'index.cjs': `
        exports.plugin = () => ({ x: true })
        exports.testFileExtensions = true
      `,
        'index.mjs': `
        export const plugin = () => ({ x: true })
        export const testFileExtensions = true
      `,
        'package.json': JSON.stringify({
          name: 'bad-plugin',
          exports: {
            import: './index.mjs',
            require: './index.cjs',
            types: './index.d.ts',
          },
        }),
      },
    },
    target: {},
  })
  const plugin = 'plugin'
  const target = resolve(dir, 'target')
  const res = await build(target, [plugin], true)
  t.same(res, {
    target,
    plugins: [plugin],
    code: 1,
    signal: null,
    stderr: `'${plugin}' exports an invalid testFileExtensions. Must be string[].\n`,
    stdout: '',
  })
})

t.test('invalid testFileExtensions, contains non-string', async t => {
  const dir = t.testdir({
    node_modules: {
      plugin: {
        'index.cjs': `
        exports.plugin = () => ({ x: true })
        exports.testFileExtensions = ['a', 1]
      `,
        'index.mjs': `
        export const plugin = () => ({ x: true })
        export const testFileExtensions = ['a', 1]
      `,
        'package.json': JSON.stringify({
          name: 'bad-plugin',
          exports: {
            import: './index.mjs',
            require: './index.cjs',
            types: './index.d.ts',
          },
        }),
      },
    },
    target: {},
  })
  const plugin = 'plugin'
  const target = resolve(dir, 'target')
  const res = await build(target, [plugin], true)
  t.same(res, {
    target,
    plugins: [plugin],
    code: 1,
    signal: null,
    stderr: `'${plugin}' exports an invalid testFileExtensions. Must be string[].\n`,
    stdout: '',
  })
})

t.test('no plugins specified', async t => {
  const target = t.testdir()
  // verify that it'll create the target as needed
  rimrafSync(target)
  const res = await build(target, [], true)
  t.same(res, {
    target,
    plugins: [],
    code: 1,
    signal: null,
    stderr: `usage: generate-tap-test-class [...plugins]\n`,
    stdout: '',
  })
})

// this one can't be parallelized, so un-buffer it
t.test('disambiguate plugin names', async t => {
  const fixture = {
    'package.json': JSON.stringify({
      tap: {
        plugin: ['plug-in', 'plugIn'],
      },
    }),
    '.tap': { plugins: { node_modules: {} } },
    node_modules: {
      'plug-in': {
        'index.cjs': `exports.plugin = () => ({})`,
        'index.mjs': `export const plugin = () => ({})`,
        'index.d.ts': `export const plugin: (t: any, opts?: any) => ({})`,
        'package.json': JSON.stringify({
          name: 'plug-in',
          exports: {
            import: './index.mjs',
            require: './index.cjs',
            types: './index.d.ts',
          },
        }),
      },
      plugIn: {
        'index.cjs': `exports.plugin = () => ({})`,
        'index.mjs': `export const plugin = () => ({})`,
        'index.d.ts': `export const plugin: (t: any, opts?: any) => ({})`,
        'package.json': JSON.stringify({
          name: 'plugIn',
          exports: {
            import: './index.mjs',
            require: './index.cjs',
            types: './index.d.ts',
          },
        }),
      },
    },
    target: {},
  } as const

  const core = dirname(
    fileURLToPath(
      resolveImportSync('@tapjs/core/package.json', import.meta.url),
    ),
  )
  const pluginCore = resolve(
    t.testdirName,
    '.tap/plugins/node_modules/@tapjs/core',
  )

  t.testdir(fixture)
  t.throws(() => lstatSync(pluginCore), { code: 'ENOENT' })
  const p1 = 'plug-in'
  const p2 = 'plugIn'
  const dir = t.testdirName
  const target = resolve(dir, 'target')
  const res = await build(target, [p1, p2], false, dir)
  t.same(res, {
    target,
    plugins: [p1, p2],
    code: 0,
    signal: null,
    stderr: '',
    stdout: '',
  })
  t.equal(readlinkSync(pluginCore), core)
})
