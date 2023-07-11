import {
  BaseOpts,
  env,
  Extra,
  parseTestArgs,
  PromiseWithSubtest,
  TapPlugin,
  TestArgs,
  TestBase,
  TestBaseOpts,
} from '@tapjs/core'
import type { Test, TestOpts } from '@tapjs/test'

export interface FilterOptions {
  /**
   * Set to true to run in contexts where `runOnly` is set
   */
  only?: boolean

  /**
   * Only run subtests marked with { only: true }
   */
  runOnly?: boolean

  /**
   * only run subtests whose name matches the supplied pattern.
   * Provide an array of strings/regexps to match down the test
   * heirarchy.
   */
  grep?: string | RegExp | (string | RegExp)[]

  /**
   * only run tests that DON'T match the pattern provided in `grep`
   */
  grepInvert?: boolean
}

export class Filter {
  #t: TestBase
  #grep: (string | RegExp)[] = []
  #grepInvert: boolean
  #runOnly: boolean

  constructor(t: TestBase, opts: FilterOptions) {
    this.#t = t
    if (opts.grep !== undefined) {
      this.#grep = !Array.isArray(opts.grep) ? [opts.grep] : opts.grep
    } else if (env.TAP_GREP !== undefined) {
      this.#grep = env.TAP_GREP.split('\n').map(g => {
        const p = g.match(/^\/(.*)\/([a-z]*)$/)
        g = p ? p[1] : g
        const flags = p ? p[2] : ''
        return new RegExp(g, flags)
      })
    }
    if (opts.grepInvert !== undefined) {
      this.#grepInvert = !!opts.grepInvert
    } else {
      this.#grepInvert = env.TAP_INVERT === '1'
    }
    if (opts.runOnly !== undefined) {
      this.#runOnly = !!opts.runOnly
    } else {
      this.#runOnly = env.TAP_ONLY === '1'
    }
    if (this.#grep?.length) t.options.grep = this.#grep

    const { shouldSkipChild } = t
    t.shouldSkipChild = extra =>
      this.#shouldSkipChild(extra, shouldSkipChild)
  }

  #shouldSkipChild(
    extra: TestBaseOpts | BaseOpts | TestOpts,
    shouldSkipChild: (
      extra: TestBaseOpts | BaseOpts | TestOpts
    ) => boolean
  ) {
    const opts = extra as FilterOptions & Extra & TestBaseOpts
    const [pattern, ...rest] = this.#grep
    if (pattern !== undefined) {
      /* c8 ignore start */
      const name = opts.name || ''
      /* c8 ignore stop */
      const m =
        typeof pattern === 'string'
          ? name.includes(pattern)
          : pattern.test(name)
      const match = this.#grepInvert ? !m : m
      if (!match) {
        const p = `filter${
          this.#grepInvert ? ' out' : ''
        }: ${pattern}`
        opts.skip = p
        return shouldSkipChild(opts)
      } else {
        opts.grep = rest
      }
    }
    if (this.#runOnly && !opts.only) {
      const p = 'filter: only'
      opts.skip = p
      return shouldSkipChild(opts)
    }
    if (opts.only && !this.#runOnly) {
      this.#t.comment(
        '%j has `only` set but all tests run',
        extra.name
      )
    }
    if (typeof opts.runOnly === 'undefined') {
      opts.runOnly = this.#runOnly
    }
    return shouldSkipChild(opts)
  }

  only(
    name: string,
    extra: TestOpts,
    cb: (t: Test) => any
  ): PromiseWithSubtest<Test>
  only(name: string, cb: (t: Test) => any): PromiseWithSubtest<Test>
  only(
    extra: TestOpts,
    cb: (t: Test) => any
  ): PromiseWithSubtest<Test>
  only(cb: (t: Test) => any): PromiseWithSubtest<Test>
  only(...args: TestArgs<Test>): PromiseWithSubtest<Test> {
    const extra = parseTestArgs(...args)
    /* c8 ignore start */
    const name = extra.name || ''
    /* c8 ignore stop */
    return this.#t.t.test(name, { ...extra, only: true }, extra.cb)
  }
}

export const plugin: TapPlugin<Filter, FilterOptions> = (t, opts) =>
  new Filter(t, opts)

export const config = {
  only: {
    type: 'boolean',
    short: 'O',
    description: `Only run tests with {only: true} option, or created with
                    t.only(...) function.`,
  },

  grep: {
    type: 'string',
    multiple: true,
    hint: 'pattern',
    short: 'g',
    description: `Only run subtests tests matching the specified pattern.

                  Patterns are matched against top-level subtests in each
                  file.  To filter tests at subsequent levels, specify this
                  option multiple times.

                  To specify regular expression flags, format pattern like a
                  JavaScript RegExp literal.  For example: '/xyz/i' for
                  case-insensitive matching.`,
  },

  invert: {
    type: 'boolean',
    short: 'i',
    description:
      'Invert the matches to --grep patterns. (Like grep -v)',
  },

  'no-invert': {
    type: 'boolean',
    short: 'I',
    description:
      'Do not invert the matches to --grep patterns. (default)',
  },
}
