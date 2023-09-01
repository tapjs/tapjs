import { LoadedConfig } from '@tapjs/config'
import { readFileSync } from 'fs'
import { Manifest } from 'pacote'
import { resolve } from 'path'

/**
 * get the versions of a package that is installed at top level
 */
export const getInstalledVersion = (
  name: string,
  config: LoadedConfig
) => {
  const pj = resolve(
    config.globCwd,
    'node_modules',
    name,
    'package.json'
  )
  try {
    return (JSON.parse(readFileSync(pj, 'utf8')) as Manifest).version
  } catch {
    return ''
  }
}
