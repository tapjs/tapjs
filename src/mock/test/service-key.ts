import t from 'tap'
import { serviceKey as serviceKeyCJS } from '../dist/cjs/service-key.js'
import { serviceKey } from '../dist/mjs/service-key.js'
t.type(serviceKey, 'string', 'got a key')
t.equal(serviceKey, serviceKeyCJS, 'same key for mjs and cjs')
