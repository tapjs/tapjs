import './fixtures/chalk.js'

import { LoadedConfig } from '@tapjs/config'
import * as CP from 'node:child_process'
import { readFileSync, statSync, writeFileSync } from 'node:fs'
import { format } from 'node:util'
import { resolve } from 'path'
import t from 'tap'
import * as yaml from 'tap-yaml'
import { config, firstOf } from '../dist/esm/config.js'

const logs = t.capture(console, 'log').args
const errs = t.capture(console, 'error').args
// calling process.exit() expects to exit the process, so simulate
// with a throw to break out.
const exits = t.capture(process, 'exit', code => {
  throw code
}).args

const join = (s: any[][]) => s.map(t => format(...t)).join('\n')

t.test('firstOf', t => {
  t.equal(firstOf([undefined, 'b', 'c'], 'd'), 'b')
  t.equal(firstOf([undefined, ''], 'd'), 'd')
  t.equal(firstOf(['x', ''], 'd'), 'x')
  t.end()
})

t.test('unknown cmd', async t => {
  await t.rejects(
    config(['unknown command'], {} as unknown as LoadedConfig)
  )
  t.matchSnapshot(join(errs()))
  t.strictSame(exits(), [[1]])
})

t.test('dump', async t => {
  const mockConfig = {
    values: {
      a: true,
      b: undefined,
      empty: [],
      full: [1, 2, 3],
    },
  } as unknown as LoadedConfig

  await config(['dump'], mockConfig)
  t.matchSnapshot(join(logs()))
  t.strictSame(errs(), [])
  t.strictSame(exits(), [])
})

t.test('list', async t => {
  const values = { a: true, b: 2, c: ['x', 'y'], d: 'e', empty: [] }
  const valuesFromConfigFile = { a: true, d: 'e' }
  t.test('nothing in configFile', async t => {
    const mockConfig = {
      configFile: undefined,
      values,
      valuesFromConfigFile: {},
    } as unknown as LoadedConfig

    await config(['list'], mockConfig)
    t.matchSnapshot(join(logs()), 'unfiltered')

    await config(['list', 'c'], mockConfig)
    t.matchSnapshot(join(logs()), 'one')

    await config(['list', 'c', 'd'], mockConfig)
    t.matchSnapshot(join(logs()), 'two')

    t.strictSame(errs(), [])
    t.strictSame(exits(), [])
  })

  t.test('has stuff in configFile', async t => {
    const mockConfig = {
      configFile: resolve('package.json'),
      values,
      valuesFromConfigFile,
    } as unknown as LoadedConfig

    await config([], mockConfig)
    t.matchSnapshot(join(logs()), 'unfiltered, default sub cmd')

    await config(['list', 'c'], mockConfig)
    t.matchSnapshot(join(logs()), 'one')

    await config(['list', 'c', 'd'], mockConfig)
    t.matchSnapshot(join(logs()), 'two')

    await config(['list', 'b'], mockConfig)
    t.matchSnapshot(join(logs()), 'no configFile fields')

    t.strictSame(errs(), [])
    t.strictSame(exits(), [])
  })
})

t.test('get', async t => {
  const values = {
    a: true,
    b: 2,
    c: ['x', 'y'],
    d: 'e',
    empty: [],
    z: undefined,
  }
  const defs = {
    a: { type: 'boolean' },
    b: { type: 'number' },
    c: { type: 'string', multiple: true },
    d: { type: 'string' },
    empty: { type: 'boolean', multiple: true },
    z: { type: 'number' },
  }
  const mockConfig = {
    configFile: undefined,
    values,
    jack: {
      toJSON: () => defs,
    },
    get: (k: keyof typeof values) => values[k],
  } as unknown as LoadedConfig
  t.test('get needs args', async t => {
    await t.rejects(config(['get'], mockConfig))
    t.strictSame(logs(), [])
    t.strictSame(exits(), [[1]])
    t.matchSnapshot(join(errs()))
  })
  t.test('unknown field', async t => {
    await config(['get', 'asdf'], mockConfig)
    t.strictSame(logs(), [])
    t.strictSame(exits(), [])
    t.matchSnapshot(join(errs()))
  })
  t.test('known with unknown field', async t => {
    await config(['get', 'z', 'd', 'asdf'], mockConfig)
    t.matchSnapshot(join(logs()))
    t.strictSame(exits(), [])
    t.matchSnapshot(join(errs()))
  })
})

t.test('set', async t => {
  t.test('set needs args', async t => {
    await t.rejects(config(['set'], {} as unknown as LoadedConfig))
    t.matchSnapshot(join(errs()))
    t.strictSame(logs(), [])
    t.strictSame(exits(), [[1]])
  })

  const values = { a: [1, 2], x: true }
  const defs = {
    a: { type: 'number', multiple: true },
    x: { type: 'boolean' },
    y: { type: 'string' },
  }
  const mockConfig = {
    configFile: resolve('.taprc'),
    valuesFromConfigFile: values,
    values,
    jack: {
      toJSON: () => defs,
      validate: () => {},
    },
    editConfigFile: () => {},
  } as unknown as LoadedConfig
  const saves = t.capture(mockConfig, 'editConfigFile')

  t.test('nothing to set', async t => {
    await t.rejects(config(['set', 'a=', 'a=1', 'a=2'], mockConfig))
    t.strictSame(logs(), [])
    t.matchSnapshot(join(errs()))
    t.strictSame(exits(), [[0]])
    t.strictSame(saves(), [])
  })

  t.test('no value provided', async t => {
    await t.rejects(config(['set', 'y'], mockConfig))
    t.strictSame(exits(), [[1]])
    t.matchSnapshot(join(errs()))
    t.strictSame(logs(), [])
  })

  t.test('bool must be "true" or "false"', async t => {
    t.capture(mockConfig.jack, 'validate', () => {
      throw new Error('nope')
    })
    await t.rejects(config(['set', 'x=x'], mockConfig))
    t.strictSame(exits(), [[1]])
    t.matchSnapshot(join(errs()))
    t.strictSame(logs(), [])
  })

  t.test('invalid data', async t => {
    t.capture(mockConfig.jack, 'validate', () => {
      throw new Error('nope')
    })
    await t.rejects(config(['set', 'y=z'], mockConfig))
    t.strictSame(exits(), [[1]])
    t.matchSnapshot(join(errs()))
    t.strictSame(logs(), [])
  })

  t.test('save something', async t => {
    await config(
      ['set', 'y=z', 'unknown=value', 'x=false'],
      mockConfig
    )
    t.strictSame(exits(), [])
    t.matchSnapshot(join(errs()))
    t.matchSnapshot(join(logs()))
    t.matchSnapshot(saves.args(), 'saves')
  })
})

t.test('edit', t => {
  const values = { a: [1, 2], x: true }
  const newValues = { a: [2, 3], y: 'yellow', defEmpty: ['x'] }
  const badValues = { bad: true }
  const defs = {
    a: { type: 'number', multiple: true },
    x: { type: 'boolean' },
    y: { type: 'string', default: 'xyz' },
    defEmpty: { type: 'string', multiple: true, default: [] },
    defFull: { type: 'string', multiple: true, default: ['a', 'b'] },

    n: { type: 'number' },
    ns: { type: 'number', multiple: true },
    b: { type: 'boolean' },
    bs: { type: 'boolean', multiple: true },
    c: { type: 'string' },
    cs: { type: 'string', multiple: true },
    dn: { type: 'number', default: 1 },
    dns: { type: 'number', multiple: true, default: [1] },
    db: { type: 'boolean', default: true },
    dbs: { type: 'boolean', multiple: true, default: [true, false] },
    dc: { type: 'string', default: 'c' },
    dcs: { type: 'string', multiple: true, default: ['c'] },
  }

  t.intercept(process, 'env', {
    value: {
      ...process.env,
      EDITOR: 'my-editor',
      VISUAL: 'my-editor',
    },
  })

  for (const configFile of ['.taprc', 'package.json']) {
    t.test(configFile, async t => {
      const dir = t.testdir({
        ...(configFile === '.taprc'
          ? {
              '.taprc': yaml.stringify(values),
            }
          : {}),
        '.git': {},
        'package.json': JSON.stringify({
          name: 'tap-config-edit-test',
          ...(configFile === 'package.json'
            ? {
                tap: values,
              }
            : {}),
        }),
      })
      const tmp = resolve(dir, '.tap', 'config-edit-tmp.yaml')
      const origCwd = process.cwd()
      process.chdir(dir)
      t.teardown(() => process.chdir(origCwd))

      const mockConfig = {
        globCwd: dir,
        configFile: resolve(dir, configFile),
        values,
        valuesFromConfigFile: values,
        jack: {
          toJSON: () => defs,
          validate: (v: Record<string, any>) => {
            if (v.bad) throw new Error('jack validation error')
          },
        },
        editConfigFile: () => {},
      } as unknown as LoadedConfig

      let spawnResponse: {
        status: number | null
        signal: NodeJS.Signals | null
      } = { status: 0, signal: null }
      let onSpawn = () => {}

      // just so we don't forget to reset these
      t.beforeEach(() => {
        spawnResponse = { status: 0, signal: null }
        onSpawn = () => {}
      })

      const cp = t.createMock(CP, {
        spawnSync: (
          cmd: string,
          args: string[],
          options: { stdio: string }
        ) => {
          t.equal(cmd, 'my-editor')
          t.strictSame(args, [tmp])
          t.strictSame(options, { stdio: 'inherit' })
          onSpawn()
          return spawnResponse
        },
      })
      const { config } = (await t.mockImport('../dist/esm/config.js', {
        'node:child_process': cp,
      })) as typeof import('../dist/esm/config.js')

      t.test(
        'edit resume fails without a file there already',
        async t => {
          await t.rejects(config(['edit', 'resume'], mockConfig))
          t.strictSame(exits(), [[1]])
          t.matchSnapshot(join(errs()))
          t.strictSame(logs(), [])
        }
      )

      t.test('fail if the edit fails', async t => {
        t.test('code', async t => {
          spawnResponse.status = 1
          await t.rejects(config(['edit'], mockConfig))
          t.strictSame(exits(), [[1]])
          t.matchSnapshot(join(errs()))
          t.strictSame(logs(), [])
        })
        t.test('signal', async t => {
          spawnResponse.signal = 'SIGTERM'
          await t.rejects(config(['edit'], mockConfig))
          t.strictSame(exits(), [[1]])
          t.matchSnapshot(join(errs()))
          t.strictSame(logs(), [])
        })
      })

      t.test('no changes', async t => {
        // edit resume works now, because last attempts created file
        await t.rejects(config(['edit', 'resume'], mockConfig))
        t.strictSame(exits(), [[0]])
        t.matchSnapshot(join(errs()))
        t.strictSame(logs(), [])
      })

      t.test('validate changes', async t => {
        onSpawn = () => {
          writeFileSync(tmp, yaml.stringify(badValues), 'utf8')
        }
        await t.rejects(config(['edit'], mockConfig))
        t.strictSame(exits(), [[1]])
        t.matchSnapshot(join(errs()))
        t.strictSame(logs(), [])
        t.equal(statSync(tmp).isFile(), true, 'tmp file left behind')
      })

      t.test('make actual changes', async t => {
        onSpawn = () => {
          writeFileSync(tmp, yaml.stringify(newValues), 'utf8')
        }
        await config(['edit'], mockConfig)
        t.strictSame(exits(), [])
        t.matchSnapshot(join(errs()))
        t.matchSnapshot(join(logs()))
        t.throws(
          () => statSync(tmp),
          { code: 'ENOENT' },
          'tmp file removed'
        )
        t.matchSnapshot(
          readFileSync(configFile, 'utf8'),
          'config edited'
        )
      })

      t.test('edit without an existing config', async t => {
        onSpawn = () => {
          writeFileSync(tmp, yaml.stringify(newValues), 'utf8')
        }
        await config(['edit'], {
          ...mockConfig,
          valuesFromConfigFile: {},
        } as unknown as LoadedConfig)
        t.strictSame(exits(), [])
        t.matchSnapshot(join(errs()))
        t.matchSnapshot(join(logs()))
        t.throws(
          () => statSync(tmp),
          { code: 'ENOENT' },
          'tmp file removed'
        )
        t.matchSnapshot(
          readFileSync(configFile, 'utf8'),
          'config edited'
        )
      })
    })
  }
  t.end()
})
