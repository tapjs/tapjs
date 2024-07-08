// module code goes here
import {
  argv,
  cwd,
  env,
  mainScript,
  TapPlugin,
  TestBase,
} from '@tapjs/core'
import { basename, dirname, relative, resolve, sep } from 'node:path'
import { rimraf, rimrafSync } from 'rimraf'
import {
  Fixture,
  FixtureContent,
  FixtureDirContent,
  FixtureType,
} from './fixture.js'
export * from './fixture.js'

export interface TestFixturesOptions {
  /**
   * Directory to store test fixtures.
   * Defaults to `./.tap/fixtures/${test name}`
   */
  testdir?: string

  /**
   * Set to true to keep the fixture dir after the test ends.
   * Otherwise, any `t.testdir()` directories are deleted when the
   * test is done.
   */
  saveFixture?: boolean
}

export class TestFixtures {
  #t: TestBase
  static #refs: Map<TestBase, TestFixtures> = new Map()
  #testdir: string
  #didOnEOF: boolean = false
  #createdTestdir: boolean = false
  #saveFixture: boolean = false

  constructor(t: TestBase, opts: TestFixturesOptions) {
    TestFixtures.#refs.set(t, this)
    this.#testdir = opts.testdir || TestFixtures.#getTestdir(t)
    if (opts.saveFixture !== undefined) {
      this.#saveFixture = !!opts.saveFixture
    } else {
      this.#saveFixture = env.TAP_SAVE_FIXTURE === '1'
    }
    this.#t = t
  }

  /**
   * Create a fixture object for use in a
   * {@link @tapjs/fixture!index.TestFixtures#testdir} method.
   *
   * @group Spies, Mocks, and Fixtures
   */
  fixture<T extends FixtureType>(
    type: T,
    content: FixtureContent<T>,
  ) {
    return new Fixture(type, content)
  }

  /**
   * Set whether the fixture should be saved or not
   *
   * Must be set *BEFORE* calling
   * {@link @tapjs/fixture!index.TestFixtures#testdir}, or it will not have any
   * effect.
   */
  set saveFixture(save: boolean) {
    this.#saveFixture = save
  }
  get saveFixture() {
    return this.#saveFixture
  }

  /**
   * Create a test directory, optionally filling it up with contents
   *
   * The testdir will be automatically deleted at the end of the test.
   *
   * To _not_ delete the directory after the test, use the
   * `saveFixture: true` option when creating the test, or specify
   * `--save-fixture` on the command line or in the tap configuration.
   *
   * @group Spies, Mocks, and Fixtures
   */
  testdir(content?: FixtureDirContent) {
    const dir = resolve(this.testdirName)
    rimrafSync(dir)
    Fixture.make(dir, content || {})
    this.#createdTestdir = true
    if (!this.#didOnEOF && !this.#saveFixture) {
      this.#didOnEOF = true
      const { onEOF } = this.#t
      this.#t.onEOF = async () => {
        this.#t.onEOF = onEOF
        const rel = relative(process.cwd(), dir)
        if (
          rel === '' ||
          rel === '..' ||
          rel.startsWith(`..${sep}`)
        ) {
          // cd out of it first, or else Windows fails with EBUSY every time
          process.chdir(dirname(dir))
        }
        await onEOF()
        await rimraf(dir)
      }
    }
    return dir
  }

  /**
   * The name of the folder that this test will use with
   * {@link @tapjs/fixture!index.TestFixtures#testdir}.
   *
   * By default, it uses a folder name based on the name of the test file
   * and subtest, within \`.tap/fixtures\` in the root of the project.
   *
   * @group Spies, Mocks, and Fixtures
   */
  get testdirName() {
    return this.#testdir
  }

  set testdirName(td: string) {
    if (this.#createdTestdir && td !== this.#testdir) {
      this.#didOnEOF = false
    }
    this.#testdir = td
  }

  static #getTestdir(t: TestBase) {
    const re = /[^a-zA-Z0-9\._\-]+/gi
    const p = t.parent && TestFixtures.#refs.get(t.parent)
    if (!p) {
      const main = mainScript()
      /* c8 ignore start */
      const root = env.TAP_CWD || cwd
      /* c8 ignore stop */
      const name = [
        dirname(relative(root, main)),
        basename(main),
        ...argv.slice(2),
      ]
        .join(' ')
        .trim()
        .replace(re, '-')
      return resolve(root, '.tap/fixtures', name)
    }

    /* c8 ignore start */
    const name = t.name || 'unnamed test'
    /* c8 ignore stop */

    return `${p.testdirName}-${name.replace(re, '-')}`
  }
}

export const plugin: TapPlugin<TestFixtures, TestFixturesOptions> = (
  t: TestBase,
  opts: TestFixturesOptions,
) => new TestFixtures(t, opts)

/**
 * Options added by this plugin
 *
 * @group Configuration
 */
export const config = {
  /**
   * flag
   *
   * Do not clean up fixtures created with `t.testdir()`
   *
   * @group Configuration
   */
  'save-fixture': {
    type: 'boolean',
    short: 'F',
    description:
      'Do not clean up fixtures created with `t.testdir()`',
  },
}
