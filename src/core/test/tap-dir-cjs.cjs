const { dirname } = require('node:path')
const t = require('tap')
const { tapDir } = require('../dist/cjs/tap-dir-cjs.js')
t.equal(tapDir, dirname(__dirname))
