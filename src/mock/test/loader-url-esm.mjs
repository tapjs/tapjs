import t from 'tap'
import { loaderURL } from '#loader-url'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
const require = createRequire(import.meta.url)
t.equal(
  loaderURL,
  String(pathToFileURL(require.resolve('../dist/mjs/loader.js')))
)
