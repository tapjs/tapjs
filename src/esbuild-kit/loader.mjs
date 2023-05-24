import { fileURLToPath } from 'url'

// check if we need a globalPreload, because node 20 runs
// loaders in separate isolated loaders thread.

const v = process.version
  .replace(/[^0-9]/g, ' ')
  .trim()
  .split(' ')
  .map(s => parseInt(s, 10))
const separateLoadersThread = v[0] >= 20

const base = fileURLToPath(import.meta.url)
export const globalPreload = () =>
  !separateLoadersThread
    ? ''
    : `
const { createRequire } = getBuiltin('module')
const require = createRequire(${JSON.stringify(base)})
require('@esbuild-kit/cjs')
`

// otherwise, do it here
if (!separateLoadersThread) {
  await import('@esbuild-kit/cjs-loader')
}

export * from '@esbuild-kit/esm-loader'
