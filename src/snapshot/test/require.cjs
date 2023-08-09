const t = require('tap')
const { req } = require('../dist/cjs/require.js')
const { resolve } = require
t.equal(req.resolve('./index.js'), resolve('../dist/cjs/index.js'))
