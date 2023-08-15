import t from 'tap'
import { Minimal } from '../dist/mjs/minimal.js'

t.cleanSnapshot = (s: string): string =>
  s
    .replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')
    .replace(/lineNumber: [0-9]+/, 'lineNumber: ##')
    .replace(/columnNumber: [0-9]+/, 'columnNumber: ##')

t.test('run the minimal test with subtests', async t => {
  const tb = new Minimal({ name: 'hello' })
  t.equal(String(tb), '[object Minimal]')
  tb.test('world', async tb => {
    t.equal(String(tb), '[object Minimal]')
    tb.pass('world')
  })
  tb.end()
  t.matchSnapshot(await tb.concat())
})
