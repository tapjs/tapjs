#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const res = spawnSync(
  process.execPath,
  [
    '--loader=ts-node/esm',
    '--no-warnings',
    resolve(dirname(fileURLToPath(import.meta.url)), './build.ts'),
  ],
  { stdio: 'inherit' }
)

if (res.error) throw res.error
if (res.status) process.exit(res.status)
if (res.code) {
  process.kill(process.pid, res.code)
  setTimeout(() => process.exit(1), 200)
}
