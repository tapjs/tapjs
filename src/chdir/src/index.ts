import { plugin as TeardownPlugin } from '@tapjs/after'
import { TapPlugin, TestBase, cwd } from '@tapjs/core'

/**
 * Implementation class providing the {@link @tapjs/intercept!Chdir#chdir}
 * method
 */
export class Chdir {
  #t: TestBase
  #cwd: string
  #didTeardown: boolean = false

  constructor(t: TestBase) {
    this.#t = t
    /* c8 ignore next - very rarely relevant */
    this.#cwd = process?.cwd?.() || cwd
  }

  /**
   * Change the working directory, for the context of a single test.
   */
  chdir(dir: string): void {
    if (!this.#didTeardown && this.#t.t?.pluginLoaded(TeardownPlugin)) {
      this.#t.t?.teardown(() => process.chdir(this.#cwd))
    }
    process.chdir(dir)
  }
}

/**
 * plugin method that instantiates an {@link @tapjs/chdir!Chdir}
 */
export const plugin: TapPlugin<Chdir> = t => new Chdir(t)
