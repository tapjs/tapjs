// the arguments when running test files, abstracted from run.ts for testing
import type { LoadedConfig } from '@tapjs/config'
import { execArgv, importLoaders, loaderFallbacks, loaders } from '@tapjs/test'
import module from 'node:module'

// if we have Module.register(), then use --import wherever possible
const useImport = !!(module as { register?: (...a: any) => any })
  .register

const importScripts = useImport ? importLoaders : []
const loaderScripts = useImport ? loaders : loaderFallbacks

const pi = useImport
  ? '--import=@tapjs/processinfo/import'
  : '--loader=@tapjs/processinfo/loader'

const always = [
  ...importScripts.map(l => `--import=${l}`),
  ...loaderScripts.map(l => `--loader=${l}`),
  ...(useImport && !loaderScripts.length
    ? []
    : ['--no-warnings']),
  '--enable-source-maps',
  // ensure this always comes last in the list
  pi,
]

export const testArgv = (config: LoadedConfig) => [
  ...always,
  ...execArgv(config.values),
  ...(config.get('node-arg') || []),
]
