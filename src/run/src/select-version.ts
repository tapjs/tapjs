import { LoadedConfig } from '@tapjs/config'
import { readFileSync } from 'fs'
import pacote from 'pacote'
import { resolveImport } from 'resolve-import'
import { gt, satisfies } from 'semver'
import { fileURLToPath } from 'url'

const corePJ = await resolveImport(
  '@tapjs/core/package.json',
  import.meta.url,
)
const { version: coreVersion } = JSON.parse(
  readFileSync(fileURLToPath(corePJ), 'utf8'),
) as { version: 'string' }

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
  _config: LoadedConfig,
) => {
  const packu = await pacote.packument(name)
  let acceptable: string | undefined = undefined
  let acceptablePre: string | undefined = undefined
  for (const [ver, mani] of Object.entries(packu.versions)) {
    const { '@tapjs/core': corePeerDep } = mani.peerDependencies || {
      '@tapjs/core': undefined,
    }
    if (
      typeof corePeerDep === 'string' &&
      !satisfies(coreVersion, corePeerDep)
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
