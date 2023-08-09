import * as core from '@tapjs/core'
import { readFileSync } from 'fs'
import { tmpdir } from 'os'
import { resolve } from 'path'
import t from 'tap'
import { TapConfig } from '../dist/mjs/index.js'
import jack from '../dist/mjs/jack.js'
t.test('basic tests', async t => {
  const tc = new TapConfig()
  t.equal(tc.jack, jack)

  const loaded = await TapConfig.load()
  t.type(loaded.get('reporter'), 'string')
})

t.test('reporter from env or config', t => {
  t.test('default, with color', async t => {
    const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
      '@tapjs/core': t.createMock(core, {
        env: {
          TAP: undefined,
          TAP_REPORTER: undefined,
          TAP_COLOR: '1',
        },
      }),
    }) as typeof import('../dist/mjs/index.js')
    const tc = await TapConfig.load()
    t.equal(tc.get('reporter'), 'base')
    t.equal(tc.get('reporter'), 'base', 'cache coverage')
  })

  t.test('default, no color', async t => {
    const m = {
      '@tapjs/core': t.createMock(core, {
        env: {
          TAP: undefined,
          TAP_REPORTER: undefined,
          TAP_COLOR: '0',
        },
      }),
    }
    const { TapConfig } = await t.mockImport(
      '../dist/mjs/index.js',
      m
    ) as typeof import('../dist/mjs/index.js')
    t.equal((await TapConfig.load()).get('reporter'), 'tap')
  })

  t.test('TAP=1, always', async t => {
    const m = {
      '@tapjs/core': t.createMock(core, {
        env: {
          TAP: '1',
          TAP_REPORTER: 'base',
          TAP_COLOR: '1',
        },
      }),
    }
    const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
      ...m,
      '../dist/mjs/jack.js': await t.mockImport('../dist/mjs/jack.js', m),
    }) as typeof import('../dist/mjs/index.js')
    t.equal((await TapConfig.load()).get('reporter'), 'tap')
  })

  t.test('set in config', async t => {
    const m = {
      '@tapjs/core': t.createMock(core, {
        env: {
          TAP: undefined,
          TAP_COLOR: undefined,
          TAP_REPORTER: 'base',
        },
      }),
    }
    const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
      ...m,
      '../dist/mjs/jack.js': await t.mockImport('../dist/mjs/jack.js', m),
    }) as typeof import('../dist/mjs/index.js')
    t.equal((await TapConfig.load()).get('reporter'), 'base')
  })

  t.end()
})

t.test('get plugin list', async t => {
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      env: {
        TAP_PLUGIN: '!@tapjs/mock\n@tapjs/nock',
      },
    }),
  })
  const tc = await TapConfig.load()
  const tc2 = await TapConfig.load()
  t.equal(tc, tc2)
  t.equal(tc.pluginList.includes('@tapjs/mock'), false, 'no mock')
  t.equal(tc.pluginList.includes('@tapjs/nock'), true, 'has nock')
  t.matchSnapshot(tc.pluginSignature)
  t.end()
})

t.test('default config file in cwd if readdir fails', async t => {
  const d = resolve(tmpdir(), String(Math.random()))
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: d,
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.configFile, resolve(d, '.taprc'))
})

t.test('default config file in cwd if walkup gets home', async t => {
  const dir = t.testdir({
    where: {
      the: {
        heart: {
          is: {},
        },
      },
    },
  })

  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: resolve(dir, 'where/the/heart/is'),
      env: {
        HOME: dir,
      },
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.configFile, resolve(dir, 'where/the/heart/is/.taprc'))
})

t.test('home defaults to . if not in env', async t => {
  const dir = t.testdir({
    where: {
      the: {
        heart: {
          is: {},
        },
      },
    },
  })

  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: resolve(dir, 'where/the/heart/is'),
      env: {
        HOME: undefined,
      },
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.configFile, resolve(dir, 'where/the/heart/is/.taprc'))
})

t.test(
  'default config file in in project root with .git',
  async t => {
    const dir = t.testdir({
      proj: {
        '.git': {},
        nested: {
          sub: {
            directory: {},
          },
        },
      },
    })

    const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
      '@tapjs/core': t.createMock(core, {
        cwd: resolve(dir, 'proj/nested/sub/directory'),
      }),
    })
    const tc = await TapConfig.load()
    t.equal(tc.configFile, resolve(dir, 'proj/.taprc'))
  }
)

t.test('use first config file found in walkup', async t => {
  const dir = t.testdir({
    proj: {
      '.git': {},
      nested: {
        '.taprc': '',
        sub: {
          '.taprc': '',
          directory: {},
        },
      },
    },
  })

  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: resolve(dir, 'proj/nested/sub/directory'),
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.configFile, resolve(dir, 'proj/nested/sub/.taprc'))
})

t.test('config from .taprc', async t => {
  const dir = t.testdir({
    '.taprc': 'color: true\njobs: 3\nreporter: blargggg\n',
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.get('jobs'), 3)
  t.equal(tc.get('color'), true)
  t.equal(tc.get('reporter'), 'blargggg')
})

t.test('config from package.json', async t => {
  const dir = t.testdir({
    'package.json': JSON.stringify({
      tap: {
        color: true,
        jobs: 3,
        reporter: 'blargggg',
      },
    }),
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.get('jobs'), 3)
  t.equal(tc.get('color'), true)
  t.equal(tc.get('reporter'), 'blargggg')
})

t.test('invalid .taprc file', async t => {
  const dir = t.testdir({
    '.taprc': `reporter: blargggg
this
!is not
  valid \' YAML`,
  })
  const { error } = console
  const errs: any[][] = []
  console.error = (...a: any[]) => errs.push(a)
  t.teardown(() => (console.error = error))
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  t.not(tc.get('reporter'), 'blargggg')
  t.match(errs, [
    ['Error loading .taprc:', String, { name: 'YAMLParseError' }],
  ])
})

t.test('invalid package.json file', async t => {
  const dir = t.testdir({
    'package.json':
      JSON.stringify({
        tap: { reporter: 'blargggg' },
      }) +
      `
this
!is not
  valid \' JSON`,
  })
  const { error } = console
  const errs: any[][] = []
  console.error = (...a: any[]) => errs.push(a)
  t.teardown(() => (console.error = error))
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  t.not(tc.get('reporter'), 'blargggg')
  t.match(errs, [
    [
      'Error loading package.json:',
      String,
      { name: 'JSONParseError' },
    ],
  ])
})

t.test('.taprc extends file', async t => {
  const dir = t.testdir({
    '.taprc': 'color: true\nextends: base-taprc.yml\n',
    'base-taprc.yml': 'jobs: 3\nreporter: blargggg\n',
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.get('jobs'), 3)
  t.equal(tc.get('color'), true)
  t.equal(tc.get('reporter'), 'blargggg')
})

t.test('package.json extends file', async t => {
  const dir = t.testdir({
    'package.json': JSON.stringify({
      tap: { color: true, extends: 'base-taprc.yml' },
    }),
    'base-taprc.yml': 'jobs: 3\nreporter: blargggg\n',
    some: {
      sub: {
        directory: {},
      },
    },
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: resolve(dir, 'some/sub/directory'),
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.get('jobs'), 3)
  t.equal(tc.get('color'), true)
  t.equal(tc.get('reporter'), 'blargggg')
})

t.test('extension has invalid field', async t => {
  const dir = t.testdir({
    '.taprc': 'color: true\nextends: base-taprc.yml\n',
    'base-taprc.yml': 'jobs: true\nreporter: blargggg\n',
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  await t.rejects(TapConfig.load(), {
    message: 'Invalid value boolean for jobs, expected number',
    source: resolve(dir, 'base-taprc.yml'),
    field: 'jobs',
    value: true,
    extendedFrom: ['base-taprc.yml', resolve(dir, '.taprc')],
  })
})

t.test('extend from dep .taprc', async t => {
  const dir = t.testdir({
    '.taprc': 'color: true\nextends: config-base\n',
    node_modules: {
      'config-base': {
        // needs to be *something* there to require.resolve to
        'package.json': JSON.stringify({ name: 'config-base' }),
        'index.js': '',
        '.taprc': 'jobs: 3\nreporter: blargggg\n',
      },
    },
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.get('jobs'), 3)
  t.equal(tc.get('color'), true)
  t.equal(tc.get('reporter'), 'blargggg')
})

t.test('extend from dep package.json', async t => {
  const dir = t.testdir({
    '.taprc': 'color: true\nextends: config-base\n',
    node_modules: {
      'config-base': {
        'package.json': JSON.stringify({
          name: 'config-base',
          tap: {
            jobs: 3,
            reporter: 'blargggg',
          },
        }),
        'index.js': '',
      },
    },
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.get('jobs'), 3)
  t.equal(tc.get('color'), true)
  t.equal(tc.get('reporter'), 'blargggg')
})

t.test('extend from dep package.json, but no config', async t => {
  const dir = t.testdir({
    '.taprc': 'color: true\nextends: config-base\n',
    node_modules: {
      'config-base': {
        'package.json': JSON.stringify({
          name: 'config-base',
        }),
        'index.js': '',
      },
    },
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  // no effect
  t.equal(tc.get('color'), true)
})

t.test('extend from missing dep', async t => {
  const dir = t.testdir({
    '.taprc': 'color: true\nextends: config-base\n',
    node_modules: {
      'config-base': {},
    },
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  await t.rejects(TapConfig.load(), {
    message:
      'Could not read TAP config from package config-base, via ' +
      `the config file at ${resolve(dir, '.taprc')}. Maybe try: ` +
      'npm install --save-dev config-base',
    extendedFrom: ['config-base', resolve(dir, '.taprc')],
  })
})

t.test('edit .taprc config', async t => {
  const dir = t.testdir({
    '.taprc': 'color: true\njobs: 3\nreporter: blargggg\n',
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.get('jobs'), 3)
  t.equal(tc.get('color'), true)
  t.equal(tc.get('reporter'), 'blargggg')
  await tc.editConfigFile({ reporter: 'newrep' })
  t.equal(tc.get('reporter'), 'newrep')
  t.equal(
    readFileSync(resolve(dir, '.taprc'), 'utf8'),
    '# vi' +
      'm: set filetype=yaml :\ncolor: true\njobs: 3\nreporter: newrep\n'
  )
})

t.test('create .taprc config', async t => {
  const dir = t.testdir({ '.git': {} })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  await tc.editConfigFile({
    color: true,
    jobs: 3,
    reporter: 'newrep',
  })
  t.equal(tc.get('reporter'), 'newrep')
  t.equal(
    readFileSync(resolve(dir, '.taprc'), 'utf8'),
    '# vi' +
      'm: set filetype=yaml :\ncolor: true\njobs: 3\nreporter: newrep\n'
  )
})

t.test('edit package.json config', async t => {
  const dir = t.testdir({
    'package.json': JSON.stringify(
      {
        tap: {
          color: true,
          jobs: 3,
          reporter: 'blargggg',
        },
      },
      null,
      '\t\t'
    ),
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  t.equal(tc.get('jobs'), 3)
  t.equal(tc.get('color'), true)
  t.equal(tc.get('reporter'), 'blargggg')
  await tc.editConfigFile({ reporter: 'newrep' })
  t.equal(tc.get('reporter'), 'newrep')
  t.equal(
    readFileSync(resolve(dir, 'package.json'), 'utf8'),
    // preserve indentation
    JSON.stringify(
      {
        tap: {
          color: true,
          jobs: 3,
          reporter: 'newrep',
        },
      },
      null,
      '\t\t'
    ) + '\n'
  )
})

t.test('edit package.json config create tap obj', async t => {
  const dir = t.testdir({
    'package.json': JSON.stringify(
      { name: 'testing', tap: [] },
      null,
      '\t\t'
    ),
  })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  tc.configFile = resolve(dir, 'package.json')
  t.not(tc.get('reporter'), 'blargggg')
  await tc.editConfigFile({
    color: true,
    jobs: 3,
    reporter: 'newrep',
  })
  t.equal(tc.get('reporter'), 'newrep')
  t.equal(
    readFileSync(resolve(dir, 'package.json'), 'utf8'),
    // preserve indentation
    JSON.stringify(
      {
        name: 'testing',
        tap: {
          color: true,
          jobs: 3,
          reporter: 'newrep',
        },
      },
      null,
      '\t\t'
    ) + '\n'
  )
})

t.test('create package.json config', async t => {
  const dir = t.testdir({ '.git': {} })
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  tc.configFile = resolve(dir, 'package.json')
  await tc.editConfigFile({
    color: true,
    jobs: 3,
    reporter: 'newrep',
  })
  t.equal(tc.get('reporter'), 'newrep')
  t.equal(
    readFileSync(resolve(dir, 'package.json'), 'utf8'),
    JSON.stringify(
      {
        tap: {
          color: true,
          jobs: 3,
          reporter: 'newrep',
        },
      },
      null,
      2
    ) + '\n'
  )
})

t.test('cannot write config file with unrecognized name', async t => {
  const dir = t.testdir({})
  const { TapConfig } = await t.mockImport('../dist/mjs/index.js', {
    '@tapjs/core': t.createMock(core, {
      cwd: dir,
      // filter out all TAP* envs
      env: Object.fromEntries(
        Object.keys(core.env)
          .filter(k => k.startsWith('TAP'))
          .map(k => [k, undefined])
      ),
    }),
  })
  const tc = await TapConfig.load()
  await t.rejects(
    tc.editConfigFile({ reporter: 'x' }, 'some-file.txt'),
    {
      message:
        'unrecognized config file type, must be named ' +
        '.taprc or package.json: some-file.txt',
    }
  )
})

t.test('addFields', async t => {
  const tc = await TapConfig.load()
  const key =
    'testing-new-field-' + String(Math.random()).replace('0.', '')
  const ext = tc.addFields({
    [key]: {
      type: 'boolean',
      default: true,
      multiple: false,
      description: 'just a new testing field',
    },
  })
  t.not(ext, tc, 'got new object')
  //@ts-expect-error
  t.equal(tc.get(key), undefined)
  t.equal(ext.get(key), true)
})
