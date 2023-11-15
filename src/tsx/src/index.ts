// Exports a loader, which does all the work.
// import('tsx')
// import('@tapjs/core')
export const loader = '@tapjs/tsx/loader'
export const importLoader = '@tapjs/tsx/import'
export const preload = true
import type { TapPlugin } from '@tapjs/core'

// the plugin just sets the configs for tsx, doesn't
// add any functionality to the Test class.
const env = (...keys: string[]) => {
  for (const key of keys) {
    if (process.env[`TAP_${key}`]) {
      process.env[key] = process.env[`TAP_${key}`]
    }
  }
}
let didWarning = false
let didEnv = false

/**
 * File types that this plugin adds support for
 */
export const testFileExtensions = ['ts', 'cts', 'mts', 'tsx', 'jsx']

/**
 * Plugin function enabling tsx for running typescript tests
 *
 * The plugin function sets the tsx environment variables based on the tap
 * configs, and prints a warning when used along with the `@tapjs/typescript`
 * plugin, as this can cause strange conflicts, or at the very least,
 * unnecessarily slow down tests by compiling the typescript twice.
 */
export const plugin: TapPlugin<{}> = () => {
  if (!didEnv) {
    env('TSX_TSCONFIG_PATH', 'TSX_DISABLE_CACHE')
  }
  const tp = process.env.TAP_PLUGIN || ''
  if (!/^!@tapjs\/typescript$/m.test(tp) && !didWarning) {
    didWarning = true
    console.error(`
@tapjs/tsx may behave strangely when used along with
the @tapjs/typescript default plugin.

Please run: tap plugin rm @tapjs/typescript
`)
  }
  return {}
}

/**
 * Configuration fields added by this plugin.
 *
 * @group Configuration
 */
export const config = {
  /**
   * String option. Tell `tsx` where to find your tsconfig.json file.
   *
   * @group Configuration
   */
  'tsx-tsconfig-path': {
    type: 'string',
    description: `Tell tsx where to find your tsconfig.json file.`,
  },
  /**
   * Flag. Tell `tsx` not to use a cache
   *
   * @group Configuration
   */
  'tsx-disable-cache': {
    type: 'boolean',
    description: `Tell tsx not to use a cache`,
  },
}
