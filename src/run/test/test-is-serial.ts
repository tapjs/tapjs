import {resolve} from 'path'
import t from 'tap'

t.test('no serials, all parallel', async t => {
  const { testIsSerial } = await t.mockImport(
    '../dist/esm/test-is-serial.js',
    {
      '../dist/esm/main-config.js': {
        values: { serial: undefined },
      },
    }
  ) as typeof import('../dist/esm/test-is-serial.js')
  t.equal(testIsSerial('some-test-file'), false)
  t.equal(testIsSerial('other-test-file'), false)
})

t.test('some serial tests', async t => {
  const { testIsSerial } = await t.mockImport(
    '../dist/esm/test-is-serial.js',
    {
      '../dist/esm/main-config.js': {
        values: { serial: [
          resolve('dir'),
          resolve('some-file.js'),
        ] }
      },
    }
  ) as typeof import('../dist/esm/test-is-serial.js')
  t.equal(testIsSerial('some-test-file'), false)
  t.equal(testIsSerial('other-test-file'), false)
  t.equal(testIsSerial(resolve('dir/a/b/c.js')), true)
  t.equal(testIsSerial(resolve('some-file.js')), true)
})
