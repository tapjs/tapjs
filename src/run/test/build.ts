import { LoadedConfig } from '@tapjs/config'
import t from 'tap'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const tmbin = require.resolve('.bin/generate-tap-test-class')

const config = {
  pluginList: ['a', 'b', 'c'],
} as unknown as LoadedConfig

t.test('build does not take positional args', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), 'build', 'x'],
  })
  const { build } = (await t.mockImport('../dist/esm/build.js', {
    '../dist/esm/main-config.js': {
      mainCommand: 'build',
    },
  })) as typeof import('../dist/esm/build.js')
  t.rejects(build(['x'], config), {
    message: 'build command does not take positional arguments',
    name: 'TypeError',
  })
})

t.test('build success, main command, allow fg exit', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), 'build'],
  })
  const { build } = (await t.mockImport('../dist/esm/build.js', {
    '../dist/esm/main-config.js': {
      mainCommand: 'build',
    },
    'foreground-child': {
      foregroundChild: (
        cmd: string,
        args: string[],
        options: any,
        cb: (
          code: number | null,
          signal: NodeJS.Signals | null
        ) => void | false
      ) => {
        t.equal(cmd, process.execPath)
        t.strictSame(options, {})
        t.strictSame(args, [
          tmbin,
          'a',
          'b',
          'c',
        ])
        t.equal(cb(0, null), undefined)
      },
    },
  })) as typeof import('../dist/esm/build.js')

  await build([], config)
})

t.test('build failure, main command, allow fg exit', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), 'build'],
  })
  const { build } = (await t.mockImport('../dist/esm/build.js', {
    '../dist/esm/main-config.js': {
      mainCommand: 'build',
    },
    'foreground-child': {
      foregroundChild: (
        cmd: string,
        args: string[],
        options: any,
        cb: (
          code: number | null,
          signal: NodeJS.Signals | null
        ) => void | false
      ) => {
        t.equal(cmd, process.execPath)
        t.strictSame(options, {})
        t.strictSame(args, [
          tmbin,
          'a',
          'b',
          'c',
        ])
        t.equal(cb(null, 'SIGTERM'), undefined)
      },
    },
  })) as typeof import('../dist/esm/build.js')

  await build([], config)
})

t.test('build success, subcommand, cancel exit', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), 'build'],
  })
  const { build } = (await t.mockImport('../dist/esm/build.js', {
    '../dist/esm/main-config.js': {
      mainCommand: 'run',
    },
    'foreground-child': {
      foregroundChild: (
        cmd: string,
        args: string[],
        options: any,
        cb: (
          code: number | null,
          signal: NodeJS.Signals | null
        ) => void | false
      ) => {
        t.equal(cmd, process.execPath)
        t.strictSame(options, {})
        t.strictSame(args, [
          tmbin,
          'a',
          'b',
          'c',
        ])
        t.equal(cb(0, null), false)
      },
    },
  })) as typeof import('../dist/esm/build.js')

  await build([], config)
})

t.test('build fail, subcommand, fail with status', async t => {
  t.intercept(process, 'argv', {
    value: [...process.argv.slice(0, 2), 'build'],
  })
  const { build } = (await t.mockImport('../dist/esm/build.js', {
    '../dist/esm/main-config.js': {
      mainCommand: 'run',
    },
    'foreground-child': {
      foregroundChild: (
        cmd: string,
        args: string[],
        options: any,
        cb: (
          code: number | null,
          signal: NodeJS.Signals | null
        ) => void | false
      ) => {
        t.equal(cmd, process.execPath)
        t.strictSame(options, {})
        t.strictSame(args, [
          tmbin,
          'a',
          'b',
          'c',
        ])
        t.equal(cb(1, null), false)
      },
    },
  })) as typeof import('../dist/esm/build.js')

  t.rejects(build([], config), {
    message: 'build failed',
    code: 1,
    signal: null,
  })
})
