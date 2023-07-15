// manage plugins
import { LoadedConfig } from '@tapjs/config'
import '@tapjs/core'

import { defaultPlugins } from '@tapjs/test'

import { foregroundChild } from 'foreground-child'
import { lstat } from 'node:fs/promises'
import { build } from './build.js'
import { pkgExists } from './pkg-exists.js'
const exists = (f: string) =>
  lstat(f).then(
    () => true,
    () => false
  )

export const plugin = async (
  args: string[],
  config: LoadedConfig
) => {
  switch (args[0]) {
    case 'add':
      return add(args.slice(1), config)
    case 'rm':
    case 'remove':
      return rm(args.slice(1), config)
    case 'list':
    case 'ls':
      return list(args.slice(1), config)
    case undefined:
      await list(args, config)
      return console.error(
        `(use 'tap plugin add ...' to add plugins, or ` +
          `'tap plugin rm ...' to remove them)`
      )
    default:
      throw new Error(`Unknown plugin command: ${args[0]}`)
  }
}

const quiet = ['--no-audit', '--loglevel=silent', '--no-progress']
const install = async (pkgs: string[]) => {
  const args = ['install', ...quiet, '--save-dev', ...pkgs]
  await new Promise<void>((res, rej) => {
    foregroundChild('npm', args, (code, signal) => {
      // allow error exit to proceed
      if (code || signal) {
        rej(
          Object.assign(new Error('install failed'), { code, signal })
        )
        return
      }
      res()
      return false
    })
  })
}

const uninstall = async (pkgs: string[]) => {
  const args = ['rm', ...quiet, ...pkgs]
  await new Promise<void>(res => {
    foregroundChild('npm', args, (code, signal) => {
      // allow error exit to proceed
      res()
      return code || signal ? undefined : false
    })
  })
}

const sets = (config: LoadedConfig) => {
  /* c8 ignore start */
  const pc = new Set(config.get('plugin') || [])
  /* c8 ignore stop */
  const pl = new Set(config.pluginList)
  const def = new Set(defaultPlugins)
  return { pc, pl, def }
}

const add = async (args: string[], config: LoadedConfig) => {
  if (!args.length) throw new Error('no plugin name provided')

  const { pc, pl, def } = sets(config)
  const added = new Set<string>()
  const needInstall = new Set<string>()
  const needCleanup = new Set<string>()

  for (const plugin of args) {
    // already present
    if (pl.has(plugin)) continue

    added.add(plugin)

    // possibly default that was excluded
    if (pc.has(`!${plugin}`)) {
      pc.delete(`!${plugin}`)
      if (def.has(plugin)) continue
    }

    pc.add(plugin)
    // if it's not a file on disk, need to try to install it
    if (!(await exists(plugin))) {
      needInstall.add(plugin)
      // only rollback if it wasn't there to begin with
      if (!(await pkgExists(plugin))) {
        needCleanup.add(plugin)
      }
    }
  }

  if (!added.size) {
    console.log('nothing to do, all plugins already installed')
    return
  }

  // roll back if it fails!
  let success = false
  let installed = false
  try {
    // install anything that needs to be installed
    if (needInstall.size) {
      await install([...needInstall])
      installed = true
    }

    // ok, that succeeded, update the config
    config.values.plugin = [...pc]

    // now rebuild
    await build([], config)

    // save the config change
    await config.editConfigFile(
      { plugin: [...pc] },
      config.configFile
    )

    console.log('successfully added plugin(s):')
    console.log([...added].join('\n'))
    success = true
  } catch {
    success = false
  } finally {
    if (!success) {
      process.exitCode = 1
      if (needInstall.size && !installed) {
        console.error('install failed')
      } else {
        console.error('build failed')
      }
      if (installed && needCleanup.size) {
        console.error('attempting to clean up added packages')
        await uninstall([...needCleanup])
      }
    }
  }
}

const rm = async (args: string[], config: LoadedConfig) => {
  const { pc, pl, def } = sets(config)

  const removed = new Set<string>()
  const needRemove = new Set<string>()
  for (const plugin of args) {
    // not present, nothing to do
    if (!pl.has(plugin)) continue

    removed.add(plugin)

    // possibly a default
    if (def.has(plugin)) {
      pc.add(`!${plugin}`)
      continue
    }

    pc.delete(plugin)
    // if it's not a file on disk, then we probably need to uninstall a pkg
    if (!(await exists(plugin))) needRemove.add(plugin)
  }

  if (!removed.size) {
    console.log('nothing to do, no specified plugins present')
    return
  }

  config.values.plugin = [...pc]

  // now rebuild
  await build([], config)

  // save the config change
  await config.editConfigFile({ plugin: [...pc] }, config.configFile)

  // if not present, do nothing and exit
  // if a default plugin, then add the !plugin to the config
  // else, rm plugin from config
  // if not a file on disk, and exists in nm, npm rm
  // rebuild
  console.log('successfully removed plugin(s):')
  console.log([...removed].join('\n'))
  if (needRemove.size) {
    console.log('The following packages can likely be removed:')
    console.log(
      `npm rm ${[...needRemove]
        .map(p => JSON.stringify(p))
        .join(' ')}`
    )
  }
}

const list = async (_: string[], config: LoadedConfig) => {
  console.log(config.pluginList.join('\n'))
}
