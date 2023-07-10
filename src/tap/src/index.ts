import { TAP, tap } from '@tapjs/core'
export { Base, Counts, Spawn, Stdin, TestBase, Lists, Worker } from '@tapjs/core'
export { Test } from '@tapjs/test'
export type { TAP }
export const t: TAP = tap()

// People really like doing `import { test } from 'tap'`
// this makes that work by binding these methods as named exports.
//
// We can't export anything defined in a plugin, because that might
// not exist in the user's actual test environment, so the set is
// pretty limited, but `test` and `plan` are the only ones normally
// used in this way.
export const plan = t.plan.bind(t)
export const test = t.test.bind(t)
export const skip = t.skip.bind(t)
export const todo = t.todo.bind(t)
export const bailout = t.bailout.bind(t)
export const comment = t.comment.bind(t)
export const timeout = t.timeout.bind(t)
export const pragma = t.pragma.bind(t)
export const pass = t.pass.bind(t)
export const fail = t.fail.bind(t)
export const end = t.end.bind(t)
