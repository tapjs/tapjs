import { TapPlugin, TestBase } from '@tapjs/core'
import * as stack from '@tapjs/stack'
import { mockImport } from './mock-import.js'
import { mockRequire } from './mock-require.js'
import type { Mocks } from './mocks.js'
import { plugin as AfterPlugin } from '@tapjs/after'

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

export { mockImport } from './mock-import.js'
export { mockRequire } from './mock-require.js'
export const loader = '@tapjs/mock/loader'
export const plugin: TapPlugin<TapMock> = (t: TestBase) => new TapMock(t)