// esm style, create a require and use that
import { createRequire } from 'module'
//@ts-ignore
const { resolve } = createRequire(import.meta.url)
export const requireResolve = (s: string) => {
  try {
    return resolve(s)
  } catch {
    return null
  }
}
