import { createRequire } from 'node:module'
import { resolveImportSync } from 'resolve-import/resolve-import-sync'
const require = createRequire(import.meta.url)
export const pkgExists = (f: string) => {
  try {
    resolveImportSync(f, import.meta.url)
    return true
  } catch {}
  try {
    require.resolve(f)
    return true
  } catch {
    return false
  }
}
