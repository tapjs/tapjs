import { PromiseWithSubtest, TAP, tap } from '@tapjs/core'
import type { BuiltPlugins, Test, TestOpts } from '@tapjs/test'
export {
  Base,
  Counts,
  Lists,
  Spawn,
  Stdin,
  TestBase,
  Worker,
} from '@tapjs/core'
export { Test } from '@tapjs/test'
export type { TestOpts } from '@tapjs/test'
export type { TAP }
export const t: TAP = tap()

// People really like doing `import { test } from 'tap'`
// this makes that work by binding these methods as named exports.
//
// We can't export anything defined in a plugin, because that might
// not exist in the user's actual test environment, so the set is
// pretty limited, but `test` and `plan` are the only ones normally
// used in this way.
// Explicitly define types for subtest methods otherwise TS slaps a
// bunch of 'any' types because of the .bind()
// Technically these types aren't accurate if a plugin is loaded at
// runtime, but that's sort of what you buy into when changing types
// dynamically.
export const plan = t.plan.bind(t)

type SubtestMethod = {
  (
    name: string,
    extra: TestOpts,
    cb: (t: Test<BuiltPlugins, TestOpts> & BuiltPlugins) => any
  ): PromiseWithSubtest<Test<BuiltPlugins, TestOpts> & BuiltPlugins>
  (
    name: string,
    cb: (t: Test<BuiltPlugins, TestOpts> & BuiltPlugins) => any
  ): PromiseWithSubtest<Test<BuiltPlugins, TestOpts> & BuiltPlugins>
  (
    extra: TestOpts,
    cb: (t: Test<BuiltPlugins, TestOpts> & BuiltPlugins) => any
  ): PromiseWithSubtest<Test<BuiltPlugins, TestOpts> & BuiltPlugins>
  (
    cb: (t: Test<BuiltPlugins, TestOpts> & BuiltPlugins) => any
  ): PromiseWithSubtest<Test<BuiltPlugins, TestOpts> & BuiltPlugins>
}
export const test = t.test.bind(t) as SubtestMethod
export const skip = t.skip.bind(t) as SubtestMethod
export const todo = t.todo.bind(t) as SubtestMethod

export const bailout = t.bailout.bind(t)
export const comment = t.comment.bind(t)
export const timeout = t.timeout.bind(t)
export const pragma = t.pragma.bind(t)
export const pass = t.pass.bind(t)
export const fail = t.fail.bind(t)
export const end = t.end.bind(t)
