import t from 'tap'
import { globalPreload, load, resolve } from '../dist/mjs/hooks.js'
import * as loader from '../dist/mjs/legacy-loader.js'
t.strictSame(
  loader,
  Object.assign(Object.create(null), { globalPreload, load, resolve })
)
