import { LoadedConfig } from '@tapjs/config'
import { resolve } from 'path'
import { pathToFileURL } from 'url'

const isStringArray = (a: any): a is string[] =>
  Array.isArray(a) && !a.some(s => typeof s !== 'string')

type CoverageMapFn = (file: string) => null | string | string[]

export const getCoverageMap = async (config: LoadedConfig) => {
  if (config.get('disable-coverage')) return () => null
  const coverageMap = config.get('coverage-map')
  if (!coverageMap) return () => []
  const mapModule = (await import(
    String(pathToFileURL(resolve(config.globCwd, coverageMap)))
  ).catch(er => {
    throw new Error(
      `Coverage map ${coverageMap} is not a valid module. ${er.message}`
    )
  })) as CoverageMapFn | { default: CoverageMapFn }
  /* c8 ignore start */
  const map =
    typeof mapModule === 'object' ? mapModule.default : mapModule
  /* c8 ignore stop */

  if (typeof map !== 'function') {
    throw new Error(
      `Coverage map ${coverageMap} did not default export a function`
    )
  }
  return (f: string) => {
    const mapped: null | string | string[] = map(f)
    if (
      mapped !== null &&
      typeof mapped !== 'string' &&
      !isStringArray(mapped)
    ) {
      throw new Error(
        `Coverage map ${coverageMap} must return string, string[], or null`
      )
    }
    return mapped
  }
}
