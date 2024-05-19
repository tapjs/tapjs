import { LoadedConfig } from '@tapjs/config'
import { env } from '@tapjs/core'
export const help = (_: string[], config: LoadedConfig) =>
  console.log(
    env.TAP_HELP_MARKDOWN === '1' ?
      config.jack.usageMarkdown()
    : config.jack.usage(),
  )
