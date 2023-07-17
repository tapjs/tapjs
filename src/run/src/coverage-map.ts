import { LoadedConfig } from '@tapjs/config'
import { resolve } from 'path'

const isStringArray = (a: any): a is string[] =>
  Array.isArray(a) && !a.some(s => typeof s !== 'string')

export const getCoverageMap = async (config: LoadedConfig) => {
  const coverageMap = config.get('coverage-map')
  if (!coverageMap) return () => []
  const map = (
    await import(resolve(config.globCwd, coverageMap)).catch(er => {
      throw new Error(
        `Coverage map ${coverageMap} is not a valid module. ${er.message}`
      )
    })
  ).default as (file: string) => null | string | string[]
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
