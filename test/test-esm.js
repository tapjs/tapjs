let t;

try {
  t = require('tap')
} catch (e) {
  t = require('../')
  t.equals(e.code, 'MODULE_NOT_FOUND')
  t.end()
  return
}

const {join} = require('path')

const testPath = join(__dirname, './test.mjs')

t.test('test esm entry point', t => {
  t.spawn('node', [testPath])
  t.end()
})
