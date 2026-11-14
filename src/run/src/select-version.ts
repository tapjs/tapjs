import { LoadedConfig } from '@tapjs/config'
import { readFileSync } from 'fs'
import pacote, { Packument } from 'pacote'
import { resolveImportSync } from 'resolve-import/resolve-import-sync'
import { gt, satisfies } from 'semver'
import { fileURLToPath } from 'url'
import { npmInProject } from './npm.js'

const corePJ = resolveImportSync(
  '@tapjs/core/package.json',
  import.meta.url,
)
const { version: coreVersion } = JSON.parse(
  readFileSync(fileURLToPath(corePJ), 'utf8'),
) as { version: 'string' }

type Versions = Pick<Packument, 'versions' | 'dist-tags'>

/**
 * Ask npm for the versions of a package, so that the project's `.npmrc`
 * decides which registry is used, and with which credentials. Returns
 * `undefined` if npm cannot tell.
 */
const npmVersions = (
  name: string,
  config: LoadedConfig,
): Versions | undefined => {
  const list = npmInProject(
    ['view', name, 'versions', 'dist-tags', '--json'],
    config.projectRoot,
  )
  if (list.status || !list.stdout) return
  try {
    const { versions, 'dist-tags': distTags } = JSON.parse(
      list.stdout,
    ) as {
      versions: string | string[]
      'dist-tags': Versions['dist-tags']
    }
    const all = ([] as string[]).concat(versions)
    // an exact version is a range that matches itself, prereleases included
    const manifests = npmInProject(
      [
        'view',
        `${name}@${all.join(' || ')}`,
        'version',
        'peerDependencies',
        '--json',
      ],
      config.projectRoot,
    )
    if (manifests.status || !manifests.stdout) return
    // npm prints a plain version when there is no peer dependency to show
    const found = (
      [] as (
        | string
        | { version: string; peerDependencies?: Record<string, string> }
      )[]
    )
      .concat(JSON.parse(manifests.stdout))
      .map(m => (typeof m === 'string' ? { version: m } : m))
    return {
      'dist-tags': distTags,
      versions: Object.fromEntries(
        found.map(({ version, peerDependencies }) => [
          version,
          { peerDependencies },
        ]),
      ) as Versions['versions'],
    }
  } catch {}
}

const getPackument = async (name: string, config: LoadedConfig) =>
  npmVersions(name, config) ?? (await pacote.packument(name))

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
  config: LoadedConfig,
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
