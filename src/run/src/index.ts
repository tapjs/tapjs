#!/usr/bin/env node
import { TapConfig } from '@tapjs/config'
const config = await TapConfig.load()
const { values, positionals } = config.parse()
import { run } from './run.js'
import { build } from './build.js'
import yaml from 'yaml'
import {fileURLToPath} from 'url'

export type Config = typeof config
export type JackLoaded = typeof config.jack
export type ConfigValues = typeof values
export let mainCommand: string = positionals[0] || 'run'
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

  case 'coverage':
    console.log('print coverage report')
    break

  case 'dump-config':
    console.log(yaml.stringify(values))
    break

  case undefined:
  default:
    mainCommand = 'run'
    run(positionals, config)
    break
}
