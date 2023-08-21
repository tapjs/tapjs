/**
 * The main tap export, CJS style
 *
 * The only different between this and the ESM export is that, because a
 * CJS default export cannot co-exist with exported types, we have to make
 * the types available as a global namespace. Which, isn't exactly the most
 * elegant thing in the world, since it can conflict with any other module
 * that defines a `tap` global namespace, but at least it's common enough
 * that it doesn't read as too strange or unintuitive.
 *
 * @module
 */
//@ts-ignore
import * as items from './index.js'
//@ts-ignore
import { t, TAP } from './index.js'

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

// Can't export types along with a default export, so this conventional hack
// Just dump em into the global in the 'tap' namespace.
declare global {
  /**
   * All exported types from the `@tapjs/core` module are exported
   * here into the global `tap` namespace.
   */
  namespace tap {
    export type Base = items.Base
    export type BaseOpts = items.BaseOpts
    export type Counts = items.Counts
    export type Extra = items.Extra
    export type Lists = items.Lists
    export type Minimal = items.Minimal
    export type Spawn = items.Spawn
    export type SpawnEvents = items.SpawnEvents
    export type SpawnOpts = items.SpawnOpts
    export type Stdin = items.Stdin
    export type StdinOpts = items.StdinOpts
    export type TapFile = items.TapFile
    export type TapFileEvents = items.TapFileEvents
    export type TapFileOpts = items.TapFileOpts
    export type TapBaseEvents = items.TapBaseEvents
    export type TestBase = items.TestBase
    export type TestBaseEvents = items.TestBaseEvents
    export type TestBaseOpts = items.TestBaseOpts
    export type Worker = items.Worker
    export type WorkerEvents = items.WorkerEvents
    export type WorkerOpts = items.WorkerOpts

    export type TapPlugin<
      T extends Object,
      O extends unknown = unknown
    > = items.TapPlugin<T, O>
  }
}
export = t as TAP & typeof items
