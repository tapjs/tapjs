import { CallSiteLike, CallSiteLikeJSON } from '@tapjs/stack'
import { resolve } from 'path'

export const locFromCallSite = (
  loc?: CallSiteLike | CallSiteLikeJSON | null,
) => {
  const f = loc?.fileName ?? undefined
  const file = f !== undefined ? resolve(f) : f
  const line = loc?.lineNumber ?? undefined
  const column = loc?.columnNumber ?? undefined
  return { file, line, column }
}
