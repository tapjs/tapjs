import t from 'tap'
import { exportLine } from '../dist/mjs/export-line.js'

t.test('create some export lines', t => {
  t.equal(
    exportLine('key', 'mockSrc', 'callerStack'),
    `const exp0 = mockSrc["key"]
export { exp0 as "key" }
`
  )
  t.equal(
    exportLine('other key', 'mockSrc', 'callerStack'),
    `const exp1 = mockSrc["other key"]
export { exp1 as "other key" }
`
  )
  t.equal(
    exportLine('k', 'otherMockSrc', 'callerStack'),
    `const exp0 = otherMockSrc["k"]
export { exp0 as "k" }
`
  )
  t.equal(
    exportLine('default', 'otherMockSrc', 'callerStack'),
    `const defExp = otherMockSrc.default
export default defExp
`
  )
  t.end()
})

t.test('pretend to be node 14', async t => {
  t.intercept(process, 'version', { value: 'v14.0.0' })
  const { exportLine } = (await t.mockImport(
    '../dist/mjs/export-line.js'
  )) as typeof import('../dist/mjs/export-line.js')

  t.equal(
    exportLine('key', 'mockSrc', 'callerStack'),
    `export const key = mockSrc["key"]
`
  )
  t.throws(() => exportLine('other key', 'mockSrc', 'callerStack'), {
    message: `invalid identifier in mock object: "other key"`,
    stack: `invalid identifier in mock object: "other key"\ncallerStack`,
  })

  t.equal(
    exportLine('k', 'otherMockSrc', 'callerStack'),
    `export const k = otherMockSrc["k"]
`
  )
  t.equal(
    exportLine('default', 'otherMockSrc', 'callerStack'),
    `const defExp = otherMockSrc.default
export default defExp
`
  )
  t.end()
})

t.test('pretend to not know the version', async t => {
  t.intercept(process, 'version', { value: undefined })
  const { exportLine } = (await t.mockImport(
    '../dist/mjs/export-line.js'
  )) as typeof import('../dist/mjs/export-line.js')

  t.equal(
    exportLine('key', 'mockSrc', 'callerStack'),
    `export const key = mockSrc["key"]
`
  )
  t.throws(() => exportLine('other key', 'mockSrc', 'callerStack'), {
    message: `invalid identifier in mock object: "other key"`,
    stack: `invalid identifier in mock object: "other key"\ncallerStack`,
  })

  t.equal(
    exportLine('k', 'otherMockSrc', 'callerStack'),
    `export const k = otherMockSrc["k"]
`
  )
  t.equal(
    exportLine('default', 'otherMockSrc', 'callerStack'),
    `const defExp = otherMockSrc.default
export default defExp
`
  )
  t.end()
})
