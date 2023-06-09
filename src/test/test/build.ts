import { spawn } from 'node:child_process'
import { resolve } from 'node:path'
import { rimrafSync } from 'rimraf'
import t from 'tap'
const buildScript = require.resolve('../scripts/build.mjs')

import os from 'node:os'
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
const build = async (target: string, plugins: string[]) => {
  return new Promise<Result>((res, rej) => {
    const c = spawn(
      process.execPath,
      ['--no-warnings', buildScript, ...plugins],
      {
        env: {
          ...process.env,
          _TESTING_TEST_BUILD_TARGET_: target,
        },
      }
    )
    c.on('error', rej)
    const out: Buffer[] = []
    const err: Buffer[] = []
    c.stdout.on('data', c => out.push(c))
    c.stderr.on('data', c => err.push(c))
    c.on('close', (code, signal) => {
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
> @tapjs/test-built@0.0.0-0 prepare
> tsc -p tsconfig.json && tsc -p tsconfig-esm.json && bash fixup.sh

`,
  })
})

t.test('missing plugin', async t => {
  const dir = t.testdir()
  const plugin = resolve(dir, 'plugin')
  const target = resolve(dir, 'target')
  const res = await build(target, [plugin])
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
    plugin: {
      'index.cjs': 'exports.pullGrin = () => console.log("yolo")',
      'index.mjs':
        'export const pullGrin = () => console.log("yolo")',
      'package.json': JSON.stringify({
        name: 'bad-plugin',
        main: 'index.cjs',
        module: 'index.mjs',
      }),
    },
    target: {},
  })
  const plugin = resolve(dir, 'plugin')
  const target = resolve(dir, 'target')
  const res = await build(target, [plugin])
  t.same(res, {
    target,
    plugins: [plugin],
    code: 1,
    signal: null,
    stderr:
      `'${plugin}' does not appear to be a tap plugin, ` +
      'as it does not export a plugin function, config object, ' +
      'or loader module identifier.\n',
    stdout: '',
  })
})

t.test('invalid config', async t => {
  const dir = t.testdir({
    plugin: {
      'index.cjs': `exports.config = { foo: { bar: 'baz' }}`,
      'index.mjs': `export const config = { foo: { bar: 'baz' }}`,
      'package.json': JSON.stringify({
        name: 'bad-plugin',
        main: 'index.cjs',
        module: 'index.mjs',
      }),
    },
    target: {},
  })
  const plugin = resolve(dir, 'plugin')
  const target = resolve(dir, 'target')
  const res = await build(target, [plugin])
  t.same(res, {
    target,
    plugins: [plugin],
    code: 1,
    signal: null,
    stderr: `Invalid config option 'foo' defined in plugin: '${plugin}'\n`,
    stdout: '',
  })
})

t.test('no plugins specified', async t => {
  const target = t.testdir()
  // verify that it'll create the target as needed
  rimrafSync(target)
  const res = await build(target, [])
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
    'plug-in': {
      'index.cjs': `exports.plugin = () => ({})`,
      'index.mjs': `const plugin = () => ({})`,
      'index.d.ts': `export const plugin: (t: any, opts?: any) => ({})`,
      'package.json': JSON.stringify({
        main: 'index.cjs',
        module: 'index.mjs',
        types: 'index.d.ts',
      }),
    },
    plugIn: {
      'index.cjs': `exports.plugin = () => ({})`,
      'index.mjs': `const plugin = () => ({})`,
      'index.d.ts': `export const plugin: (t: any, opts?: any) => ({})`,
      'package.json': JSON.stringify({
        main: 'index.cjs',
        module: 'index.mjs',
        types: 'index.d.ts',
      }),
    },
    target: {},
  })
  const p1 = resolve(dir, 'plug-in')
  const p2 = resolve(dir, 'plugIn')
  const target = resolve(dir, 'target')
  const res = await build(target, [p1, p2])
  t.same(res, {
    target,
    plugins: [p1, p2],
    code: 0,
    signal: null,
    stderr: '',
    stdout: `
> @tapjs/test-built@0.0.0-0 prepare
> tsc -p tsconfig.json && tsc -p tsconfig-esm.json && bash fixup.sh

`,
  })
})
