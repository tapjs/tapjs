import t from 'tap'

const tapContent = `TAP version 13
1..2
ok 1 this is fine
  ---
  message: 1 passed
  ...
not ok 2
  ---
  message: 2 failed
  ...
`

import { Parser as P } from '../dist/mjs/index.js'
import etoa from 'events-to-array'
const ignore = [
  'pipe',
  'unpipe',
  'prefinish',
  'finish',
  'newListener',
  'line',
  'version',
]
const p = new P({ passes: true })
const events = etoa(p, ignore)
p.end(tapContent)
t.matchSnapshot(events, 'saw expected events')
