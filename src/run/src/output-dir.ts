import { LoadedConfig } from '@tapjs/config'
import { TAP } from '@tapjs/core'
import { createWriteStream } from 'fs'
import { mkdirpSync } from 'mkdirp'
import { dirname, resolve } from 'path'

export const outputDir = (t: TAP, config: LoadedConfig) => {
  const outputDir = config.get('output-dir')
  if (outputDir) {
    t.on('spawn', subtest => {
      const out = resolve(outputDir, subtest.name + '.tap')
      mkdirpSync(dirname(out))
      subtest.on('process', proc =>
        proc.stdout.pipe(createWriteStream(out))
      )
    })
  }
}
