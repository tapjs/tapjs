// some main stuff, mostly for the index runner, but also used
// in a few other places.
// Putting it here in this module prevents a cycle that makes it
// annoying to load units in the tests for this package.

import { LoadedConfig, TapConfig } from '@tapjs/config'
export const config: LoadedConfig = await TapConfig.load()
export const { values, positionals } = config.parse()

export type JackLoaded = LoadedConfig['jack']
export type ConfigValues = LoadedConfig['values']

export let mainCommand: string =
  positionals[0] ||
  (values.help
    ? 'help'
    : values.version
    ? 'version'
    : values.versions
    ? 'versions'
    : 'run')

const commands = new Set([
  'help',
  'versions',
  'version',
  'run',
  'build',
  'report',
  'plugin',
  'list',
  'repl',
  'replay',
  'config',
])

if (!commands.has(mainCommand)) {
  mainCommand = 'run'
}

export const args = positionals.slice(
  positionals[0] === mainCommand ? 1 : 0
)

if (mainCommand === 'version' || mainCommand === 'versions') {
  args.length = 0
  args.push(mainCommand)
}

export const mainBin = String(new URL('index.js', import.meta.url))
