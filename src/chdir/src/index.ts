import { cwd, proc, TapPlugin, TestBase } from '@tapjs/core'

/**
 * Implementation class providing the {@link @tapjs/intercept!Chdir#chdir}
 * method
 */
export class Chdir {
  #t: TestBase
  #didOnEOF: boolean = false

  constructor(t: TestBase) {
    this.#t = t
  }

  /**
   * Change the working directory, for the context of a single test.
   */
  chdir(dir: string): void {
    if (!this.#didOnEOF) {
      /* c8 ignore next - very rarely relevant */
      const back = proc?.cwd?.() || cwd
      this.#didOnEOF = true
      const { onEOF } = this.#t
      this.#t.onEOF = async () => {
        this.#t.onEOF = onEOF
        // get out of the dir before anything else, in case
        // someone wants to delete it.
        proc?.chdir?.(back)
        await onEOF()
      }
    }
    proc?.chdir?.(dir)
  }
}

/**
 * plugin method that instantiates an {@link @tapjs/chdir!Chdir}
 */
export const plugin: TapPlugin<Chdir> = t => new Chdir(t)
