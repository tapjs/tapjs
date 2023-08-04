import { requireResolve } from '../dist/cjs/require-resolve.js'
import t from 'tap'
t.equal(requireResolve('glob'), require.resolve('glob'))
t.equal(requireResolve('some dep that is not here'), null)
