import { pathToFileURL } from 'url'
const base = String(pathToFileURL(__filename))
const inDist = base.endsWith('dist/commonjs/hooks-url.js')
export const hooks = String(new URL(
  inDist ? '../esm/hooks.mjs' : './hooks.mjs',
  base
))
