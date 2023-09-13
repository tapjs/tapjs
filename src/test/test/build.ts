import { spawn } from 'node:child_process'
import { resolve } from 'node:path'
import { resolveImport } from 'resolve-import'
import { rimrafSync } from 'rimraf'
import t from 'tap'
const buildScriptURL = await resolveImport(
  '../scripts/build.mjs',
  import.meta.url
)
if (!buildScriptURL) throw new Error('could not load build script')
const buildScript = fileURLToPath(buildScriptURL)

import os from 'node:os'
import { fileURLToPath } from 'node:url'
const p = os.availableParallelism
  ? os.availableParallelism()
  : os.cpus().length
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
  expectFail = false
) => {
  const cmd = `_TESTING_TEST_BUILD_TARGET_=${target} ${
    process.execPath
  } ${[buildScript, ...plugins]
    .map(a => JSON.stringify(a))
    .join(' ')}`
  return new Promise<Result>((res, rej) => {
    const c = spawn(process.execPath, [buildScript, ...plugins], {
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

t.test('good plugins', async t => {
  const dir = t.testdir()
  const res = await build(dir, [
    '@tapjs/asserts',
    '@tapjs/dummy-plugin',
  ])
  t.same(res, {
    target: dir,
    plugins: ['@tapjs/asserts', '@tapjs/dummy-plugin'],
    code: 0,
    signal: null,
    stderr: '',
    stdout: `
> @tapjs/test-built@0.0.0 prepare
> tshy

`,
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
        'index.mjs':
          'export const pullGrin = () => console.log("yolo")',
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
    stderr:
      `'${plugin}' does not appear to be a tap plugin. `,
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

t.test('disambiguate plugin names', async t => {
  const dir = t.testdir({
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
  })
  const p1 = 'plug-in'
  const p2 = 'plugIn'
  const target = resolve(dir, 'target')
  const res = await build(target, [p1, p2])
  t.same(res, {
    target,
    plugins: [p1, p2],
    code: 0,
    signal: null,
    stderr: '',
    stdout: `
> @tapjs/test-built@0.0.0 prepare
> tshy

`,
  })
})
