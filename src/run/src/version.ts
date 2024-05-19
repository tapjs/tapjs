import { LoadedConfig } from '@tapjs/config'
import * as yaml from 'tap-yaml'
import { tryGetVersion } from './try-get-version.js'

import { signature } from '@tapjs/test'

const allPkgs = [
  'tap',
  '@tapjs/config',
  '@tapjs/core',
  '@tapjs/processinfo',
  '@tapjs/report',
  '@tapjs/run',
  '@tapjs/stack',
  '@tapjs/test',
  'tap-parser',
  'tap-yaml',
  'tcompare',
]

export const version = async (
  args: string[],
  config: LoadedConfig,
) =>
  config.get('versions') || args[0] === 'versions' ?
    printAllVersions()
  : printTapVersion()

export const getAllVersions = async () => {
  // find all packages anywhere named 'tap', '@tapjs/*', 'tap-*',
  // treport, or tcompare
  const versions: Record<string, string | Record<string, string>> = {}
  for (const p of allPkgs) {
    const v = tryGetVersion(p)
    if (v) versions[p] = v
  }

  const plugs = signature
    .split('\n')
    .sort((a, b) => a.localeCompare(b, 'en'))
  const pluginVersions: Record<string, string> = {}
  for (const p of plugs) {
    const v = tryGetVersion(p)
    if (v) {
      versions.plugins = pluginVersions
      pluginVersions[p] = v
    }
  }

  return versions
}

const printAllVersions = async () => {
  console.log(yaml.stringify(await getAllVersions()).trimEnd())
}

const printTapVersion = async () => {
  const tv = tryGetVersion('tap')
  if (tv) return console.log(tv)
  const cv = tryGetVersion('@tapjs/core')
  if (cv) return console.log(`@tapjs/core@${cv}`)
  const rv = tryGetVersion('@tapjs/run')
  if (rv) return console.log(`@tapjs/run@${rv}`)
  throw new Error(
    'Could not get version for tap, @tapjs/core, or @tapjs/run',
  )
}
