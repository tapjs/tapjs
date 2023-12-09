import t from 'tap'
import { hooks } from '../dist/esm/hooks-url.js'
t.equal(String(hooks), String(new URL(
  '../dist/esm/hooks.mjs',
  import.meta.url
)))

import { hooks as hooksSrc } from '../src/hooks-url.js'
t.equal(String(hooksSrc), String(new URL(
  '../src/hooks.mjs',
  import.meta.url
)))

import hooksCJSDist from '../dist/commonjs/hooks-url.js'
t.equal(String(hooksCJSDist.hooks), String(new URL(
  '../dist/esm/hooks.mjs',
  import.meta.url
)))

import hooksCJSSrc from '../src/hooks-url-cjs.cjs'
t.equal(String(hooksCJSSrc.hooks), String(new URL(
  '../src/hooks.mjs',
  import.meta.url
)))
