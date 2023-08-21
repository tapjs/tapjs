import { LoadedConfig } from '@tapjs/config'
import { TAP } from '@tapjs/core'
import { Minipass } from 'minipass'
import { mkdirpSync } from 'mkdirp'
import { createWriteStream } from 'node:fs'
import { dirname, resolve } from 'node:path'

export const outputFile = (
  t: TAP,
  config: LoadedConfig,
  hasReporter: boolean
) => {
  const outputFile = config.get('output-file')
  if (outputFile) {
    mkdirpSync(dirname(resolve(outputFile)))
    const m = new Minipass<string, string>({ encoding: 'utf8' })
    if (!hasReporter) {
      m.pipe(process.stdout)
      t.register()
    }
    m.pipe(createWriteStream(resolve(outputFile)))
    t.pipe(m)
  }
}
