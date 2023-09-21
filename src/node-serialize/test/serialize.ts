import * as CORE from '@tapjs/core'
import { TestStreamDeserialize } from '@tapjs/error-serdes'
import { Minipass } from 'minipass'
import { setTimeout } from 'node:timers/promises'
import t, { Minimal } from 'tap'

t.cleanSnapshot = s => s
  .replace(/"file": "[^\n]*",$/gm, '"file": "{FILE}",')
  .replace(/"line": [0-9]+,$/gm, '"line": ##,')
  .replace(/"column": [0-9]+,$/gm, '"column": ##,')
  .replace(/"duration_ms": [0-9\.]+,$/gm, '"duration_ms": ##,')

t.test('various throws', async t => {
  const { serialize } = (await t.mockImport(
    '../src/serialize.js'
  )) as typeof import('../src/serialize.js')
  t.throws(
    () => serialize({ registered: true } as unknown as CORE.TAP),
    {
      message: 'Cannot serialize TAP stream, already registered',
    }
  )

  t.rejects(
    t.mockImport('../src/serialize.js', {
      '@tapjs/core': {
        ...CORE,
        proc: undefined,
      },
    }),
    { message: 'Cannot serialize TAP stream, no process object' }
  )
})

t.test('serialize a test stream', async t => {
  const tap = new Minimal({ name: 'TAP' }) as CORE.TAP
  let registered = false
  tap.register = () => (registered = true)

  const des = new TestStreamDeserialize()
  const proc = {
    stdout: des,
    stderr: new Minipass<string>({ encoding: 'utf8' }),
    columns: 50,
  }

  const { serialize } = (await t.mockImport('../src/serialize.js', {
    '@tapjs/core': { proc },
  })) as typeof import('../src/serialize.js')

  serialize(tap)
  t.not(proc.stdout, des, 'stdout got captured')
  t.equal(registered, true)

  proc.stdout.write('direct write to stdout\n')
  proc.stderr.write('direct write to stderr\n')

  tap.jobs = 2
  tap.test('suite 1', async t => {
    t.jobs = 2
    t.comment('suite 1 comment')
    t.test('test 1', async () => setTimeout(20))
    t.test('test 2', async () => {})
    t.end()
  })
  tap.test('suite a', async t => {
    t.jobs = 2
    t.comment('suite a comment')
    t.test('test b', async () => setTimeout(10))
    t.test('test c', async () => {})
    t.end()
  })
  tap.end()

  const messages = await des.collect()
  t.matchSnapshot(messages)
})
