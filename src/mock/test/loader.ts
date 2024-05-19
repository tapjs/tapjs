import t from 'tap'
import { initialize, load, resolve } from '../dist/esm/hooks.mjs'
import * as loader from '../dist/esm/loader.mjs'
t.strictSame(
  loader,
  Object.assign(Object.create(null), { initialize, load, resolve }),
)
