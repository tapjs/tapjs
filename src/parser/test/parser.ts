import etoa from 'events-to-array'
import fs from 'fs'
import path from 'path'
import t from 'tap'
import { fileURLToPath } from 'url'
import { FinalPlan } from '../dist/esm/final-plan.js'
import { FinalResults } from '../dist/esm/final-results.js'
import { Parser } from '../dist/esm/index.js'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

const ignore = ['pipe', 'unpipe', 'prefinish', 'finish', 'newListener']

t.jobs = 8
const tapFiles = fs
  .readdirSync(__dirname + '/fixtures')
  .filter(f => /\.tap$/.test(f))

for (const tapFile of tapFiles) {
  const f = `${__dirname}/fixtures/${tapFile}`
  t.test(tapFile, async t => {
    //@ts-ignore
    t.snapshotFile = path.resolve(
      __dirname,
      '..',
      `tap-snapshots/test/parser/${tapFile}.test.cjs`,
    )
    t.plan(2)
    const tapContent = await fs.promises.readFile(f, 'utf8')
    for (const bail of [true, false]) {
      const parser = new Parser({ bail })
      const found = etoa(parser, ignore)
      parser.on('complete', () => {
        t.matchSnapshot(found, `output bail=${bail}`)
      })
      parser.end(tapContent)
    }
  })
}

// some edge cases in FinalPlan and FinalResults
t.test('FinalPlan when parser is not finished', async t => {
  const p = new Parser(() => {})
  const fp = new FinalPlan(false, p)
  t.equal(fp.start, null)
  t.equal(fp.end, null)
})

t.test('FinalResults including passes', async t => {
  const data = `TAP version 14
1..1
ok 1 - this is fine
`
  const p = new Parser({ passes: true })
  p.end(data)
  const fr = new FinalResults(false, p)
  t.match(fr.passes, [
    {
      ok: true,
      name: 'this is fine',
      id: 1,
      buffered: false,
      tapError: null,
      skip: false,
      todo: false,
      previous: null,
      plan: null,
      diag: null,
      time: null,
      fullname: 'this is fine',
    },
  ])
  const np = new Parser({})
  np.end(data)
  const frn = new FinalResults(false, np)
  t.equal(frn.passes, undefined)
})
