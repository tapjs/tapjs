import { TapPlugin, TestBase } from '@tapjs/core'
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

  mockImport(module: string, mocks: { [k: string]: any }) {
    if (!this.#didTeardown && this.#t.t.teardown) {
      this.#didTeardown = true
      this.#t.t.teardown(() => this.#unmock())
    }
    const [key, imp] = mockImport(module, mocks, this.#t.t.mockImport)
    this.#keys.push(key)
    return imp()
  }

  mockRequire(module: string, mocks: { [k: string]: any }) {
    if (!this.#didTeardown && this.#t.t.teardown) {
      this.#didTeardown = true
      this.#t.t.teardown(() => this.#unmock())
    }
    const [key, req] = mockRequire(module, mocks, this.#t.t.mockRequire)
    this.#keys.push(key)
    return req()
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

const plugin: TapPlugin<TapMock> = (t: TestBase) => new TapMock(t)
export default plugin
