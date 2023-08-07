import { plugin as AfterPlugin } from '@tapjs/after'
import { TapPlugin, TestBase } from '@tapjs/core'
import * as stack from '@tapjs/stack'
import { mockImport } from './mock-import.js'
import { mockRequire } from './mock-require.js'
import type { Mocks } from './mocks.js'

declare var global: {
  [k: `__tapmock${string}`]: Mocks
}

/**
 * Implementation class providing the {@link TapMock#mockRequire},
 * {@link TapMock#mockImport}, and {@link TapMock#createMock} methods.
 */
export class TapMock {
  #t: TestBase
  #keys: string[] = []
  #didTeardown: boolean = false

  constructor(t: TestBase) {
    this.#t = t
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
   * Deprecated alias for {@link TapMock#mockRequire}
   *
   * Prints a warning to stderr the first time it used, otherwise
   * identical.
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
    if (!this.#didTeardown && this.#t.t.pluginLoaded(AfterPlugin)) {
      this.#didTeardown = true
      this.#t.t.teardown(() => this.unmock())
    }
    return mockRequire(module, mocks, this.#t.t.mock)
  }

  /**
   * Load the supplied module asynchronously using import(),
   * replacing any of the referenced modules with the mocks provided.
   *
   * Works with either ESM or CommonJS modules, but as with `import()` of
   * CommonJS modules, the `module.exports` value will be set as the
   * `default` property on the resolved object, making
   * {@link TapMock#mockRequire} somewhat more intuitive in those cases.
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
   */
  mockImport(module: string, mocks: { [k: string]: any } = {}) {
    if (!this.#didTeardown && this.#t.t.pluginLoaded(AfterPlugin)) {
      this.#didTeardown = true
      this.#t.t.teardown(() => this.unmock())
    }
    const [key, imp] = mockImport(module, mocks, this.#t.t.mockImport)
    this.#keys.push(key)
    return imp()
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
   */
  mockRequire(module: string, mocks: { [k: string]: any } = {}) {
    if (!this.#didTeardown && this.#t.t.pluginLoaded(AfterPlugin)) {
      this.#didTeardown = true
      this.#t.t.teardown(() => this.unmock())
    }
    return mockRequire(module, mocks, this.#t.t.mockRequire)
  }

  /**
   * Unwind the mocks and free up the memory at the end of the test.
   *
   * Called automatically if the `@tapjs/after` plugin is not disabled.
   */
  unmock() {
    for (const k of this.#keys) {
      const m = global[`__tapmock${k}`]
      if (m) {
        m.unmock()
      }
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

export { mockImport } from './mock-import.js'
export { mockRequire } from './mock-require.js'

/**
 * Loader that supports {@link TapMock#mockImport}
 */
export const loader = '@tapjs/mock/loader'

/**
 * plugin method that instantiates {@link TapMock}
 */
export const plugin: TapPlugin<TapMock> = (t: TestBase) =>
  new TapMock(t)
