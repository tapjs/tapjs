import t from 'tap'
import { spawn } from 'node:child_process'
import { resolve } from 'node:path'
const bin = resolve('dist/mjs/run.mjs')
t.test('runner just loads runner', t => {
  const proc = spawn(process.execPath, [
    '--loader=ts-node/esm',
    '--no-warnings=ExperimentalLoader',
    bin,
    '-h',
  ])
  proc.on('close', (code, signal) => {
    t.strictSame([code, signal], [0, null])
    t.end()
  })
})
