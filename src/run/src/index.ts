#!/usr/bin/env node
import { TapConfig } from '@tapjs/config'
import { fileURLToPath } from 'url'
import { build } from './build.js'
import { run } from './run.js'
import { dumpConfig } from './dump-config.js'
const config = await TapConfig.load()
const { values, positionals } = config.parse()

export type Config = typeof config
export type JackLoaded = typeof config.jack
const { values: v } = config.jack.parse()
type V = typeof v
export type ConfigValues = typeof values
export let mainCommand: string =
  positionals[0] || (values.help ? 'help' : 'run')
export const mainBin = fileURLToPath(import.meta.url)

switch (positionals[0]) {
  case 'run':
    run(positionals.slice(1), config)
    break

  case 'build':
    build(positionals.slice(1), config)
    break

  case 'help':
    console.log(config.jack.usage())
    break

  case 'report':
    console.log('print coverage report')
    break

  case 'dump-config':
    dumpConfig(positionals.slice(1), config)
    break

  case 'plugin':
    console.log('manage plugins')
    break

  case undefined:
  default:
    mainCommand = 'run'
    run(positionals, config)
    break
}
