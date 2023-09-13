const { requireResolve } = require('../dist/commonjs/require-resolve.js')
const t = require('tap')
t.equal(requireResolve('glob'), require.resolve('glob'))
t.equal(requireResolve('some dep that is not here'), null)
