import t from 'tap'

import { serviceKey } from '../dist/esm/service-key.js'
t.type(serviceKey, 'string', 'got a key')
const { serviceKey: serviceKeyCJS } = t.mockRequire(
  '../dist/commonjs/service-key.js',
)

t.equal(serviceKey, serviceKeyCJS, 'same key for mjs and cjs')

const { serviceKey: serviceKeyAgain } = await t.mockImport(
  '../dist/esm/service-key.js',
)
const { serviceKey: serviceKeyAgainCJS } = await t.mockRequire(
  '../dist/commonjs/service-key.js',
)

t.equal(serviceKeyAgain, serviceKey)
t.equal(serviceKeyAgainCJS, serviceKey)
