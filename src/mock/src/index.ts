import { plugin as AfterPlugin } from '@tapjs/after'
import { TapPlugin, TestBase } from '@tapjs/core'
import * as stack from '@tapjs/stack'
import { isBuiltin } from 'node:module'
import { mockRequire } from './mock-require.js'
import { MockService } from './mock-service.js'

/**
 * Implementation class providing the
 * {@link @tapjs/mock!index.TapMock#mockRequire},
 * {@link @tapjs/mock!index.TapMock#mockImport}, and
 * {@link @tapjs/mock!index.TapMock#createMock} methods.
 */
export class TapMock {
  #t: TestBase
  #didTeardown: boolean = false
  #mocks: MockService[] = []

  #allMock: Record<string, any>
  static #refs = new Map<TestBase, TapMock>()

  constructor(t: TestBase) {
    this.#t = t
    TapMock.#refs.set(t, this)
    // inherit #allMock
    const p = t.parent && TapMock.#refs.get(t.parent)
    this.#allMock = Object.assign(
      Object.create(null),
      p ? p.#allMock : {}
    )
  }

  /**
   * Convenience method to create a mock from an existing object by
   * overriding some (possibly deeply nested) methods or properties.
   *
   * Example:
   *
   * ```ts
   * import * as fs from 'node:fs'
   * const mockedThing = t.mockRequire('./module.js', t.createMock(
   *   { fs },
   *   { fs: { statSync: myMockedStatSync }}
   * )
   * ```
   *
   * This can also appear anywhere in the object hierarchy, which may
   * be more convenient in some cases:
   *
   * ```ts
   * import * as blah from '@long-name/blah-api'
   * const mockedThing = t.mockRequire('./module.js', {
   *   fs: t.createMock(fs, { statSync: myMockedStatSync }),
   *   child_process: t.createMock(child_process, { spawn: mockSpawn }),
   *   '@long-name/blah-api': t.createMock(blah, {
   *     some: {
   *       nested: {
   *         prop: true
   *       }
   *     }
   *   })
   * })
   * ```
   *
   * To *remove* a property, set it as undefined in the override.
   *
   * @group Spies, Mocks, and Fixtures
   */
  createMock<
    B extends { [k: PropertyKey]: any } | Array<any>,
    O extends { [k: string]: any } | Array<any>
  >(bases: B, overrides: O): MockedObject<B, O> {
    if (Array.isArray(overrides))
      return overrides as unknown as MockedObject<B, O>
    return Object.fromEntries(
      Object.entries(bases)
        .map(([k, v]) => {
          if (k in overrides) {
            const bobj = !!v && typeof v === 'object'
            const oobj =
              !!overrides[k] && typeof overrides[k] === 'object'
            if (oobj && bobj) {
              return [k, this.createMock(v, overrides[k])]
            } else {
              return [k, overrides[k]]
            }
          }
          return [k, v]
        })
        .concat(
          Object.entries(overrides).filter(([k]) => !(k in bases))
        )
    ) as MockedObject<B, O>
  }

  /**
   * Deprecated alias for {@link @tapjs/mock!index.TapMock#mockRequire}
   *
   * Prints a warning to stderr the first time it used, otherwise
   * identical.
   *
   * @group Spies, Mocks, and Fixtures
   *
   * @deprecated
   */
  mock(module: string, mocks: { [k: string]: any } = {}) {
    /* c8 ignore start */
    const at = stack.at(this.#t.t.mock)?.toJSON() || ''
    /* c8 ignore stop */
    console.error(
      't.mock() is now t.mockRequire(). Please update your tests.',
      at
    )
    return mockRequire(module, mocks, this.#t.t.mock)
  }

  /**
   * Load the supplied module asynchronously using import(),
   * replacing any of the referenced modules with the mocks provided.
   *
   * Works with either ESM or CommonJS modules, but as with `import()` of
   * CommonJS modules, the `module.exports` value will be set as the
   * `default` property on the resolved object, making
   * {@link @tapjs/mock!index.TapMock#mockRequire} somewhat more intuitive in those cases.
   *
   * For type info, cast result to `as typeof import(...)`, as
   * TypeScript lacks a way to infer imports dynamically.
   *
   * For example:
   *
   * ```ts
   * const myThing = await t.mockImport('../my-thing.js', {
   *   some: { tricky: 'mocks' },
   * }) as typeof import('../my-thing.js')
   * ```
   *
   * @group Spies, Mocks, and Fixtures
   */
  async mockImport(module: string, mocks: Record<string, any> = {}) {
    if (isBuiltin(module)) {
      this.#t.t.currentAssert = this.mockImport
      this.#t.t.fail(
        'Node built-in modules cannot have their imports mocked'
      )
      return {}
    }
    mocks = Object.assign({}, this.#allMock, mocks)
    if (!this.#didTeardown && this.#t.t.pluginLoaded(AfterPlugin)) {
      this.#didTeardown = true
      this.#t.t.teardown(() => this.unmock())
    }
    const service = MockService.create(
      module,
      mocks,
      this.#t.t.mockImport
    )
    this.#mocks.push(service)
    return Promise.resolve(service.module).then(s => import(s))
  }

  /**
   * Load the supplied module synchronously using `require()`,
   * replacing any of the referenced modules with the mocks provided.
   *
   * Only works with CommonJS modules.
   *
   * For type info, cast result to `as typeof import(...)`, as
   * TypeScript lacks a way to infer imports dynamically.
   *
   * For example:
   *
   * ```ts
   * const myThing = t.mockRequire('../my-thing.js', {
   *   some: { tricky: 'mocks' },
   * }) as typeof import('../my-thing.js')
   * ```
   *
   * @group Spies, Mocks, and Fixtures
   */
  mockRequire(module: string, mocks: Record<string, any> = {}) {
    if (isBuiltin(module)) {
      this.#t.t.currentAssert = this.mockRequire
      this.#t.t.fail(
        'Node built-in modules cannot have their imports mocked'
      )
      return {}
    }
    mocks = Object.assign({}, this.#allMock, mocks)
    return mockRequire(module, mocks, this.#t.t.mockRequire)
  }

  /**
   * Set some mocks that will be used for all subsequent
   * {@link @tapjs/mock!index.TapMock#mockImport} and
   * {@link @tapjs/mock!index.TapMock#mockRequire} calls made by this test.
   *
   * Mocks added with `mockAll` are overridden by any explicit mocks set in the
   * `t.mockRequire` or `t.mockImport` call.
   *
   * Repeated calls to `t.mockAll()` will *add* mocks to the set. If the same
   * name is used again, it will replace the previous value, not merge.
   *
   * If a key is set to `undefined` or `null`, then it will be removed from
   * the `mockAll` set.
   *
   * Reset by calling `t.mockAll(null)`
   *
   * Call with no args to return the current `mockAll` object.
   */
  mockAll(mocks?: Record<string, any> | null): Record<string, any> {
    if (mocks === null) this.#allMock = Object.create(null)
    else if (mocks !== undefined) {
      this.#allMock = Object.assign(this.#allMock, mocks)
      for (const [k, v] of Object.entries(this.#allMock)) {
        if (v === undefined || v === null) delete this.#allMock[k]
      }
    }
    return this.#allMock
  }

  /**
   * Unwind the mocks and free up the memory at the end of the test.
   *
   * Called automatically if the `@tapjs/after` plugin is not disabled.
   *
   * @group Spies, Mocks, and Fixtures
   */
  unmock() {
    for (const m of this.#mocks) {
      m.unmock()
    }
  }
}

/**
 * Utility type, overrides the properties in B with the properties
 * in O, deeply nested.
 */
export type MockedObject<B, O> = O extends Array<any>
  ? O
  : B extends { [k: PropertyKey]: any }
  ? O extends { [k: string]: any }
    ? {
        [k in keyof B]: k extends keyof O
          ? MockedObject<B[k], O[k]>
          : B[k]
      }
    : O
  : O

/**
 * Loader that supports {@link @tapjs/mock!index.TapMock#mockImport}
 */
export const loader = '@tapjs/mock/loader'

/**
 * Importer for use with node --import
 */
export const importLoader = '@tapjs/mock/import'

/**
 * plugin method that instantiates {@link @tapjs/mock!index.TapMock}
 */
export const plugin: TapPlugin<TapMock> = (t: TestBase) =>
  new TapMock(t)
