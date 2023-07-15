import t from 'tap'

import { LoadedConfig } from '@tapjs/config'

class MockConfig {
  pluginList: string[] = ['a', 'b', 'c']
  edited?: { plugin: string[] }
  configFile: string = '/path/to/.taprc'
  values: { plugin: string[] } = {
    plugin: ['a', 'b', 'c'],
  }

  get() {
    return this.values.plugin
  }
  editConfigFile(data: { plugin: string[] }, file: string) {
    if (file !== this.configFile) {
      throw Object.assign(new Error('writing to wrong file'), {
        expect: this.configFile,
        actual: file,
      })
    }
    this.edited = data
  }
}

t.test('unknown plugin command', async t => {
  const { plugin } = (await t.mockImport(
    '../dist/plugin.js'
  )) as typeof import('../dist/plugin.js')
  t.rejects(
    plugin(['asdf'], new MockConfig() as unknown as LoadedConfig),
    {
      message: 'Unknown plugin command: asdf',
    }
  )
})

t.test('list plugins', async t => {
  const { plugin } = (await t.mockImport(
    '../dist/plugin.js'
  )) as typeof import('../dist/plugin.js')
  const logs = t.capture(console, 'log')
  const errs = t.capture(console, 'error')
  t.test('no args', async t => {
    await plugin([], new MockConfig() as unknown as LoadedConfig)
    t.strictSame(logs.args(), [['a\nb\nc']])
    t.strictSame(errs.args(), [
      [
        `(use 'tap plugin add ...' to add plugins, or 'tap plugin rm ...' to remove them)`,
      ],
    ])
  })
  t.test('explicitly list', async t => {
    await plugin(
      ['list'],
      new MockConfig() as unknown as LoadedConfig
    )
    t.strictSame(logs.args(), [['a\nb\nc']])
    t.strictSame(errs(), [])
  })
})

t.test('remove plugin', async t => {
  const logs = t.capture(console, 'log')

  t.test('remove existing custom plugin', async t => {
    let buildRan = false
    const config = new MockConfig()
    const { plugin } = (await t.mockImport('../dist/plugin.js', {
      '../dist/build.js': {
        build: () => (buildRan = true),
      },
    })) as typeof import('../dist/plugin.js')

    await plugin(['rm', 'a'], config as unknown as LoadedConfig)
    t.strictSame(config.edited, { plugin: ['b', 'c'] })
    t.strictSame(config.values.plugin, ['b', 'c'])
    t.equal(buildRan, true)
    t.strictSame(logs.args(), [
      ['successfully removed plugin(s):'],
      ['a'],
      ['The following packages can likely be removed:'],
      ['npm rm "a"'],
    ])
  })

  t.test('remove builtin default plugin', async t => {
    let buildRan = false
    const config = new MockConfig()
    config.pluginList.push('@tapjs/mock')

    const { plugin } = (await t.mockImport('../dist/plugin.js', {
      '../dist/build.js': {
        build: () => (buildRan = true),
      },
    })) as typeof import('../dist/plugin.js')

    await plugin(
      ['rm', '@tapjs/mock'],
      config as unknown as LoadedConfig
    )
    t.strictSame(config.edited, {
      plugin: ['a', 'b', 'c', '!@tapjs/mock'],
    })
    t.strictSame(config.values.plugin, [
      'a',
      'b',
      'c',
      '!@tapjs/mock',
    ])
    t.equal(buildRan, true)
    t.strictSame(logs.args(), [
      ['successfully removed plugin(s):'],
      ['@tapjs/mock'],
    ])
  })

  t.test('remove already missing plugin', async t => {
    const config = new MockConfig()
    let buildRan = false

    const { plugin } = (await t.mockImport('../dist/plugin.js', {
      '../dist/build.js': {
        build: () => (buildRan = true),
      },
    })) as typeof import('../dist/plugin.js')

    await plugin(['rm', 'x'], config as unknown as LoadedConfig)
    t.strictSame(config.edited, undefined)
    t.strictSame(config.values.plugin, ['a', 'b', 'c'])
    t.equal(buildRan, false)
    t.strictSame(logs.args(), [
      ['nothing to do, no specified plugins present'],
    ])
  })
})
