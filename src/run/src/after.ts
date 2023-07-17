import { LoadedConfig } from '@tapjs/config'
import { TAP } from '@tapjs/core'
import { foregroundChild } from 'foreground-child'
import { resolve } from 'path'
const node = process.execPath

export const runAfter = (
  t: TAP,
  argv: string[],
  config: LoadedConfig
) => {
  const after = config.get('after')
  if (after) {
    t.after(
      async () =>
        new Promise<void>(res => {
          foregroundChild(node, [...argv, resolve(after)], () =>
            res()
          )
        })
    )
  }
}
