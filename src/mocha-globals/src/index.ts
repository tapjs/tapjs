import { TapPlugin, TestBase, TestBaseOpts } from '@tapjs/core'
import { at } from '@tapjs/stack'
import { isPromise } from 'is-actual-promise'

import { plugin as AfterPlugin } from '@tapjs/after'
import { plugin as AfterEachPlugin } from '@tapjs/after-each'
import { plugin as BeforePlugin } from '@tapjs/before'
import { plugin as BeforeEachPlugin } from '@tapjs/before-each'

// the t associated with the current describe() block
let currentSuite: TestBase | undefined = undefined
// the t associated with the current it() block
let currentTest: TestBase | undefined = undefined
// the root where BDD/TDD interface is mounted
let rootSuite: TestBase | undefined = undefined

/**
 * The function passed to it() block
 *
 * Calling with an error fails the test.
 */
export type Done = (err?: any) => void | any
/**
 * The method passed to describe()
 */
export type SuiteBlock = () => void | any
/**
 * The method passed to it()
 */
export type TestBlock =
  | (() => void | any | Promise<void | any>)
  | ((done: Done) => void | any | Promise<void | any>)
/**
 * The method passed to before(), after(), beforeEach(), or afterEach()
 */
export type HookBlock = () => void | any | Promise<void | any>

/**
 * Create a test suite
 *
 * Alias: context, suite
 */
export function describe(block: SuiteBlock): void
export function describe(name: string, block?: SuiteBlock): void
export function describe(
  nameOrBlock: string | SuiteBlock,
  block?: SuiteBlock
): void {
  const name =
    typeof nameOrBlock === 'string'
      ? nameOrBlock
      : typeof nameOrBlock === 'function'
      ? nameOrBlock.name
      : undefined
  if (typeof nameOrBlock === 'function') block = nameOrBlock
  const fn = block
  if (!fn) {
    const er = new Error('no function provided to describe()')
    Error.captureStackTrace(er, describe)
    throw er
  }
  if (!currentSuite) {
    const er = new Error(
      `must import 'tap' before calling describe()`
    )
    Error.captureStackTrace(er, describe)
    throw er
  }
  const opts: TestBaseOpts = {
    at: at(describe),
  }
  currentSuite.t.test(name || 'unnamed suite', opts, t => {
    currentSuite = t
    fn.call(t)
    currentSuite = t.parent
    t.end()
  })
}

/**
 * Create a test within a suite.
 *
 * Alias: test
 */
export function it(): void
export function it(name: string): void
export function it(block: TestBlock): void
export function it(name: string, block: TestBlock): void
export function it(
  nameOrBlock?: string | TestBlock,
  block?: TestBlock
): void {
  const name =
    typeof nameOrBlock === 'string'
      ? nameOrBlock
      : typeof nameOrBlock === 'function'
      ? nameOrBlock.name
      : /* c8 ignore start */
        undefined
  /* c8 ignore stop */
  if (typeof nameOrBlock === 'function') block = nameOrBlock
  const cs = getCurrentSuite()
  if (!cs) {
    const er = new Error('must call describe() before calling it()')
    Error.captureStackTrace(er, it)
    throw er
  }
  if (getCurrentTest()) {
    const er = new Error('it() calls may not be nested')
    Error.captureStackTrace(er, it)
    throw er
  }

  const opts: TestBaseOpts = {
    at: at(it),
  }
  if (!block) {
    opts.todo = true
  }
  /* c8 ignore start */
  const itBlock: TestBlock = block || (() => {})
  /* c8 ignore stop */
  cs.test(name || 'unnamed test', opts, t => {
    let doneCalled = false
    let returnedPromise = false
    let inPromiseReturn = false
    const done: Done = (er: unknown) => {
      if (er) t.threw(er)
      if (returnedPromise && !inPromiseReturn) {
        const er = new Error('done() called when promise returned')
        Error.captureStackTrace(er, done)
        throw er
      }
      if (doneCalled) {
        const er = new Error('done() called multiple times')
        Error.captureStackTrace(er, done)
        throw er
      }
      doneCalled = true
      inPromiseReturn = false
      currentTest = undefined
      t.end()
    }
    currentTest = t
    const ret = itBlock.call(t, done)
    if (isPromise(ret)) {
      returnedPromise = true
      return ret.then(() => {
        inPromiseReturn = true
        done()
      })
    }
    if (itBlock.length === 0 && !doneCalled && !returnedPromise) {
      done()
    }
  })
}

const hookPre = (
  hook: string,
  hookFn: (...a: any[]) => any,
  nameOrBlock: string | HookBlock,
  block?: HookBlock
) => {
  const name =
    typeof nameOrBlock === 'string'
      ? nameOrBlock
      : typeof nameOrBlock === 'function'
      ? nameOrBlock.name
      : undefined
  if (typeof nameOrBlock === 'function') block = nameOrBlock
  const suite = getCurrentSuite() || rootSuite?.t
  if (!suite) {
    const er = new Error(`must import 'tap' before calling ${hook}()`)
    Error.captureStackTrace(hookFn)
    throw er
  }
  if (typeof block !== 'function') {
    const er = new Error(`no function provided to ${hook}()`)
    Error.captureStackTrace(hookFn)
    throw er
  }
  const fn = block
  return [
    suite,
    () => {
      if (name) suite.comment(`${hook}: ${name}`)
      return fn()
    },
  ] as [
    Exclude<ReturnType<typeof getCurrentSuite>, undefined>,
    HookBlock
  ]
}

/**
 * Run a function at the start of the suite.
 *
 * Equivalent to t.before()
 *
 * Alias: suiteSetup()
 */
export function before(block: HookBlock): any | void
export function before(name: string, block: HookBlock): any | void
export function before(
  nameOrBlock: string | HookBlock,
  block?: HookBlock
): any | void {
  const [suite, fn] = hookPre('before', before, nameOrBlock, block)
  /* c8 ignore start */
  if (!suite.pluginLoaded(BeforePlugin)) {
    const er = new Error(
      '@tapjs/before plugin disabled, cannot call before()'
    )
    Error.captureStackTrace(er, before)
    throw er
  }
  /* c8 ignore stop */
  suite.before(fn)
}

/**
 * Run a function at the end of the suite.
 *
 * Equivalent to t.after() or t.teardown()
 *
 * Alias: suiteTeardown()
 */
export function after(block: HookBlock): any | void
export function after(name: string, block: HookBlock): any | void
export function after(
  nameOrBlock: string | HookBlock,
  block?: HookBlock
): any | void {
  const [suite, fn] = hookPre('after', after, nameOrBlock, block)
  /* c8 ignore start */
  if (!suite.pluginLoaded(AfterPlugin)) {
    const er = new Error(
      '@tapjs/after plugin disabled, cannot call after()'
    )
    Error.captureStackTrace(er, after)
    throw er
  }
  /* c8 ignore stop */
  suite.after(fn)
}

/**
 * Run a function before each test within the suite, and before
 * all child suites and tests.
 *
 * Equivalent to t.beforeEach()
 *
 * Alias: setup()
 */
export function beforeEach(block: HookBlock): any | void
export function beforeEach(name: string, block: HookBlock): any | void
export function beforeEach(
  nameOrBlock: string | HookBlock,
  block?: HookBlock
): any | void {
  const [suite, fn] = hookPre(
    'beforeEach',
    beforeEach,
    nameOrBlock,
    block
  )
  /* c8 ignore start */
  if (!suite.pluginLoaded(BeforeEachPlugin)) {
    const er = new Error(
      '@tapjs/before-each plugin disabled, cannot call beforeEach()'
    )
    Error.captureStackTrace(er, beforeEach)
    throw er
  }
  /* c8 ignore stop */
  suite.beforeEach(fn)
}

/**
 * Run a function after each test within the suite, and after
 * all child suites and tests.
 *
 * Equivalent to t.afterEach()
 *
 * Alias: teardown()
 */
export function afterEach(block: HookBlock): any | void
export function afterEach(name: string, block: HookBlock): any | void
export function afterEach(
  nameOrBlock: string | HookBlock,
  block?: HookBlock
): any | void {
  const [suite, fn] = hookPre(
    'afterEach',
    afterEach,
    nameOrBlock,
    block
  )
  /* c8 ignore start */
  if (!suite.pluginLoaded(AfterEachPlugin)) {
    const er = new Error(
      '@tapjs/after-each plugin disabled, cannot call afterEach()'
    )
    Error.captureStackTrace(afterEach)
    throw er
  }
  /* c8 ignore stop */
  suite.afterEach(fn)
}

/**
 * Get the current suite.
 *
 * Returns `undefined` if the interface is not mounted, or if not in
 * a suite currently.
 */
const getCurrentSuite = () =>
  currentSuite && currentSuite.t !== rootSuite?.t
    ? currentSuite.t
    : undefined

/**
 * Get the current test.
 *
 * Returns `undefined` if the interface is not mounted, or if not in a test
 * currently.
 */
const getCurrentTest = () => currentTest?.t

/**
 * Return the tap test that the interface is mounted on (by default, the root
 * TAP object when the plugin is loaded) or `undefined` if not currently
 * mounted.
 */
const getMounted = () => rootSuite?.t

/**
 * Returns a reference to the current test, current suite, or tap mount
 * point. If not mounted, throws an error.
 *
 * This is useful for doing arbitrary tap stuff within the BDD/TDD interface.
 */
export const tt = (): Exclude<
  | ReturnType<typeof getMounted>
  | ReturnType<typeof getCurrentTest>
  | ReturnType<typeof getCurrentSuite>,
  undefined
> => {
  const t = getCurrentTest() || getCurrentSuite() || getMounted()
  if (!t) {
    const er = new Error('not currently mounted')
    Error.captureStackTrace(er, tt)
    throw er
  }
  return t
}

export {
  getCurrentSuite as currentSuite,
  getCurrentTest as currentTest,
  getMounted as mounted,
}
export {
  describe as context,
  describe as suite,
  it as specify,
  it as test,
  before as suiteSetup,
  after as suiteTeardown,
  beforeEach as setup,
  afterEach as teardown,
}

/**
 * Mount the interface on a tap test.
 *
 * Throws an error if already mounted.
 *
 * Called by default on the root TAP object when the plugin is active.
 */
export const mount = (t: TestBase) => {
  if (rootSuite) {
    const er = new Error(
      'mocha globals already mounted on a tap test'
    )
    Error.captureStackTrace(er, mount)
    throw er
  }
  rootSuite = t
  currentSuite = t
}

/**
 * Set all the BDD/TDD interface methods on the global object.
 */
export const globalize = () => {
  Object.assign(globalThis, {
    describe,
    context: describe,
    suite: describe,
    it,
    specify: it,
    test: it,
    before,
    suiteSetup: before,
    after,
    suiteTeardown: after,
    beforeEach,
    setup: beforeEach,
    afterEach,
    teardown: afterEach,
  })
}
if (process.env.TAP_MOCHA_GLOBALS === '1') {
  globalize()
}

/**
 * Plugin method used by tap.
 *
 * Doesn't return any extensions, just attaches to the first Test it
 * encounters (by default, this is the root TAP test when active).
 */
export const plugin: TapPlugin<{}> = (t: TestBase) => {
  if (!rootSuite && t.context !== Symbol.for('tap.isRunner')) {
    rootSuite = t
    currentSuite = t
  }
  return {}
}

export const config = {
  /**
   * Automatically inject the BDD/TDD methods into the global environment.
   *
   * If this flag is disabled, then you may access these via by importing them
   * from `@tapjs/mocha-globals` explicitly.
   */
  'mocha-globals': {
    type: 'boolean',
    default: true,
    description: `Automatically inject the BDD/TDD methods into the
                  global environment.

                  If this flag is disabled, then you may access these via
                  by importing them from \`@tapjs/mocha-globals\`
                  explicitly.`,
  },
}
