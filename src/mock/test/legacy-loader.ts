import t from 'tap'
import { globalPreload, load, resolve } from '../dist/esm/hooks.mjs'
import * as loader from '../dist/esm/legacy-loader.mjs'
t.strictSame(
  loader,
  Object.assign(Object.create(null), {
    globalPreload,
    load,
    resolve,
  }),
)
