import t from 'tap'
import loaderURL from '../dist/cjs/loader-url.js'
import { pathToFileURL } from 'node:url'
t.equal(
  loaderURL,
  String(pathToFileURL(require.resolve('../dist/mjs/loader.js')))
)
