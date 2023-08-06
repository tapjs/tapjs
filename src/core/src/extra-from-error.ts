import * as stack from '@tapjs/stack'
import type { BaseOpts } from './base.js'
import { Extra } from './index.js'

/**
 * Create an {@link Extra} object based on a thrown Error
 */
export const extraFromError = (
  er: any,
  extra?: Extra,
  options?: BaseOpts
) => {
  // the yaml module puts big stuff here, pluck it off
  // otherwise it's quite noisy when we throw as a result of
  // trying to parse invalid tap diagnostics.
  if (
    !!er &&
    typeof er === 'object' &&
    er.source &&
    typeof er.source === 'object' &&
    er.source.context
  ) {
    const { context, ...source } = er.source
    er.source = source
  }

  // pull out all fields from options, other than anything starting
  // with tapChild, or anything already set in the extra object.
  options = options ?? {}
  extra = Object.assign(
    extra ?? {},
    Object.fromEntries(
      Object.entries(options).filter(
        ([k]) => !/^tapChild/.test(k) && !(k in (extra ?? {}))
      )
    )
  )

  if (!er || typeof er !== 'object') {
    extra.error = er
    return extra
  }

  const st = stack.captureError(er)
  if (st && st.length) {
    extra.stack = st.map(c => String(c)).join('\n')
    extra.at = st[0]
  } else if (typeof er.stack === 'string') {
    // if we failed to capture it, but it has a stack, then that means
    // that all of the stack frames were internal, because the error was
    // generated from native code in a dep that tap ignores (or if not
    // native code, then something else that escaped the async-hook-domain).
    // A common cause of this is import() errors.
    extra.stack = ''
    extra.at = null
  }

  if (er.name && er.name !== 'Error') {
    extra.type = er.name
  }

  // grab any other rando props
  const { message: _, name: __, stack: ___, ...props } = er
  Object.assign(extra, props)

  return extra
}
