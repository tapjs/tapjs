#!/usr/bin/env node
// force no-warnings for this process
process.env.emitWarning = () => {}
const no = ['--no-warnings=ExperimentalLoader']

// We'll always have *something* here when testing.
/* c8 ignore start */
if (process.env.NODE_OPTIONS) no.push(process.env.NODE_OPTIONS)
/* c8 ignore stop */

process.env.NODE_OPTIONS = [...new Set(no)].join(' ')
import { spawnSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'
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

if (res.error) throw res.error
if (res.status) process.exit(res.status)
if (res.code) {
  process.kill(process.pid, res.code)
  setTimeout(() => process.exit(1), 200)
}
