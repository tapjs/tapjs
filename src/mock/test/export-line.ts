import t from 'tap'
import { exportLine } from '../dist/esm/export-line.js'

t.test('create some export lines', t => {
  t.equal(
    exportLine('key', 'mockSrc'),
    `const exp0 = mockSrc["key"]
export { exp0 as "key" }
`,
  )
  t.equal(
    exportLine('other key', 'mockSrc'),
    `const exp1 = mockSrc["other key"]
export { exp1 as "other key" }
`,
  )
  t.equal(
    exportLine('k', 'otherMockSrc'),
    `const exp0 = otherMockSrc["k"]
export { exp0 as "k" }
`,
  )
  t.equal(
    exportLine('default', 'otherMockSrc'),
    `const defExp = otherMockSrc.default
export default defExp
`,
  )
  t.end()
})
