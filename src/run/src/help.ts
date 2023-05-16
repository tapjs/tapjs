import { Config } from './index.js'
export const help = (_: string[], config: Config) =>
  console.log(config.jack.usage())
