import { isBuiltin } from 'module'
import { isAbsolute, resolve } from 'path'
import { isRelativeRequire } from 'resolve-import/is-relative-require'
import { pathToFileURL } from 'url'

// turn all the mocks we get into either the exports provided,
// if it's an object, or { default: <value> } otherwise.

export const mungeMocks = (
  mocksInput: Record<string, any>,
  dir: string,
): { [k: string]: { [j: string]: any } } => {
  const mocks = Object.create(null)
  for (const [k, v] of Object.entries(mocksInput)) {
    const m =
      v && typeof v === 'object' && !Array.isArray(v) ?
        v
      : { default: v }
    if (isBuiltin(k)) {
      mocks[k] = m
      /* c8 ignore start */
      if (k.startsWith('node:')) {
        /* c8 ignore stop */
        const bare = k.substring('node:'.length)
        if (!(bare in mocksInput)) {
          mocks[bare] = m
        }
      } else {
        const prefixed = `node:${k}`
        if (!(prefixed in mocksInput)) {
          mocks[prefixed] = m
        }
      }
    } else if (/^(file:\/\/\/|https?:\/\/)/.test(k)) {
      mocks[k] = m
    } else if (isRelativeRequire(k) || isAbsolute(k)) {
      mocks[String(pathToFileURL(resolve(dir, k)))] = m
    } else {
      // absolute package name
      mocks[k] = m
    }
  }
  return mocks
}
