import { Extra, MessageExtra } from './index.js'

export const normalizeMessageExtra = (
  defaultMessage: string,
  [message, extra]: MessageExtra
): [string, Extra] => {
  if (message && typeof message === 'object') {
    return [defaultMessage, message]
  }

  return [message || defaultMessage, extra || {}]
}
