import { resolveImportSync } from 'resolve-import/resolve-import-sync'
import t from 'tap'

import { resolveMockEntryPoint } from '../src/resolve-mock-entry-point.js'

t.equal(
  await resolveMockEntryPoint(
    new URL(import.meta.url),
    '../dist/esm/hooks.mjs',
    'service-key',
    'mock-key',
    () => {},
  ),
  String(resolveImportSync('../dist/esm/hooks.mjs', import.meta.url)) +
    '?tapmock=service-key.mock-key',
)

t.equal(
  await resolveMockEntryPoint(
    new URL(import.meta.url),
    '@tapjs/synonyms',
    'service-key',
    'mock-key',
    () => {},
  ),
  String(resolveImportSync('@tapjs/synonyms', import.meta.url)) +
    '?tapmock=service-key.mock-key',
)
