#!/usr/bin/env node
/**
 * just load the `@tapjs/run` module, which does all the work
 */
//@ts-ignore
process.setSourceMapsEnabled(true)
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Try to load the tap runner that's installed in the current project,
// if present. Running plugin builds etc from the global space will
// never ever work as expected, but people do global installs to be
// able to run tap without `npm exec` or `npm run-script`,
// so may as well make it do the right thing.

import { resolveImportSync } from 'resolve-import/resolve-import-sync'
// import('@tapjs/run')
const tap = resolveImportSync('tap', pathToFileURL(resolve('x')))
let run: URL | string
try {
  run = resolveImportSync('@tapjs/run', tap)
  /* c8 ignore start */
} catch {
  run = import.meta.url
}
/* c8 ignore stop */
import(String(run))
