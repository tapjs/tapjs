import { requireResolve } from '../dist/mjs/require-resolve.js'
import t from 'tap'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
t.equal(requireResolve('glob'), require.resolve('glob'))
t.equal(requireResolve('some dep that is not here'), null)
