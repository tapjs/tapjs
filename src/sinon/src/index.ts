import { TapPlugin, TestBase } from '@tapjs/core'
import { plugin as TeardownPlugin } from '@tapjs/core/plugin/after'
import sinon from 'sinon'

export interface TapSinonOpts {
  sinon?: Partial<sinon.SinonSandboxConfig>
}

export class TapSinon {
  #t: TestBase
  #opts: Partial<sinon.SinonSandboxConfig>
  #sandbox?: sinon.SinonSandbox
  constructor(t: TestBase, { sinon: opts }: TapSinonOpts) {
    this.#opts = opts || sinon.defaultConfig
    this.#t = t
  }
  get sinon() {
    if (this.#sandbox) return this.#sandbox
    const sandbox = (this.#sandbox = sinon.createSandbox(this.#opts))
    if (this.#t.t.pluginLoaded(TeardownPlugin)) {
      this.#t.t.teardown(() => sandbox.restore())
    }
    return sandbox
  }
}

export const plugin: TapPlugin<TapSinon, TapSinonOpts> = (t, opts) =>
  new TapSinon(t, opts)
