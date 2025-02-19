import { env, TapPlugin } from '@tapjs/core'
import { statSync } from 'node:fs'
import { resolve } from 'node:path'

// This just adds the ts-node/esm loader
// appease the import-deps test
// import('@isaacs/ts-node-temp-fork-for-pr-2009')
export const loader = '@tapjs/typescript/esm'
export const importLoader = '@tapjs/typescript/import'

// ts-node/esm should come AHEAD of other loaders in the args list,
// otherwise any other resolve()'s won't be run
export const preload = true

const fileExists = (path: string) => {
  try {
    return statSync(path).isFile()
  } catch {
    return false
  }
}

let didSet = false
const nv = parseInt(process.versions.node, 10)

export const plugin: TapPlugin<{}> = () => {
  if (didSet) return {}

  didSet = true

  if (nv < 22) {
    // not supported on node versions < 22
    process.env.TAP_TYPE_STRIP_ONLY = '0'
  }

  if (process.env.TAP_TYPE_STRIP_ONLY === '1') {
    process.env.NODE_OPTIONS = `${
      process.env.NODE_OPTIONS ?? ''
    } --no-warnings ${
      nv === 22 ? '--experimental-strip-types' : ''
    }`.trim()
    return {}
  }

  if (env.TAP_TYPECHECK === '1') {
    env.TS_NODE_TRANSPILE_ONLY = '0'
  } else {
    env.TS_NODE_TRANSPILE_ONLY = '1'
  }

  if (env.TAP_CWD && !env.TAP_TSCONFIG) {
    for (const tsconfig of [
      'tsconfig.tap.json',
      'tsconfig.test.json',
      'tsconfig.spec.json',
      'tsconfig.json',
    ]) {
      if (fileExists(resolve(env.TAP_CWD, tsconfig))) {
        env.TAP_TSCONFIG = tsconfig
        break
      }
    }
  }
  if (env.TAP_TSCONFIG && env.TAP_CWD) {
    env.TS_NODE_PROJECT = resolve(env.TAP_CWD, env.TAP_TSCONFIG)
  }
  return {}
}

/**
 * File types that this plugin adds support for
 */
export const testFileExtensions = ['ts', 'cts', 'mts', 'tsx', 'jsx']

/**
 * Options added by this plugin
 *
 * @group Configuration
 */
export const config = {
  /**
   * flag
   *
   * Type-check test files, in addition to transpiling and running them.
   *
   * This defaults to false, even though type checking your tests is generally
   * a good idea. Unfortunately, it is also often considerably slower, adding
   * as much as 500-750ms to each test suite file, which can be painful if you
   * have a lot of tests. In large project folders, the effect can be even more
   * pronounced.
   *
   * It is a good idea to enable this in CI environments, where test speed is
   * less of an ergonomic drawback.
   *
   * The `"skipLibCheck": true` option in tsconfig will also speed things up a
   * bit, at the expense of some type safety.
   *
   * Note that even if you pre-compile your tests, they will still be subject
   * to type checking if `"allowJs": true` is set in your tsconfig.
   *
   * @group Configuration
   */
  typecheck: {
    type: 'boolean',
    description: `Type-check test files, in addition to transpiling and running
                  them.

                  This defaults to false, even though type checking your tests
                  is generally a good idea. Unfortunately, it is also often
                  considerably slower, adding as much as 500-750ms to each test
                  suite file, which can be painful if you have a lot of tests.
                  In large project folders, the effect can be even more
                  pronounced.

                  It is a good idea to enable this in CI environments, where
                  test speed is less of an ergonomic drawback.

                  The \`"skipLibCheck": true"\` option in tsconfig will also
                  speed things up a bit, at the expense of some type safety.

                  Note that even if you pre-compile your tests, they will still
                  be subject to type checking if \`"allowJs": true\` is set in
                  your tsconfig.
    `,
  },

  /**
   * Path to the `tsconfig.json` file containing project settings provided to
   * ts-node when running tests.
   *
   * Similar to the `--project` option to ts-node. Sets the `TS_NODE_PROJECT`
   * environment variable.
   *
   * If this is a relative directory, then it is resolved against the project
   * root directory.
   *
   * Defaults to the first of these files that are found in the project root
   * directory:
   *
   * - tsconfig.tap.json
   * - tsconfig.test.json
   * - tsconfig.spec.json
   * - tsconfig.json
   */
  tsconfig: {
    type: 'string',
    description: `Path to the \`tsconfig.json\` file containing project
                  settings provided to ts-node when running tests.

                  Similar to the \`--project\` option to ts-node. Sets the
                  \`TS_NODE_PROJECT\` environment variable.

                  If this is a relative directory, then it is resolved
                  against the project root directory.

                  Defaults to the first of these files that are found in
                  the project root directory:

                  - tsconfig.tap.json
                  - tsconfig.test.json
                  - tsconfig.spec.json
                  - tsconfig.json`,
  },

  /**
   * flag
   *
   * Do not compile OR typecheck test files, and instead, opt into Node's
   * built-in type stripping behavior.
   *
   * Note that this limits the TypeScript features that can be used, but it is
   * the fastest and most responsive approach, because it does not require a
   * build step of any kind.
   *
   * This flag supercedes `typecheck` and `tsconfig`, because no compilation is
   * performed.
   *
   * Only supported on Node 22 and higher.
   *
   * On Node 22, adds the `--experimental-strip-types` flag. On Node 23 and
   * higher, this is supported by default.
   *
   * Adds a `--no-warnings` flag on all Node versions, to avoid the prevalance
   * of warnings about type stripping being an experimental feature.
   *
   * @group Configuration
   */
  'type-strip-only': {
    type: 'boolean',
    description: `Do not compile OR typecheck test files, and instead, opt into
                  Node's built-in type stripping behavior.

                  Note that this limits the TypeScript features that can be
                  used, but it is the fastest and most responsive approach,
                  because it does not require a build step of any kind.

                  This flag supercedes \`typecheck\` and \`tsconfig\`, because
                  no compilation is performed.

                  Only supported on Node 22 and higher.

                  On Node 22, adds the \`--experimental-strip-types\` flag. On
                  Node 23 and higher, this is supported by default.

                  Adds a \`--no-warnings\` flag on all Node versions, to avoid
                  the prevalance of warnings about type stripping being an
                  experimental feature.
    `,
  },
}
