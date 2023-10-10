import { LoadedConfig } from '@tapjs/config'
import { TAP } from '@tapjs/core'
import { foregroundChild } from 'foreground-child'
import { resolve } from 'path'

const node = process.execPath

export const runBefore = (
  t: TAP,
  argv: string[],
  config: LoadedConfig
) => {
  const before = config.get('before')
  if (before) {
    t.before(
      async () =>
        new Promise<void>(res => {
          foregroundChild(
            node,
            [...argv, resolve(before)],
            (code, signal) => {
              res()
              if (code || signal) return
              return false
            }
          )
        })
    )
    return resolve(before)
  }
}
