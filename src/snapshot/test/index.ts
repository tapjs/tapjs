import t from 'tap'
import {
  config,
  plugin,
  SnapshotProvider,
} from '../dist/mjs/index.js'

import { Test } from '@tapjs/test'
import { basename, resolve } from 'path'

t.equal(t.pluginLoaded(plugin), true, 'plugin loaded by default')
t.matchSnapshot(config, 'config')

const testSnapshotProviderStore = new Map<
  string,
  { [k: string]: string }
>()
const testProviders = new Set<TestSnapshotProvider>()
const saveAll = () => [...testProviders].forEach(p => p.save())
class TestSnapshotProvider implements SnapshotProvider {
  file: string
  data: { [k: string]: string }
  constructor(file: string) {
    this.file = file
    this.data = testSnapshotProviderStore.get(this.file) || {}
    testProviders.add(this)
  }
  read(msg: string) {
    return this.data[msg]
  }
  snap(data: string, msg: string) {
    this.data[msg] = data
  }
  save() {
    testSnapshotProviderStore.set(this.file, this.data)
  }
}

t.test('just some basic snapshots', t => {
  t.matchSnapshot({ a: 1 }, 'object')
  t.matchSnapshot('hello', 'string')
  t.matchSnapshot({ __proto__: null, a: 1 }, 'null object')
  t.matchSnapshot(/xyz/, 'regexp')
  t.matchSnapshot([...'xyz'], 'array')
  t.matchSnapshot(null, 'null')
  t.resolveMatchSnapshot(
    Promise.resolve({ p: true }),
    'resolve match'
  )
  t.end()
})

t.test('custom options', t => {
  t.test(
    'json snapshots',
    {
      snapshotProvider: TestSnapshotProvider,
      writeSnapshot: true,
      formatSnapshot: obj => JSON.stringify(obj),
      snapshotFile: 'json-snapshots',
    },
    t => {
      t.matchSnapshot({ a: 1 }, 'object')
      t.matchSnapshot('hello', 'string')
      t.matchSnapshot({ __proto__: null, a: 1 }, 'null object')
      t.matchSnapshot(/xyz/, 'regexp')
      t.matchSnapshot([...'xyz'], 'array')
      t.matchSnapshot(null, 'null')
      saveAll()
      t.strictSame(testSnapshotProviderStore.get('json-snapshots'), {
        'test/index.ts > TAP > custom options > json snapshots > object':
          '{"a":1}',
        'test/index.ts > TAP > custom options > json snapshots > string':
          'hello',
        'test/index.ts > TAP > custom options > json snapshots > null object':
          '{"a":1}',
        'test/index.ts > TAP > custom options > json snapshots > regexp':
          '{}',
        'test/index.ts > TAP > custom options > json snapshots > array':
          '["x","y","z"]',
        'test/index.ts > TAP > custom options > json snapshots > null':
          'null',
      })
      t.end()
    }
  )

  // verify they can be read and matched
  t.test(
    'json snapshots',
    {
      snapshotProvider: TestSnapshotProvider,
      writeSnapshot: false,
      formatSnapshot: obj => JSON.stringify(obj),
      snapshotFile: 'json-snapshots',
    },
    t => {
      t.matchSnapshot({ a: 1 }, 'object')
      t.matchSnapshot('hello', 'string')
      t.matchSnapshot({ __proto__: null, a: 1 }, 'null object')
      t.matchSnapshot(/xyz/, 'regexp')
      t.matchSnapshot([...'xyz'], 'array')
      t.matchSnapshot(null, 'null')
      t.end()
    }
  )

  t.test(
    'js format',
    {
      snapshotProvider: TestSnapshotProvider,
      writeSnapshot: true,
      snapshotFile: 'js-snapshots',
      compareOptions: { style: 'js' },
    },
    t => {
      t.strictSame(t.compareOptions, { style: 'js' })
      t.cleanSnapshot = s => s.replace(/^ +/gm, '')
      t.matchSnapshot({ a: 1 }, 'object')
      t.matchSnapshot('hello', 'string')
      t.matchSnapshot({ __proto__: null, a: 1 }, 'null object')
      t.matchSnapshot(/xyz/, 'regexp')
      t.matchSnapshot([...'xyz'], 'array')
      t.matchSnapshot(null, 'null')
      t.test('child', t => {
        t.matchSnapshot({ foo: 'bar' }, 'obj')
        t.end()
      })
      saveAll()
      t.strictSame(testSnapshotProviderStore.get('js-snapshots'), {
        'test/index.ts > TAP > custom options > js format > object':
          '{\n"a": 1,\n}',
        'test/index.ts > TAP > custom options > js format > string':
          'hello',
        'test/index.ts > TAP > custom options > js format > null object':
          '{\n"a": 1,\n}',
        'test/index.ts > TAP > custom options > js format > regexp':
          '/xyz/',
        'test/index.ts > TAP > custom options > js format > array':
          '[\n"x",\n"y",\n"z",\n]',
        'test/index.ts > TAP > custom options > js format > null':
          'null',
        'test/index.ts > TAP > custom options > js format > child > obj':
          '{\n"foo": "bar",\n}',
      })
      t.end()
    }
  )

  // verify that they can be read and matched
  t.test(
    'js format',
    {
      snapshotProvider: TestSnapshotProvider,
      writeSnapshot: false,
      snapshotFile: 'js-snapshots',
      cleanSnapshot: s => s.replace(/^ +/gm, ''),
    },
    t => {
      t.compareOptions = { style: 'js' }
      t.matchSnapshot({ a: 1 }, 'object')
      t.matchSnapshot('hello', 'string')
      t.matchSnapshot({ __proto__: null, a: 1 }, 'null object')
      t.matchSnapshot(/xyz/, 'regexp')
      t.matchSnapshot([...'xyz'], 'array')
      t.matchSnapshot(null, 'null')
      t.test('child', t => {
        t.matchSnapshot({ foo: 'bar' }, 'obj')
        t.end()
      })
      t.end()
    }
  )

  t.test(
    'non-string',
    {
      snapshotProvider: TestSnapshotProvider,
      writeSnapshot: true,
      snapshotFile: 'nonstring',
    },
    t => {
      let i = 0
      t.formatSnapshot = () => i++
      t.matchSnapshot(['anything'], 'first')
      t.matchSnapshot(['that is not a string'], 'second')
      t.matchSnapshot('xyz', 'string')
      t.test('child', t => {
        t.matchSnapshot({ a: 1 }, 'obj')
        t.end()
      })
      saveAll()
      t.strictSame(testSnapshotProviderStore.get('nonstring'), {
        'test/index.ts > TAP > custom options > non-string > first':
          '0',
        'test/index.ts > TAP > custom options > non-string > second':
          '1',
        'test/index.ts > TAP > custom options > non-string > string':
          'xyz',
        'test/index.ts > TAP > custom options > non-string > child > obj':
          '2',
      })
      t.end()
    }
  )

  t.test(
    'non-string',
    {
      snapshotProvider: TestSnapshotProvider,
      writeSnapshot: false,
      snapshotFile: 'nonstring',
    },
    t => {
      let i = 0
      t.formatSnapshot = () => i++
      t.matchSnapshot([], 'first')
      t.matchSnapshot([], 'second')
      t.matchSnapshot('xyz', 'string')
      t.test('child', t => {
        t.matchSnapshot({ a: 1 }, 'obj')
        t.end()
      })
      t.end()
    }
  )

  t.end()
})

t.test('resolveMatchSnapshot', async t => {
  const d = t.testdir({ snapshot: '' })
  const tt = new Test({
    name: 'resolve matcher',
    snapshotFile: resolve(d, 'snapshot'),
    writeSnapshot: true,
  })
  t.ok(await tt.resolveMatchSnapshot(Promise.resolve({ a: 1 })))
  //@ts-expect-error
  t.notOk(await tt.resolveMatchSnapshot({ a: 1 }))
  t.notOk(
    await tt.resolveMatchSnapshot(() => {
      throw new Error('ok')
    })
  )
  t.notOk(
    await tt.resolveMatchSnapshot(Promise.reject(new Error('ok')))
  )
  t.end()
})

t.test('set snapshot file', { saveFixture: true }, t => {
  const d = t.testdir({
    parent: '',
    child: '',
  })
  t.test(
    'parent',
    { writeSnapshot: true, snapshotFile: resolve(d, 'parent') },
    t => {
      t.matchSnapshot({ a: 1 })
      t.test('child', t => {
        t.snapshotFile = resolve(d, 'blah')
        t.snapshotFile = resolve(d, 'child')
        t.matchSnapshot({ child: true })
        t.end()
      })
      t.end()
    }
  )
  t.end()
})

t.test('default options based on env', t => {
  const { npm_lifecycle_event, TAP_SNAPSHOT } = process.env
  t.teardown(() => {
    if (npm_lifecycle_event !== undefined) {
      process.env.npm_lifecycle_event = npm_lifecycle_event
    }
    if (TAP_SNAPSHOT !== undefined) {
      process.env.TAP_SNAPSHOT = TAP_SNAPSHOT
    }
  })

  delete process.env.TAP_SNAPSHOT
  delete process.env.npm_lifecycle_event

  t.test('no envs set', t => {
    const tt = new Test({ name: 'x' })
    t.equal(tt.writeSnapshot, false)
    t.end()
  })

  t.test('TAP_SNAPSHOT', t => {
    process.env.TAP_SNAPSHOT = '1'
    const tt = new Test({ name: 'x' })
    t.equal(tt.writeSnapshot, true)
    process.env.TAP_SNAPSHOT = '0'
    const tf = new Test({ name: 'x' })
    t.equal(tf.writeSnapshot, false)
    delete process.env.TAP_SNAPSHOT
    t.end()
  })

  t.test('npm_lifecycle_event=snap', t => {
    process.env.npm_lifecycle_event = 'snap'
    const tt = new Test({ name: 'x' })
    t.equal(tt.writeSnapshot, true)
    t.end()
  })

  t.test('npm_lifecycle_event=snapshot', t => {
    process.env.npm_lifecycle_event = 'snapshot'
    const tt = new Test({ name: 'x' })
    t.equal(tt.writeSnapshot, true)
    t.end()
  })

  t.test('npm_lifecycle_event=snappydodappy', t => {
    process.env.npm_lifecycle_event = 'snappydodappy'
    const tt = new Test({ name: 'x' })
    t.equal(tt.writeSnapshot, false)
    t.end()
  })

  t.end()
})

t.test('snapshots that do not match', t => {
  t.test('write some snaps', t => {
    const tt = new Test({
      name: 'snaps failer',
      snapshotProvider: TestSnapshotProvider,
      writeSnapshot: true,
      snapshotFile: 'failer',
    })
    t.ok(tt.matchSnapshot({ a: 1 }, 'obj'))
    t.ok(tt.matchSnapshot('asdf', 'string'))
    saveAll()
    t.end()
  })
  t.test('fail to match some snaps', t => {
    const tt = new Test({
      name: 'snaps failer',
      snapshotProvider: TestSnapshotProvider,
      writeSnapshot: false,
      snapshotFile: 'failer',
    })
    t.notOk(tt.matchSnapshot({ b: 2 }, 'obj'))
    t.notOk(tt.matchSnapshot('quux', 'string'))
    t.end()
  })
  t.end()
})

t.test('snapshot filename includes args', t => {
  t.teardown(() => {
    process.argv.pop()
    process.argv.pop()
  })
  process.argv.push('some', 'args')
  const tt = new Test({ name: 'snappy file maker' })
  t.equal(basename(tt.snapshotFile), 'index.ts-some-args.test.cjs')
  t.end()
})
