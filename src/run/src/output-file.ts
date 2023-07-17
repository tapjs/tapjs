import { LoadedConfig } from '@tapjs/config'
import { TAP } from '@tapjs/core'
import { createWriteStream } from 'fs'
import { Minipass } from 'minipass'

export const outputFile = (t: TAP, config: LoadedConfig) => {
  const outputFile = config.get('output-file')
  if (outputFile) {
    const m = new Minipass<string, string>({ encoding: 'utf8' })
    m.pipe(process.stdout)
    m.pipe(createWriteStream(outputFile))
    t.register()
    t.pipe(m)
  }
}
