const t = require('tap')
const { req } = require('../dist/commonjs/require.js')
const { resolve } = require
t.equal(
  req.resolve('./index.js'),
  resolve('../dist/commonjs/index.js')
)
