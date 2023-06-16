#!/usr/bin/env node
const no = ['--no-warnings=ExperimentalLoader']

// We'll always have *something* here when testing.
/* c8 ignore start */
if (process.env.NODE_OPTIONS) no.push(process.env.NODE_OPTIONS)
/* c8 ignore stop */

process.env.NODE_OPTIONS = [...new Set(no)].join(' ')
import { spawnSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const res = spawnSync(
  process.execPath,
  [
    '--loader=ts-node/esm',
    '--no-warnings=ExperimentalLoader',
    resolve(dirname(fileURLToPath(import.meta.url)), './build.ts'),
    ...process.argv.slice(2),
  ],
  { stdio: 'inherit' }
)

// indicates something extremely wrong
/* c8 ignore start */
if (res.error) throw res.error
/* c8 ignore stop */

// Pretty normal, like if a plugin is invalid, doesn't load, etc.
if (res.status) process.exit(res.status)

// extremely unlikely, no idea how that would ever happen
/* c8 ignore start */
if (res.signal) {
  process.kill(process.pid, res.code)
  setTimeout(() => process.exit(1), 200)
}
/* c8 ignore stop */
