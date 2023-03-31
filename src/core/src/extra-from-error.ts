import * as stack from '@tapjs/stack'
import type { BaseOpts } from './base.js'

const extraFromError = (
  er: any,
  extra?: { [k: string]: any },
  options?: BaseOpts
) => {
  // the yaml module puts big stuff here, pluck it off
  if (
    er.source &&
    typeof er.source === 'object' &&
    er.source.context
  ) {
    const { context, ...source } = er.source
    er.source = source
  }

  // pull out all fields from options, other than anything starting
  // with tapChild, or anything already set in the extra object.
  extra = Object.fromEntries(
    Object.entries(options || {}).filter(
      ([k]) => !/^tapChild/.test(k) && !(k in (extra || {}))
    )
  )

  if (!er || typeof er !== 'object') {
    extra.error = er
    return extra
  }

  const st = stack.captureError(er)
  const message = er.message
    ? er.message
    : er.stack
    ? er.stack.split('\n')[0]
    : ''
  if (st && st.length) {
    extra.stack = st.map(c => String(c)).join('\n')
    extra.at = st[0]
  }

  if (message) {
    try {
      Object.defineProperty(er, 'message', {
        value: message,
        configurable: true,
      })
    } catch {}
  }

  if (er.name && er.name !== 'Error') {
    extra.type = er.name
  }

  // grab any other rando props
  const { message: _, ...props } = er
  Object.assign(extra, props)

  return extra
}

export default extraFromError
