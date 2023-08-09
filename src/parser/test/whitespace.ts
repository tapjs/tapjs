import { Parser } from '../dist/mjs/index.js'
import t from 'tap'
const data = [
  'TAP version 13',
  '',
  '1..1',
  '',
  '# Subtest: foo',
  '    ',
  '    ok',
  '    ',
  '    1..1',
  'ok 1 foo',
  '',
  '# passed 1 of 1 tests',
  '',
]

t.test('preserve whitespace', function (t) {
  const p = new Parser({ preserveWhitespace: true })
  const lines: string[] = []
  p.on('line', function (l) {
    lines.push(l)
  })
  p.on('complete', function () {
    t.same(lines.join('').split('\n'), data)
    t.end()
  })
  p.end(data.join('\n'))
})

t.test('drop whitespace', function (t) {
  const p = new Parser()
  const lines: string[] = []
  p.on('line', function (l) {
    lines.push(l)
  })
  p.on('complete', function () {
    t.equal(
      lines.join(''),
      data
        .filter(function (line) {
          return line.trim()
        })
        .join('\n') + '\n'
    )
    t.end()
  })
  p.end(data.join('\n'))
})
