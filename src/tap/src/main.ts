import { TAP, tap } from '@tapjs/core'

import type { plugin as After } from '@tapjs/after'
import type { plugin as AfterEach } from '@tapjs/after-each'
import type { plugin as Asserts } from '@tapjs/asserts'
import type { plugin as Before } from '@tapjs/before'
import type { plugin as BeforeEach } from '@tapjs/before-each'
import type { plugin as Filter } from '@tapjs/filter'
import type { plugin as Fixture } from '@tapjs/fixture'
import type { plugin as Intercept } from '@tapjs/intercept'
import type { plugin as Mock } from '@tapjs/mock'
import type { plugin as Snapshot } from '@tapjs/snapshot'
import type { plugin as Spawn } from '@tapjs/spawn'
import type { plugin as Stdin } from '@tapjs/stdin'
import type { plugin as Worker } from '@tapjs/worker'

export {
  Base,
  BaseOpts,
  Counts,
  Extra,
  Lists,
  Minimal,
  Spawn,
  SpawnEvents,
  SpawnOpts,
  Stdin,
  StdinOpts,
  TapBaseEvents,
  TapFile,
  TapFileEvents,
  TapFileOpts,
  TapPlugin,
  TestBase,
  TestBaseEvents,
  TestBaseOpts,
  Worker,
  WorkerEvents,
  WorkerOpts,
} from '@tapjs/core'
export { Test } from '@tapjs/test'
export type { TestOpts } from '@tapjs/test'
export type { TAP }
// export all the bound methods from our internal plugins.
export {
  after,
  afterEach,
  bailout,
  before,
  beforeEach,
  comment,
  doesNotThrow,
  emits,
  end,
  error,
  fail,
  has,
  hasStrict,
  match,
  matchOnly,
  matchOnlyStrict,
  matchStrict,
  not,
  notHas,
  notHasStrict,
  notMatch,
  notMatchOnly,
  notMatchOnlyStrict,
  notMatchStrict,
  notOk,
  notSame,
  ok,
  only,
  pass,
  plan,
  pragma,
  same,
  skip,
  strictNotSame,
  test,
  throws,
  timeout,
  todo,
  type,
  mockRequire,
  mockImport,
  createMock,
  intercept,
  captureFn,
  capture,
  testdir,
  fixture,
  matchSnapshot,
  stdin,
  stdinOnly,
  spawn,
  worker,
}

export const t: TAP = tap()

// People really like doing `import { test }`
// this makes that work by exporting these methods as named exports.
//
// All methods on a Test object are bound to the appropriate plugin
// as the this-context if called without a this context.
//
// Technically these types aren't accurate if a plugin is disabled, but
// that's sort of what you buy into when changing types dynamically.
//
// Plugins other than the builtins that are added do not have their methods
// exported here, because we can't reasonably know what they are, and named
// exports must be explicitly named.

// Methods provided by the {@link @tapjs/core!test-base.TestBase class,
// always available
const {
  bailout,
  comment,
  end,
  fail,
  pass,
  plan,
  pragma,
  skip,
  stdinOnly,
  test,
  timeout,
  todo,
} = t

/**
 * If the property exists, use it, otherwise treat it as a known undefined
 */
export type Maybe<T, K extends symbol | number | string> =
  K extends keyof T ? T : T & { [k in K]: undefined }

/**
 * Type to make TypeScript ok with accessing an unknown property,
 * and just treating it as undefined if the plugin isn't loaded.
 */
export type MaybePlugin<P extends (...a: any[]) => any> = Maybe<
  TAP,
  keyof ReturnType<P>
>

// conditional exports, only available if plugins loaded
// it'll just be undefined if that particular plugin is disabled.
const { only } = t as MaybePlugin<typeof Filter>
const { after } = t as MaybePlugin<typeof After>
const { before } = t as MaybePlugin<typeof Before>
const { afterEach } = t as MaybePlugin<typeof AfterEach>
const { beforeEach } = t as MaybePlugin<typeof BeforeEach>
const {
  ok,
  notOk,
  not,
  type,
  same,
  notSame,
  strictNotSame,
  has,
  notHas,
  hasStrict,
  notHasStrict,
  match,
  notMatch,
  matchOnly,
  notMatchOnly,
  matchStrict,
  notMatchStrict,
  matchOnlyStrict,
  notMatchOnlyStrict,
  throws,
  doesNotThrow,
  emits,
  error,
} = t as MaybePlugin<typeof Asserts>
const { mockRequire, mockImport, createMock } = t as MaybePlugin<
  typeof Mock
>
const { captureFn, capture, intercept } = t as MaybePlugin<
  typeof Intercept
>
const { matchSnapshot } = t as MaybePlugin<typeof Snapshot>
const { spawn } = t as MaybePlugin<typeof Spawn>
const { stdin } = t as MaybePlugin<typeof Stdin>
const { worker } = t as MaybePlugin<typeof Worker>
const { testdir, fixture } = t as MaybePlugin<typeof Fixture>
