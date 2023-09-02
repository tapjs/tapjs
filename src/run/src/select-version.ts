import { LoadedConfig } from '@tapjs/config'
import pacote from 'pacote'
import { gt, satisfies } from 'semver'
import { npmBg } from './npm.js'

import corePkg from '@tapjs/core/package.json' assert { type: 'json' }
const { version: coreVersion } = corePkg

let registry: string | undefined = undefined
const getPackument = async (pkg: string, config: LoadedConfig) => {
  if (!registry) {
    const regLookup = npmBg(['config', 'get', 'registry'], config)
    if (regLookup.error) throw regLookup.error
    if (regLookup.status || regLookup.signal) {
      throw new Error(
        'failed to look up npm registry: ' + regLookup.stderr.trim()
      )
    }
    registry = regLookup.stdout.trim()
  }
  return await pacote.packument(pkg, { registry })
}

/**
 * Select the highest version acceptable, preferring @latest and non-pre
 * versions over prereleases.
 *
 * Filter by the ones whose peerDependencies will allow the current
 * @tapjs/core. Returns `undefined` if no version matches.
 */
export const selectVersion = async (
  name: string,
  range: string = '',
  config: LoadedConfig
) => {
  const packu = await getPackument(name, config)
  let acceptable: string | undefined = undefined
  let acceptablePre: string | undefined = undefined
  for (const [ver, mani] of Object.entries(packu.versions)) {
    const { '@tapjs/core': corePeerDep } = mani.peerDependencies || {
      '@tapjs/core': undefined,
    }
    if (
      typeof corePeerDep === 'string' &&
      !satisfies(corePeerDep, coreVersion)
    ) {
      continue
    }

    if (satisfies(ver, range)) {
      acceptable = newIfGt(acceptable, ver)
      acceptablePre = newIfGt(acceptablePre, ver)
    } else if (satisfies(ver, range, { includePrerelease: true })) {
      acceptablePre = newIfGt(acceptablePre, ver)
    } else {
      continue
    }
    // if the @latest is acceptable, use that always
    if (ver === packu['dist-tags'].latest) return ver
  }

  return acceptable || acceptablePre
}

// use the new version if it's newer than the older version
const newIfGt = (old: string | undefined, neu: string) =>
  old === undefined || gt(neu, old) ? neu : old
