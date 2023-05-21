// module code goes here
import { argv, mainScript, TapPlugin, TestBase } from '@tapjs/core'
import { basename, dirname, resolve, sep } from 'node:path'
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
   * Defaults to `./tap-testdir-${test name}`
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
      this.#saveFixture = process.env.TAP_SAVE_FIXTURE === '1'
    }
    this.#t = t
  }

  fixture<T extends FixtureType>(type: T, content: FixtureContent<T>) {
    return new Fixture(type, content)
  }

  testdir(content?: FixtureDirContent) {
    const dir = resolve(this.testdirName)
    rimrafSync(dir)
    Fixture.make(dir, content || {})
    this.#createdTestdir = true
    if (!this.#didOnEOF && !this.#saveFixture) {
      this.#didOnEOF = true
      const obe = this.#t.onEOF
      this.#t.onEOF = async () => {
        await rimraf(dir)
        await obe()
      }
    }
    return dir
  }

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
      // put in a prefix in the dirname so do not inadvertently run it
      // on a subsequent tap invocation, if it was saved.
      const dir = dirname(main)
      const base = [
        'tap-testdir',
        basename(main).replace(/\.[^.]+$/, ''),
        ...argv.slice(2),
      ]
        .join(' ')
        .trim()
        .replace(re, '-')
      return dir + sep + base
    }

    return (
      p.testdirName + '-' + (t.name || 'unnamed test').replace(re, '-')
    )
  }
}

export const plugin: TapPlugin<TestFixtures, TestFixturesOptions> = (
  t: TestBase,
  opts: TestFixturesOptions
) => new TestFixtures(t, opts)

export const config = {
  'save-fixture': {
    type: 'boolean',
    short: 'F',
    description: 'Do not clean up fixtures created with t.testdir()',
  },
}
