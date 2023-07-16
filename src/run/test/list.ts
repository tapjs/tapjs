import t from 'tap'

import * as core from '@tapjs/core'
import { unlinkSync, utimesSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import * as mainConfig from '../dist/main-config.js'

t.test('list some test files', async t => {
  const dir = t.testdir({
    '.git': {},
    'package.json': JSON.stringify({}),
    '.taprc': '',
    'test.js': '',
    'foo.spec.mts': '',
    dist: {
      'index.js': '',
    },
    src: {
      'index.js': '',
      'test.js': '',
      'index.spec.js': '',
      'test.spec.js': '',
    },
    test: {
      'foo.ts': '',
      'foo.mjs': '',
      'foo.cjs': '',
      sub: {
        'sub.mts': '',
      },
      'tap-testdir-foo.mts': {
        'test.js': '',
      },
      // fixtures excluded by default
      fixture: {
        'test.js': '',
        tests: {
          'test.mjs': '',
        },
      },
      fixtures: {
        'test.mjs': '',
        tests: {
          'test.js': '',
        },
      },
    },
    node_modules: {
      test: {
        'test.js': '',
        'blah.js': '',
      },
    },
    'tap-snapshots': {
      test: {
        'foo.ts.test.cjs': '',
      },
    },
  })
  const cwd = process.cwd()
  process.chdir(dir)
  t.teardown(() => process.chdir(cwd))
  t.intercept(mainConfig.config, 'globCwd', { value: dir })

  let saveList: string[] = []
  const mocks = {
    '../dist/main-config.js': t.createMock(mainConfig, {
      mainCommand: 'list',
    }),
    '@tapjs/core': t.createMock(core, { cwd: dir }),
    '../dist/save-list.js': {
      readSave: async () => saveList,
    },
  }

  const logs = t.capture(console, 'log')
  const { list } = (await t.mockImport(
    '../dist/list.js',
    mocks
  )) as typeof import('../dist/list.js')

  const sortedLog = () =>
    logs
      .args()[0][0]
      .trim()
      .split('\n')
      .sort((a: string, b: string) => a.localeCompare(b, 'en'))

  t.test('no args, find files normally', async t => {
    await list([], mainConfig.config)
    t.strictSame(sortedLog(), [
      'foo.spec.mts',
      'src/index.spec.js',
      'src/test.js',
      'src/test.spec.js',
      'test.js',
      'test/foo.cjs',
      'test/foo.mjs',
      'test/foo.ts',
      'test/sub/sub.mts',
    ])
  })

  t.test('expand glob for specific files', async t => {
    await list(['src/*.spec.js', 'test/*.*js'], mainConfig.config)
    t.strictSame(sortedLog(), [
      'src/index.spec.js',
      'src/test.spec.js',
      'test/foo.cjs',
      'test/foo.mjs',
    ])
  })

  t.test('specific files, noent, and stdin', async t => {
    await list(
      ['src/test.spec.js', '/dev/stdin', '-', 'enoent not exists'],
      mainConfig.config
    )
    t.strictSame(sortedLog(), ['-', '/dev/stdin', 'src/test.spec.js'])
  })

  t.test('use default include if not in config', async t => {
    t.intercept(mainConfig.values, 'include', { value: undefined })
    await list([], mainConfig.config)
    t.strictSame(sortedLog(), [
      'foo.spec.mts',
      'src/index.spec.js',
      'src/test.js',
      'src/test.spec.js',
      'test.js',
      'test/foo.cjs',
      'test/foo.mjs',
      'test/foo.ts',
      'test/sub/sub.mts',
    ])
  })

  t.test('before and after excluded', async t => {
    t.intercept(mainConfig.values, 'before', {
      value: 'foo.spec.mts',
    })
    t.intercept(mainConfig.values, 'after', { value: 'test/foo.mjs' })
    await list([], mainConfig.config)
    t.strictSame(sortedLog(), [
      'src/index.spec.js',
      'src/test.js',
      'src/test.spec.js',
      'test.js',
      'test/foo.cjs',
      'test/foo.ts',
      'test/sub/sub.mts',
    ])
  })

  t.test('--save list filters files', async t => {
    saveList = [
      'src/index.spec.js',
      'src/test.spec.js',
      'test/foo.mjs',
      'test/not-existing-file.mjs',
    ].sort(() => Math.random() - 0.5)
    await list([], mainConfig.config)
    t.strictSame(sortedLog(), [
      'src/index.spec.js',
      'src/test.spec.js',
      'test/foo.mjs',
    ])
    saveList = []
  })

  t.test('--save list does not filter out stdin', async t => {
    saveList = [
      'src/index.spec.js',
      'src/test.spec.js',
      'test/foo.mjs',
      'test/not-existing-file.mjs',
    ].sort(() => Math.random() - 0.5)
    await list(['-', ...saveList, '/dev/stdin'], mainConfig.config)
    t.strictSame(sortedLog(), [
      '-',
      '/dev/stdin',
      'src/index.spec.js',
      'src/test.spec.js',
      'test/foo.mjs',
    ])
    saveList = []
  })

  t.test('no files found', async t => {
    const exitCode = t.intercept(process, 'exitCode')
    const errs = t.capture(console, 'error')
    await list(['asdfasfsdf'], mainConfig.config)
    t.match(exitCode(), [{ type: 'set', value: 1 }])
    t.strictSame(errs.args(), [['No files found.']])

    await list(['plugins'], mainConfig.config)
    t.match(exitCode(), [{ type: 'set', value: 1 }])
    t.strictSame(errs.args(), [
      ['No files found.'],
      ["(Did you mean 'tap plugin list'?)"],
    ])
  })

  t.test('expand directory', async t => {
    await list(['test', '-'], mainConfig.config)
    t.strictSame(sortedLog(), [
      '-',
      'test/foo.cjs',
      'test/foo.mjs',
      'test/foo.ts',
      'test/sub/sub.mts',
    ])
  })
})

t.test('filter changed files', async t => {
  const fixture = fileURLToPath(new URL('fixture', import.meta.url))
  const cwd = process.cwd()
  process.chdir(fixture)
  t.teardown(() => process.chdir(cwd))
  t.intercept(mainConfig.config, 'globCwd', { value: fixture })

  const touch = (path: string, d: Date = new Date()) =>
    utimesSync(path, d, d)

  const fooUuid = '0e19020d-2c30-4929-accb-d381e447bd34'
  const barUuid = '84e595f7-33e1-4380-aae5-18e7b96292f4'
  const srcFoo = resolve(fixture, 'foo.mjs')
  const srcBar = resolve(fixture, 'bar.mjs')
  const testFoo = resolve(fixture, 'test/foo.mjs')
  const testBar = resolve(fixture, 'test/bar.mjs')
  const testNew = resolve(fixture, 'test/new.mjs')
  try {
    unlinkSync(testNew)
  } catch {}
  t.teardown(() => {
    try {
      unlinkSync(testNew)
    } catch {}
  })

  const piFoo = resolve(fixture, `.tap/processinfo/${fooUuid}.json`)
  const piBar = resolve(fixture, `.tap/processinfo/${barUuid}.json`)

  const start = new Date('2020-02-20T20:20:20.202Z')
  touch(srcFoo, start)
  touch(srcBar, start)
  touch(piFoo, start)
  touch(piBar, start)
  touch(testFoo, start)
  touch(testBar, start)
  let date = start

  const mocks = {
    '../dist/main-config.js': t.createMock(mainConfig, {
      mainCommand: 'run',
    }),
    '@tapjs/core': t.createMock(core, { cwd: fixture }),
    '../dist/save-list.js': {
      readSave: async () => [],
    },
  }

  const { list } = (await t.mockImport(
    '../dist/list.js',
    mocks
  )) as typeof import('../dist/list.js')
  const sort = (a: string[]) =>
    a.sort((a, b) => a.localeCompare(b, 'en'))

  t.test('gutcheck, works without changed', async t => {
    t.intercept(mainConfig.values, 'changed', { value: false })
    t.strictSame(sort(await list([], mainConfig.config)), [
      'test/bar.mjs',
      'test/foo.mjs',
    ])
  })

  t.test('changed tests', async t => {
    t.intercept(mainConfig.values, 'changed', { value: true })

    date = new Date(date.getTime() + 100000)
    touch(testFoo, date)
    touch(testBar, date)
    t.strictSame(
      sort(await list([], mainConfig.config)),
      ['test/bar.mjs', 'test/foo.mjs'],
      'all tests changed'
    )

    touch(piBar, date)
    touch(piFoo, date)
    t.strictSame(
      sort(await list([], mainConfig.config)),
      [],
      'no tests changed'
    )

    date = new Date(date.getTime() + 100000)
    touch(srcFoo, date)
    t.strictSame(
      sort(await list([], mainConfig.config)),
      ['test/foo.mjs'],
      'foo src changed'
    )

    t.strictSame(
      sort(await list([testBar, '-'], mainConfig.config)),
      ['-'],
      'still run stdin if file filtered out'
    )

    writeFileSync(resolve(fixture, 'test/new.mjs'), '')
    t.strictSame(
      sort(await list([], mainConfig.config)),
      ['test/foo.mjs', 'test/new.mjs'],
      'never before run file is included'
    )

    unlinkSync(srcBar)
    t.strictSame(
      sort(await list([], mainConfig.config)),
      ['test/bar.mjs', 'test/foo.mjs', 'test/new.mjs'],
      'deleting the source file is a change'
    )
    writeFileSync(srcBar, '')
  })
})
