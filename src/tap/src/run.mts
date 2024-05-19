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

import { resolveImport } from 'resolve-import'
// import('@tapjs/run')
await import(
  String(
    await resolveImport(
      '@tapjs/run',
      await resolveImport('tap', pathToFileURL(resolve('x'))).catch(
        () => import.meta.url,
      ),
    ),
  )
)
