// import this first so Test exists when we need it.
import '@tapjs/core'

import { LoadedConfig } from '@tapjs/config'
import { defaultPlugins } from '@tapjs/test'
import { getInstalledVersion } from './get-installed-version.js'
import { selectVersion } from './select-version.js'

// @scope/pkg
// @scope/pkg@semver
// pkg
// pkg@semver
const pkgRe =
  /^(@[^\.\/_][^\/]*\/[^@\._\/][^@]*|[^\._@\/][^@\/]*)(?:@(.*))?$/

/**
 * If it's a package, figure out what version we have, what version
 * we want, and what the parsed name of the plugin is.
 */
export const analyzePluginArg = async (
  plugin: string,
  config: LoadedConfig,
) => {
  const pkgMatch = plugin.match(pkgRe)
  if (!pkgMatch || defaultPlugins.includes(plugin)) {
    // just a folder, not a versioned thing from the registry.
    return {
      name: plugin,
      versionWant: '',
      versionInstalled: '',
    }
  }
  const name = pkgMatch[1] as string
  const versionInstalled = getInstalledVersion(name, config)
  const versionWant = await selectVersion(name, pkgMatch[2], config)
  return { name, versionInstalled, versionWant }
}
