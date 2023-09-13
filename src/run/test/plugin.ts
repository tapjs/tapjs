import t, { Test } from 'tap'

import { LoadedConfig } from '@tapjs/config'
import { resolve } from 'node:path'

const CWD = process.cwd().toUpperCase()
const deCwd = <T extends any>(obj: T): T => {
  if (!obj) return obj
  if (typeof obj === 'string') {
    const i = obj.toUpperCase().indexOf(CWD)
    return i === -1
      ? obj
      : ((
          obj.substring(0, i) +
          '{CWD}' +
          obj.substring(i + CWD.length)
        ).replace(/\\/g, '/') as T)
  }
  if (typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(v => deCwd(v)) as T
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, deCwd(v)])
  ) as T
}

t.formatSnapshot = (o: any) => deCwd(o)

const nope = () => {
  throw new Error('nope')
}

class MockConfig {
  constructor(t: Test) {
    this.globCwd = t.testdirName
  }

  globCwd: string
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
    '../dist/esm/plugin.js'
  )) as typeof import('../dist/esm/plugin.js')
  t.rejects(plugin(['asdf'], new MockConfig(t).l), {
    message: 'Unknown plugin command: asdf',
  })
})

t.test('list plugins', async t => {
  const { plugin } = (await t.mockImport(
    '../dist/esm/plugin.js'
  )) as typeof import('../dist/esm/plugin.js')
  const logs = t.capture(console, 'log')
  const errs = t.capture(console, 'error')
  t.test('no args', async t => {
    await plugin([], new MockConfig(t).l)
    t.matchSnapshot(logs.args())
    t.matchSnapshot(errs.args())
  })
  t.test('explicitly list', async t => {
    await plugin(['list'], new MockConfig(t).l)
    t.strictSame(logs.args(), [['a\nb\nc']])
    t.strictSame(errs(), [])
  })
})

t.test('remove plugin', async t => {
  const logs = t.capture(console, 'log')

  t.test('remove existing custom plugin', async t => {
    let buildRan = false
    const config = new MockConfig(t)
    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/build.js': {
        build: () => (buildRan = true),
        'foreground-child': {
          foregroundChild: nope,
        },
      },
    })) as typeof import('../dist/esm/plugin.js')

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
    const config = new MockConfig(t)
    config.pluginList.push('@tapjs/mock')

    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/build.js': {
        build: () => (buildRan = true),
        'foreground-child': {
          foregroundChild: nope,
        },
      },
    })) as typeof import('../dist/esm/plugin.js')

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
    const config = new MockConfig(t)
    config.pluginList.push(p)
    config.values.plugin.push(p)

    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/build.js': {
        build: () => (buildRan = true),
        'foreground-child': {
          foregroundChild: nope,
        },
      },
    })) as typeof import('../dist/esm/plugin.js')

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
    const config = new MockConfig(t)
    let buildRan = false

    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/build.js': {
        build: () => (buildRan = true),
        'foreground-child': {
          foregroundChild: nope,
        },
      },
    })) as typeof import('../dist/esm/plugin.js')

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
  const errs = t.capture(console, 'error')

  t.test('fail if no name provided', async t => {
    const config = new MockConfig(t)
    const { plugin } = (await t.mockImport(
      '../dist/esm/plugin.js'
    )) as typeof import('../dist/esm/plugin.js')

    t.rejects(plugin(['add'], config.l), {
      message: 'no plugin name provided',
    })
  })

  t.test('already present', async t => {
    const config = new MockConfig(t)
    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/get-install-set.js': {
        getInstallSet: () => ({
          added: new Set(),
          needInstall: new Set(),
          needCleanup: new Set(),
        }),
      },
    })) as typeof import('../dist/esm/plugin.js')
    await plugin(['add', 'a', 'b', 'c'], config.l)
    t.strictSame(logs.args(), [
      ['nothing to do, all plugins already installed'],
    ])
  })

  t.test('add previously removed default plugin', async t => {
    const config = new MockConfig(t)
    config.values.plugin.push('!@tapjs/mock')
    config.pluginList.push('!@tapjs/mock')
    let buildRan = false
    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/build.js': { build: () => (buildRan = true) },
      'foreground-child': {
        foregroundChild: nope,
      },
    })) as typeof import('../dist/esm/plugin.js')
    await plugin(['add', '@tapjs/mock'], config.l)
    t.equal(buildRan, true)
    t.strictSame(config.values.plugin, ['a', 'b', 'c'])
    t.strictSame(config.edited, { plugin: ['a', 'b', 'c'] })
    t.matchSnapshot(logs.args())
    t.matchSnapshot(errs.args())
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
    const config = new MockConfig(t)
    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/build.js': { build: () => (buildRan = true) },
      '../dist/esm/get-install-set.js': {
        getInstallSet: async (_: any, c: LoadedConfig) => {
          c.values.plugin?.push(p)
          return {
            added: new Set([p]),
            needInstall: new Set(),
            needCleanup: new Set(),
          }
        },
      },
      '../dist/esm/npm.js': {
        npmBg: nope,
        npmFg: nope,
        install: nope,
        uninstall: nope,
      },
    })) as typeof import('../dist/esm/plugin.js')
    await plugin(['add', p], config.l)
    t.equal(buildRan, true)
    t.strictSame(config.values.plugin, ['a', 'b', 'c', p])
    t.strictSame(config.edited, { plugin: ['a', 'b', 'c', p] })
    t.matchSnapshot(logs.args())
    t.matchSnapshot(errs.args())
  })

  t.test('add plugin as a dev dep', async t => {
    let buildRan = false
    let installRan = false
    const p = 'dep-plugin'
    const config = new MockConfig(t)
    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/build.js': { build: () => (buildRan = true) },
      '../dist/esm/get-install-set.js': {
        getInstallSet: (_: any, c: LoadedConfig) => {
          c.values.plugin?.push(p)
          return {
            added: new Set([p]),
            needInstall: new Set([`${p}@1.2.3`]),
            needCleanup: new Set([p]),
          }
        },
      },
      '../dist/esm/npm.js': {
        npmBg: nope,
        npmFg: nope,
        uninstall: nope,
        install: (args: string[], c: any) => {
          t.strictSame(args, [`${p}@1.2.3`])
          t.equal(c, config)
          installRan = true
        },
      },
    })) as typeof import('../dist/esm/plugin.js')
    await plugin(['add', p], config.l)
    t.equal(buildRan, true)
    t.equal(installRan, true)
    t.strictSame(config.values.plugin, ['a', 'b', 'c', p])
    t.strictSame(config.edited, { plugin: ['a', 'b', 'c', p] })
    t.matchSnapshot(logs.args())
    t.matchSnapshot(errs.args())
  })

  t.test('fail to build installed plugin, no cleanup', async t => {
    let buildRan = false
    let installRan = false
    let uninstallRan = false
    const p = 'dep-plugin'
    const config = new MockConfig(t)
    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/build.js': {
        build: async () => {
          buildRan = true
          throw new Error('build fail in test')
        },
      },
      '../dist/esm/get-install-set.js': {
        getInstallSet: (_: any, c: LoadedConfig) => {
          c.values.plugin?.push(p)
          return {
            added: new Set([p]),
            needInstall: new Set([`${p}@1.2.3`]),
            needCleanup: new Set(),
          }
        },
      },
      '../dist/esm/npm.js': {
        install: (args: string[], c: any) => {
          installRan = true
          t.equal(c, config)
          t.strictSame(args, [`${p}@1.2.3`])
        },
        uninstall: () => {
          uninstallRan = true
          throw new Error('should not uninstall anything')
        },
      },
    })) as typeof import('../dist/esm/plugin.js')
    await plugin(['add', p], config.l)
    t.equal(buildRan, true)
    t.equal(installRan, true)
    t.equal(uninstallRan, false)
    t.strictSame(config.values.plugin, ['a', 'b', 'c', p])
    t.strictSame(config.edited, undefined)
    t.matchSnapshot(logs.args())
    t.matchSnapshot(errs.args())
    t.equal(process.exitCode, 1)
    process.exitCode = 0
  })

  t.test('fail to build installed plugin, with cleanup', async t => {
    let buildRan = false
    let installRan = false
    let uninstallRan = false
    const p = 'dep-plugin'
    const config = new MockConfig(t)
    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/build.js': {
        build: async () => {
          buildRan = true
          throw new Error('build fail in test')
        },
      },
      '../dist/esm/get-install-set.js': {
        getInstallSet: (_: any, c: LoadedConfig) => {
          c.values.plugin?.push(p)
          return {
            added: new Set([p]),
            needInstall: new Set([`${p}@1.2.3`]),
            needCleanup: new Set([p]),
          }
        },
      },
      '../dist/esm/npm.js': {
        install: (args: string[], c: any) => {
          installRan = true
          t.equal(c, config)
          t.strictSame(args, [`${p}@1.2.3`])
        },
        uninstall: async (args: string[], c: any) => {
          uninstallRan = true
          t.equal(c, config)
          t.strictSame(args, [p])
        },
      },
    })) as typeof import('../dist/esm/plugin.js')
    await plugin(['add', p], config.l)
    t.equal(buildRan, true)
    t.equal(installRan, true)
    t.equal(uninstallRan, true)
    t.strictSame(config.values.plugin, ['a', 'b', 'c', p])
    t.strictSame(config.edited, undefined)
    t.matchSnapshot(logs.args())
    t.matchSnapshot(errs.args())
    t.equal(process.exitCode, 1)
    process.exitCode = 0
  })

  t.test('fail to install plugin', async t => {
    const errs = t.capture(console, 'error')
    let buildRan = false
    let installRan = false
    const p = 'dep-plugin'
    const config = new MockConfig(t)
    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/get-install-set.js': {
        getInstallSet: () => ({
          added: new Set([p]),
          needInstall: new Set([`${p}@1.2.3`]),
          needCleanup: new Set([p]),
        }),
      },
      '../dist/esm/build.js': {
        build: async () => (buildRan = true),
      },
      '../dist/esm/pkg-exists.js': {
        pkgExists: async () => false,
      },
      '../dist/esm/npm.js': {
        install: (args: string[], c: any) => {
          t.equal(c, config)
          t.strictSame(args, [`${p}@1.2.3`])
          installRan = true
          throw new Error('install fail in test')
        },
        uninstall: nope,
      },
    })) as typeof import('../dist/esm/plugin.js')
    await plugin(['add', p], config.l)
    t.equal(installRan, true)
    t.equal(buildRan, false)
    t.strictSame(config.values.plugin, ['a', 'b', 'c'])
    t.strictSame(config.edited, undefined)
    t.matchSnapshot(logs.args())
    t.matchSnapshot(errs.args())
    t.equal(process.exitCode, 1)
    process.exitCode = 0
  })

  t.test(`fail uninstall after build fail`, async t => {
    const errs = t.capture(console, 'error')
    let buildRan = false
    let installRan = false
    let uninstallRan = false
    const p = 'dep-plugin'
    const config = new MockConfig(t)
    const { plugin } = (await t.mockImport('../dist/esm/plugin.js', {
      '../dist/esm/build.js': {
        build: async () => {
          buildRan = true
          throw new Error('build fail in test')
        },
      },
      '../dist/esm/get-install-set.js': {
        getInstallSet: (_: any, c: LoadedConfig) => {
          c.values.plugin?.push(p)
          return {
            added: new Set([p]),
            needInstall: new Set([`${p}@1.2.3`]),
            needCleanup: new Set([p]),
          }
        },
      },
      '../dist/esm/npm.js': {
        install: (args: string[], c: any) => {
          t.equal(c, config)
          t.strictSame(args, [`${p}@1.2.3`])
          installRan = true
        },
        uninstall: async (args: string[], c: any) => {
          uninstallRan = true
          t.equal(c, config)
          t.strictSame(args, [p])
          throw new Error('uninstall fail in test')
        },
      },
    })) as typeof import('../dist/esm/plugin.js')
    await plugin(['add', p], config.l)
    t.equal(buildRan, true)
    t.equal(installRan, true)
    t.equal(uninstallRan, true)
    t.strictSame(config.values.plugin, ['a', 'b', 'c', p])
    t.strictSame(config.edited, undefined)
    t.strictSame(logs(), [])
    t.matchSnapshot(errs.args())
    t.equal(process.exitCode, 1)
    process.exitCode = 0
  })
})
