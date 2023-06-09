const tapContent = `TAP version 13
ok 1 - this is fine
not ok 2 - going to bail
Bail out! # saw that coming
`

import { Parser as P } from '../'
import etoa from 'events-to-array'
const ignore = [
  'pipe',
  'unpipe',
  'prefinish',
  'finish',
  'newListener',
  'line',
]
const p = new P()
const events = etoa(p, ignore)
p.on('bailout', function (reason) {
  p.bailout('new ' + reason)
})
p.end(tapContent)

import t from 'tap'
t.matchSnapshot(events)
