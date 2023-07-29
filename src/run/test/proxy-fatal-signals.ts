import { Minimal, Spawn, Worker } from '@tapjs/core'
import t from 'tap'
import { FinalResults } from 'tap-parser'
import { proxyFatalSignals } from '../dist/proxy-fatal-signals.js'

t.intercept(process, 'pid', { value: 123 })
const kills = t.capture(process, 'kill')

// let's pretend
Object.defineProperty(Minimal, 'name', { value: 'Spawn' })

t.test('proxy fatal signals to child test processes', async t => {
  const tb = new Minimal({ name: 'tap', jobs: 2 })
  const { subtest: one } = tb.test('one', async () => {})
  if (!one) throw new Error('no one')
  const { subtest: two } = tb.test('two', async () => {})
  if (!two) throw new Error('no two')
  const { subtest: tre } = tb.test('tre', async () => {})
  if (!tre) throw new Error('no tre')
  const { subtest: fur } = tb.test('fur', async () => {})
  if (!fur) throw new Error('no fur')

  const procKills: [string, string][] = []
  const procTerms: string[] = []
  const emitProc = (c: Minimal) => {
    if ((c as unknown as Spawn).proc)
      throw new Error('already have proc')
    const proc = {
      kill: (signal: NodeJS.Signals) => {
        procKills.push([c.name, signal])
      },
      terminate: () => {
        procTerms.push(c.name)
      },
    }
    Object.assign(c, { proc, worker: proc })
    c.emit('process', proc)
  }

  for (const c of [one, two]) {
    emitProc(c)
  }

  one.results = { ok: true } as unknown as FinalResults

  proxyFatalSignals(tb)
  // second time is no-op
  proxyFatalSignals(tb)
  process.emit('SIGTERM')

  Object.defineProperty(Minimal, 'name', { value: 'Worker' })

  tb.emit('worker', fur as unknown as Worker)
  emitProc(fur)
  tb.end()

  const output = await tb.concat()
  // one and two might've snuck by, but tre and fur must be failures
  t.match(output, 'not ok 3 - tre')
  t.match(output, 'not ok 4 - fur')

  // the two with processes that are started get the kill signal
  t.strictSame(procKills, [
    ['one', 'SIGTERM'],
    ['two', 'SIGTERM'],
    ['fur', 'SIGTERM'],
  ])
  t.strictSame(procTerms, ['one', 'two', 'fur'])

  for (const [name, c] of Object.entries({ one, two, tre, fur })) {
    t.match(c?.options, { name, signal: 'SIGTERM' }, name)
  }
})
