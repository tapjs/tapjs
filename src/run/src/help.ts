import { LoadedConfig } from '@tapjs/config'
export const help = (_: string[], config: LoadedConfig) =>
  console.log(config.jack.usage())
