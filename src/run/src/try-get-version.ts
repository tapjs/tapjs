import { readFileSync } from 'fs'
import { createRequire } from 'module'
import { resolve } from 'path'

const require = createRequire(import.meta.url)

export const tryGetVersion = (pkg: string): string | undefined => {
  try {
    const v = require(`${pkg}/package.json`)?.version
    if (v && typeof v === 'string') return v
    // none of these actually throw, just precaution.
    /* c8 ignore start */
  } catch {}
  /* c8 ignore stop */

  // maybe it wasn't exported, so try to see if it's in node_modules
  try {
    const p = require.resolve(pkg)
    const nm = p.split(/[\\\/]node_modules[\\\/]/i)
    if (nm.length > 1) {
      nm.pop()
      const json = readFileSync(
        resolve(nm.join('/node_modules/'), 'package.json'),
        'utf8'
      )
      const v = JSON.parse(json).version
      if (v && typeof v === 'string') return v
    }
    // last ditch effort, see if it's built a dist folder
    const d = p.split(/[\\\/]dist[\\\/]/i)
    if (d.length > 1) {
      d.pop()
      const json = readFileSync(
        resolve(d.join('/dist/'), 'package.json'),
        'utf8'
      )
      const v = JSON.parse(json).version
      if (v && typeof v === 'string') return v
    }
  } catch {}
}
