#!/usr/bin/env node
import { TapConfig } from '@tapjs/config'
import { ProcessInfo } from '@tapjs/processinfo'
import { resolve } from 'path'
import { stringify } from 'tap-yaml'
import { Repl } from './index.js'

const args = process.argv.slice(2)
if (!args.length) {
  await Repl.start()
} else {
  // treat args as if that line was provided to the repl
  const config = await TapConfig.load()
  const r = new Repl(
    config,
    process.stdin,
    process.stdout,
    ProcessInfo.loadSync({ dir: resolve('.tap/processinfo') })
  )
  r.parseCommand(args.join(' '), null, null, (err, result) => {
    if (err) throw err
    if (result !== undefined) {
      if (
        result &&
        typeof result === 'object' &&
        typeof result.code === 'number'
      ) {
        process.exitCode = result.code
      }
      console.log(stringify(result))
    }
  })
}
