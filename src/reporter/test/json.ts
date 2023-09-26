import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const tapData = readFileSync(
  fileURLToPath(
    new URL('./fixtures/example-tap.tap', import.meta.url)
  ),
  'utf8'
)

import { JSONReport, JSONStream } from '../src/json.js'

import t from 'tap'

const r = new JSONReport()
const s = new JSONStream()

r.write(tapData)
r.end()
s.write(tapData)
s.end()

t.matchSnapshot(await r.concat(), 'json')
t.matchSnapshot(await s.concat(), 'jsonstream')
