const t = require('tap')
const {
  default: DEF,
  ...extra
} = require('../dist/commonjs/index.js')
const main = require('../dist/commonjs/main.js')
t.equal(DEF, t)
t.strictSame({ ...extra }, { ...main })
