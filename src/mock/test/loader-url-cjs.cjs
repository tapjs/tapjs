const t = require('tap')
const { loaderURL } = require('../dist/cjs/loader-url.js')
const { pathToFileURL } = require('node:url')
t.equal(
  loaderURL,
  String(pathToFileURL(require.resolve('../dist/mjs/loader.js')))
)
