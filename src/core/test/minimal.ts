import t from 'tap'
import { Minimal } from '../dist/cjs/minimal.js'

t.cleanSnapshot = (s: string): string =>
  s
    .replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')
    .replace(/lineNumber: [0-9]+/, 'lineNumber: ##')
    .replace(/columnNumber: [0-9]+/, 'columnNumber: ##')

t.test('run the minimal test with subtests', async t => {
  const tb = new Minimal({ name: 'hello' })
  tb.test('world', async tb => tb.pass('world'))
  tb.end()
  t.matchSnapshot(await tb.concat())
})
