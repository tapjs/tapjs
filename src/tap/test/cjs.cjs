const t = require('tap')
const { default: DEF, ...extra } = require('../dist/cjs/cjs.cjs')
const index = require('../dist/cjs/index.js')
t.equal(DEF, t)
t.strictSame({ ...extra }, { ...index })
exports = {}
