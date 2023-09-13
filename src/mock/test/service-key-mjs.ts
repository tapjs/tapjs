import t from 'tap'
import { serviceKey as serviceKeyCJS } from '../dist/commonjs/service-key.js'
import { serviceKey } from '../dist/esm/service-key.js'
t.type(serviceKey, 'string', 'got a key')
t.equal(serviceKey, serviceKeyCJS, 'same key for mjs and cjs')
