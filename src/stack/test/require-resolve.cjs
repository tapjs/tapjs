const { requireResolve } = require('#require-resolve')
const t = require('tap')
t.equal(requireResolve('glob'), require.resolve('glob'))
t.equal(requireResolve('some dep that is not here'), null)
