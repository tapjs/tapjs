import t from 'tap'

import * as core from '@tapjs/core'
import {
  readdirSync,
  readFileSync,
  unlinkSync,
  utimesSync,
  writeFileSync,
} from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import * as mainConfig from '../dist/esm/main-config.js'

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
    '../dist/esm/main-config.js': t.createMock(mainConfig, {
      mainCommand: 'list',
    }),
    '@tapjs/core': t.createMock(core, { cwd: dir }),
    '../dist/esm/save-list.js': {
      readSave: async () => saveList,
    },
  }

  const logs = t.capture(console, 'log')
  const { list } = (await t.mockImport(
    '../dist/esm/list.js',
    mocks
  )) as typeof import('../dist/esm/list.js')

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
    const { exitCode } = process
    const errs = t.capture(console, 'error')
    await list(['asdfasfsdf'], mainConfig.config)
    t.strictSame(errs.args(), [['No files found.']])

    await list(['plugins'], mainConfig.config)
    t.equal(process.exitCode, 1)
    if (t.passing()) process.exitCode = exitCode
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
  // testdirs are excluded from file tracking by default, so
  // use a different directory name.
  t.testdirName = t.testdirName.replace(/\.tap[\\\/]fixtures/, 'XXX')

  const fixture = fileURLToPath(
    new URL('fixtures/project', import.meta.url)
  )
  const cwd = process.cwd()

  const files = (dir: string): Record<string, Buffer> =>
    Object.fromEntries(
      readdirSync(dir)
        .map(f => {
          try {
            return [f, readFileSync(resolve(dir, f))]
          } catch {
            return [f, undefined]
          }
        })
        .filter(([_, c]) => c !== undefined)
    )

  const piFooRecord = {
    ...JSON.parse(
      readFileSync(
        resolve(fixture, '.tap/processinfo/uuid-foo.json'),
        'utf8'
      )
    ),
    files: [
      resolve(t.testdirName, 'test/foo.mjs'),
      resolve(t.testdirName, 'foo.mjs'),
    ],
  }
  const piBarRecord = {
    ...JSON.parse(
      readFileSync(
        resolve(fixture, '.tap/processinfo/uuid-bar.json'),
        'utf8'
      )
    ),
    files: [
      resolve(t.testdirName, 'test/bar.mjs'),
      resolve(t.testdirName, 'bar.mjs'),
    ],
  }
  const dir = t.testdir({
    ...files(resolve(fixture)),
    test: files(resolve(fixture, 'test')),
    '.tap': {
      processinfo: {
        'uuid-foo.json': JSON.stringify(piFooRecord),
        'uuid-bar.json': JSON.stringify(piBarRecord),
      },
    },
  })

  process.chdir(dir)
  t.teardown(() => process.chdir(cwd))
  t.intercept(mainConfig.config, 'globCwd', { value: dir })

  const touch = (path: string, d: Date = new Date()) =>
    utimesSync(path, d, d)

  const srcFoo = resolve(dir, 'foo.mjs')
  const srcBar = resolve(dir, 'bar.mjs')
  const testFoo = resolve(dir, 'test/foo.mjs')
  const testBar = resolve(dir, 'test/bar.mjs')
  const testNew = resolve(dir, 'test/new.mjs')
  try {
    unlinkSync(testNew)
  } catch {}
  t.teardown(() => {
    try {
      unlinkSync(testNew)
    } catch {}
  })

  const piFoo = resolve(dir, `.tap/processinfo/uuid-foo.json`)
  const piBar = resolve(dir, `.tap/processinfo/uuid-bar.json`)

  const piDate = new Date('2023-01-01T00:00:00.000Z')
  const start = new Date('2020-02-02T02:22:22.222Z')
  touch(srcFoo, start)
  touch(srcBar, start)
  touch(piFoo, start)
  touch(piBar, start)
  touch(testFoo, start)
  touch(testBar, start)
  let date = start

  const mocks = {
    '../dist/esm/main-config.js': t.createMock(mainConfig, {
      mainCommand: 'run',
    }),
    '@tapjs/core': t.createMock(core, { cwd: dir }),
    '../dist/esm/save-list.js': {
      readSave: async () => [],
    },
  }

  const { list } = (await t.mockImport(
    '../dist/esm/list.js',
    mocks
  )) as typeof import('../dist/esm/list.js')
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
    const DAY = 1000 * 60 * 60 * 24
    t.intercept(mainConfig.values, 'changed', { value: true })

    date = new Date(piDate.getTime() + DAY)
    touch(testFoo, date)
    touch(testBar, date)
    t.strictSame(
      sort(await list([], mainConfig.config)),
      ['test/bar.mjs', 'test/foo.mjs'],
      'all tests changed'
    )

    date = new Date(date.getTime() + DAY)
    writeFileSync(
      piBar,
      JSON.stringify({
        ...JSON.parse(readFileSync(piBar, 'utf8')),
        date: date.toISOString(),
      })
    )
    writeFileSync(
      piFoo,
      JSON.stringify({
        ...JSON.parse(readFileSync(piFoo, 'utf8')),
        date: date.toISOString(),
      })
    )
    t.strictSame(
      sort(await list([], mainConfig.config)),
      [],
      'no tests changed'
    )

    t.strictSame(
      sort(await list([], mainConfig.config, true)),
      ['test/bar.mjs', 'test/foo.mjs'],
      'no prune unchanged internal param'
    )

    date = new Date(date.getTime() + DAY)
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

    writeFileSync(resolve(dir, 'test/new.mjs'), '')
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
  })
})
