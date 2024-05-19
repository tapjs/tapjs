import { ErrorMatch, ThrowsArgs } from './index.js'
import { Extra } from '@tapjs/core'

export const normalizeThrowsArgs = (
  defaultMessage: string,
  [wanted, message, extra]: ThrowsArgs,
): [ErrorMatch | undefined, string, Extra] => {
  if (typeof wanted === 'string') {
    if (typeof message === 'object' && message) {
      extra = message
    }
    message = wanted
    return [undefined, message || defaultMessage, extra || {}]
  }
  if (message && typeof message === 'object') {
    return [wanted, defaultMessage, message]
  }
  return [wanted, message || defaultMessage, extra || {}]
}
