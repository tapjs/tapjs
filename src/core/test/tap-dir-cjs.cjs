const { dirname } = require('node:path')
const t = require('tap')
const { tapDir } = require('../dist/commonjs/tap-dir.js')
t.equal(tapDir, dirname(__dirname))
