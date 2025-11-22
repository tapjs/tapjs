import { Readable } from 'stream'
import { Parser } from '../dist/esm/index.js'
import t from 'tap'

const data = [
  'TAP version 13',
  '1..2',
  'ok 1 - test passes',
  '  ---',
  '  ...',
  'ok 2 - another test',
]

t.test('empty yaml blocks', function (t) {
  const r = new Readable()
  r.push(data.join('\n'))
  r.push(null)

  const p = new Parser()
  r.pipe(p)
  p.on('complete', r => {
    t.equal(r.ok, true)
    t.equal(r.count, 2)
    t.end()
  })
})
