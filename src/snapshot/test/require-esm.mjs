import t from 'tap'
import { req } from '../dist/esm/require.js'
import { createRequire } from 'node:module'
const { resolve } = createRequire(import.meta.url)
t.equal(req.resolve('./index.js'), resolve('../dist/esm/index.js'))
