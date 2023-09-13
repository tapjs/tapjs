import { randomBytes } from 'crypto'

// Need this to be the same for a given thread between both
// CJS and ESM, since it might be loaded in the main thread via
// the import.mjs (esm), the globalPreload script (cjs), and of course the
// user's test program.
const kServiceKey = Symbol.for('@tapjs/mock.globalServiceKey')
const g = globalThis as typeof globalThis & {
  [kServiceKey]?: string
}

// literally the only way to cover both branches would be to break
// mocking entirely, so ignore this.
export const serviceKey = (g[kServiceKey] =
  /* c8 ignore start */
  g[kServiceKey] ?? randomBytes(8).toString('hex'))
/* c8 ignore stop */
