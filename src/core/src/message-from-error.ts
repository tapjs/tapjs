/**
 * get the appropriate failure message from an error object to print
 * in a `not ok` test point when unhandled throws or rejections happen.
 */
export const messageFromError = (er: unknown): string => {
  if (typeof er === 'string') return er
  if (isErrorLike(er)) {
    const { name, message, stack, error } = er
    if (error && typeof error == 'string') return error
    const nc = name && typeof name === 'string' ? `${name}: ` : ''
    if (message && typeof message === 'string') return message
    if (typeof stack === 'string' && stack.trim()) {
      const lines = stack.trim().split('\n')
      return name && lines[0].startsWith(nc)
        ? lines[0].substring(nc.length)
        : lines[0]
    }
  }
  return 'unhandled error'
}

type ErrorLike =
  | (Error & { error?: any })
  | {
      error?: any
      name?: string
      message?: string
      stack?: any
    }

const isErrorLike = (er: unknown): er is ErrorLike =>
  !!er &&
  typeof er === 'object' &&
  (er instanceof Error ||
    typeof (er as ErrorLike).error !== 'undefined' ||
    typeof (er as ErrorLike).name !== 'undefined' ||
    typeof (er as ErrorLike).message !== 'undefined' ||
    typeof (er as ErrorLike).stack !== 'undefined')
