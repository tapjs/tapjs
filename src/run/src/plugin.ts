// manage plugins
import { LoadedConfig } from '@tapjs/config'
// load core so that the Test class is ready
import '@tapjs/core'
import { defaultPlugins } from '@tapjs/test'

import chalk from 'chalk'

import { lstat } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveImport } from 'resolve-import'

import { build } from './build.js'
import { getInstallSet } from './get-install-set.js'
import { install, uninstall } from './npm.js'

const exists = (f: string) =>
  lstat(f).then(
    () => true,
    () => false,
  )

const detectGlobalInstall = async (
  args: string[],
  project: string,
) => {
  // find the tap that will be loaded from the project root
  const activeRunner = String(
    await resolveImport('@tapjs/run', import.meta.url),
  )
  const projectRunner = String(
    await resolveImport('tap', resolve(project, 'x'))
      .then(projectTap => resolveImport('@tapjs/run', projectTap))
      .catch(() => resolveImport('@tapjs/run', project))
      .catch(() => activeRunner),
  )
  if (activeRunner !== projectRunner) {
    const f = fileURLToPath(activeRunner).split('node_modules')
    f.pop()
    const myNM = f.join('node_modules')
    console.error(
      `${chalk.bold.red('global/local mixup!')}

The tap plugin command must be run by the ${chalk.yellow(
        'locally installed',
      )} tap executable,
and this appears to be running in a global install location at
${chalk.yellow(myNM)}

This will likely fail. Try:

    ${chalk.green(
      `npm exec tap plugin ${args
        .map(a => JSON.stringify(a))
        .join(' ')}`,
    )}
`,
    )
  }
}

export const plugin = async (
  args: string[],
  config: LoadedConfig,
) => {
  await detectGlobalInstall(args, config.projectRoot)
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
          `'tap plugin rm ...' to remove them)`,
      )
    default:
      throw new Error(`Unknown plugin command: ${args[0]}`)
  }
}

const add = async (args: string[], config: LoadedConfig) => {
  if (!args.length) throw new Error('no plugin name provided')

  const { added, needInstall, needCleanup } = await getInstallSet(
    args,
    config,
  )

  if (!added.size) {
    console.log('nothing to do, all plugins already installed')
    return
  }

  console.error('adding plugins:', [...added])

  // roll back if it fails!
  let success = false
  let installed = false
  try {
    // install anything that needs to be installed
    if (needInstall.size) {
      const ni = [...needInstall]
      console.error('installing:', ni)
      await install(ni, config)
      installed = true
    }

    // ok, that succeeded, update the config
    /* c8 ignore start */
    const pc = config.get('plugin') || []
    /* c8 ignore stop */
    config.values.plugin = [...pc]

    // now rebuild
    await build([], config)

    // save the config change
    await config.editConfigFile(
      { plugin: [...pc] },
      config.configFile,
    )

    console.log('successfully added plugin(s):')
    console.log([...added].join('\n'))
    success = true
  } catch (er) {
    if (er instanceof Error) {
      console.error(chalk.red(er.message))
    }
  } finally {
    if (!success) {
      process.exitCode = 1
      const what =
        needInstall.size && !installed ? 'install' : 'build'
      console.error(chalk.red(`${what} failed`))
      if (installed && needCleanup.size) {
        console.error('attempting to clean up added packages')
        await uninstall([...needCleanup], config).catch(() =>
          console.error(chalk.red('uninstall failed')),
        )
      }
    }
  }
}

const rm = async (args: string[], config: LoadedConfig) => {
  /* c8 ignore start */
  const pc = config.get('plugin') || []
  /* c8 ignore stop */
  const pl = config.pluginList

  const removed = new Set<string>()
  const needRemove = new Set<string>()
  for (const plugin of args) {
    // not present, nothing to do
    if (!pl.includes(plugin)) continue

    removed.add(plugin)

    // possibly a default
    if (defaultPlugins.includes(plugin)) {
      pc.push(`!${plugin}`)
      continue
    }

    if (pc.includes(plugin)) {
      pc.splice(pc.indexOf(plugin), 1)
    }
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
  // if not a file on disk, and exists in nm, echo npm rm command
  // rebuild
  console.log('successfully removed plugin(s):')
  console.log([...removed].join('\n'))
  if (needRemove.size) {
    console.log('The following packages can likely be removed:')
    console.log(
      `npm rm ${[...needRemove]
        .map(p => JSON.stringify(p))
        .join(' ')}`,
    )
  }
}

const list = async (_: string[], config: LoadedConfig) => {
  console.log(config.pluginList.join('\n'))
}
