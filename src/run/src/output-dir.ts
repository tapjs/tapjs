import { LoadedConfig } from '@tapjs/config'
import { Spawn, TAP } from '@tapjs/core'
import { createWriteStream } from 'fs'
import { mkdirpSync } from 'mkdirp'
import { dirname, resolve } from 'path'

// Always write to .tap/test-results, plus the config if set
export const outputDir = (t: TAP, config: LoadedConfig) => {
  const outputDir = config.get('output-dir')
  const resultsDir = resolve(config.globCwd, '.tap/test-results')
  t.on('spawn', subtest => pipes(subtest, resultsDir, outputDir))
}

const pipes = (
  subtest: Spawn,
  resultsDir: string,
  outputDir?: string
) => {
  if (outputDir && outputDir !== resultsDir) {
    pipeToDir(subtest, outputDir)
  }
  pipeToDir(subtest, resultsDir)
}

const pipeToDir = (subtest: Spawn, dir: string) => {
  const out = resolve(dir, subtest.name + '.tap')
  mkdirpSync(dirname(out))
  subtest.on('process', proc =>
    proc.stdout.pipe(createWriteStream(out))
  )
}
