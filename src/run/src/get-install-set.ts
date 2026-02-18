import '@tapjs/core'

import { LoadedConfig } from '@tapjs/config'
import { defaultPlugins } from '@tapjs/test'
import chalk from 'chalk'
import { lstat } from 'fs/promises'
import { analyzePluginArg } from './analyze-plugin-arg.js'
import { pkgExists } from './pkg-exists.js'

const exists = (f: string) =>
  lstat(f).then(
    () => true,
    () => false,
  )

export const getInstallSet = async (
  args: string[],
  config: LoadedConfig,
) => {
  // has a default, but tsc doesn't know about it

  /* c8 ignore start */
  const pc = config.get('plugin') || []
  /* c8 ignore stop */
  const pl = config.pluginList
  const added = new Set<string>()
  const needInstall = new Set<string>()
  const needCleanup = new Set<string>()
  for (const plugin of args) {
    const { name, versionInstalled, versionWant } = await analyzePluginArg(
      plugin,
      config,
    )

    // if we have a version installed, check if it's a match
    // already present
    if (pl.includes(name) && versionInstalled === versionWant) {
      continue
    }

    if (versionWant === undefined) {
      console.error(chalk.red(`Cannot install ${plugin}.`))
      console.error(
        `Version not found, or incompatible with the current tap version.`,
      )
      process.exit(1)
    }

    added.add(name)

    // possibly default that was excluded
    if (pc.includes(`!${name}`)) {
      pc.splice(pc.indexOf(`!${name}`), 1)
      if (defaultPlugins.includes(name)) continue
    }

    if (!pc.includes(name)) {
      pc.push(name)
    }

    // if it's not a file on disk, need to try to install it
    if (
      !(await exists(plugin)) &&
      versionWant &&
      versionWant !== versionInstalled
    ) {
      needInstall.add(`${name}@${versionWant}`)
      // only rollback if it wasn't there to begin with
      if (!pkgExists(name)) {
        needCleanup.add(name)
      }
    }
  }

  return { added, needInstall, needCleanup }
}
