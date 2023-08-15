import { Extra, MessageExtra } from './index.js'

/**
 * Normalize the {@link @tapjs/core!index.MessageExtra} arguments to test
 * assertion methods
 */
export const normalizeMessageExtra = (
  defaultMessage: string,
  [message, extra]: MessageExtra
): [string, Extra] => {
  if (message && typeof message === 'object') {
    return [defaultMessage, message]
  }

  return [message || defaultMessage, extra || {}]
}
