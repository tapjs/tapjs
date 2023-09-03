import { env, TapPlugin } from '@tapjs/core'
import { resolve } from 'node:path'

// This just adds the ts-node/esm loader
export const loader = 'ts-node/esm'

// ts-node/esm should come AHEAD of other loaders in the args list,
// otherwise any other resolve()'s won't be run
export const preload = true

let didSet = false
export const plugin: TapPlugin<{}> = () => {
  if (!didSet) {
    if (env.TAP_TYPECHECK === '0') {
      env.TS_NODE_TRANSPILE_ONLY = '1'
    } else if (env.TAP_TYPECHECK === '1') {
      env.TS_NODE_TRANSPILE_ONLY = '0'
    }
    if (env.TAP_TSCONFIG && env.TAP_CWD) {
      env.TS_NODE_PROJECT = resolve(env.TAP_CWD, env.TAP_TSCONFIG)
    }
    didSet = true
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
   * Type-check typescript test files, in addition to transpiling and running
   * them.
   *
   * This defaults to being set, and type checking your tests is generally a
   * good idea. However, it is also often considerably slower, adding as much
   * as half a second to each test suite file, which can be painful if you have
   * a lot of test files.
   *
   * If you find that your typescript tests are taking too long to run, and
   * decide to disable type checking, it is best to enable it in CI, for
   * example by setting `TAP_TYPECHECK=1` in the environment.
   *
   * The `"skipLibCheck": true` option in tsconfig will also speed things up a
   * bit, at the expense of some type safety.
   *
   * @group Configuration
   */
  typecheck: {
    type: 'boolean',
    default: true,
    description: `Type-check typescript test files, in addition to
                  transpiling and running them.

                  This defaults to being set, and type checking your tests
                  is generally a good idea. However, it is also often
                  considerably slower, adding as much as half a second to
                  each test suite file, which can be painful if you have
                  a lot of test files.

                  If you find that your typescript tests are taking too
                  long to run, and decide to disable type checking, it is
                  best to enable it in CI, for example by setting
                  \`TAP_TYPECHECK=1\` in the environment.

                  The \`"skipLibCheck": true\` option in tsconfig will also
                  speed things up a bit, at the expense of some type safety.
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
   */
  tsconfig: {
    type: 'string',
    default: true,
    description: `Path to the \`tsconfig.json\` file containing project
                  settings provided to ts-node when running tests.

                  Similar to the \`--project\` option to ts-node. Sets the
                  \`TS_NODE_PROJECT\` environment variable.

                  If this is a relative directory, then it is resolved
                  against the project root directory.`,
  },
}
