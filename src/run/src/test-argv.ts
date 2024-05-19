// the arguments when running test files, abstracted from run.ts for testing
import type { LoadedConfig } from '@tapjs/config'
import {
  execArgv,
  importLoaders,
  loaderFallbacks,
  loaders,
} from '@tapjs/test'
import module from 'node:module'
import { resolveImport } from 'resolve-import'

// if we have Module.register(), then use --import wherever possible
const useImport = !!(module as { register?: (...a: any) => any })
  .register

const testModule = String(
  await resolveImport('@tapjs/test', import.meta.url),
)

const resolveLoaders = (loaders: string[]) =>
  Promise.all(
    loaders.map(async loader =>
      String(await resolveImport(loader, testModule)),
    ),
  )
const importScripts = await resolveLoaders(
  useImport ? importLoaders : [],
)
const loaderScripts = await resolveLoaders(
  useImport ? loaders : loaderFallbacks,
)

const pi =
  useImport ?
    `--import=${await resolveImport(
      '@tapjs/processinfo/import',
      import.meta.url,
    )}`
  : `--loader=${await resolveImport(
      '@tapjs/processinfo/loader',
      import.meta.url,
    )}`

const always = [
  ...importScripts.map(l => `--import=${l}`),
  ...loaderScripts.map(l => `--loader=${l}`),
  ...(useImport && !loaderScripts.length ? [] : ['--no-warnings']),
  '--enable-source-maps',
  // ensure this always comes last in the list
  pi,
]

export const testArgv = (config: LoadedConfig) => [
  ...always,
  ...execArgv(config.values),
  ...(config.get('node-arg') || []),
]
