import t from 'tap'

import { LoadedConfig } from '@tapjs/config'
import { resolve } from 'node:path'

const quiet = ['--no-audit', '--loglevel=silent', '--no-progress']

class MockConfig {
  pluginList: string[] = ['a', 'b', 'c']
  edited?: { plugin: string[] }
  configFile: string = '/path/to/.taprc'
  values: { plugin: string[] } = {
    plugin: ['a', 'b', 'c'],
  }

  get l() {
    return this as unknown as LoadedConfig
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
  t.rejects(plugin(['asdf'], new MockConfig().l), {
    message: 'Unknown plugin command: asdf',
  })
})

t.test('list plugins', async t => {
  const { plugin } = (await t.mockImport(
    '../dist/plugin.js'
  )) as typeof import('../dist/plugin.js')
  const logs = t.capture(console, 'log')
  const errs = t.capture(console, 'error')
  t.test('no args', async t => {
    await plugin([], new MockConfig().l)
    t.strictSame(logs.args(), [['a\nb\nc']])
    t.strictSame(errs.args(), [
      [
        `(use 'tap plugin add ...' to add plugins, or 'tap plugin rm ...' to remove them)`,
      ],
    ])
  })
  t.test('explicitly list', async t => {
    await plugin(['list'], new MockConfig().l)
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
        'foreground-child': {
          foregroundChild: () => {
            throw new Error('nope')
          },
        },
      },
    })) as typeof import('../dist/plugin.js')

    await plugin(['rm', 'a'], config.l)
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
        'foreground-child': {
          foregroundChild: () => {
            throw new Error('nope')
          },
        },
      },
    })) as typeof import('../dist/plugin.js')

    await plugin(['rm', '@tapjs/mock'], config.l)
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

  t.test('remove plugin that is on disk', async t => {
    const dir = t.testdir({
      'my-plugin': {
        'package.json': JSON.stringify({
          name: 'my-plugin',
          exports: {
            import: './index.mjs',
            require: './index.cjs',
          },
        }),
        'index.mjs': 'export const plugin = () => ({})',
        'index.cjs': 'exports.plugin = () => ({})',
      },
    })
    const p = resolve(dir, 'my-plugin')
    let buildRan = false
    const config = new MockConfig()
    config.pluginList.push(p)
    config.values.plugin.push(p)

    const { plugin } = (await t.mockImport('../dist/plugin.js', {
      '../dist/build.js': {
        build: () => (buildRan = true),
        'foreground-child': {
          foregroundChild: () => {
            throw new Error('nope')
          },
        },
      },
    })) as typeof import('../dist/plugin.js')

    await plugin(['rm', p], config.l)
    t.strictSame(config.edited, {
      plugin: ['a', 'b', 'c'],
    })
    t.strictSame(config.values.plugin, ['a', 'b', 'c'])
    t.equal(buildRan, true)
    t.strictSame(logs.args(), [
      ['successfully removed plugin(s):'],
      [p],
    ])
  })

  t.test('remove already missing plugin', async t => {
    const config = new MockConfig()
    let buildRan = false

    const { plugin } = (await t.mockImport('../dist/plugin.js', {
      '../dist/build.js': {
        build: () => (buildRan = true),
        'foreground-child': {
          foregroundChild: () => {
            throw new Error('nope')
          },
        },
      },
    })) as typeof import('../dist/plugin.js')

    await plugin(['rm', 'x'], config.l)
    t.strictSame(config.edited, undefined)
    t.strictSame(config.values.plugin, ['a', 'b', 'c'])
    t.equal(buildRan, false)
    t.strictSame(logs.args(), [
      ['nothing to do, no specified plugins present'],
    ])
  })
})

t.test('adding plugins', async t => {
  const logs = t.capture(console, 'log')

  t.test('fail if no name provided', async t => {
    const config = new MockConfig()
    const { plugin } = (await t.mockImport(
      '../dist/plugin.js'
    )) as typeof import('../dist/plugin.js')

    t.rejects(plugin(['add'], config.l), {
      message: 'no plugin name provided',
    })
  })

  t.test('already present', async t => {
    const config = new MockConfig()
    const { plugin } = (await t.mockImport(
      '../dist/plugin.js'
    )) as typeof import('../dist/plugin.js')
    await plugin(['add', 'a', 'b', 'c'], config.l)
    t.strictSame(logs.args(), [
      ['nothing to do, all plugins already installed'],
    ])
  })

  t.test('add previously removed default plugin', async t => {
    const config = new MockConfig()
    config.values.plugin.push('!@tapjs/mock')
    config.pluginList.push('!@tapjs/mock')
    let buildRan = false
    const { plugin } = (await t.mockImport('../dist/plugin.js', {
      '../dist/build.js': { build: () => (buildRan = true) },
      'foreground-child': {
        foregroundChild: () => {
          throw new Error('nope')
        },
      },
    })) as typeof import('../dist/plugin.js')
    await plugin(['add', '@tapjs/mock'], config.l)
    t.equal(buildRan, true)
    t.strictSame(config.values.plugin, ['a', 'b', 'c'])
    t.strictSame(config.edited, { plugin: ['a', 'b', 'c'] })
    t.strictSame(logs.args(), [
      ['successfully added plugin(s):'],
      ['@tapjs/mock'],
    ])
  })

  t.test('add a plugin that is a file on disk', async t => {
    const dir = t.testdir({
      'my-plugin': {
        'package.json': JSON.stringify({
          name: 'my-plugin',
          exports: {
            import: './index.mjs',
            require: './index.cjs',
          },
        }),
        'index.mjs': 'export const plugin = () => ({})',
        'index.cjs': 'exports.plugin = () => ({})',
      },
    })
    const p = resolve(dir, 'my-plugin')
    let buildRan = false
    const config = new MockConfig()
    const { plugin } = (await t.mockImport('../dist/plugin.js', {
      '../dist/build.js': { build: () => (buildRan = true) },
      'foreground-child': {
        foregroundChild: () => {
          throw new Error('nope')
        },
      },
    })) as typeof import('../dist/plugin.js')
    await plugin(['add', p], config.l)
    t.equal(buildRan, true)
    t.strictSame(config.values.plugin, ['a', 'b', 'c', p])
    t.strictSame(config.edited, { plugin: ['a', 'b', 'c', p] })
    t.strictSame(logs.args(), [
      ['successfully added plugin(s):'],
      [p],
    ])
  })

  t.test('add plugin as a dev dep', async t => {
    for (const needInstall of [true, false]) {
      t.test(`needInstall=${needInstall}`, async t => {
        let buildRan = false
        const p = 'dep-plugin'
        const config = new MockConfig()
        const { plugin } = (await t.mockImport('../dist/plugin.js', {
          '../dist/build.js': { build: () => (buildRan = true) },
          'foreground-child': {
            foregroundChild: (
              cmd: string,
              args: string[],
              cb: (
                code: number | null,
                signal: null | NodeJS.Signals
              ) => false | void
            ) => {
              t.equal(cmd, 'npm')
              t.strictSame(args, [
                'install',
                ...quiet,
                '--save-dev',
                p,
              ])
              t.equal(cb(0, null), false)
            },
            '../dist/pkg-exists.js': {
              pkgExists: async () => !needInstall,
            },
          },
        })) as typeof import('../dist/plugin.js')
        await plugin(['add', p], config.l)
        t.equal(buildRan, true)
        t.strictSame(config.values.plugin, ['a', 'b', 'c', p])
        t.strictSame(config.edited, { plugin: ['a', 'b', 'c', p] })
        t.strictSame(logs.args(), [
          ['successfully added plugin(s):'],
          [p],
        ])
      })
    }
  })

  t.test('fail to build installed plugin', async t => {
    for (const needInstall of [true, false]) {
      t.test(`needInstall=${needInstall}`, async t => {
        const errs = t.capture(console, 'error')
        const exitCode = t.intercept(process, 'exitCode')
        let buildRan = false
        let installRan = false
        let uninstallRan = false
        const p = 'dep-plugin'
        const config = new MockConfig()
        const { plugin } = (await t.mockImport('../dist/plugin.js', {
          '../dist/build.js': {
            build: async () => {
              buildRan = true
              throw new Error('build fail in test')
            },
          },
          '../dist/pkg-exists.js': {
            pkgExists: async () => !needInstall,
          },
          'foreground-child': {
            foregroundChild: (
              cmd: string,
              args: string[],
              cb: (
                code: number | null,
                signal: null | NodeJS.Signals
              ) => false | void
            ) => {
              t.equal(cmd, 'npm')
              if (!installRan) {
                installRan = true
                t.strictSame(args, [
                  'install',
                  ...quiet,
                  '--save-dev',
                  p,
                ])
              } else {
                uninstallRan = true
                t.strictSame(args, ['rm', ...quiet, p])
              }
              t.equal(cb(0, null), false)
            },
          },
        })) as typeof import('../dist/plugin.js')
        await plugin(['add', p], config.l)
        t.equal(buildRan, true)
        t.equal(installRan, true)
        t.equal(uninstallRan, needInstall)
        t.strictSame(config.values.plugin, ['a', 'b', 'c', p])
        t.strictSame(config.edited, undefined)
        t.strictSame(logs(), [])
        t.strictSame(errs.args(), [
          ['build failed'],
          ...(needInstall
            ? [['attempting to clean up added packages']]
            : []),
        ])
        t.match(exitCode(), [{ type: 'set', value: 1 }])
      })
    }
  })

  t.test('fail to install plugin', async t => {
    const errs = t.capture(console, 'error')
    const exitCode = t.intercept(process, 'exitCode')
    let buildRan = false
    let installRan = false
    const p = 'dep-plugin'
    const config = new MockConfig()
    const { plugin } = (await t.mockImport('../dist/plugin.js', {
      '../dist/build.js': {
        build: async () => (buildRan = true),
      },
      '../dist/pkg-exists.js': {
        pkgExists: async () => false,
      },
      'foreground-child': {
        foregroundChild: (
          cmd: string,
          args: string[],
          cb: (
            code: number | null,
            signal: null | NodeJS.Signals
          ) => false | void
        ) => {
          t.equal(cmd, 'npm')
          installRan = true
          t.strictSame(args, ['install', ...quiet, '--save-dev', p])
          t.equal(cb(1, null), undefined)
        },
      },
    })) as typeof import('../dist/plugin.js')
    await plugin(['add', p], config.l)
    t.equal(installRan, true)
    t.equal(buildRan, false)
    t.strictSame(config.values.plugin, ['a', 'b', 'c'])
    t.strictSame(config.edited, undefined)
    t.strictSame(logs(), [])
    t.strictSame(errs.args(), [['install failed']])
    t.match(exitCode(), [{ type: 'set', value: 1 }])
  })

  t.test(`fail uninstall after build fail`, async t => {
    const errs = t.capture(console, 'error')
    const exitCode = t.intercept(process, 'exitCode')
    let buildRan = false
    let installRan = false
    let uninstallRan = false
    const p = 'dep-plugin'
    const config = new MockConfig()
    const { plugin } = (await t.mockImport('../dist/plugin.js', {
      '../dist/build.js': {
        build: async () => {
          buildRan = true
          throw new Error('build fail in test')
        },
      },
      '../dist/pkg-exists.js': {
        pkgExists: async () => false,
      },
      'foreground-child': {
        foregroundChild: (
          cmd: string,
          args: string[],
          cb: (
            code: number | null,
            signal: null | NodeJS.Signals
          ) => false | void
        ) => {
          t.equal(cmd, 'npm')
          if (!installRan) {
            installRan = true
            t.strictSame(args, ['install', ...quiet, '--save-dev', p])
            t.equal(cb(0, null), false)
          } else {
            uninstallRan = true
            t.strictSame(args, ['rm', ...quiet, p])
            t.equal(cb(0, 'SIGINT'), undefined)
          }
        },
      },
    })) as typeof import('../dist/plugin.js')
    await plugin(['add', p], config.l)
    t.equal(buildRan, true)
    t.equal(installRan, true)
    t.equal(uninstallRan, true)
    t.strictSame(config.values.plugin, ['a', 'b', 'c', p])
    t.strictSame(config.edited, undefined)
    t.strictSame(logs(), [])
    t.strictSame(errs.args(), [
      ['build failed'],
      ['attempting to clean up added packages'],
    ])
    t.match(exitCode(), [{ type: 'set', value: 1 }])
  })
})
