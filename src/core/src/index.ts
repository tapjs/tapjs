import { CallSiteLike, CallSiteLikeJSON } from '@tapjs/stack'

// base and test-base have to come before tap.js, because it
// extends Test which extends TestBase, so has to be present
// in the exports right away.
export * from './base.js'
export * from './counts.js'
export * from './lists.js'
export * from './test-base.js'
export * from './normalize-message-extra.js'

export * from './main-script.js'
export * from './parse-test-args.js'
export * from './proc.js'
export * from './spawn.js'
export * from './stdin.js'
export * from './tap-dir.js'
export * from './tap.js'
export * from './test-point.js'
export * from './waiter.js'
export * from './worker.js'

/**
 * The extra info passed to assertions.
 * Extended by BaseOpts, TestBaseOpts, and ultimately TestOpts, since
 * any subtest is also an assertion, and can take all the same assertion
 * options.
 */
export interface Extra {
  bail?: boolean
  todo?: string | boolean
  skip?: string | boolean
  at?: CallSiteLike | CallSiteLikeJSON | null
  stack?: string
  source?: string
  found?: any
  wanted?: any
  doNotWant?: any
  pattern?: any
  diff?: string
  message?: string
  expired?: string
  // error properties
  type?: string
  error?: any
  expectFail?: boolean
  diagnostic?: boolean
  tapChildBuffer?: string
  test?: string
  [k: string]: any
}

export type MessageExtra = [] | [string] | [Extra] | [string, Extra]
