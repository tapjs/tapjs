import t from 'tap'
import { initialize, load, resolve } from '../dist/mjs/hooks.js'
import * as loader from '../dist/mjs/loader.js'
t.strictSame(
  loader,
  Object.assign(Object.create(null), { initialize, load, resolve })
)
