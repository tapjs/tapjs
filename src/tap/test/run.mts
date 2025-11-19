import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import t from 'tap'
const bin = fileURLToPath(new URL('../dist/esm/run.mjs', import.meta.url))
t.test('runner just loads runner', t => {
  const proc = spawn(process.execPath, [
    '--import=@isaacs/ts-node-temp-fork-for-pr-2009/import',
    '--no-warnings',
    bin,
    '-h',
  ])
  proc.stdout.resume()
  proc.stderr.resume()
  proc.on('close', (code, signal) => {
    t.strictSame([code, signal], [0, null])
    t.end()
  })
})
