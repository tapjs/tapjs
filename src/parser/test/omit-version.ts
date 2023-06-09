import t from 'tap'

var tapContent = `TAP version 13
ok 1 - this is fine
1..1
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
const p = new P({ omitVersion: true })
const events = etoa(p, ignore)
p.on('version', function (version) {
  t.fail('should not see version event', { version })
})
const lines: string[] = []
p.on('line', lines.push.bind(lines))
p.end(tapContent)
t.matchSnapshot(lines, 'saw expected lines')
t.matchSnapshot(events, 'saw expected events')
