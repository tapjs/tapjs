// manage plugins
import { defaultPlugins } from '@tapjs/test'
import { Config } from './index.js'

import { foregroundChild } from 'foreground-child'
import { lstat } from 'node:fs/promises'
import { build } from './build.js'
const exists = (f: string) =>
  lstat(f).then(
    () => true,
    () => false
  )

export const plugin = async (args: string[], config: Config) => {
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

const install = async (pkgs: string[]) => {
  const args = ['install', '--save-dev', ...pkgs]
  await new Promise<void>(res => {
    foregroundChild('npm', args, (code, signal) => {
      // allow error exit to proceed
      if (code || signal) return
      res()
      return false
    })
  })
}

const uninstall = async (pkgs: string[]) => {
  const args = ['rm', ...pkgs]
  await new Promise<void>(res => {
    foregroundChild('npm', args, (code, signal) => {
      // allow error exit to proceed
      if (code || signal) return
      res()
      return false
    })
  })
}

const sets = (config: Config) => {
  /* c8 ignore start */
  const pc = new Set(config.get('plugin') || [])
  /* c8 ignore stop */
  const pl = new Set(config.pluginList)
  const def = new Set(defaultPlugins)
  return { pc, pl, def }
}

const add = async (args: string[], config: Config) => {
  if (!args.length) throw new Error('no plugin name provided')

  const { pc, pl, def } = sets(config)
  const added = new Set<string>()
  const needInstall = new Set<string>()

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
    if (!(await exists(plugin))) needInstall.add(plugin)
  }

  if (!added.size) {
    console.log('nothing to do, all plugins already installed')
    return
  }

  // install anything that needs to be installed
  if (needInstall.size) {
    await install([...needInstall])
  }

  // ok, that succeeded, update the config
  config.values.plugin = [...pc]
  config.editConfigFile({ plugin: [...pc] }, config.configFile)

  // now rebuild
  await build([], config)

  console.log('successfully added plugin(s):')
  console.log([...added].join('\n'))
}

const rm = async (args: string[], config: Config) => {
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
    if (!(await exists(plugin))) needRemove.add(plugin)
  }

  if (!removed.size) {
    console.log('nothing to do, no specified plugins present')
    return
  }

  if (needRemove.size) {
    await uninstall([...needRemove])
  }

  config.values.plugin = [...pc]
  config.editConfigFile({ plugin: [...pc] }, config.configFile)

  // now rebuild
  await build([], config)

  // if not present, do nothing and exit
  // if a default plugin, then add the !plugin to the config
  // else, rm plugin from config
  // if not a file on disk, and exists in nm, npm rm
  // rebuild
  console.log('successfully removed plugin(s):')
  console.log([...removed].join('\n'))
}

const list = async (_: string[], config: Config) => {
  console.log(config.pluginList.join('\n'))
}
