import { plugin as TeardownPlugin } from '@tapjs/after'
import { TapPlugin, TestBase } from '@tapjs/core'
import { Clock } from 'clock-mock'
// timers and types and such
export * from 'clock-mock'

/**
 * plugin implementation providing the `.clock` getter
 */
export class ClockPlugin {
  #t: TestBase
  #clock?: Clock
  constructor(t: TestBase) {
    this.#t = t
  }
  /**
   * The mock clock implementation, available at `t.clock` when this
   * plugin has been loaded.
   *
   * If the clock is entered, it will be automatically exited on test
   * teardown, if the `@tapjs/after` plugin is loaded.
   */
  get clock(): Clock {
    if (this.#clock) return this.#clock
    const clock = new Clock()
    if (this.#t.t.pluginLoaded(TeardownPlugin)) {
      this.#t.t.teardown(() => clock.exit())
    }
    return (this.#clock = clock)
  }
}

export const plugin: TapPlugin<ClockPlugin> = (t: TestBase) =>
  new ClockPlugin(t)
