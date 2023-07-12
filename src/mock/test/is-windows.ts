import t from 'tap'

t.test('not windows', t => {
  const d = Object.getOwnPropertyDescriptor(process, 'platform') as PropertyDescriptor
  t.teardown(() => Object.defineProperty(process, 'platform', d))
  Object.defineProperty(process, 'platform', {
    value: 'linux',
    enumerable: true,
    configurable: true,
    writable: true,
  })
  const { isWindows } = t.mockRequire('../dist/cjs/is-windows.js')
  t.equal(isWindows, false)
  t.end()
})

t.test('yes windows', t => {
  const d = Object.getOwnPropertyDescriptor(process, 'platform') as PropertyDescriptor
  t.teardown(() => Object.defineProperty(process, 'platform', d))
  Object.defineProperty(process, 'platform', {
    value: 'win32',
    enumerable: true,
    configurable: true,
    writable: true,
  })
  const { isWindows } = t.mockRequire('../dist/cjs/is-windows.js')
  t.equal(isWindows, true)
  t.end()
})
