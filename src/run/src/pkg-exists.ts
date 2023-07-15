import { createRequire } from 'node:module'
import { resolveImport } from 'resolve-import'
const require = createRequire(import.meta.url)
export const pkgExists = async (f: string) => {
  if (await resolveImport(f, import.meta.url).catch(() => false)) {
    return true
  }
  try {
    require.resolve(f)
    return true
  } catch {
    return false
  }
}
