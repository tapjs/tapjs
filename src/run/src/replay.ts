// Replay the provided tests from the .tap/test-results folder if
// present.
import { LoadedConfig } from '@tapjs/config'
import { TapFile, TapFileOpts } from '@tapjs/core'
import { relative, resolve } from 'node:path'
import { executeTestSuite } from './execute-test-suite.js'

export const replay = async (args: string[], config: LoadedConfig) => {
  return executeTestSuite(
    args,
    config,
    // no setup or plugins to apply in this case
    t => t,
    () => {},
    async (t, file) => {
      const name = relative(config.globCwd, file)
      const filename = resolve(
        config.globCwd,
        '.tap/test-results',
        name + '.tap'
      )
      const buffered = t.jobs > 1
      const opts: TapFileOpts = {
        cwd: config.globCwd,
        buffered,
        name,
        filename,
      }
      return t.sub<TapFile, TapFileOpts>(TapFile, opts, replay)
    }
  )
}
