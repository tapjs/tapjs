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

const reRegExpLiteral = /^\/(.*)\/([a-z]*)$/

/**
 * Options added by this plugin
 *
 * @group Test Options
 */
export interface FilterOptions extends TestBaseOpts {
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

/**
 * Class that provides the {@link @tapjs/filter!Filter#only} method, and
 * extends the {@link @tapjs/core!test-base.TestBase#shouldSkipChild} method to
 * respect the grep option
 */
export class Filter {
  #t: TestBase
  #grep: (string | RegExp)[] = []
  #grepInvert: boolean
  #runOnly: boolean
  #filterQuietly: boolean

  get runOnly() {
    return this.#runOnly
  }
  set runOnly(o: boolean) {
    this.#runOnly = o
  }

  constructor(t: TestBase, opts: FilterOptions) {
    this.#t = t
    const eq = env?.TAP_FILTER_QUIETLY
    this.#filterQuietly =
      eq === '1' || (!!t.options.failSkip && eq !== '0')

    // don't filter test files when we're the cli test runner
    const { grep, grepInvert, runOnly } =
      opts.context === Symbol.for('tap.isRunner') ?
        ({
          grep: [],
          grepInvert: false,
          runOnly: false,
        } as FilterOptions)
      : opts

    if (grep !== undefined) {
      this.#grep = !Array.isArray(grep) ? [grep] : grep
    } else if (env.TAP_GREP !== undefined) {
      this.#grep = env.TAP_GREP.split('\n').map(g => {
        const p = g.match(reRegExpLiteral)
        g = p && p[1] ? p[1] : g
        const flags = p ? p[2] : ''
        return new RegExp(g, flags)
      })
    }
    if (grepInvert !== undefined) {
      this.#grepInvert = !!grepInvert
    } else {
      this.#grepInvert = env.TAP_INVERT === '1'
    }
    if (runOnly !== undefined) {
      this.#runOnly = !!runOnly
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
      extra: TestBaseOpts | BaseOpts | TestOpts,
    ) => boolean,
  ) {
    const opts = extra as FilterOptions & Extra & TestBaseOpts
    const [pattern, ...rest] = this.#grep
    if (pattern !== undefined) {
      /* c8 ignore start */
      const name = opts.name || ''
      /* c8 ignore stop */
      const m =
        typeof pattern === 'string' ?
          name.includes(pattern)
        : pattern.test(name)
      const match = this.#grepInvert ? !m : m
      if (!match) {
        if (!this.#filterQuietly) {
          opts.skip = `filter${
            this.#grepInvert ? ' out' : ''
          }: ${pattern}`
        }
        shouldSkipChild(opts)
        return true
      } else {
        opts.grep = rest
      }
    } else if (this.#grep) {
      // just set to an empty array so it doesn't try to load from the
      // env once we've exhausted the pattern parts.
      opts.grep = []
    }
    if (this.#runOnly && !opts.only) {
      if (!this.#filterQuietly) {
        opts.skip = 'filter: only'
      }
      shouldSkipChild(opts)
      return true
    }
    if (opts.only && !this.#runOnly) {
      this.#t.comment(
        '%j has `only` set but all tests run',
        extra.name,
      )
    }
    if (typeof opts.runOnly === 'undefined') {
      opts.runOnly = this.#runOnly
    }
    return shouldSkipChild(opts)
  }

  /**
   * Run a child test that will run when the `--only` config is set,
   * or `{ runOnly: true }` is set in the parent test options.
   *
   * @group Subtest Methods
   */
  only(
    name: string,
    extra: TestOpts,
    cb: (t: Test) => any,
  ): PromiseWithSubtest<Test>
  only(name: string, cb: (t: Test) => any): PromiseWithSubtest<Test>
  only(
    extra: TestOpts,
    cb: (t: Test) => any,
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

/**
 * plugin method that instantiates a {@link @tapjs/filter!Filter} object
 */
export const plugin: TapPlugin<Filter, FilterOptions> = (t, opts) =>
  new Filter(t, opts)

/**
 * Configuration options added by this plugin
 *
 * @group Configuration
 */
export const config = {
  /**
   * flag
   *
   * Only run tests with `{only: true}` option, or created with the
   * `t.only(...)` function.
   *
   * @group Configuration
   */
  only: {
    type: 'boolean',
    short: 'O',
    description: `Only run tests with \`{only: true}\` option, or created with
                  the \`t.only(...)\` function.`,
    nodeArgs: (v: boolean) => (v ? ['--test-only'] : []),
  },

  /**
   * string option
   *
   * Only run subtests tests matching the specified pattern.
   *
   * Patterns are matched against top-level subtests in each
   * file.  To filter tests at subsequent levels, specify this
   * option multiple times.
   *
   * To specify regular expression flags, format pattern like a
   * JavaScript RegExp literal.  For example: `/xyz/i` for
   * case-insensitive matching.
   *
   * @group Configuration
   */
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
                  JavaScript RegExp literal.  For example: \`/xyz/i\` for
                  case-insensitive matching.`,
    nodeArgs: (value: string[]) =>
      value.map(g => `--test-name-pattern=${g}`),
  },

  /**
   * flag
   *
   * Invert the matches to --grep patterns. (Like grep -v)
   *
   * @group Configuration
   */
  invert: {
    type: 'boolean',
    short: 'i',
    description:
      'Invert the matches to --grep patterns. (Like grep -v)',
  },

  /**
   * flag
   *
   * Do not invert the matches to --grep patterns. (default)
   *
   * @group Configuration
   */
  'no-invert': {
    type: 'boolean',
    short: 'I',
    description:
      'Do not invert the matches to --grep patterns. (default)',
  },

  /**
   * flag
   *
   * Do not apply a skip message to tests filtered using `--grep`
   * and `--only`.
   *
   * Enabled by default if `--fail-skip` is set.
   */
  'filter-quietly': {
    type: 'boolean',
    description: `
       Do not apply a skip message to tests filtered using \`--grep\`
       and \`--only\`.

       Defaults to true if \`--fail-skip\` is set.
   `,
  },
  'no-filter-quietly': {
    type: 'boolean',
    description: `
       Always set a skip message on filtered tests, even if \`--fail-skip\`
       is enabled.
   `,
  },
}
