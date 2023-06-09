#!/usr/bin/env node
//@ts-ignore
process.setSourceMapsEnabled(true)
import { TapConfig, LoadedConfig } from '@tapjs/config'
import { fileURLToPath } from 'url'
import { build } from './build.js'
import { dumpConfig } from './dump-config.js'
import { findSuites } from './find-suites.js'
import { help } from './help.js'
import { plugin } from './plugin.js'
import { report } from './report.js'
import { run } from './run.js'
import { version } from './version.js'
export const config: LoadedConfig = await TapConfig.load()
export const { values, positionals } = config.parse()

export type JackLoaded = LoadedConfig['jack']
export type ConfigValues = LoadedConfig['values']
export let mainCommand: string =
  positionals[0] || (values.help ? 'help' : 'run')
export const mainBin = fileURLToPath(import.meta.url)

process.title = 'tap'

if (config.get('help') || mainCommand === 'help') {
  help(positionals, config)
} else if (
  config.get('version') ||
  config.get('versions') ||
  /^versions?/.test(mainCommand)
) {
  version(positionals, config)
} else {
  switch (positionals[0]) {
    case 'run':
      run(positionals.slice(1), config)
      break

    case 'build':
      build(positionals.slice(1), config)
      break

    case 'report':
      report(positionals.slice(1), config)
      break

    case 'dump-config':
      dumpConfig(positionals.slice(1), config)
      break

    case 'plugin':
      plugin(positionals.slice(1), config)
      break

    case 'list-files':
      const f = await findSuites(positionals.slice(1), config)
      console.log(f.join('\n'))
      break

    case undefined:
    default:
      mainCommand = 'run'
      run(positionals, config)
      break
  }
}
