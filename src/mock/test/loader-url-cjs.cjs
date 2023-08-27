const t = require('tap')
const { loaderURL } = require('#loader-url')
const { pathToFileURL } = require('node:url')
t.equal(
  loaderURL,
  String(pathToFileURL(require.resolve('../dist/mjs/loader.js')))
)
