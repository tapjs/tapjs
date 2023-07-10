import { t, TAP } from './index.js'
import * as items from './index.js'

// this has to be done in a somewhat tricky way, because Test objects are
// actually proxies, in order to host all of their plugins. Those proxies
// are necessarily clever about providing methods that are bound to the
// appropriate plugin object, so we have to define them here as getters.
// This is all to prevent the need for `const t = require('tap').default`,
// which just offends me esthetically.
//
// The unfortunate side effect of this hybrid approach with a default
// export is that TS does not provide a way to export both types AND
// a default defined with `export =`
for (const [key, val] of Object.entries(items)) {
  Object.defineProperty(t, key, {
    get: () => val,
    enumerable: true,
    configurable: true,
  })
}
Object.defineProperty(t, 'default', {
  get: () => t,
  enumerable: true,
  configurable: true,
})

// Because we can't export types in a clean way, this is the hacky workaround
// Just dump em into the global in the 'tap' namespace.
declare global {
  namespace tap {
    export type Base = items.Base
    export type TestBase = items.TestBase
    export type Stdin = items.Stdin
    export type Spawn = items.Spawn
    export type Worker = items.Worker
    export type Test = items.Test
    export type TAP = items.TAP
    export type Counts = items.Counts
    export type Lists = items.Lists
  }
}
export = t as TAP & typeof items
