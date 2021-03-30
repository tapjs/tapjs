let t;

try {
  t = require('tap')
} catch (e) {
  t = require('../')
  t.equal(e.code, 'MODULE_NOT_FOUND')
  t.end()
  return
}

const {join} = require('path')

const testPath = join(__dirname, './test.mjs')

t.test('test esm entry point', t => {
  const arg = [testPath]
  if (/^v10\./.test(process.version))
    arg.unshift('--experimental-modules')
  t.spawn('node', arg)
  t.end()
})
