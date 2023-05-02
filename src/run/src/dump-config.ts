import yaml from 'yaml'
import type { Config } from './index.js'
export const dumpConfig = (args: string[], config: Config) => {
  const { values } = config.parse()
  const v = Object.fromEntries(
    Object.entries(values).filter(
      ([_, v]) => !Array.isArray(v) || v.length
    )
  )
  console.log(yaml.stringify(v))
}
