#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
const index = fileURLToPath(new URL('./index.js', import.meta.url))
const res = spawnSync(
  process.execPath,
  [...process.execArgv, '--no-warnings', index],
  { stdio: 'inherit' }
)
if (res.status) process.exit(res.status)
if (res.signal) {
  process.kill(process.pid, res.signal)
  setTimeout(() => {}, 200)
}
