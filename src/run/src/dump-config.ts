import type { LoadedConfig } from '@tapjs/config'
import yaml from 'yaml'
export const dumpConfig = (_: string[], config: LoadedConfig) => {
  const { values } = config.parse()
  const v = Object.fromEntries(
    Object.entries(values).filter(
      ([_, v]) => !Array.isArray(v) || v.length
    )
  )
  console.log('# v' + 'im: set filetype=yaml :')
  console.log(yaml.stringify(v).trimEnd())
}
