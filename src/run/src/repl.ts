import { LoadedConfig } from '@tapjs/config'
import { env } from '@tapjs/core/proc'
import { ProcessInfo } from '@tapjs/processinfo'
import { resolve } from 'path'
import { stringify } from 'tap-yaml'
import { Repl } from './repl/index.js'

export const repl = async (args: string[], config: LoadedConfig) => {
  if (env._TAP_REPL === '1') {
    console.error('you are already in the tap repl')
    process.exitCode = 1
    return
  }
  const dir = resolve(config.projectRoot, '.tap/processinfo')
  const r = new Repl(
    config,
    process.stdin,
    process.stdout,
    await ProcessInfo.load({ dir }),
  )
  r.start()
  if (args.length) {
    const result = await r.parseCommand(args.join(' '))
    if (result !== undefined) {
      console.log(stringify(result))
      r.repl?.displayPrompt()
    }
  }
}
