// Exports a loader, which does all the work.
export const loader = '@tapjs/esbuild-kit/loader'
import type { TapPlugin } from '@tapjs/core'

// the plugin just sets the configs for esbk, doesn't
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
export const plugin: TapPlugin<{}> = () => {
  if (!didEnv) {
    env('ESBK_TSCONFIG_PATH', 'ESBK_DISABLE_CACHE')
  }
  const tp = process.env.TAP_PLUGIN || ''
  if (!/^!@tapjs\/typescript$/m.test(tp) && !didWarning) {
    didWarning = true
    console.error(`
@tapjs/esbuild-kit may behave strangely when used along with
the @tapjs/typescript default plugin.

Please run: tap plugin rm @tapjs/typescript
`)
  }
  return {}
}

export const config = {
  'esbk-tsconfig-path': {
    type: 'string',
    description: `Tell @esbuild-kit where to find your
                  tsconfig.json file.`,
  },
  'esbk-disable-cache': {
    type: 'boolean',
    description: `Tell @esbuild-kit not to use a cache`,
  },
}
