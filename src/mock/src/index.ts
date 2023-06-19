import { plugin as AfterPlugin } from '@tapjs/after'
import { TapPlugin, TestBase } from '@tapjs/core'
import * as stack from '@tapjs/stack'
import { mockImport } from './mock-import.js'
import { mockRequire } from './mock-require.js'
import type { Mocks } from './mocks.js'

declare var global: {
  [k: `__tapmock${string}`]: Mocks
}

export class TapMock {
  #t: TestBase
  #keys: string[] = []
  #didTeardown: boolean = false

  constructor(t: TestBase) {
    this.#t = t
  }

  /**
   * Just a handy way to create a mock from an existing object by
   * overriding some (possibly deeply nested) method or property.
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
    B extends { [k: PropertyKey]: any },
    O extends { [k: string]: any }
  >(bases: B, overrides: O): MockedObject<B, O> {
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
   * Deprecated alias for t.mockRequire()
   *
   * Prints a warning to stderr
   *
   * @deprecated
   */
  mock(module: string, mocks: { [k: string]: any } = {}) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('mock plugin not loaded')
    }
    const at = stack.at(this.#t.t.mock)?.toJSON() || ''
    console.error(
      't.mock() is now t.mockRequire(). Please update your tests.',
      at
    )
    return this.mockRequire(module, mocks)
  }

  /**
   * Load the supplied module asynchronously using import(),
   * replacing any of the referenced modules with the mocks provided.
   *
   * Works with either ESM or CommonJS modules.
   *
   * For type info, cast result to `as typeof import(...)`
   * TypeScript lacks a way to infer imports dynamically.
   */
  mockImport(module: string, mocks: { [k: string]: any } = {}) {
    if (!this.#didTeardown && this.#t.t.pluginLoaded(AfterPlugin)) {
      this.#didTeardown = true
      this.#t.t.teardown(() => this.#unmock())
    }
    /* c8 ignore start */
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('mock plugin not loaded')
    }
    /* c8 ignore stop */
    const [key, imp] = mockImport(module, mocks, this.#t.t.mockImport)
    this.#keys.push(key)
    return imp()
  }

  /**
   * Load the supplied module synchronously using require(),
   * replacing any of the referenced modules with the mocks provided.
   *
   * Only works with CommonJS modules.
   *
   * For type info, cast result to `as typeof import(...)`
   * TypeScript lacks a way to infer imports dynamically.
   */
  mockRequire(module: string, mocks: { [k: string]: any } = {}) {
    if (!this.#t.t.pluginLoaded(plugin)) {
      throw new Error('mock plugin not loaded')
    }
    if (!this.#didTeardown && this.#t.t.teardown) {
      this.#didTeardown = true
      this.#t.t.teardown(() => this.#unmock())
    }
    return mockRequire(module, mocks, this.#t.t.mockRequire)
  }

  #unmock() {
    for (const k of this.#keys) {
      const m = global[`__tapmock${k}`]
      if (m) {
        m.unmock()
      }
    }
  }
}

export type MockedObject<B, O> = B extends { [k: PropertyKey]: any }
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
export const loader = '@tapjs/mock/loader'
export const plugin: TapPlugin<TapMock> = (t: TestBase) =>
  new TapMock(t)
