'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const core_1 = require('@tapjs/core')
const t = (0, core_1.tap)()
t.test('hello', async t => {
  t.pass('spanning multiple lines', {
    diagnostic: true,
  })
  t.pass('next line indented weirdly', { diagnostic: true })
  t.equal(2, 2, { todo: true })
})
//# sourceMappingURL=scratch.js.map
