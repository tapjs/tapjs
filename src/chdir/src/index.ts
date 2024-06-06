import { plugin as TeardownPlugin } from '@tapjs/after'
import { TapPlugin, TestBase, cwd, proc } from '@tapjs/core'

/**
 * Implementation class providing the {@link @tapjs/intercept!Chdir#chdir}
 * method
 */
export class Chdir {
  #t: TestBase
  #didTeardown: boolean = false

  constructor(t: TestBase) {
    this.#t = t
  }

  /**
   * Change the working directory, for the context of a single test.
   */
  chdir(dir: string): void {
    if (!this.#didTeardown && this.#t.t?.pluginLoaded(TeardownPlugin)) {
      /* c8 ignore next - very rarely relevant */
      const back = proc?.cwd?.() || cwd
      this.#didTeardown = true
      this.#t.t?.teardown(() => {
        proc?.chdir?.(back)
      })
    }
    proc?.chdir?.(dir)
  }
}

/**
 * plugin method that instantiates an {@link @tapjs/chdir!Chdir}
 */
export const plugin: TapPlugin<Chdir> = t => new Chdir(t)
