import { LoadedConfig } from '@tapjs/config'
import { resolve } from 'path'
export const getCoverageMap = async (config: LoadedConfig) => {
  const coverageMap = config.get('coverage-map')
  const map = (
    !coverageMap
      ? () => []
      : (await import(resolve(config.globCwd, coverageMap))).default
  ) as (file: string) => null | string | string[]
  if (typeof map !== 'function') {
    throw new Error(
      `Coverage map ${map} did not default export a function`
    )
  }
  return map
}
